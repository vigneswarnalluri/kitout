import { NextResponse } from "next/server";

const clean = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot field: real visitors never fill it in.
  if (clean(body.website)) return NextResponse.json({ ok: true });

  const lead = {
    firstName: clean(body.firstName, 100),
    lastName: clean(body.lastName, 100),
    email: clean(body.email, 200),
    phone: clean(body.phone, 50),
    location: clean(body.location, 200),
    model: clean(body.model, 100) || "Not sure yet",
    use: clean(body.use, 100) || "Not given",
    message: clean(body.message, 4000),
  };

  if (!lead.firstName || !lead.lastName || !lead.location) {
    return NextResponse.json({ error: "Please fill in your name and build location." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const { RESEND_API_KEY, QUOTE_TO_EMAIL, QUOTE_FROM_EMAIL } = process.env;

  if (!RESEND_API_KEY || !QUOTE_TO_EMAIL || !QUOTE_FROM_EMAIL) {
    if (process.env.NODE_ENV !== "production") {
      // Local development without email set up: show the lead in the terminal.
      console.log("[quote request]", lead);
      return NextResponse.json({ ok: true, dev: true });
    }
    return NextResponse.json(
      { error: "The quote form is not connected to email yet. Please contact us directly." },
      { status: 503 },
    );
  }

  const rows = Object.entries(lead)
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0"><b>${esc(k)}</b></td><td>${esc(v).replace(/\n/g, "<br>")}</td></tr>`)
    .join("");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: QUOTE_FROM_EMAIL,
      to: [QUOTE_TO_EMAIL],
      reply_to: lead.email,
      subject: `Quote request: ${lead.model} (${lead.firstName} ${lead.lastName})`,
      html: `<h2>New quote request</h2><table>${rows}</table>`,
    }),
  });

  if (!res.ok) {
    console.error("[quote request] email failed", res.status, await res.text());
    return NextResponse.json({ error: "We could not send your request. Please try again or email us." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
