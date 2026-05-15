import type { Stylist } from "@/lib/types";

type Props = { stylist: Stylist };

export function StylistCard({ stylist }: Props) {
  return (
    <article className="grid md:grid-cols-[200px_1fr] gap-6 bg-white border border-surface-border rounded-lg p-6">
      <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-brand-primary mx-auto flex items-center justify-center text-white font-serif text-5xl">
        {stylist.name.charAt(0)}
      </div>
      <div>
        <h3 className="font-serif text-2xl text-brand-primary">{stylist.name}</h3>
        <p className="text-brand-accent-dark text-sm mt-1">{stylist.role}</p>
        <dl className="mt-4 text-sm grid grid-cols-[80px_1fr] gap-y-1">
          <dt className="text-ink-sub">経験年数</dt>
          <dd>{stylist.experience_years}年</dd>
          <dt className="text-ink-sub">得意分野</dt>
          <dd>{stylist.specialty}</dd>
        </dl>
        <p className="mt-4 text-sm text-ink-main leading-relaxed">{stylist.bio}</p>
      </div>
    </article>
  );
}
