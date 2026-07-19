import type { JSX, ReactNode } from "react";
import { clsx } from "@/lib/clsx";

export function GlassCard({
  children,
  className,
  rim = true,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  rim?: boolean;
  as?: keyof JSX.IntrinsicElements;
}) {
  return (
    <Tag
      className={clsx(
        "glass rounded-3xl",
        rim && "glass-rim",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
