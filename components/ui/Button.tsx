import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-g text-w hover:bg-g2 active:bg-g focus-visible:ring-g3",
  secondary:
    "bg-g6 text-g hover:bg-g5 active:bg-g5 focus-visible:ring-g4",
  outline:
    "border border-g text-g bg-transparent hover:bg-g6 active:bg-g5 focus-visible:ring-g3",
  ghost:
    "bg-transparent text-ink2 hover:bg-s hover:text-ink active:bg-s2 focus-visible:ring-ink4",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-9 px-4 text-sm rounded-md",
  md: "h-11 px-6 text-base rounded-lg",
  lg: "h-13 px-8 text-lg rounded-xl",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium",
        "transition-colors duration-150 cursor-pointer",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:pointer-events-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
