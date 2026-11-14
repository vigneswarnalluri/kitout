"use client";

import { useState, type FormEvent } from "react";
import { models } from "@/lib/models";

type Status = { state: "idle" | "sending" | "sent" | "error"; message?: string };

export default function QuoteForm({ defaultModel = "" }: { defaultModel?: string }) {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong. Please try again.");
      form.reset();
      setStatus({ state: "sent" });
    } catch (err) {
      setStatus({ state: "error", message: err instanceof Error ? err.message : "Something went wrong." });
    }
  }

  if (status.state === "sent") {
    return (
      <div className="form-success" role="status">
        <h3>Thank you. Your request is in.</h3>
        <p>We reply to every quote request within one business day.</p>
      </div>
    );
  }

  return (
    <form className="quote-form" onSubmit={onSubmit}>
      <div className="form-grid">
        <label>
          First name
          <input name="firstName" required autoComplete="given-name" />
        </label>
        <label>
          Last name
          <input name="lastName" required autoComplete="family-name" />
        </label>
        <label>
          Email
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          Delivery location
          <input name="location" required />
        </label>
        <label>
          Unit of interest
          <select name="model" defaultValue={defaultModel}>
            <option value="">Not sure yet</option>
            {models.map((m) => (
              <option key={m.slug} value={m.name}>
                {m.name} ({m.tag})
              </option>
            ))}
            <option value="Custom">Custom build</option>
          </select>
        </label>
        <label className="full">
          Intended use
          <select name="use" defaultValue="">
            <option value="">Select one</option>
            <option>Job-site office</option>
            <option>Permanent office</option>
            <option>Storage</option>
            <option>Office and storage</option>
            <option>Retail, sales or hospitality</option>
            <option>Other</option>
          </select>
        </label>
        <label className="full">
          Tell us about your project
          <textarea name="message" rows={5} placeholder="Site, timeline, budget, anything else we should know" />
        </label>
        {/* Honeypot: hidden from people, filled in by bots. */}
        <label className="hp" aria-hidden="true">
          Company website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {status.state === "error" ? (
        <p className="form-error" role="alert">
          {status.message}
        </p>
      ) : null}
      <button className="btn btn-green" type="submit" disabled={status.state === "sending"}>
        {status.state === "sending" ? "Sending…" : "Submit Quote Request"}
      </button>
      <p className="form-note">We respond within one business day. Your details are never shared or sold.</p>
    </form>
  );
}
