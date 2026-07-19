"use client";

import { motion, type Variants } from "framer-motion";
import { clsx } from "@/lib/clsx";

type StopStatus = "departed" | "current" | "upcoming";

type Stop = {
  code: string;
  name: string;
  sched: string;
  actual: string;
  status: StopStatus;
  delay?: string;
  crowd?: boolean;
};

const STOPS: Stop[] = [
  {
    code: "NDLS",
    name: "New Delhi",
    sched: "16:55",
    actual: "16:55",
    status: "departed",
  },
  {
    code: "CNB",
    name: "Kanpur Central",
    sched: "21:23",
    actual: "21:31",
    status: "departed",
  },
  {
    code: "PRYJ",
    name: "Prayagraj Jn",
    sched: "23:35",
    actual: "23:47",
    status: "current",
    delay: "+12m",
    crowd: true,
  },
  {
    code: "DDU",
    name: "DDU / Mughalsarai",
    sched: "01:58",
    actual: "02:10",
    status: "upcoming",
  },
  {
    code: "GAYA",
    name: "Gaya Jn",
    sched: "03:45",
    actual: "03:57",
    status: "upcoming",
  },
  {
    code: "HWH",
    name: "Howrah",
    sched: "09:55",
    actual: "10:05",
    status: "upcoming",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, x: 10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};

const lineVariants: Variants = {
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: { duration: 0.5, ease: EASE } },
};

export function PhoneFrame() {
  return (
    <div className="relative mx-auto w-[290px] sm:w-[320px]">
      {/* Ambient glow behind the device */}
      <div className="glow-blob-violet absolute -inset-10 -z-10 opacity-80" />

      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
        className="animate-float"
        style={{ transformPerspective: 1000 }}
      >
        {/* Device chrome */}
        <div className="relative rounded-[2.75rem] border border-white/10 bg-[#05060a] p-2.5 shadow-[0_40px_120px_-30px_rgba(91,95,239,0.6)]">
          {/* Specular rim */}
          <div className="pointer-events-none absolute inset-0 rounded-[2.75rem] bg-gradient-to-b from-white/12 to-transparent opacity-70" />

          {/* Screen */}
          <div className="relative overflow-hidden rounded-[2.25rem] bg-[#0B0C0F]">
            {/* Dynamic island */}
            <div className="absolute left-1/2 top-2.5 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

            {/* Screen glow */}
            <div className="pointer-events-none absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-brand-indigo/30 blur-3xl" />

            <div className="relative flex flex-col px-4 pb-5 pt-9 text-[#F5F6FA]">
              <StatusBar />
              <AppHeader />
              <DelaySummary />
              <ol className="relative mt-4">
                <motion.div
                  variants={listVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {STOPS.map((stop, i) => (
                    <TimelineRow
                      key={stop.code}
                      stop={stop}
                      isLast={i === STOPS.length - 1}
                    />
                  ))}
                </motion.div>
              </ol>
              <CrowdStrip />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="mb-3 flex items-center justify-between text-[11px] font-semibold text-white/70">
      <span className="nums">23:51</span>
      <div className="flex items-center gap-1.5">
        <svg width="15" height="11" viewBox="0 0 18 12" fill="none" aria-hidden="true">
          <rect x="0" y="7" width="3" height="5" rx="1" fill="currentColor" />
          <rect x="5" y="4.5" width="3" height="7.5" rx="1" fill="currentColor" />
          <rect x="10" y="2" width="3" height="10" rx="1" fill="currentColor" />
          <rect x="15" y="0" width="3" height="12" rx="1" fill="currentColor" opacity="0.4" />
        </svg>
        <svg width="16" height="11" viewBox="0 0 20 14" fill="none" aria-hidden="true">
          <path d="M10 3C6.7 3 3.9 4.3 2 6.4l1.4 1.5C5 6.1 7.4 5 10 5s5 1.1 6.6 2.9L18 6.4C16.1 4.3 13.3 3 10 3Z" fill="currentColor" />
          <circle cx="10" cy="10.5" r="1.8" fill="currentColor" />
        </svg>
        <svg width="22" height="11" viewBox="0 0 26 13" fill="none" aria-hidden="true">
          <rect x="0.6" y="0.6" width="22" height="11.8" rx="3" stroke="currentColor" strokeOpacity="0.5" />
          <rect x="2" y="2" width="16" height="9" rx="1.5" fill="currentColor" />
          <rect x="24" y="4" width="2" height="5" rx="1" fill="currentColor" opacity="0.6" />
        </svg>
      </div>
    </div>
  );
}

function AppHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <div className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <div className="text-[15px] font-bold leading-tight">Rajdhani Express</div>
          <div className="nums text-[11px] font-medium text-white/50">12951 · NDLS → HWH</div>
        </div>
      </div>
      <LivePill />
    </div>
  );
}

function LivePill() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-status-ontime/30 bg-status-ontime/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-status-ontime">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-status-ontime" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-status-ontime" />
      </span>
      Live
    </span>
  );
}

function DelaySummary() {
  return (
    <div className="mt-4 flex items-stretch gap-2.5">
      <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.04] p-3">
        <div className="text-[10px] font-medium uppercase tracking-wide text-white/45">
          Running status
        </div>
        <div className="mt-1 flex items-baseline gap-1.5">
          <span className="nums text-2xl font-extrabold leading-none text-status-delayed">
            12
          </span>
          <span className="text-xs font-semibold text-status-delayed">
            min late
          </span>
        </div>
      </div>
      <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.04] p-3">
        <div className="text-[10px] font-medium uppercase tracking-wide text-white/45">
          Next stop
        </div>
        <div className="mt-1 text-sm font-bold leading-tight">Prayagraj Jn</div>
        <div className="nums text-[11px] font-medium text-white/50">ETA 23:47</div>
      </div>
    </div>
  );
}

function TimelineRow({ stop, isLast }: { stop: Stop; isLast: boolean }) {
  const isCurrent = stop.status === "current";
  const isDeparted = stop.status === "departed";

  return (
    <motion.li variants={rowVariants} className="relative flex gap-3.5 pb-5 last:pb-0">
      {/* Rail */}
      <div className="relative flex w-5 flex-none justify-center">
        {!isLast && (
          <motion.span
            variants={lineVariants}
            style={{ transformOrigin: "top" }}
            className={clsx(
              "absolute left-1/2 top-3 h-full w-[2.5px] -translate-x-1/2 rounded-full",
              isDeparted
                ? "bg-gradient-to-b from-brand-indigo to-brand-violet"
                : "bg-white/12",
            )}
          />
        )}
        <StopDot status={stop.status} />
      </div>

      {/* Content */}
      <div className="-mt-0.5 flex flex-1 items-start justify-between gap-2">
        <div>
          <div
            className={clsx(
              "flex items-center gap-1.5 text-[13px] font-bold leading-tight",
              isCurrent ? "text-[#F5F6FA]" : isDeparted ? "text-white/85" : "text-white/55",
            )}
          >
            {stop.name}
            {stop.crowd && (
              <span className="inline-flex items-center gap-1 rounded-full bg-brand-violet/15 px-1.5 py-0.5 text-[8.5px] font-bold uppercase tracking-wide text-brand-violet">
                <CrowdDot /> Crowd
              </span>
            )}
          </div>
          <div className="nums mt-0.5 text-[10.5px] font-medium text-white/40">
            {stop.code}
          </div>
        </div>
        <div className="text-right">
          <div
            className={clsx(
              "nums text-[13px] font-bold leading-tight",
              stop.actual !== stop.sched ? "text-status-delayed" : "text-white/85",
            )}
          >
            {stop.actual}
          </div>
          {stop.actual !== stop.sched ? (
            <div className="nums text-[10px] font-medium text-white/35 line-through">
              {stop.sched}
            </div>
          ) : (
            <div className="text-[10px] font-medium text-status-ontime">
              On time
            </div>
          )}
        </div>
      </div>
    </motion.li>
  );
}

function StopDot({ status }: { status: StopStatus }) {
  if (status === "current") {
    return (
      <span className="relative z-10 mt-1 flex h-4 w-4 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-violet" />
        <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-brand-indigo to-brand-violet shadow-glow">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
        </span>
      </span>
    );
  }
  if (status === "departed") {
    return (
      <span className="relative z-10 mt-1 grid h-3.5 w-3.5 place-items-center rounded-full bg-gradient-to-br from-brand-indigo to-brand-violet">
        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12.5l4.5 4.5L19 7.5" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  return (
    <span className="relative z-10 mt-1 h-3.5 w-3.5 rounded-full border-2 border-white/25 bg-[#0B0C0F]" />
  );
}

function CrowdDot() {
  return (
    <span className="relative flex h-1.5 w-1.5">
      <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-violet" />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-violet" />
    </span>
  );
}

function CrowdStrip() {
  return (
    <div className="mt-4 flex items-center gap-2.5 rounded-2xl border border-brand-violet/20 bg-brand-violet/[0.07] p-3">
      <div className="grid h-8 w-8 flex-none place-items-center rounded-xl bg-brand-violet/15">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="9" cy="8" r="3" stroke="#8B5FE6" strokeWidth="1.8" />
          <path d="M3.5 19a5.5 5.5 0 0 1 11 0" stroke="#8B5FE6" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="17" cy="9" r="2.2" stroke="#8B5FE6" strokeWidth="1.6" opacity="0.6" />
          <path d="M16 19a4.5 4.5 0 0 1 5-4.3" stroke="#8B5FE6" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
        </svg>
      </div>
      <div className="leading-tight">
        <div className="text-[11.5px] font-bold">
          Position verified by 7 passengers
        </div>
        <div className="text-[10px] font-medium text-white/45">
          Anonymous · updated 40s ago
        </div>
      </div>
    </div>
  );
}
