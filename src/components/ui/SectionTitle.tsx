export function SectionTitle({ label, title, description }: { label: string; title: string; description?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <span className="mb-3 inline-flex rounded-full bg-wheat/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-leaf">{label}</span>
      <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-muted">{description}</p>}
    </div>
  );
}
