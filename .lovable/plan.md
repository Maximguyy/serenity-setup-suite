
# Plan de Restructuration du Projet

## Objectif
Réorganiser le projet pour le rendre modulaire, maintenable et facilement clonable pour différents clients. Conversion de tous les styles inline vers Tailwind CSS.

---

## Nouvelle Structure de Fichiers

```text
src/components/
├── core/
│   ├── SectionWrapper.tsx      ← Container réutilisable
│   ├── SectionTitle.tsx        ← Titre de section réutilisable
│   └── index.ts
│
├── sections/
│   ├── hero/
│   │   ├── HeroBanner.tsx
│   │   └── index.ts
│   ├── services/
│   │   ├── ServicesSection.tsx
│   │   └── index.ts
│   ├── team/
│   │   ├── TeamSection.tsx
│   │   └── index.ts
│   ├── contact/
│   │   ├── ContactSection.tsx
│   │   └── index.ts
│   └── index.ts
│
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── AnnouncementBar.tsx
│   ├── MobileStickyBadge.tsx
│   ├── StickyBookingButton.tsx
│   └── index.ts
│
└── ui/                         ← Inchangé
```

---

## Étapes de Réalisation

### 1. Configuration Tailwind
Ajouter les couleurs et polices personnalisées dans `tailwind.config.ts` :
- Couleur accent : `#C9A87C`
- Polices : Bitter (titres), Raleway (corps)
- Couleurs de fond : light `#F8F8F8`

### 2. Composants Core

**SectionWrapper.tsx**
- Props : `id`, `children`, `className?`, `background?` ('white' | 'light' | 'dark')
- Applique : padding vertical responsive, container centré, max-width

**SectionTitle.tsx**
- Props : `title`, `subtitle?`, `centered?` (défaut: true)
- Styles cohérents pour tous les titres de section

### 3. Migration des Composants Layout
Déplacer vers `layout/` :
- Header, Footer, AnnouncementBar
- MobileStickyBadge, StickyBookingButton
- Convertir les `<style>` tags en classes Tailwind

### 4. Migration des Sections
Déplacer et refactorer :
- **HeroBanner** → `sections/hero/` (cas spécial avec Header intégré)
- **ServicesSection** → `sections/services/`
- **TeamSection** → `sections/team/`
- **ContactSection** → `sections/contact/`

Chaque section utilisera `SectionWrapper` et `SectionTitle`.

### 5. Fichiers Index (exports centralisés)
Créer un `index.ts` dans chaque dossier pour simplifier les imports.

### 6. Mise à jour de Index.tsx
Nouveaux imports :
```typescript
import { AnnouncementBar, Footer, ... } from '@/components/layout';
import { HeroBanner, ServicesSection, ... } from '@/components/sections';
```

### 7. Nettoyage
Supprimer les anciens fichiers à la racine de `components/`.

---

## Fichiers à Créer (11)
1. `src/components/core/SectionWrapper.tsx`
2. `src/components/core/SectionTitle.tsx`
3. `src/components/core/index.ts`
4. `src/components/layout/index.ts`
5. `src/components/sections/hero/index.ts`
6. `src/components/sections/services/index.ts`
7. `src/components/sections/team/index.ts`
8. `src/components/sections/contact/index.ts`
9. `src/components/sections/index.ts`

## Fichiers à Migrer (9)
- Header, Footer, AnnouncementBar → `layout/`
- MobileStickyBadge, StickyBookingButton → `layout/`
- HeroBanner → `sections/hero/`
- ServicesSection → `sections/services/`
- TeamSection → `sections/team/`
- ContactSection → `sections/contact/`

## Fichiers à Modifier (2)
- `tailwind.config.ts` - Ajouter couleurs/polices
- `src/pages/Index.tsx` - Nouveaux imports

## Fichiers à Supprimer (10)
- Anciens fichiers après migration réussie
- `src/components/NavLink.tsx` (non utilisé)

---

## Résultat Attendu
- Structure modulaire et organisée
- Tous les styles en Tailwind CSS (mobile-first)
- Composants réutilisables (SectionWrapper, SectionTitle)
- Imports simplifiés via fichiers index
- Visuel final identique à l'actuel
