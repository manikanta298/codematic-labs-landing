import type { ButtonHTMLAttributes } from "react";
import { cn } from "../lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline" | "ghost";
  size?: "default" | "icon";
};

export function Button({ className, variant = "solid", size = "default", ...props }: ButtonProps) {
  const variants = {
    solid: "bg-primary text-primary-foreground shadow-button hover:-translate-y-0.5 hover:shadow-button-hover",
    outline: "border border-border-strong bg-transparent text-foreground hover:bg-accent",
    ghost: "bg-transparent text-foreground hover:bg-accent",
  };
  const sizes = size === "icon" ? "size-11 p-0" : "min-h-11 px-5 py-2.5";
  return <button className={cn("inline-flex shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", variants[variant], sizes, className)} {...props} />;
}
