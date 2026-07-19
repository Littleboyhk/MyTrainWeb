import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { GlassCard } from "@/components/glass-card";
import {
  ShieldIcon,
  EyeOffIcon,
  ClockIcon,
  RefreshIcon,
} from "@/components/icons";

const GUARANTEES = [
  {
    icon: ShieldIcon,
    title: "Opt-in, always",
    body: "Sharing is off by default. Switch it on for a journey and off the moment you arrive — no dark patterns, no nagging.",
  },
  {
    icon: EyeOffIcon,
    title: "Anonymous by design",
    body: "No names or accounts are attached to your location. We only ever see an approximate position along a railway line.",
  },
  {
    icon: ClockIcon,
    title: "Auto-deletes after 48h",
    body: "Position data is strictly temporary. It's erased automatically within two days — we don't keep a history of where you've been.",
  },
  {
    icon: RefreshIcon,
    title: "Rotating session ID",
    body: "Your identifier changes on a regular cycle, so separate journeys can't be stitched together or traced back to you.",
  },
];

export function Privacy() {
  return (
    <section id="privacy" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Left — statement */}
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                <ShieldIcon size={28} />
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <span className="eyebrow mt-6 text-[color:var(--text)]">
                Privacy first
              </span>
            </Reveal>
            <Reveal delay={0.14}>
              <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tightest sm:text-[2.75rem] sm:leading-[1.05]">
                Location data, handled with{" "}
                <span className="gradient-text">respect.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-balance text-muted sm:text-lg">
                Crowd-verified positioning only works because passengers choose
                to help. That trust is the whole product — so we built the layer
                to give away as little as possible, by default.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <p className="mt-5 text-sm font-medium text-muted">
                You stay in control. We can only ever show what passengers
                actively choose to share.
              </p>
            </Reveal>
          </div>

          {/* Right — guarantees */}
          <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {GUARANTEES.map((g) => {
              const Icon = g.icon;
              return (
                <StaggerItem key={g.title}>
                  <GlassCard className="h-full p-5 sm:p-6">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-brand-violet/25 bg-brand-violet/10 text-brand-violet">
                      <Icon size={20} />
                    </span>
                    <h3 className="mt-4 font-display text-base font-bold tracking-tight">
                      {g.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {g.body}
                    </p>
                  </GlassCard>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
