
# Page de Confirmation de Réservation

## Objectif
Remplacer le toast de confirmation par une nouvelle page dédiée (`/reservation-confirmee`) qui s'affiche après la soumission du formulaire de réservation. Cette page donnera un retour visuel clair et rassurant au client.

---

## Ce qui sera créé

### 1. Nouvelle page : `src/pages/BookingConfirmationPage.tsx`

Une page simple et élégante avec :

- **Un grand cercle vert avec une icône de validation** (checkmark) animé pour un effet "succès"
- **Un titre principal** : "Réservation confirmée !"
- **Un message explicatif** : "Vous allez recevoir un email de confirmation dans les prochaines minutes avec tous les détails de votre rendez-vous."
- **Un récapitulatif optionnel** des infos passées via l'URL (nom du client, date, heure)
- **Un bouton CTA** : "Retour à l'accueil" qui ramène vers `/`

Le design sera responsive (PC, tablette, mobile) avec :
- Centrage vertical et horizontal du contenu
- Fond légèrement teinté ou gradient subtil
- Animation d'entrée douce pour le cercle de validation

### 2. Modifications du routeur : `src/App.tsx`

Ajout de la nouvelle route :
```
/reservation-confirmee → BookingConfirmationPage
```

### 3. Modifications de `BookingModal.tsx`

- Suppression du toast de confirmation
- Après validation du formulaire, redirection vers `/reservation-confirmee` avec les données essentielles passées via `state` du router (nom, date, heure, prestations)

---

## Aperçu visuel de la page

```text
┌─────────────────────────────────────────────────┐
│                                                 │
│                                                 │
│              ╭───────────────────╮              │
│              │                   │              │
│              │    ✓ (vert)       │              │
│              │   grand cercle    │              │
│              │                   │              │
│              ╰───────────────────╯              │
│                                                 │
│          Réservation confirmée !                │
│                                                 │
│    Vous allez recevoir un email dans les        │
│    prochaines minutes pour confirmer votre      │
│    rendez-vous.                                 │
│                                                 │
│         ┌─────────────────────────┐             │
│         │   Retour à l'accueil    │             │
│         └─────────────────────────┘             │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## Détails techniques

| Fichier | Action |
|---------|--------|
| `src/pages/BookingConfirmationPage.tsx` | Créer (nouvelle page) |
| `src/App.tsx` | Ajouter la route `/reservation-confirmee` |
| `src/components/booking/BookingModal.tsx` | Remplacer le toast par `navigate('/reservation-confirmee', { state: {...} })` |

### Données passées à la page de confirmation

Via `useLocation().state` :
- `clientName` : Prénom du client
- `selectedDate` : Date formatée (ex: "Lundi 15 janvier")
- `selectedTime` : Heure (ex: "14h30")
- `servicesCount` : Nombre de prestations

### Animation du cercle de validation

Utilisation de Tailwind pour une animation d'apparition :
- Scale de 0 à 1 avec un léger rebond
- Fade-in du texte après l'apparition du cercle
