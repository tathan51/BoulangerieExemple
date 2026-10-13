import { CakeSlice, Coffee, Croissant, Sandwich, Wheat, Cookie } from 'lucide-react'

// Contenu d'exemple : à remplacer librement
export const bakery = {
  name: 'Maison Fournil',
  tagline: 'Boulangerie artisanale depuis 1987',
  address: '12 rue des Boulangers, 75005 Paris',
  phone: '01 23 45 67 89',
  email: 'bonjour@maison-fournil.fr',
}

export const navLinks = [
  { id: 'maison', label: 'La Maison' },
  { id: 'produits', label: 'Nos produits' },
  { id: 'horaires', label: 'Horaires & accès' },
  { id: 'contact', label: 'Contact' },
]

export const products = [
  {
    icon: Wheat,
    name: 'Pain au levain',
    description: 'Farine bio de meule, levain naturel et 24 h de fermentation.',
    price: '4,20 €',
  },
  {
    icon: Croissant,
    name: 'Croissant pur beurre',
    description: 'Beurre AOP Charentes-Poitou, feuilletage tourné à la main.',
    price: '1,40 €',
  },
  {
    icon: CakeSlice,
    name: 'Tarte aux fruits de saison',
    description: 'Pâte sablée, crème d’amande et fruits du marché.',
    price: '4,80 €',
  },
  {
    icon: Cookie,
    name: 'Financier aux noisettes',
    description: 'Beurre noisette et noisettes du Piémont torréfiées.',
    price: '1,90 €',
  },
  {
    icon: Sandwich,
    name: 'Sandwich du fournil',
    description: 'Baguette tradition, jambon blanc, comté 18 mois.',
    price: '6,50 €',
  },
  {
    icon: Coffee,
    name: 'Café & chocolat chaud',
    description: 'Café de torréfacteur et chocolat à l’ancienne.',
    price: '2,20 €',
  },
]

export const hours = [
  { day: 'Lundi', time: 'Fermé' },
  { day: 'Mardi – Vendredi', time: '7 h 00 – 19 h 30' },
  { day: 'Samedi', time: '7 h 00 – 20 h 00' },
  { day: 'Dimanche', time: '7 h 30 – 13 h 30' },
]
