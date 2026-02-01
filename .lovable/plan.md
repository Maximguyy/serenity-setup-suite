

# Grille adaptative pour la section Services (Desktop)

## Objectif

Rendre la grille de cartes sur desktop (PC) dynamique : la largeur de la section s'adapte au nombre de cartes affichées, le tout reste centré, et le bouton "Tout afficher" s'aligne au-dessus de la dernière carte à droite.

---

## Comportement attendu

| Nombre de cartes | Comportement |
|------------------|--------------|
| 6 cartes | Grille 6 colonnes, largeur max (comme actuellement) |
| 5 cartes | Grille 5 colonnes, centrée |
| 4 cartes | Grille 4 colonnes, centrée |
| 2-3 cartes | Affichage spécial (cartes plus larges ou layout différent) |

---

## Solution technique

### 1. Calcul dynamique du nombre de colonnes

Créer une fonction qui détermine le nombre de colonnes selon le nombre d'items :

```text
const getGridColumns = (itemCount) => {
  if (itemCount >= 6) return 6
  if (itemCount >= 4) return itemCount  // 4 ou 5 colonnes
  return 4  // Minimum 4 colonnes avec cartes élargies pour 2-3 items
}
```

### 2. Container adaptatif et centré

Remplacer la grille fixe `lg:grid-cols-6` par un style inline dynamique :

```text
// Avant (fixe)
<div className="hidden gap-4 lg:grid lg:grid-cols-6">

// Après (adaptatif)
<div 
  className="hidden gap-4 lg:grid mx-auto"
  style={{ 
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    maxWidth: `${columns * cardWidth + (columns-1) * gap}px`
  }}
>
```

### 3. Repositionnement du header avec "Tout afficher"

Wrapper le header de catégorie dans le même container adaptatif pour que le lien "Tout afficher" s'aligne avec la dernière carte :

```text
<div className="mx-auto" style={{ maxWidth: calculatedWidth }}>
  {/* Category Header */}
  <div className="flex justify-between">
    <h3>Catégorie</h3>
    <Link>Tout afficher →</Link>
  </div>
  
  {/* Cards Grid */}
  <div className="grid" style={{ ... }}>
    ...
  </div>
</div>
```

### 4. Cas spécial : 2-3 cartes

Pour éviter un affichage "moche" avec seulement 2-3 cartes :
- Les cartes seront légèrement plus larges
- Grille de 4 colonnes mais cartes centrées avec `justify-center`
- Ou utiliser flexbox avec des cartes de largeur fixe plus grande

---

## Fichiers modifiés

| Fichier | Modification |
|---------|--------------|
| `src/components/sections/services/ServicesSection.tsx` | Ajout logique grille dynamique + styles inline |

---

## Points d'attention

- La largeur des cartes doit rester cohérente visuellement
- Le gap entre cartes reste de 16px (gap-4)
- Seul le viewport desktop (lg:) est affecté
- Mobile et tablette restent inchangés (scroll horizontal)

