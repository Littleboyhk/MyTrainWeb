"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { clsx } from "@/lib/clsx";

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function WaitlistForm({
  id = "waitlist",
  className,
  compact = false,
}: {
  id?: string;
  className?: string;
  compact?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  // Honeypot — real users leave this empty; bots tend to fill it.
  const [company, setCompany] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    if (!EMAIL_RE.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        message?: string;
      };

      if (!res.ok) {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(data.message || "You're on the list. We'll be in touch.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  const isSuccess = status === "success";

  return (
    <div className={clsx("w-full", className)}>
      <form
        onSubmit={onSubmit}
        noValidate
        className={clsx(
          "glass glass-rim flex flex-col gap-2.5 rounded-2xl p-2 sm:flex-row sm:items-center",
          compact ? "max-w-md" : "max-w-lg",
        )}
      >
        <label htmlFor={`${id}-email`} className="sr-only">
          Email address
        </label>
        <input
          id={`${id}-email`}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@email.com"
          value={email}
          disabled={isSuccess}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          className="min-w-0 flex-1 rounded-xl bg-transparent px-4 py-3 text-[15px] text-[color:var(--text)] placeholder:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo/60"
          aria-invalid={status === "error"}
          aria-describedby={`${id}-status`}
        />

        {/* Honeypot: visually hidden, off-screen, not announced */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label htmlFor={`${id}-company`}>Company</label>
          <input
            id={`${id}-company`}
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading" || isSuccess}
          className="btn-gradient inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-5 py-3 text-[15px] font-bold disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? (
            <>
              <Spinner />
              Joining…
            </>
          ) : isSuccess ? (
            <>
              <CheckIcon />
              Added
            </>
          ) : (
            "Notify me"
          )}
        </button>
      </form>

      <div
        id={`${id}-status`}
        role="status"
        aria-live="polite"
        className="min-h-[1.25rem] px-1 pt-2 text-sm"
      >
        <AnimatePresence mode="wait">
          {message ? (
            <motion.p
              key={message}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={clsx(
                status === "error" && "text-status-cancelled",
                status === "success" && "text-status-ontime",
              )}
            >
              {message}
            </motion.p>
          ) : (
            <motion.p
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-muted"
            >
              No spam. One email when we launch — that&apos;s it.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="3"
      />
      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12.5l4.5 4.5L19 7.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
