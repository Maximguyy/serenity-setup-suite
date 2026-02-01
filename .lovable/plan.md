

# Plan d'Optimisation de la Modal de Prestation

## Objectif
Rendre la pop-up plus compacte, moins intrusive, avec un bouton de fermeture bien visible et un overlay moins sombre.

---

## Modifications Prévues

### 1. Overlay moins sombre
**Fichier:** `src/components/ui/dialog.tsx`
- Changer `bg-black/80` en `bg-black/50` pour réduire l'opacité du fond grisé

### 2. Bouton de fermeture plus visible
**Fichier:** `src/components/ui/dialog.tsx`
- Ajouter un fond blanc/clair au bouton X
- Augmenter la taille de l'icône X
- Ajouter une ombre pour le faire ressortir sur l'image

### 3. Modal plus compacte
**Fichier:** `src/components/sections/services/ServiceModal.tsx`

**Sur Desktop (md+):**
- Largeur max: `sm:max-w-md` (au lieu de `sm:max-w-lg`)
- Image: ratio `aspect-[16/9]` (plus large, moins haute)
- Padding réduit: `p-4` au lieu de `p-6`

**Sur Mobile:**
- Largeur: `max-w-[90vw]`
- Padding: `p-3`
- Image: hauteur fixe réduite `h-32`
- Textes et espacements plus petits

### 4. Tag durée sur l'image
- Conserver le tag existant en haut à droite de l'image avec la durée (ex: "60 min")
- Style: fond semi-transparent, texte blanc

---

## Détail des Changements

### dialog.tsx
```text
Ligne 22: bg-black/80 → bg-black/50
Ligne 45-47: Nouveau style pour le bouton X
  - Fond blanc avec ombre
  - Icône plus grande (h-5 w-5)
  - Position ajustée
```

### ServiceModal.tsx
```text
- DialogContent: "max-h-[85vh] overflow-y-auto p-3 sm:p-4 max-w-[90vw] sm:max-w-md"
- Image container: "aspect-[16/9] sm:aspect-[2/1]" + marges réduites "-mx-3 -mt-3 sm:-mx-4 sm:-mt-4 mb-3"
- Titre: "text-lg sm:text-xl" (plus petit)
- Description: "mt-1.5 text-xs sm:text-sm"
- Prix: "text-2xl sm:text-3xl" + "mt-3"
- CTAs: "mt-4 gap-2"
```

---

## Fichiers Modifiés
1. `src/components/ui/dialog.tsx` - Overlay + bouton X
2. `src/components/sections/services/ServiceModal.tsx` - Tailles et espacements

---

## Résultat Attendu
- Modal 30-40% plus petite globalement
- Overlay semi-transparent (50% au lieu de 80%)
- Bouton X bien visible avec fond blanc
- Image plus large et moins haute sur desktop
- Layout compact et proportionné sur mobile

