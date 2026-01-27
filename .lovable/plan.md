
# Modifications des cartes de prestations

## Problèmes identifiés

1. **Bordure visible** : Les cartes ont actuellement `border: '1px solid #E5E5E5'`
2. **Durée mal positionnée** : La durée est affichée dans le contenu de la carte, pas sur l'image
3. **Animation hover problématique** : Le `transform: translateY(-4px)` fait sortir les cartes de leur conteneur parent qui a `overflow: hidden` implicite

## Modifications prévues

### 1. Supprimer la bordure des cartes
- Retirer la propriété `border: '1px solid #E5E5E5'` du style inline des cartes
- Retirer `border-color: var(--color-accent)` du hover CSS

### 2. Déplacer la durée en tag sur l'image
- Ajouter un élément positionné en absolu dans le conteneur `.card-image`
- Style du tag : fond semi-transparent foncé, texte blanc, coins arrondis
- Position : en haut à droite de l'image avec un petit espacement
- Supprimer la durée de la section `.card-content`

### 3. Corriger l'animation hover
- Remplacer `translateY(-4px)` par `scale(1.02)` pour éviter que les cartes sortent de leur zone
- Ajouter un léger padding au conteneur `.services-grid` pour permettre l'affichage de l'ombre sans coupure
- L'effet de zoom sur l'image reste inchangé

---

## Détails techniques

### Structure du tag durée
```text
+---------------------------+
|                    [1h30] |  <-- Tag en haut à droite
|                           |
|        IMAGE              |
|                           |
+---------------------------+
|  Titre du soin            |
|  45 €                     |
+---------------------------+
```

### Styles du tag
- Background : `rgba(0, 0, 0, 0.7)` (fond sombre semi-transparent)
- Couleur : `#FFFFFF`
- Padding : `4px 8px`
- Border-radius : `4px`
- Font-size : `11px` (desktop) / `10px` (mobile)
- Position : `absolute`, `top: 8px`, `right: 8px`

### Correction hover
- Remplacer : `transform: translateY(-4px)`
- Par : `transform: scale(1.02)`
- Ajouter padding de 8px autour de la grille pour l'ombre

