

# Page de Réservation - Modale 90%

## Objectif

Créer une modale de réservation qui s'ouvre à 90% de la hauteur de l'écran, permettant aux clients de :
1. Sélectionner une ou plusieurs prestations (upsell)
2. Choisir une date et une heure
3. Renseigner leurs informations personnelles
4. Ajouter une note optionnelle pour le praticien

---

## Architecture des Composants

```text
src/components/booking/
├── BookingModal.tsx           # Modale principale (90vh)
├── BookingServicePicker.tsx   # Étape 1: Sélection prestations
├── ServiceSearchDialog.tsx    # Dialog recherche prestations
├── SelectedServiceCard.tsx    # Carte prestation sélectionnée
├── BookingDatePicker.tsx      # Étape 2: Date et heure
├── BookingClientForm.tsx      # Étape 3: Informations client
├── BookingNotes.tsx           # Étape 4: Note optionnelle
└── index.ts                   # Barrel exports
```

---

## Fonctionnalités Détaillées

### 1. Sélection des Prestations

**État initial :**
- Bouton "Ajouter une prestation" (80% largeur, centré)
- Icône (+) à gauche du texte
- Style : bordure pointillée, fond léger

**Dialog de recherche :**
- S'ouvre au clic sur le bouton
- Barre de recherche en haut (filtre les prestations)
- Prestations groupées par catégorie (Soins Visage, Soins Corps, Épilations)
- Chaque prestation affiche : nom, durée, prix

**Carte prestation sélectionnée (style inspiré du screen "ESILV Paris") :**
- Image carrée à gauche (thumbnail de la prestation)
- Contenu à droite :
  - Badge durée (ex: "60 min") en haut à gauche
  - Nom de la prestation (titre principal)
  - Description courte ou catégorie
  - Prix à droite ou en bas
- Bouton de suppression (X) en haut à droite

**Upsell :**
- Après chaque prestation ajoutée, un nouveau bouton "Ajouter une prestation" apparaît en dessous
- Maximum 6 prestations

---

### 2. Date et Heure

- Titre de section : "Date et heure"
- Sélecteur de date (calendrier inline ou date picker)
- Créneaux horaires disponibles sous forme de boutons
- Basé sur les horaires d'ouverture de `clientConfig.hours`

---

### 3. Informations Client

- Titre de section : "Vos informations"
- Champs du formulaire :
  - Prénom (obligatoire)
  - Nom (obligatoire)
  - Email (obligatoire)
  - Téléphone (obligatoire)

---

### 4. Note pour le Praticien

- Titre de section : "Note (optionnel)"
- Textarea avec placeholder : "Un message à nous transmettre ?"
- Limite de caractères : 500

---

## Détails Techniques

### Structure de la Modale

```tsx
// BookingModal.tsx - Structure
<Dialog>
  <DialogContent className="h-[90vh] max-w-2xl overflow-y-auto p-0">
    <div className="sticky top-0 z-10 bg-background border-b p-4">
      <DialogTitle>Réserver une séance</DialogTitle>
    </div>
    
    <div className="p-4 space-y-6">
      {/* 1. Prestations */}
      <BookingServicePicker />
      
      {/* 2. Date et heure */}
      <BookingDatePicker />
      
      {/* 3. Informations client */}
      <BookingClientForm />
      
      {/* 4. Note */}
      <BookingNotes />
    </div>
    
    {/* Footer fixe avec récap et CTA */}
    <div className="sticky bottom-0 border-t bg-background p-4">
      <div>Total: XX€</div>
      <Button>Confirmer la réservation</Button>
    </div>
  </DialogContent>
</Dialog>
```

### State Management

```tsx
interface BookingState {
  selectedServices: ServiceItem[];
  selectedDate: Date | null;
  selectedTime: string | null;
  clientInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  notes: string;
}
```

### Déclenchement de la Modale

- Bouton "Prendre rendez-vous" dans le Header (lien href="#booking")
- Bouton sticky mobile "Réserver"
- Possibilité d'ouvrir avec une prestation pré-sélectionnée

---

## Fichiers à Créer/Modifier

| Fichier | Action |
|---------|--------|
| `src/components/booking/BookingModal.tsx` | Créer |
| `src/components/booking/BookingServicePicker.tsx` | Créer |
| `src/components/booking/ServiceSearchDialog.tsx` | Créer |
| `src/components/booking/SelectedServiceCard.tsx` | Créer |
| `src/components/booking/BookingDatePicker.tsx` | Créer |
| `src/components/booking/BookingClientForm.tsx` | Créer |
| `src/components/booking/BookingNotes.tsx` | Créer |
| `src/components/booking/index.ts` | Créer |
| `src/pages/Index.tsx` | Modifier (ajouter BookingModal) |
| `src/config/client-config.ts` | Modifier (ajouter section booking labels) |

---

## Configuration à Ajouter

```ts
// Dans clientConfig
bookingModal: {
  title: "Réserver une séance",
  addServiceButton: "Ajouter une prestation",
  searchPlaceholder: "Rechercher une prestation...",
  dateTitle: "Date et heure",
  clientInfoTitle: "Vos informations",
  notesTitle: "Note (optionnel)",
  notesPlaceholder: "Un message à nous transmettre ?",
  confirmButton: "Confirmer la réservation",
  totalLabel: "Total",
  maxServices: 6,
  fields: {
    firstName: "Prénom",
    lastName: "Nom",
    email: "Email",
    phone: "Téléphone"
  }
}
```

---

## Responsive Design

- **Desktop** : Modale centrée, max-width 600-700px
- **Tablette** : Modale légèrement plus large, même layout
- **Mobile** : Modale plein écran (100% width), scroll vertical fluide

---

## Validation

- Minimum 1 prestation sélectionnée
- Date et heure obligatoires
- Tous les champs client obligatoires
- Validation email format
- Validation téléphone format français

