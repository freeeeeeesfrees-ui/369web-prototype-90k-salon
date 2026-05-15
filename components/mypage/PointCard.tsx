export function PointCard({ points }: { points: number }) {
  return (
    <section className="bg-brand-primary text-white rounded-lg p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/20 rounded-full -translate-y-12 translate-x-12" />
      <p className="text-sm text-brand-accent uppercase tracking-widest mb-2">Point Balance</p>
      <p className="font-serif text-5xl md:text-6xl">
        {points.toLocaleString()}
        <span className="text-2xl ml-2">pt</span>
      </p>
      <p className="text-xs text-white/70 mt-3">
        次回ご来店時に 1pt = 1円としてご利用いただけます。
      </p>
    </section>
  );
}
