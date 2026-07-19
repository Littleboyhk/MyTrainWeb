import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { GlassCard } from "@/components/glass-card";
import { PnrCard } from "@/components/mockups/pnr-card";
import {
  RouteIcon,
  UsersIcon,
  TicketIcon,
  SearchIcon,
  EyeOffIcon,
  ClockIcon,
  RefreshIcon,
  PinIcon,
} from "@/components/icons";

export function Features() {
  return (
    <section id="features" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="glow-blob-violet pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 opacity-50" />
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow text-[color:var(--text)]">Features</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tightest sm:text-[2.75rem] sm:leading-[1.05]">
              Built to answer one question:{" "}
              <span className="gradient-text">where&apos;s my train?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-4 text-balance text-muted sm:text-lg">
              Four pieces working together. Some are live in the app today,
              others are rolling out as we build — we&apos;ll always tell you
              which is which.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-12">
          {/* Live Station Timeline */}
          <StaggerItem className="md:col-span-7">
            <GlassCard className="flex h-full flex-col p-6 sm:p-7">
              <FeatureHead
                icon={<RouteIcon size={22} />}
                title="Live Station Timeline"
              />
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                An animated, stop-by-stop route view with scheduled vs actual
                times and delay status — color-coded so a single glance tells
                you the whole story.
              </p>
              <TimelineMock />
            </GlassCard>
          </StaggerItem>

          {/* Crowd-Verified Positioning */}
          <StaggerItem className="md:col-span-5">
            <GlassCard className="flex h-full flex-col p-6 sm:p-7">
              <FeatureHead
                icon={<UsersIcon size={22} />}
                title="Crowd-Verified Positioning"
                tag="In rollout"
              />
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Opt-in, privacy-first location from passengers on board fills the
                gaps in official data.
              </p>
              <CrowdMock />
            </GlassCard>
          </StaggerItem>

          {/* Instant PNR Status */}
          <StaggerItem className="md:col-span-5">
            <GlassCard className="flex h-full flex-col p-6 sm:p-7">
              <FeatureHead
                icon={<TicketIcon size={22} />}
                title="Instant PNR Status"
              />
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Chart status, per-passenger confirmation and a clear
                booking-vs-current comparison.
              </p>
              <PnrCard className="mt-5" />
            </GlassCard>
          </StaggerItem>

          {/* Built for Every Traveler */}
          <StaggerItem className="md:col-span-7">
            <GlassCard className="flex h-full flex-col p-6 sm:p-7">
              <FeatureHead
                icon={<SearchIcon size={22} />}
                title="Built for Every Traveler"
              />
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                Search by route or train number across 8,900+ Indian stations —
                from metro terminals to the smallest wayside halts.
              </p>
              <SearchMock />
            </GlassCard>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}

function FeatureHead({
  icon,
  title,
  tag,
}: {
  icon: React.ReactNode;
  title: string;
  tag?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow">
        {icon}
      </span>
      <h3 className="font-display text-lg font-bold tracking-tight sm:text-xl">
        {title}
      </h3>
      {tag && (
        <span className="rounded-full border border-brand-violet/30 bg-brand-violet/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-violet">
          {tag}
        </span>
      )}
    </div>
  );
}

/* ---------------- Inline mockups ---------------- */

const TL_STOPS = [
  { label: "NDLS", tone: "done" },
  { label: "CNB", tone: "done" },
  { label: "PRYJ", tone: "current" },
  { label: "DDU", tone: "todo" },
  { label: "HWH", tone: "todo" },
] as const;

function TimelineMock() {
  return (
    <div className="mt-auto pt-6">
      <div className="flex items-center">
        {TL_STOPS.map((s, i) => (
          <div key={s.label} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <span
                className={
                  s.tone === "current"
                    ? "relative grid h-4 w-4 place-items-center rounded-full bg-brand-gradient shadow-glow"
                    : s.tone === "done"
                      ? "h-3 w-3 rounded-full bg-brand-violet"
                      : "h-3 w-3 rounded-full border-2 border-[color:var(--hairline)] bg-transparent"
                }
              >
                {s.tone === "current" && (
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-violet" />
                )}
              </span>
              <span className="nums text-[10px] font-semibold text-muted">
                {s.label}
              </span>
            </div>
            {i < TL_STOPS.length - 1 && (
              <span
                className={
                  s.tone === "done"
                    ? "mx-1 -mt-4 h-[3px] flex-1 rounded-full bg-gradient-to-r from-brand-indigo to-brand-violet"
                    : "mx-1 -mt-4 h-[3px] flex-1 rounded-full bg-[color:var(--hairline)]"
                }
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <StatusChip tone="ontime" label="On time" />
        <StatusChip tone="delayed" label="Delayed" />
        <StatusChip tone="cancelled" label="Cancelled" />
      </div>
    </div>
  );
}

function StatusChip({
  tone,
  label,
}: {
  tone: "ontime" | "delayed" | "cancelled";
  label: string;
}) {
  const styles = {
    ontime: "text-status-ontime bg-status-ontime/10 border-status-ontime/25",
    delayed: "text-status-delayed bg-status-delayed/10 border-status-delayed/25",
    cancelled:
      "text-status-cancelled bg-status-cancelled/10 border-status-cancelled/25",
  }[tone];
  const dot = {
    ontime: "bg-status-ontime",
    delayed: "bg-status-delayed",
    cancelled: "bg-status-cancelled",
  }[tone];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-bold ${styles}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      {label}
    </span>
  );
}

function CrowdMock() {
  const badges = [
    { icon: <EyeOffIcon size={14} />, label: "Anonymous" },
    { icon: <ClockIcon size={14} />, label: "48h auto-delete" },
    { icon: <RefreshIcon size={14} />, label: "Rotating ID" },
  ];
  return (
    <div className="mt-auto pt-6">
      <div className="relative grid h-28 place-items-center overflow-hidden rounded-2xl border border-[color:var(--hairline)] bg-elevated/50">
        {/* Signal rings */}
        <span className="absolute h-16 w-16 animate-pulse-ring rounded-full bg-brand-violet/40" />
        <span
          className="absolute h-16 w-16 animate-pulse-ring rounded-full bg-brand-indigo/40"
          style={{ animationDelay: "1.2s" }}
        />
        <span className="relative grid h-11 w-11 place-items-center rounded-full bg-brand-gradient text-white shadow-glow">
          <PinIcon size={20} />
        </span>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {badges.map((b) => (
          <span
            key={b.label}
            className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--hairline)] bg-surface/60 px-2.5 py-1 text-[11px] font-semibold text-muted"
          >
            <span className="text-brand-violet">{b.icon}</span>
            {b.label}
          </span>
        ))}
      </div>
    </div>
  );
}

const STATIONS = [
  { name: "New Delhi", code: "NDLS" },
  { name: "Mumbai Central", code: "MMCT" },
  { name: "Howrah Jn", code: "HWH" },
];

function SearchMock() {
  return (
    <div className="mt-auto pt-6">
      <div className="rounded-2xl border border-[color:var(--hairline)] bg-elevated/50 p-3">
        {/* Search field */}
        <div className="flex items-center gap-2.5 rounded-xl border border-[color:var(--hairline)] bg-surface/70 px-3 py-2.5">
          <SearchIcon size={16} className="text-muted" />
          <span className="text-sm font-medium text-[color:var(--text)]">
            Rajdhani
          </span>
          <span className="ml-0.5 inline-block h-4 w-px animate-pulse bg-brand-violet" />
          <span className="nums ml-auto rounded-md bg-brand-violet/10 px-1.5 py-0.5 text-[10px] font-bold text-brand-violet">
            8,900+ stations
          </span>
        </div>
        {/* Suggestions */}
        <div className="mt-2 space-y-1">
          {STATIONS.map((s) => (
            <div
              key={s.code}
              className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm hover:bg-[color:var(--hairline)]"
            >
              <PinIcon size={15} className="text-brand-violet" />
              <span className="font-medium">{s.name}</span>
              <span className="nums ml-auto text-xs font-semibold text-muted">
                {s.code}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
