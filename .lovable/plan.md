

# Plan : Optimisation mobile de la page Offrir

## Modifications demandées

1. **Masquer le titre "Meilleur cadeau de Saint-Valentin"** avec les deux icônes coeur sur mobile uniquement
2. **Réduire le padding** entre la section hero et les cartes Valentine sur mobile

---

## Fichier à modifier

### `src/pages/GiftPage.tsx`

#### Modification 1 : Masquer le titre sur mobile (lignes 65-71)

Ajouter la classe `hidden md:block` au conteneur du titre pour le cacher sur mobile :

```tsx
<div className="mb-6 text-center hidden md:block">
  <span className="inline-flex items-center gap-2 font-heading text-lg font-semibold text-accent md:text-xl">
    <Heart className="h-5 w-5 fill-accent" />
    Meilleur cadeau de Saint-Valentin
    <Heart className="h-5 w-5 fill-accent" />
  </span>
</div>
```

#### Modification 2 : Réduire le padding sur mobile (ligne 63)

Modifier le padding de la section Valentine's pour réduire l'espacement sur mobile :

| Avant | Après |
|-------|-------|
| `py-8` | `py-4 md:py-8` |

---

## Résultat attendu

- **Desktop** : Affichage identique (titre visible, padding normal)
- **Mobile** : Titre masqué, espacement réduit entre le texte d'introduction et les 3 cartes

