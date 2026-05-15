import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-white rounded-lg border border-surface-border p-6 ${className}`}>
      {children}
    </div>
  );
}
