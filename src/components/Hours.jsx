import { Clock, MapPin, Phone } from 'lucide-react'
import { bakery, hours } from '../data'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

export default function Hours() {
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(bakery.address)}&output=embed`

  return (
    <section id="horaires" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle eyebrow="Horaires & accès" title="Venez nous rendre visite" />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="h-full rounded-3xl bg-espresso p-8 text-cream sm:p-10">
              <h3 className="flex items-center gap-3 font-serif text-2xl font-semibold">
                <Clock className="size-5 text-gold-light" aria-hidden="true" />
                Horaires d’ouverture
              </h3>
              <dl className="mt-6 divide-y divide-cream/10">
                {hours.map(({ day, time }) => (
                  <div key={day} className="flex justify-between gap-4 py-3 text-sm">
                    <dt className="text-cream/80">{day}</dt>
                    <dd className={time === 'Fermé' ? 'text-cream/60 italic' : 'font-medium'}>{time}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 space-y-3 border-t border-cream/10 pt-8 text-sm">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-gold-light" aria-hidden="true" />
                  {bakery.address}
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="size-4 shrink-0 text-gold-light" aria-hidden="true" />
                  <a href={`tel:${bakery.phone.replaceAll(' ', '')}`} className="hover:text-gold-light">
                    {bakery.phone}
                  </a>
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3">
            <div className="h-80 overflow-hidden rounded-3xl border border-line bg-cream-dark lg:h-full lg:min-h-[28rem]">
              <iframe
                title={`Carte : ${bakery.name}, ${bakery.address}`}
                src={mapUrl}
                className="size-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
