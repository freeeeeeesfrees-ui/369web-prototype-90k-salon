import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "accent" | "ghost" | "outline";

type ButtonProps = {
  variant?: Variant;
  children: ReactNode;
  href?: string;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClass: Record<Variant, string> = {
  primary: "bg-brand-primary text-white hover:bg-brand-primary-light",
  accent: "bg-brand-accent text-brand-primary hover:bg-brand-accent-dark",
  ghost: "bg-transparent text-brand-primary hover:bg-surface-alt",
  outline: "bg-transparent text-brand-primary border border-brand-primary hover:bg-brand-primary hover:text-white",
};

export function Button({
  variant = "primary",
  children,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded font-medium transition-colors duration-200";
  const cls = `${base} ${variantClass[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
