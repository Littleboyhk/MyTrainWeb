import { clsx } from "@/lib/clsx";

type PaxState = "cnf" | "rac" | "wl";

type Passenger = {
  n: number;
  booked: string;
  bookedState: PaxState;
  current: string;
  currentState: PaxState;
};

const PASSENGERS: Passenger[] = [
  { n: 1, booked: "WL 8", bookedState: "wl", current: "CNF · B1/32", currentState: "cnf" },
  { n: 2, booked: "WL 9", bookedState: "wl", current: "RAC 4", currentState: "rac" },
  { n: 3, booked: "CNF", bookedState: "cnf", current: "CNF · B1/18", currentState: "cnf" },
];

const STATE_STYLES: Record<PaxState, string> = {
  cnf: "text-status-ontime bg-status-ontime/10 border-status-ontime/25",
  rac: "text-status-delayed bg-status-delayed/10 border-status-delayed/25",
  wl: "text-muted bg-[color:var(--hairline)] border-[color:var(--hairline)]",
};

export function PnrCard({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-[color:var(--hairline)] bg-elevated/70 p-4",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-wide text-muted">
            PNR Status
          </div>
          <div className="nums mt-0.5 font-display text-lg font-extrabold tracking-tight">
            864 297 1053
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-status-ontime/25 bg-status-ontime/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-status-ontime">
          Chart prepared
        </span>
      </div>

      <div className="nums mt-1 text-[11px] font-medium text-muted">
        12951 Rajdhani Exp · 3A · 20 Jul
      </div>

      {/* Passenger list */}
      <div className="mt-3.5 space-y-2">
        {PASSENGERS.map((p) => (
          <div
            key={p.n}
            className="flex items-center gap-3 rounded-xl border border-[color:var(--hairline)] bg-surface/60 px-3 py-2.5"
          >
            <span className="grid h-6 w-6 flex-none place-items-center rounded-lg bg-[color:var(--hairline)] text-[11px] font-bold">
              {p.n}
            </span>
            <div className="flex flex-1 items-center justify-between gap-2">
              {/* Booking */}
              <div className="min-w-0">
                <div className="text-[9px] font-semibold uppercase tracking-wide text-muted">
                  Booked
                </div>
                <div className="nums truncate text-xs font-semibold text-muted line-through">
                  {p.booked}
                </div>
              </div>
              <Arrow />
              {/* Current */}
              <div className="min-w-0 text-right">
                <div className="text-[9px] font-semibold uppercase tracking-wide text-muted">
                  Now
                </div>
                <span
                  className={clsx(
                    "nums mt-0.5 inline-block rounded-md border px-1.5 py-0.5 text-xs font-bold",
                    STATE_STYLES[p.currentState],
                  )}
                >
                  {p.current}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-3 flex items-center justify-between text-[11px]">
        <span className="font-medium text-muted">Confirmation probability</span>
        <span className="nums font-bold text-status-ontime">92%</span>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="flex-none text-brand-violet"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
