"use client";

import { FormEvent, useState } from "react";
import { WEB3FORMS_ACCESS_KEY } from "@/config/site";
import { fireQuoteConversion } from "@/lib/gtag";

type Status = "idle" | "submitting" | "success" | "error";

const LABEL_CLASS = "mb-1.5 block font-mono text-xs font-bold uppercase tracking-wide text-steel-600";
const INPUT_CLASS =
  "w-full border-2 border-steel-300 bg-white px-3 py-2.5 text-base text-ink focus:border-ink focus:outline-none focus:ring-2 focus:ring-hazard";

export default function QuoteForm({ serviceContext }: { serviceContext?: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
        fireQuoteConversion();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="clip-plate border-2 border-ink bg-hazard/10 p-6 text-center">
        <p className="font-heading text-xl font-bold uppercase tracking-tight text-ink">Request Received</p>
        <p className="mt-2 text-sm text-steel-600">
          We&apos;ll get back to you shortly to confirm details and schedule your quote.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
      <input type="hidden" name="subject" value="New quote request — Calgary Sandblasting" />
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
      {serviceContext && <input type="hidden" name="service_interest" value={serviceContext} />}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={LABEL_CLASS}>
            Name *
          </label>
          <input id="name" name="name" type="text" required className={INPUT_CLASS} />
        </div>
        <div>
          <label htmlFor="phone" className={LABEL_CLASS}>
            Phone *
          </label>
          <input id="phone" name="phone" type="tel" required className={INPUT_CLASS} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={LABEL_CLASS}>
          Email *
        </label>
        <input id="email" name="email" type="email" required className={INPUT_CLASS} />
      </div>

      <div>
        <label htmlFor="location" className={LABEL_CLASS}>
          Job location (city)
        </label>
        <input
          id="location"
          name="location"
          type="text"
          placeholder="e.g. Calgary, Airdrie, Cochrane..."
          className={INPUT_CLASS}
        />
      </div>

      <div>
        <label htmlFor="message" className={LABEL_CLASS}>
          Tell us about the job *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="What needs blasting, approximate size/quantity, and timeline"
          className={INPUT_CLASS}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="clip-tag w-full bg-hazard px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-ink shadow-[4px_4px_0_0_theme(colors.ink.DEFAULT)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-hazard-dim disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Request a Quote"}
      </button>

      {status === "error" && (
        <p className="text-sm text-rust">
          {WEB3FORMS_ACCESS_KEY
            ? "Something went wrong sending your request — please call us directly instead."
            : "Form isn&apos;t configured yet — please call us directly."}
        </p>
      )}
    </form>
  );
}
