import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 24, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.2-3.2" />
    </svg>
  );
}

export function RouteIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="6" cy="6" r="2.4" />
      <circle cx="18" cy="18" r="2.4" />
      <path d="M8.4 6H15a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h6.6" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19.5a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.2a3 3 0 0 1 0 5.8" opacity="0.85" />
      <path d="M17.5 19.5a5.2 5.2 0 0 0-2.3-4.3" opacity="0.85" />
    </svg>
  );
}

export function TicketIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2 2 2 0 0 0 0 4 2 2 0 0 1-2 2H6a2 2 0 0 1-2-2 2 2 0 0 0 0-4Z" />
      <path d="M14 6v12" strokeDasharray="1.5 2.5" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3.2 5 6v5.5c0 4.2 2.9 7.3 7 9.3 4.1-2 7-5.1 7-9.3V6l-7-2.8Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 7.5V12l3 1.8" />
    </svg>
  );
}

export function RefreshIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M20 8a8 8 0 0 0-14.5-2M4 5v4h4" />
      <path d="M4 16a8 8 0 0 0 14.5 2M20 19v-4h-4" />
    </svg>
  );
}

export function EyeOffIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9.9 5.2A9.8 9.8 0 0 1 12 5c5 0 9 4.5 9 7 0 1-.7 2.3-1.9 3.5M6.3 6.8C3.9 8.2 3 10.3 3 12c0 2.5 4 7 9 7 1.5 0 2.9-.4 4.1-1" />
      <path d="M10 10a2.8 2.8 0 0 0 4 4" />
      <path d="m4 4 16 16" />
    </svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M13 3 5 13h5l-1 8 8-10h-5l1-8Z" />
    </svg>
  );
}

export function TrainIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="6" y="3.5" width="12" height="13" rx="3" />
      <path d="M6 11h12" />
      <circle cx="9" cy="13.6" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="13.6" r="1" fill="currentColor" stroke="none" />
      <path d="M8 16.5 6 20M16 16.5 18 20" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21c4-4 7-7.2 7-10.6A7 7 0 0 0 5 10.4C5 13.8 8 17 12 21Z" />
      <circle cx="12" cy="10.2" r="2.4" />
    </svg>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m12 3 8 4.2-8 4.2L4 7.2 12 3Z" />
      <path d="m4 12 8 4.2 8-4.2" opacity="0.85" />
      <path d="m4 16.8 8 4.2 8-4.2" opacity="0.6" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function SignalIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4.5 15a10 10 0 0 1 15 0" opacity="0.5" />
      <path d="M7.5 17.5a6 6 0 0 1 9 0" opacity="0.8" />
      <circle cx="12" cy="20" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12.5 9.5 17 19 7.5" strokeWidth={2.2} />
    </svg>
  );
}
