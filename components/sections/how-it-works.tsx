import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { GlassCard } from "@/components/glass-card";
import {
  SearchIcon,
  RouteIcon,
  UsersIcon,
  LayersIcon,
  ArrowRightIcon,
  SignalIcon,
} from "@/components/icons";

const STEPS = [
  {
    n: "01",
    title: "Search your train",
    icon: SearchIcon,
    body: "Enter a train number or pick your route. We cover 8,900+ Indian stations, from metros to the smallest junctions.",
    tag: null as string | null,
  },
  {
    n: "02",
    title: "See the live timeline",
    icon: RouteIcon,
    body: "Official running status, stop by stop — scheduled vs actual times and delays, color-coded so a glance tells you everything.",
    tag: null,
  },
  {
    n: "03",
    title: "Get the crowd-verified position",
    icon: UsersIcon,
    body: "On board? Opt in to share anonymous GPS. It fills the gaps between official updates so the map keeps moving with you.",
    tag: "In rollout",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow text-[color:var(--text)]">How it works</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tightest sm:text-[2.75rem] sm:leading-[1.05]">
              Two data layers.{" "}
              <span className="gradient-text">One honest answer.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-4 text-balance text-muted sm:text-lg">
              Official running status tells you the plan. Passengers on board
              tell you the reality. My Train blends both, then shows its work.
            </p>
          </Reveal>
        </div>

        {/* Steps */}
        <Stagger className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-4">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.n} className="relative">
                <GlassCard className="h-full p-6">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                      <Icon size={22} />
                    </span>
                    <span className="nums font-display text-4xl font-extrabold leading-none text-[color:var(--text)] opacity-10">
                      {step.n}
                    </span>
                  </div>
                  <div className="mt-5 flex items-center gap-2">
                    <h3 className="font-display text-lg font-bold tracking-tight">
                      {step.title}
                    </h3>
                    {step.tag && (
                      <span className="rounded-full border border-brand-violet/30 bg-brand-violet/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-violet">
                        {step.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                </GlassCard>

                {/* Connector arrow (desktop) */}
                {i < STEPS.length - 1 && (
                  <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 md:block">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-surface text-muted shadow-card ring-1 ring-[color:var(--hairline)]">
                      <ArrowRightIcon size={14} />
                    </span>
                  </div>
                )}
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Two-layer data model explainer */}
        <Reveal delay={0.1}>
          <GlassCard className="mt-6 overflow-hidden p-6 sm:p-8">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
              {/* Inputs */}
              <div className="space-y-3">
                <LayerRow
                  icon={<SignalIcon size={18} />}
                  label="Layer 1 — Official running status"
                  sub="Scheduled and actual times sourced from the railways."
                  tone="indigo"
                />
                <LayerRow
                  icon={<UsersIcon size={18} />}
                  label="Layer 2 — Passenger GPS"
                  sub="Anonymous, opt-in location from riders on the train."
                  tone="violet"
                />
              </div>

              {/* Merge node */}
              <div className="flex items-center justify-center">
                <div className="flex items-center gap-3">
                  <div className="hidden h-px w-10 bg-gradient-to-r from-transparent to-brand-violet/60 lg:block" />
                  <div className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                    <LayersIcon size={26} />
                  </div>
                  <div className="hidden h-px w-10 bg-gradient-to-l from-transparent to-brand-violet/60 lg:block" />
                </div>
              </div>

              {/* Output */}
              <div className="rounded-2xl border border-[color:var(--hairline)] bg-elevated/60 p-5">
                <div className="text-xs font-bold uppercase tracking-wide text-muted">
                  Result
                </div>
                <div className="mt-1 font-display text-xl font-extrabold tracking-tight">
                  One clear position
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  When official data goes quiet between stations, the crowd layer
                  keeps your train moving on the map — and every reading is
                  labelled, so you always know the source.
                </p>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}

function LayerRow({
  icon,
  label,
  sub,
  tone,
}: {
  icon: React.ReactNode;
  label: string;
  sub: string;
  tone: "indigo" | "violet";
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-[color:var(--hairline)] bg-elevated/60 p-4">
      <span
        className={`grid h-10 w-10 flex-none place-items-center rounded-xl text-white ${
          tone === "indigo" ? "bg-brand-indigo" : "bg-brand-violet"
        }`}
      >
        {icon}
      </span>
      <div>
        <div className="text-sm font-bold">{label}</div>
        <div className="mt-0.5 text-xs leading-relaxed text-muted">{sub}</div>
      </div>
    </div>
  );
}
