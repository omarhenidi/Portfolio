"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { SITE } from "@/lib/constants";

type FormStatus = "idle" | "sent";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) return;

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    setStatusMessage("Opening your email app to send the message.");
    form.reset();
    setTimeout(() => {
      setStatus("idle");
      setStatusMessage("");
    }, 5000);
  };

  return (
    <form className="space-y-10" onSubmit={handleSubmit} noValidate>
      <div className="form-underline group">
        <label htmlFor="contact-name" className="mb-2 block font-ui text-ui-label uppercase text-on-surface-variant">
          Full Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          maxLength={100}
          autoComplete="name"
          placeholder="Your name"
          className="w-full border-none bg-transparent p-0 py-2 font-body text-body-lg text-on-surface placeholder:text-outline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container"
        />
      </div>
      <div className="form-underline group">
        <label htmlFor="contact-email" className="mb-2 block font-ui text-ui-label uppercase text-on-surface-variant">
          Email Address
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          maxLength={254}
          autoComplete="email"
          placeholder="you@example.com"
          className="w-full border-none bg-transparent p-0 py-2 font-body text-body-lg text-on-surface placeholder:text-outline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container"
        />
      </div>
      <div className="form-underline group">
        <label htmlFor="contact-message" className="mb-2 block font-ui text-ui-label uppercase text-on-surface-variant">
          Your Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          maxLength={5000}
          rows={4}
          placeholder="Tell me about your project..."
          className="w-full resize-none border-none bg-transparent p-0 py-2 font-body text-body-lg text-on-surface placeholder:text-outline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container"
        />
      </div>
      <div className="pt-4">
        <button
          type="submit"
          className={`interactive gradient-button w-full px-12 py-4 font-ui text-ui-label font-bold uppercase text-on-primary transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container md:w-auto ${
            status === "sent" ? "bg-tertiary text-on-tertiary" : ""
          }`}
        >
          {status === "sent" ? "Message Sent" : "Send Message"}
        </button>
        <p className="mt-4 font-body text-body-md text-on-surface-variant" aria-live="polite" role="status">
          {statusMessage || `Submit opens your email app — messages go to ${SITE.email}.`}
        </p>
      </div>
    </form>
  );
}
