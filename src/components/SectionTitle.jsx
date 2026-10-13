export default function SectionTitle({ eyebrow, title, light = false }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className={`mb-3 text-xs font-semibold tracking-[0.3em] uppercase ${light ? 'text-gold-light' : 'text-gold'}`}>
        {eyebrow}
      </p>
      <h2 className={`font-serif text-4xl font-semibold sm:text-5xl ${light ? 'text-cream' : 'text-espresso'}`}>
        {title}
      </h2>
      <div className="mx-auto mt-5 flex items-center justify-center gap-3" aria-hidden="true">
        <span className="h-px w-12 bg-gold-light/60" />
        <span className="size-1.5 rotate-45 bg-gold-light" />
        <span className="h-px w-12 bg-gold-light/60" />
      </div>
    </div>
  )
}
