import { useState } from 'react'
import { Mail, Phone, Send } from 'lucide-react'
import { bakery } from '../data'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

const fieldClass =
  'w-full rounded-xl border border-cream/20 bg-espresso-soft px-4 py-3 text-base text-cream placeholder:text-cream/40 transition-colors duration-200 focus:border-gold-light focus:outline-none'

function Field({ id, label, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-cream/90">
        {label}
      </label>
      {children}
    </div>
  )
}

export default function Contact() {
  const [sent, setSent] = useState(false)

  // Formulaire de démonstration : rien n'est envoyé
  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-espresso py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle eyebrow="Contact" title="Une commande, une question ?" light />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-3">
          <Reveal>
            <p className="leading-relaxed text-cream/80">
              Gâteau d’anniversaire, pièce montée ou commande pour un événement : écrivez-nous, nous vous répondons sous
              48 h.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-cream">
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-gold-light" aria-hidden="true" />
                <a href={`tel:${bakery.phone.replaceAll(' ', '')}`} className="hover:text-gold-light">
                  {bakery.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-gold-light" aria-hidden="true" />
                <a href={`mailto:${bakery.email}`} className="hover:text-gold-light">
                  {bakery.email}
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="grid gap-5 rounded-3xl border border-cream/10 p-6 sm:grid-cols-2 sm:p-10">
              <Field id="nom" label="Nom">
                <input id="nom" name="nom" type="text" autoComplete="name" required className={fieldClass} placeholder="Marie Dupont" />
              </Field>
              <Field id="email" label="E-mail">
                <input id="email" name="email" type="email" autoComplete="email" required className={fieldClass} placeholder="marie@exemple.fr" />
              </Field>
              <div className="sm:col-span-2">
                <Field id="sujet" label="Sujet">
                  <select id="sujet" name="sujet" className={fieldClass} defaultValue="commande">
                    <option value="commande">Commande spéciale</option>
                    <option value="evenement">Événement</option>
                    <option value="autre">Autre question</option>
                  </select>
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field id="message" label="Message">
                  <textarea id="message" name="message" rows={5} required className={fieldClass} placeholder="Votre message…" />
                </Field>
              </div>
              <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gold-light px-7 py-3.5 text-sm font-semibold text-espresso transition-colors duration-200 hover:bg-cream"
                >
                  Envoyer
                  <Send className="size-4" aria-hidden="true" />
                </button>
                <p role="status" className="text-sm text-gold-light">
                  {sent && 'Merci ! (site d’exemple : aucun message n’a été envoyé)'}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
