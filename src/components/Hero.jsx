import { ArrowRight, Wheat } from 'lucide-react'
import { bakery } from '../data'

export default function Hero() {
  return (
    <section id="accueil" className="relative flex min-h-svh items-center overflow-hidden bg-espresso">
      {/* Halo doré décoratif */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(212,164,76,0.25),transparent_60%)]"
      />
      <Wheat aria-hidden="true" className="absolute -right-16 bottom-0 size-96 text-gold-light/10 sm:size-[32rem]" strokeWidth={0.6} />

      <div className="relative mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <p className="mb-6 text-xs font-semibold tracking-[0.35em] text-gold-light uppercase">{bakery.tagline}</p>
        <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] font-semibold text-cream sm:text-7xl">
          Le goût du pain <em className="font-medium text-gold-light">fait avec le temps</em>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
          Levain naturel, farines de meule et beurre AOP : chaque matin, notre fournil façonne pains,
          viennoiseries et pâtisseries à la main.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#produits"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-light px-7 py-3.5 text-sm font-semibold text-espresso transition-colors duration-200 hover:bg-cream"
          >
            Découvrir nos produits
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href="#horaires"
            className="inline-flex items-center justify-center rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold text-cream transition-colors duration-200 hover:border-gold-light hover:text-gold-light"
          >
            Horaires & accès
          </a>
        </div>
      </div>
    </section>
  )
}
