export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
      <span className="h-px w-8 bg-primary" />
      {children}
    </p>
  )
}

