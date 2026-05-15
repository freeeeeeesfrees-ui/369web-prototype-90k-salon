type SectionHeadingProps = {
  title: string;
  sub?: string;
  align?: "left" | "center";
};

export function SectionHeading({ title, sub, align = "center" }: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  return (
    <div className={`mb-12 ${alignClass}`}>
      {sub && (
        <p className="text-brand-accent-dark text-sm tracking-widest mb-2 uppercase">{sub}</p>
      )}
      <h2 className="font-serif text-3xl md:text-4xl text-brand-primary">{title}</h2>
    </div>
  );
}
