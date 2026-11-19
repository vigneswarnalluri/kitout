import { NextResponse } from "next/server";
import { site } from "@/lib/site";

const clean = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const notConnected = `The quote form is not connected to email yet. Please call ${site.phone} or email ${site.email}.`;

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

  // Quote requests go to the business inbox (info@kitoutcontainer.com) unless QUOTE_TO_EMAIL overrides it.
  const { RESEND_API_KEY, QUOTE_FROM_EMAIL } = process.env;
  const to = process.env.QUOTE_TO_EMAIL || site.email;

  if (!RESEND_API_KEY || !QUOTE_FROM_EMAIL) {
    if (process.env.NODE_ENV !== "production") {
      // Local development without email set up: show the lead in the terminal.
      console.log("[quote request]", { to, ...lead });
      return NextResponse.json({ ok: true, dev: true });
    }
    console.error("[quote request] RESEND_API_KEY or QUOTE_FROM_EMAIL is not set; request not sent", lead);
    return NextResponse.json({ error: notConnected }, { status: 503 });
  }

  const fields: [string, string][] = [
    ["Name", `${lead.firstName} ${lead.lastName}`],
    ["Email", lead.email],
    ["Phone", lead.phone || "Not given"],
    ["Delivery location", lead.location],
    ["Unit of interest", lead.model],
    ["Intended use", lead.use],
    ["Project details", lead.message || "None"],
  ];
  const html =
    `<h2 style="font-family:sans-serif">New quote request from the website</h2>` +
    `<table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">` +
    fields
      .map(([k, v]) => `<tr><td style="padding:6px 16px 6px 0;vertical-align:top;color:#555"><b>${esc(k)}</b></td><td style="padding:6px 0">${esc(v).replace(/\n/g, "<br>")}</td></tr>`)
      .join("") +
    `</table><p style="font-family:sans-serif;font-size:13px;color:#777">Reply to this email to answer ${esc(lead.firstName)} directly.</p>`;
  const text = `New quote request from the website\n\n${fields.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nReply to this email to answer ${lead.firstName} directly.`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: QUOTE_FROM_EMAIL,
      to: [to],
      reply_to: lead.email,
      subject: `Quote request: ${lead.model} (${lead.firstName} ${lead.lastName}, ${lead.location})`,
      html,
      text,
    }),
  });

  if (!res.ok) {
    console.error("[quote request] email failed", res.status, await res.text());
    return NextResponse.json({ error: `We could not send your request. Please try again, or call ${site.phone} or email ${site.email}.` }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
