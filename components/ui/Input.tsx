import { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, ReactNode } from "react";

type FieldProps = {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
};

export function Input({
  label,
  name,
  required,
  error,
  ...props
}: FieldProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block mb-4">
      <span className="block text-sm font-medium text-ink-main mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </span>
      <input
        name={name}
        required={required}
        className="w-full px-4 py-2 rounded border border-surface-border focus:border-brand-primary focus:outline-none"
        {...props}
      />
      {error && <span className="text-red-500 text-sm mt-1 block">{error}</span>}
    </label>
  );
}

export function Textarea({
  label,
  name,
  required,
  error,
  ...props
}: FieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="block mb-4">
      <span className="block text-sm font-medium text-ink-main mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </span>
      <textarea
        name={name}
        required={required}
        className="w-full px-4 py-2 rounded border border-surface-border focus:border-brand-primary focus:outline-none"
        {...props}
      />
      {error && <span className="text-red-500 text-sm mt-1 block">{error}</span>}
    </label>
  );
}

export function Select({
  label,
  name,
  required,
  error,
  children,
  ...props
}: FieldProps & SelectHTMLAttributes<HTMLSelectElement> & { children: ReactNode }) {
  return (
    <label className="block mb-4">
      <span className="block text-sm font-medium text-ink-main mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </span>
      <select
        name={name}
        required={required}
        className="w-full px-4 py-2 rounded border border-surface-border focus:border-brand-primary focus:outline-none bg-white"
        {...props}
      >
        {children}
      </select>
      {error && <span className="text-red-500 text-sm mt-1 block">{error}</span>}
    </label>
  );
}
