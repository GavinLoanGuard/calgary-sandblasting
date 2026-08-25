"use client";

import { FormEvent, useState } from "react";
import { WEB3FORMS_ACCESS_KEY } from "@/config/site";
import { fireQuoteConversion } from "@/lib/gtag";

type Status = "idle" | "submitting" | "success" | "error";

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
      <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center">
        <p className="font-heading text-lg font-semibold text-green-800">Thanks — request received.</p>
        <p className="mt-2 text-sm text-green-700">
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
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-steel-700">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-md border border-steel-300 px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-steel-700">
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-md border border-steel-300 px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-steel-700">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-md border border-steel-300 px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="location" className="mb-1 block text-sm font-medium text-steel-700">
          Job location (city)
        </label>
        <input
          id="location"
          name="location"
          type="text"
          placeholder="e.g. Calgary, Airdrie, Cochrane..."
          className="w-full rounded-md border border-steel-300 px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-steel-700">
          Tell us about the job *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="What needs blasting, approximate size/quantity, and timeline"
          className="w-full rounded-md border border-steel-300 px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-accent px-6 py-3 font-heading font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-dark disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Request a Quote"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">
          {WEB3FORMS_ACCESS_KEY
            ? "Something went wrong sending your request — please call us directly instead."
            : "Form isn&apos;t configured yet — please call us directly."}
        </p>
      )}
    </form>
  );
}
