"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { SITE } from "@/lib/constants";

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();

    if (!name || !email || !message) return;

    setStatus("sending");
    setStatusMessage("Sending your message…");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, company }),
      });

      const data = (await response.json()) as { error?: string; ok?: boolean };

      if (!response.ok) {
        throw new Error(data.error ?? "Failed to send message.");
      }

      setStatus("sent");
      setStatusMessage("Message sent successfully. I’ll get back to you soon.");
      form.reset();

      setTimeout(() => {
        setStatus("idle");
        setStatusMessage("");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : `Something went wrong. Please email ${SITE.email} directly.`,
      );

      setTimeout(() => {
        setStatus("idle");
        setStatusMessage("");
      }, 6000);
    }
  };

  return (
    <form className="space-y-10" onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

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
          disabled={status === "sending"}
          className="w-full border-none bg-transparent p-0 py-2 font-body text-body-lg text-on-surface placeholder:text-outline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container disabled:opacity-60"
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
          disabled={status === "sending"}
          className="w-full border-none bg-transparent p-0 py-2 font-body text-body-lg text-on-surface placeholder:text-outline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container disabled:opacity-60"
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
          disabled={status === "sending"}
          className="w-full resize-none border-none bg-transparent p-0 py-2 font-body text-body-lg text-on-surface placeholder:text-outline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container disabled:opacity-60"
        />
      </div>
      <div className="pt-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className={`interactive gradient-button w-full px-12 py-4 font-ui text-ui-label font-bold uppercase text-on-primary transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container md:w-auto disabled:cursor-not-allowed disabled:opacity-70 ${
            status === "sent" ? "bg-tertiary text-on-tertiary" : ""
          } ${status === "error" ? "border border-outline bg-surface-container-high text-on-surface" : ""}`}
        >
          {status === "sending"
            ? "Sending…"
            : status === "sent"
              ? "Message Sent"
              : status === "error"
                ? "Try Again"
                : "Send Message"}
        </button>
        <p
          className={`mt-4 font-body text-body-md ${
            status === "error" ? "text-primary" : "text-on-surface-variant"
          }`}
          aria-live="polite"
          role="status"
        >
          {statusMessage || `Messages are delivered directly to ${SITE.email}.`}
        </p>
      </div>
    </form>
  );
}
