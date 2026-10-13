import { bakery } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-espresso py-10 text-center text-sm text-cream/60">
      <p className="font-serif text-xl text-cream">{bakery.name}</p>
      <p className="mt-2">{bakery.address}</p>
      <p className="mt-4">© {new Date().getFullYear()} {bakery.name} — Site d’exemple</p>
    </footer>
  )
}
