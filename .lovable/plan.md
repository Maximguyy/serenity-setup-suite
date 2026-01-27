
# Section Notre Équipe

## Objectif
Créer un composant `TeamSection` pour présenter l'équipe de l'institut avec un layout différent selon le device.

---

## Layout

### Desktop (≥ 768px)
```text
┌─────────────────────────────────────────────────────────────┐
│                     Notre Équipe                             │
│    Des professionnelles passionnées et diplômées...          │
│                                                              │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐         │
│  │ [Photo] │  │ [Photo] │  │ [Photo] │  │ [Photo] │         │
│  │         │  │         │  │         │  │         │         │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘         │
│    Marie        Sophie       Julie        Emma               │
│  Fondatrice   Esthéticienne  Prothésiste  Esthéticienne     │
│  Soins visage   Massages     Nail art     Épilations        │
└─────────────────────────────────────────────────────────────┘
```

### Mobile (< 768px) - Layout Alterné
```text
┌────────────────────────────────────┐
│         Notre Équipe               │
│   Des professionnelles...          │
│                                    │
│  ┌──────┐  Marie                   │
│  │Photo │  Fondatrice & Esthé...   │
│  └──────┘  Depuis 8 ans            │
│                                    │
│            Sophie    ┌──────┐      │
│   Esthéticienne      │Photo │      │
│        Depuis 5 ans  └──────┘      │
│                                    │
│  ┌──────┐  Julie                   │
│  │Photo │  Prothésiste ongulaire   │
│  └──────┘  Depuis 3 ans            │
│                                    │
│            Emma      ┌──────┐      │
│   Esthéticienne      │Photo │      │
│        Depuis 4 ans  └──────┘      │
└────────────────────────────────────┘
```

---

## Fichiers à créer/modifier

| Fichier | Action |
|---------|--------|
| `src/components/TeamSection.tsx` | Créer |
| `src/pages/Index.tsx` | Ajouter le composant |

---

## Spécifications détaillées

### Section Container
- Background : `#F8F8F8` (fond alterné gris clair)
- Padding : `80px 32px` (desktop) / `60px 24px` (mobile)
- Max-width : `1200px`

### Titre & Sous-titre
- Titre : `clientConfig.team.sectionTitle` - Bitter, 42px/32px, 600, #1A1A1A
- Sous-titre : `clientConfig.team.sectionSubtitle` - Raleway, 18px/16px, 400, #6B6B6B
- Texte centré, max-width 700px pour le sous-titre

### Cartes Desktop (grille 4 colonnes)
- Grid : `repeat(4, 1fr)`, gap `32px`
- Photo : aspect-ratio 1:1, border-radius 12px, bordure 3px accent optionnelle
- Nom : Raleway, 20px, 600, #1A1A1A
- Rôle : Raleway, 14px, 400, #6B6B6B
- Spécialité : Raleway, 13px, 400 italic, couleur accent
- Hover : `scale(1.02)` + ombre + zoom photo `scale(1.05)`

### Layout Mobile (alterné)
- Flexbox column, gap 40px
- Chaque membre : flex row, gap 16px
- Alternance via `flex-direction: row-reverse` sur index pair
- Photo : 100px × 100px, border-radius 8px
- Texte aligné selon position (left/right)
- Afficher "Professionnelle depuis X ans"

### Hover Effects (desktop uniquement)
- Carte : légère élévation avec ombre
- Photo : zoom `scale(1.05)` + rotation subtile `rotate(2deg)`

---

## Données utilisées

```typescript
clientConfig.team.sectionTitle    // "Notre Équipe"
clientConfig.team.sectionSubtitle // "Des professionnelles passionnées..."
clientConfig.team.members[]       // Array de 4 membres
  - name: string
  - role: string
  - photo: string
  - specialty?: string
  - years: number
```

---

## Responsive Breakpoints

| Device | Colonnes | Photo | Layout |
|--------|----------|-------|--------|
| Desktop ≥1024px | 4 | 100% width, carré | Grille |
| Tablet 768-1023px | 3 | 100% width | Grille |
| Mobile < 768px | 1 | 100px cercle | Alterné |
