

# Plan : Création de la section PhilosophySection

## Résumé

Création d'une nouvelle section "Notre Philosophie" qui présentera les 3 valeurs fondamentales de l'institut (Naturel, Excellence, Bien-être) sous forme de cards avec icônes, suivies d'un texte de présentation élégant.

---

## Fichiers à créer

### 1. `src/components/sections/philosophy/PhilosophySection.tsx`

Composant principal contenant :

**Partie 1 - Les 3 valeurs :**
- Grille responsive : 3 colonnes sur desktop, empilées sur mobile
- Chaque card :
  - Icône dans un cercle (80px) avec fond `bg-accent/10` et icône couleur `accent`
  - Titre en gras
  - Description courte

| Valeur | Icône | Description |
|--------|-------|-------------|
| Naturel | Leaf | "Des produits sélectionnés avec soin pour respecter votre peau" |
| Excellence | Sparkles | "Un savoir-faire reconnu et des techniques innovantes" |
| Bien-être | Heart | "Votre détente et votre satisfaction sont notre priorité" |

**Partie 2 - Texte de présentation :**
- Centré, `max-w-3xl`
- Utilise `clientConfig.about?.text` si défini
- Sinon, texte par défaut : "Depuis plus de 10 ans, notre équipe passionnée..."
- Style : `font-body text-lg text-secondary leading-relaxed italic`

### 2. `src/components/sections/philosophy/index.ts`

Barrel export pour le composant.

---

## Fichiers à modifier

### 3. `src/components/sections/index.ts`

Ajouter l'export de PhilosophySection.

### 4. `src/pages/Index.tsx`

Insérer `<PhilosophySection />` entre `<ServicesSection />` et `<GoogleReviewsCarousel />`.

---

## Aperçu visuel

```text
┌─────────────────────────────────────────────────────────┐
│                   Notre Philosophie                      │
├─────────────────────────────────────────────────────────┤
│                                                          │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐          │
│   │   🌿     │    │    ✨    │    │    💆    │          │
│   │  Naturel │    │Excellence│    │ Bien-être │          │
│   │   ...    │    │   ...    │    │    ...   │          │
│   └──────────┘    └──────────┘    └──────────┘          │
│                                                          │
│   "Depuis plus de 10 ans, notre équipe passionnée..."   │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## Détails techniques

- **Imports** : `Leaf`, `Sparkles`, `Heart` de lucide-react
- **Wrapper** : `SectionWrapper` avec `id="philosophie"` et `background="white"`
- **Titre** : `SectionTitle` avec `title="Notre Philosophie"` (pas de subtitle)
- **Cards** : Fond transparent, pas de bordure, espacement généreux
- **Icônes** : 48px dans cercle de 80px (`w-20 h-20 rounded-full bg-accent/10`)

