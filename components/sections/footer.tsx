import { Wordmark } from "@/components/wordmark";

const NAV = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#privacy", label: "Privacy" },
  { href: "#waitlist", label: "Join waitlist" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-[color:var(--hairline)] px-5 pb-10 pt-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          {/* Brand */}
          <div className="max-w-sm">
            <Wordmark className="text-lg" glyphSize={26} />
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Know where your train really is — official running status plus
              privacy-first, crowd-verified positioning.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-surface/60 px-3 py-1 text-xs font-semibold text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-status-delayed" />
              In active development
            </span>
          </div>

          {/* Nav */}
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 sm:justify-end">
              {NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-muted transition-colors hover:text-[color:var(--text)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[color:var(--hairline)] pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} My Train. All rights reserved.</p>
          <p className="max-w-md sm:text-right">
            An independent app in development — not affiliated with, or endorsed
            by, Indian Railways or IRCTC.
          </p>
        </div>
      </div>
    </footer>
  );
}
