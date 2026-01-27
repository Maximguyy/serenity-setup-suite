

## Plan de Configuration - Site Institut de Beauté

### Phase 1 : Mise en place de la base technique

Cette phase configure uniquement les fondations du projet. Aucun composant visuel ne sera créé.

---

#### 1. Création du fichier de configuration client
**Fichier :** `src/config/client-config.ts`

Ce fichier centralisé contiendra toutes les informations de l'institut :
- Identité (nom, tagline, logo)
- Coordonnées (téléphone, email, adresse)
- Réseaux sociaux (Instagram, Facebook, Google)
- Horaires d'ouverture
- Liens de réservation
- Contenu du hero (titre, sous-titre, images de fond)
- Bandeau d'annonce promotionnelle
- Avis clients Google
- Liste des prestations par catégorie
- Équipe et membres
- Configuration Google Maps
- Navigation et liens du menu
- Footer et liens légaux
- Métadonnées SEO

---

#### 2. Création du thème CSS
**Fichier :** `src/styles/theme.css`

Configuration visuelle complète avec :
- **Import des polices Google** : Bitter (titres) et Raleway (corps de texte)
- **Palette de couleurs** : tons neutres avec accent doré (#C9A87C)
- **Système typographique** : tailles, graisses, hauteurs de ligne
- **Espacements** : système cohérent (xs à 4xl)
- **Bordures et ombres** : arrondis et effets d'élévation
- **Transitions** : animations fluides
- **Classes utilitaires** : .container, .section, .btn
- **Styles responsives** : breakpoints mobile-first

---

#### 3. Intégration et page temporaire
- Import du fichier theme.css dans main.tsx
- Création d'une page d'accueil temporaire affichant :
  - Titre "Institut de Beauté - Configuration OK"
  - Message confirmant que les sections seront ajoutées une par une
  - Application des styles du thème (police Raleway, fond blanc)

---

### Résultat attendu après cette phase

✅ Architecture prête pour recevoir les composants  
✅ Toutes les données client modifiables depuis un seul fichier  
✅ Thème visuel cohérent et professionnel défini  
✅ Polices Bitter et Raleway chargées  
✅ Page temporaire fonctionnelle  

❌ Aucun composant visuel (Header, Hero, Footer, sections)

---

### Prochaines étapes (futurs prompts)

Après validation de cette configuration, les sections seront créées une par une dans cet ordre suggéré :
1. Header avec navigation
2. Hero section
3. Section prestations
4. Section avis clients
5. Section équipe
6. Section contact et carte
7. Footer

