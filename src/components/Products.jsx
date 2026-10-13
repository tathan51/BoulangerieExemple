import { products } from '../data'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

export default function Products() {
  return (
    <section id="produits" className="bg-cream-dark py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle eyebrow="Nos produits" title="Sortis du four ce matin" />
        </Reveal>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(({ icon: Icon, name, description, price }) => (
            <li key={name}>
              <Reveal className="h-full">
                <article className="group flex h-full flex-col rounded-3xl border border-line bg-white p-8 transition-shadow duration-300 hover:shadow-xl hover:shadow-brown/10">
                  <span className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-espresso text-gold-light transition-colors duration-300 group-hover:bg-gold">
                    <Icon className="size-7 group-hover:text-white" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="font-serif text-2xl font-semibold">{name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{description}</p>
                  <p className="mt-6 border-t border-line pt-4 font-serif text-xl font-semibold text-gold">{price}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
