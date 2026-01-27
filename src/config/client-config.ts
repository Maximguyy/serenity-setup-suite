// ===========================================
// FICHE CLIENT - INSTITUT DE BEAUTE
// Modifier uniquement ce fichier pour adapter
// le site a un autre institut
// ===========================================

export const clientConfig = {
  // ─────────────────────────────────────────
  // IDENTITE
  // ─────────────────────────────────────────
  institutName: "Institut Beauté Exemple",
  tagline: "Votre moment de bien-être",
  logo: "/assets/logo.png",
  favicon: "/assets/favicon.ico",

  // ─────────────────────────────────────────
  // COORDONNEES
  // ─────────────────────────────────────────
  contact: {
    phone: "01 23 45 67 89",
    email: "contact@institut-exemple.fr",
    address: {
      street: "123 Rue de la Beauté",
      postalCode: "75001",
      city: "Paris",
      full: "123 Rue de la Beauté, 75001 Paris"
    }
  },

  // ─────────────────────────────────────────
  // RESEAUX SOCIAUX
  // ─────────────────────────────────────────
  social: {
    instagram: "https://instagram.com/institut-exemple",
    facebook: "https://facebook.com/institut-exemple",
    google: "https://g.page/institut-exemple"
  },

  // ─────────────────────────────────────────
  // HORAIRES D'OUVERTURE
  // ─────────────────────────────────────────
  hours: {
    monday: "Fermé",
    tuesday: "9h00 - 19h00",
    wednesday: "9h00 - 19h00",
    thursday: "9h00 - 19h00",
    friday: "9h00 - 19h00",
    saturday: "9h00 - 18h00",
    sunday: "Fermé"
  },

  // ─────────────────────────────────────────
  // LIENS DE RESERVATION
  // ─────────────────────────────────────────
  booking: {
    url: "https://exemple-reservation.com",
    buttonText: "Réserver une séance",
    giftCardUrl: "https://exemple-carte-cadeau.com",
    giftCardText: "Offrir un soin"
  },

  // ─────────────────────────────────────────
  // CONTENU HERO
  // ─────────────────────────────────────────
  hero: {
    title: "Prenez soin de vous, vous le méritez",
    subtitle: "Un moment de détente et de beauté rien que pour vous",
    backgroundImage: {
      desktop: "/assets/hero-desktop.jpg",
      mobile: "/assets/hero-mobile.jpg"
    }
  },

  // ─────────────────────────────────────────
  // BANDEAU ANNONCE (optionnel)
  // ─────────────────────────────────────────
  announcement: {
    enabled: true,
    emoji: "✨",
    text: "Saint-Valentin : -20% sur tous nos soins en duo jusqu'au 14 février",
    link: null as string | null
  },

  // ─────────────────────────────────────────
  // AVIS GOOGLE
  // ─────────────────────────────────────────
  reviews: {
    googlePlaceId: "ChIJ...",
    averageRating: 4.9,
    totalReviews: 127,
    featured: [
      {
        author: "Marie D.",
        rating: 5,
        text: "Un moment de pure détente ! L'équipe est aux petits soins.",
        date: "il y a 2 semaines"
      },
      {
        author: "Sophie L.",
        rating: 5,
        text: "Excellent institut, je recommande vivement les soins du visage.",
        date: "il y a 1 mois"
      },
      {
        author: "Julie M.",
        rating: 5,
        text: "Ambiance zen et professionnalisme. Mon institut préféré !",
        date: "il y a 1 mois"
      }
    ]
  },

  // ─────────────────────────────────────────
  // PRESTATIONS
  // ─────────────────────────────────────────
  services: {
    sectionTitle: "Découvrez Nos Soins",
    sectionSubtitle: "Une sélection de rituels beauté pour révéler votre éclat naturel",
    categories: [
      {
        name: "Soins Visage",
        icon: "sparkles",
        items: [
          { name: "Soin Éclat", duration: "60 min", price: "75€", image: "/assets/services/soin-eclat.jpg" },
          { name: "Anti-Âge Premium", duration: "90 min", price: "120€", image: "/assets/services/anti-age.jpg" },
          { name: "Hydratation Intense", duration: "45 min", price: "55€", image: "/assets/services/hydratation.jpg" },
          { name: "Nettoyage Profond", duration: "60 min", price: "65€", image: "/assets/services/nettoyage.jpg" }
        ]
      },
      {
        name: "Soins Corps",
        icon: "heart",
        items: [
          { name: "Gommage Corps", duration: "45 min", price: "60€", image: "/assets/services/gommage.jpg" },
          { name: "Enveloppement", duration: "60 min", price: "80€", image: "/assets/services/enveloppement.jpg" },
          { name: "Massage Relaxant", duration: "60 min", price: "70€", image: "/assets/services/massage.jpg" },
          { name: "Massage Drainant", duration: "75 min", price: "85€", image: "/assets/services/drainage.jpg" }
        ]
      },
      {
        name: "Épilations",
        icon: "leaf",
        items: [
          { name: "Jambes complètes", duration: "30 min", price: "35€", image: "/assets/services/epilation-jambes.jpg" },
          { name: "Maillot intégral", duration: "20 min", price: "30€", image: "/assets/services/maillot.jpg" },
          { name: "Aisselles", duration: "10 min", price: "12€", image: "/assets/services/aisselles.jpg" },
          { name: "Demi-jambes", duration: "20 min", price: "25€", image: "/assets/services/demi-jambes.jpg" }
        ]
      },
      {
        name: "Beauté des Mains & Pieds",
        icon: "gem",
        items: [
          { name: "Manucure complète", duration: "45 min", price: "35€", image: "/assets/services/manucure.jpg" },
          { name: "Pédicure complète", duration: "60 min", price: "45€", image: "/assets/services/pedicure.jpg" },
          { name: "Pose vernis semi-permanent", duration: "30 min", price: "28€", image: "/assets/services/semi-permanent.jpg" },
          { name: "Nail art", duration: "45 min", price: "40€", image: "/assets/services/nail-art.jpg" }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────
  // EQUIPE
  // ─────────────────────────────────────────
  team: {
    sectionTitle: "Notre Équipe",
    sectionSubtitle: "Des professionnelles passionnées et diplômées à votre écoute",
    members: [
      {
        name: "Marie",
        role: "Fondatrice & Esthéticienne",
        photo: "/assets/team/marie.jpg",
        specialty: "Soins visage",
        years: 8
      },
      {
        name: "Sophie",
        role: "Esthéticienne",
        photo: "/assets/team/sophie.jpg",
        specialty: "Massages",
        years: 5
      },
      {
        name: "Julie",
        role: "Prothésiste ongulaire",
        photo: "/assets/team/julie.jpg",
        specialty: "Nail art",
        years: 3
      },
      {
        name: "Emma",
        role: "Esthéticienne",
        photo: "/assets/team/emma.jpg",
        specialty: "Épilations",
        years: 4
      }
    ]
  },

  // ─────────────────────────────────────────
  // GOOGLE MAPS
  // ─────────────────────────────────────────
  map: {
    embedUrl: "https://www.google.com/maps/embed?pb=...",
    latitude: 48.8566,
    longitude: 2.3522
  },

  // ─────────────────────────────────────────
  // MENU NAVIGATION
  // ─────────────────────────────────────────
  navigation: {
    links: [
      { label: "Accueil", href: "#accueil" },
      { label: "Prestations", href: "#prestations" },
      { label: "Contact", href: "#contact" },
      { label: "Adresse", href: "#adresse" }
    ],
    ctaButton: {
      label: "Prendre rendez-vous",
      href: "#booking"
    }
  },

  // ─────────────────────────────────────────
  // FOOTER
  // ─────────────────────────────────────────
  footer: {
    copyright: "© 2025 Institut de Beauté Exemple. Tous droits réservés.",
    legalLinks: [
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Politique de confidentialité", href: "/confidentialite" },
      { label: "CGV", href: "/cgv" }
    ]
  },

  // ─────────────────────────────────────────
  // SEO & META
  // ─────────────────────────────────────────
  seo: {
    title: "Institut de Beauté Exemple | Soins Visage & Corps à Paris",
    description: "Découvrez notre institut de beauté à Paris. Soins du visage, massages, épilations et manucures dans une ambiance zen et relaxante.",
    keywords: "institut beauté, soins visage, massage, épilation, manucure, Paris",
    ogImage: "/assets/og-image.jpg"
  }
};

// Export des types pour TypeScript
export type ClientConfig = typeof clientConfig;
