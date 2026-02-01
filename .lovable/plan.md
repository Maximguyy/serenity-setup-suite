

# Grille adaptative pour la section Services (Desktop)

## Objectif

Rendre la grille de cartes sur desktop (PC) dynamique : la largeur de la section s'adapte au nombre de cartes affichées, le tout reste centré, et le bouton "Tout afficher" s'aligne au-dessus de la dernière carte à droite.

---

## ✅ IMPLÉMENTÉ

---

# Configuration Centralisée - Template Institut de Beauté

## Fichier de configuration unique

**`src/config/client-config.ts`** contient TOUTES les données modifiables du site.

## Sections de la configuration

| Section | Contenu |
|---------|---------|
| `institutName`, `tagline`, `logo`, `favicon` | Identité visuelle |
| `contact` | Téléphone, email, adresse complète |
| `social` | Liens Instagram, Facebook, Google |
| `hours` | Horaires d'ouverture par jour |
| `booking` | URL de réservation, textes des boutons |
| `hero` | Titre, sous-titre, images, **USPs dynamiques** |
| `announcement` | Bandeau promo (activable/désactivable) |
| `reviews` | Titre section, avis Google, note moyenne, CTA |
| `services` | Catégories, prestations, descriptions par défaut |
| `team` | Membres de l'équipe, label années d'expérience |
| `philosophy` | Valeurs de l'institut |
| `giftCard` | Page carte cadeau (titre, features, montants, labels) |
| `contactSection` | Titres de la section contact |
| `navigation` | Liens du menu, bouton CTA |
| `footer` | Titres colonnes, copyright, liens légaux |
| `ui` | Labels UI génériques (boutons, textes) |
| `seo` | Titre, description, mots-clés, images OG |

## Fichiers à modifier pour chaque nouvel institut

### 1. Configuration (obligatoire)
- `src/config/client-config.ts` — Toutes les données textuelles

### 2. Assets (obligatoire)
- `src/assets/logo.png` — Logo de l'institut
- `public/assets/hero-desktop.jpg` — Image hero desktop
- `public/assets/hero-mobile.jpg` — Image hero mobile
- `public/assets/categories/*.jpg` — Images bannières catégories
- `public/assets/services/*.jpg` — Images des prestations
- `public/assets/team/*.png` — Photos équipe
- `public/assets/og-image.jpg` — Image Open Graph
- `public/favicon.ico` — Favicon

### 3. SEO (obligatoire)
- `index.html` — Mettre à jour title, description, og:tags selon `seo` dans config

## Aucun autre fichier à modifier !

Tous les composants lisent leurs données depuis `clientConfig`.
