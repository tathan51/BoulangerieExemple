import { Award, Flame, Leaf } from 'lucide-react'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

const values = [
  { icon: Leaf, title: 'Farines bio', text: 'Moulues sur meule de pierre par un meunier de l’Yonne.' },
  { icon: Flame, title: 'Four à sole', text: 'Une cuisson lente qui donne une croûte épaisse et dorée.' },
  { icon: Award, title: 'Fait maison', text: 'Tout est façonné sur place, de la pâte à la décoration.' },
]

export default function About() {
  return (
    <section id="maison" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle eyebrow="La Maison" title="Trois générations de boulangers" />
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-brown via-espresso-soft to-espresso p-10">
              <div aria-hidden="true" className="absolute inset-4 rounded-2xl border border-gold-light/30" />
              <div className="relative flex h-full flex-col items-center justify-center text-center">
                <p className="font-serif text-7xl font-semibold text-gold-light">1987</p>
                <p className="mt-2 text-xs font-semibold tracking-[0.3em] text-cream/80 uppercase">Ouverture du fournil</p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <p className="font-serif text-2xl leading-snug text-brown italic">
              « Un bon pain, c’est d’abord de la patience. »
            </p>
            <p className="mt-6 leading-relaxed text-ink-muted">
              Ouverte par Jean et Marie Fournil, la boulangerie est aujourd’hui tenue par leurs petits-enfants. Les
              recettes ont gardé leur simplicité : peu d’ingrédients, mais choisis avec soin, et le temps qu’il faut
              pour que la pâte développe tous ses arômes.
            </p>

            <ul className="mt-10 space-y-6">
              {values.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-line bg-white text-gold">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-semibold">{title}</h3>
                    <p className="text-sm leading-relaxed text-ink-muted">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
