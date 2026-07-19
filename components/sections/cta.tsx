import { Reveal } from "@/components/reveal";
import { WaitlistForm } from "@/components/waitlist-form";

export function WaitlistCta() {
  return (
    <section id="waitlist" className="relative scroll-mt-24 px-5 py-20 sm:py-28">
      <Reveal>
        <div className="glass glass-rim relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] px-6 py-12 text-center sm:px-12 sm:py-16">
          {/* Ambient glows inside the panel */}
          <div className="glow-blob pointer-events-none absolute -left-16 -top-16 h-56 w-56 opacity-70" />
          <div className="glow-blob-violet pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 opacity-70" />
          <div className="pointer-events-none absolute inset-0 -z-0 bg-grid opacity-40" />

          <div className="relative">
            <span className="eyebrow text-[color:var(--text)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-violet" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gradient-to-br from-brand-indigo to-brand-violet" />
              </span>
              Waitlist
            </span>

            <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-extrabold tracking-tightest sm:text-5xl sm:leading-[1.04]">
              Be first to know when{" "}
              <span className="gradient-text">we launch.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-balance text-muted sm:text-lg">
              My Train is still in active development. Leave your email and
              we&apos;ll send a single message the day it goes live — that&apos;s
              the only reason we&apos;ll get in touch.
            </p>

            <div className="mt-8 flex justify-center">
              <WaitlistForm id="cta" />
            </div>

            <p className="mt-5 text-xs font-medium text-muted">
              Pre-beta · rolling out across India · no app download required yet
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
