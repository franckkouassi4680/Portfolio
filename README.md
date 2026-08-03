# Kouassi Kouadio Franck — Portfolio Data Analyst

Site vitrine one-page, 100% statique (HTML / CSS / JS vanilla), conçu comme un outil de conversion : chaque section répond à "pourquoi ce profil, comment le contacter maintenant".

## Choix technique

Pas de framework (Next.js, Tailwind build...) : une seule page sans routing ni backend n'en a pas besoin. Le CSS est écrit à la main avec des variables de design (mêmes bénéfices que Tailwind — cohérence, rapidité — sans le poids d'un framework à charger). Résultat : zéro dépendance à installer, déploiement instantané, performance maximale.

## Structure

```
portfolio/
├── index.html          # toute la page, contenu FR par défaut (SEO), attributs data-i18n
├── css/style.css        # design system (couleurs, typo, composants, responsive)
├── js/
│   ├── projects.js      # données des 14 projets (FR/EN)
│   ├── translations.js  # dictionnaire de traduction FR/EN de l'UI
│   └── main.js           # rendu des projets, filtre par outil, toggle langue, compteur KPI
├── assets/
│   ├── favicon.svg
│   └── og-image.svg     # image de partage LinkedIn/WhatsApp (voir note plus bas)
└── README.md
```

## Lancer en local

Aucune installation nécessaire. Deux options :

**Option 1 — ouvrir directement le fichier**
Double-cliquer sur `index.html` (fonctionne, mais certains navigateurs restreignent le JS en `file://`).

**Option 2 — petit serveur local (recommandé)**
```bash
cd portfolio
python -m http.server 8000
```
Puis ouvrir `http://localhost:8000`.

## Déploiement (Vercel ou Netlify, en un clic)

Le site est 100% statique : pas de build, pas de variables d'environnement.

- **Netlify** : glisser-déposer le dossier `portfolio/` sur [app.netlify.com/drop](https://app.netlify.com/drop), ou connecter le repo Git avec *Build command* vide et *Publish directory* = `portfolio`.
- **Vercel** : `vercel deploy` depuis le dossier `portfolio/`, ou importer le repo avec *Framework Preset* = "Other" et *Output directory* = `.`.

## À personnaliser avant mise en ligne

- `assets/og-image.svg` : image utilisée pour l'aperçu du lien sur LinkedIn/WhatsApp/email. Certaines plateformes (notamment LinkedIn) affichent mal les SVG en `og:image` — il est recommandé d'exporter ce fichier en PNG 1200×630 (capture d'écran ou un outil comme [resvg](https://github.com/RazrFalcon/resvg)/Inkscape/Figma) et de mettre à jour les balises `og:image` / `twitter:image` dans `index.html` en conséquence.
- La photo de profil (`assets/franck-kouassi.jpg`) s'affiche dans une carte "profile.jpg" en haut du panneau visuel du hero, dans le même style que la carte "dataset.csv" en dessous. Pour la remplacer, il suffit d'écraser ce fichier avec une nouvelle image (même nom, idéalement un portrait buste sur fond uni comme l'original).
- Les liens `tel:` et `mailto:` utilisent les coordonnées fournies (`+225 05 46 80 14 59`, `fkouassi4966@gmail.com`) — à vérifier avant mise en ligne.
- `<link rel="canonical">` et les balises `og:url` pointent vers un domaine d'exemple (`kouadio-franck-kouassi.example.com`) — à remplacer par l'URL réelle une fois le site déployé.

## Notes de design

Palette pensée pour éviter les templates IA génériques (pas de fond crème + serif + terracotta, pas de noir + accent unique, pas de style "broadsheet") : **Navy Lagune** (#10233B) comme socle sombre, **Ambre Impact** (#E8A33C) pour l'action, **Teal Donnée** (#14958B) et **Baie Franck** (#C8447A) comme accents de données, sur un fond **Brume Claire** (#F6F8FA). Trois polices avec des rôles distincts : *Space Grotesk* (display, énergique) pour les titres, *Inter* pour la lecture, *JetBrains Mono* pour les chiffres et labels — afin d'incarner à la fois la rigueur analytique et l'énergie du terrain. Signature visuelle : les projets et indicateurs sont mis en scène comme des **lignes de dataset** (numérotation `01·02·03`, badges d'outils), un fil visuel qui relie collecte terrain et tableaux de bord de direction, sans gradient ni effet décoratif superflu.

## Fonctionnalités

- Bouton FR/EN qui traduit tout le contenu sans rechargement (`js/translations.js` + `js/main.js`)
- Filtre de projets par outil (Power BI, Python, SQL, Excel, Tableau, R)
- Barre de contact fixe en bas d'écran sur mobile (`tel:` + `mailto:` toujours accessibles)
- Compteur animé des KPI du hero (désactivé si `prefers-reduced-motion`)
- Navigation clavier et contrastes conformes (focus visible, alt/aria-label sur les icônes)
