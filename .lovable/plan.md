

# Plan: USP Bar et Gradient Header

## Objectif
Ajouter une barre USP (Unique Selling Propositions) en bas du Hero Banner avec deux indicateurs de confiance, supprimer la fleche animee, et ajouter un gradient progressif sur le header.

## Modifications prevues

### 1. Copie du logo Google Reviews
Le logo Google Reviews fourni (`google-reviews-logo.png`) sera copie dans `public/assets/` pour etre utilise dans l'USP.

### 2. Mise a jour de la configuration client
Ajout d'une nouvelle section `usps` dans `src/config/client-config.ts`:

```text
usps: {
  satisfiedClients: {
    count: "1000+",
    label: "femmes satisfaites"
  },
  googleReviews: {
    rating: "4.9/5",
    count: "+127 avis",
    logo: "/assets/google-reviews-logo.png"
  }
}
```

### 3. Modification du HeroBanner (`src/components/HeroBanner.tsx`)

**Suppressions:**
- Suppression complete du bloc "Scroll Indicator" (lignes 203-221)
- Suppression des styles CSS `.scroll-indicator` et `@keyframes bounce`

**Ajouts:**
Une nouvelle barre USP en bas du Hero avec:
- Layout: Flexbox horizontal, 2 colonnes separees par un separateur vertical
- Fond: Semi-transparent ou integre a l'overlay existant
- Contenu USP 1 (gauche): "1000+" en gras + "femmes satisfaites"
- Contenu USP 2 (droite): Logo Google Reviews + "Excellent 4.9/5" + "+127 avis"

Structure HTML:
```text
+------------------------------------------+
|   1000+          |  [Google Logo]        |
|   femmes         |  Excellent 4.9/5      |
|   satisfaites    |  +127 avis            |
+------------------------------------------+
```

**Responsive:**
- Desktop: Barre horizontale avec les 2 USPs cote a cote
- Mobile: Meme disposition mais taille reduite

### 4. Modification du Header (`src/components/Header.tsx`)

**Ajout d'un gradient overlay sur le header:**
Quand le header n'est pas "scrolled", ajouter un pseudo-element ou un div avec:
- Gradient: `linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)`
- Position: absolute, couvrant toute la largeur
- Hauteur: ~120-150px pour un effet progressif
- Z-index: en dessous du contenu du header mais au-dessus de l'image

Cela creera un effet de fondu sombre en haut qui s'eclaircit vers le bas, ameliorant la lisibilite du texte blanc.

## Details techniques

### Barre USP - Styles
```text
Position: absolute ou relative en bas du hero
Background: rgba(255,255,255,0.1) avec backdrop-filter blur subtil
Padding: 16px 32px (desktop), 12px 16px (mobile)
Separateur: ligne verticale blanche 1px, hauteur ~40px
Typographie:
  - Chiffres: 24px, font-weight bold
  - Labels: 14px, font-weight normal
  - Couleur: #FFFFFF
```

### Gradient Header - Specs
```text
Gradient applique uniquement quand !isScrolled
Degrade du noir (60% opacite en haut) vers transparent en bas
Hauteur du gradient: 120-150px
Transition fluide lors du scroll
```

## Resume des fichiers modifies
1. `public/assets/google-reviews-logo.png` - Copie de l'asset
2. `src/config/client-config.ts` - Ajout section USPs
3. `src/components/HeroBanner.tsx` - Ajout USP bar, suppression scroll indicator
4. `src/components/Header.tsx` - Ajout gradient overlay progressif

