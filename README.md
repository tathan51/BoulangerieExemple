# Maison Fournil — site d'exemple

Site vitrine one-page d'une boulangerie fictive, réalisé avec Vite, React et Tailwind CSS.

## Lancer le projet

```bash
npm install
npm run dev      # serveur de développement sur http://localhost:5173
npm run build    # version de production dans dist/
```

## Organisation

- `src/data.js` : contenu (nom, adresse, produits, horaires) à modifier librement
- `src/components/` : une section par fichier (Header, Hero, About, Products, Hours, Contact, Footer)
- `src/index.css` : palette de couleurs et polices (bloc `@theme`)

Le formulaire de contact est uniquement visuel : aucun message n'est envoyé.
