import { cn } from "@/lib/utils";

type Variant = "green" | "stone" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

const variantStyles: Record<Variant, string> = {
  green: "bg-g6 text-g2 border-transparent",
  stone: "bg-s2 text-ink3 border-transparent",
  outline: "bg-transparent text-ink3 border-s2",
};

export default function Badge({ children, variant = "green", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border",
        "tracking-wide uppercase",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
