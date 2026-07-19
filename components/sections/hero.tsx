import { Reveal } from "@/components/reveal";
import { WaitlistForm } from "@/components/waitlist-form";
import { PhoneFrame } from "@/components/mockups/phone-frame";

const STATS = [
  { value: "8,900+", label: "Indian stations" },
  { value: "2-layer", label: "data model" },
  { value: "48h", label: "auto-delete" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-fade-b opacity-60" />
      <div className="glow-blob pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72" />
      <div className="glow-blob-violet pointer-events-none absolute right-0 top-40 -z-10 h-80 w-80" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-16 sm:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* Copy column */}
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="eyebrow text-[color:var(--text)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-violet" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gradient-to-br from-brand-indigo to-brand-violet" />
              </span>
              In active development · India
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-5 font-display text-[2.6rem] font-extrabold leading-[1.03] tracking-tightest sm:text-6xl">
              Know where your train{" "}
              <span className="gradient-text-animated">really is.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg lg:mx-0">
              My Train is in active development — track along with us as we roll
              out live, crowd-verified positioning across India.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col items-center gap-3 lg:items-start">
              <WaitlistForm id="hero" />
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <p className="mt-3 text-xs font-medium text-muted">
              No app store listing yet — join the waitlist and we&apos;ll email
              you the moment it&apos;s live.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <dl className="mt-9 flex items-center justify-center gap-7 lg:justify-start">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="nums block font-display text-2xl font-extrabold tracking-tight gradient-text">
                      {stat.value}
                    </span>
                    <span className="text-xs font-medium text-muted">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Visual column */}
        <div className="relative flex justify-center lg:justify-end">
          <PhoneFrame />
        </div>
      </div>
    </section>
  );
}
