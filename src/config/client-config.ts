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
      country: "France",
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
    giftCardText: "Découvrir nos offres"
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
    },
    // USPs affichés en bas du hero
    usps: [
      { value: "+1200", label: "Femmes satisfaites" },
      { value: "+10", label: "Ans d'expérience" }
    ]
  },

  // ─────────────────────────────────────────
  // BANDEAU ANNONCE (optionnel)
  // ─────────────────────────────────────────
  announcement: {
    enabled: true,
    icon: "heart",
    textMobile: "Saint-Valentin :\n-20% sur nos soins",
    text: "Saint-Valentin : -20% sur nos soins",
    textDesktopOnly: " • Offrez du bien-être",
    ctaText: "J'en profite",
    ctaLink: "/offrir"
  },

  // ─────────────────────────────────────────
  // AVIS GOOGLE
  // ─────────────────────────────────────────
  reviews: {
    sectionTitle: "Ce que nos clientes disent",
    sectionSubtitle: "Découvrez les témoignages de nos clientes satisfaites",
    googlePlaceId: "ChIJ...",
    averageRating: 4.9,
    totalReviews: 127,
    googleLogo: "/assets/google-reviews-logo.png",
    ctaText: "Voir tous les avis sur Google",
    mobileBadgeCtaText: "Laissez-nous un avis sur Google",
    featured: [
      {
        author: "Marie D.",
        rating: 5,
        text: "Un moment de pure détente ! L'équipe est aux petits soins et l'ambiance est vraiment relaxante. Je reviendrai sans hésiter.",
        date: "il y a 2 semaines"
      },
      {
        author: "Sophie L.",
        rating: 5,
        text: "Excellent institut, je recommande vivement les soins du visage. Ma peau n'a jamais été aussi belle !",
        date: "il y a 1 mois"
      },
      {
        author: "Julie M.",
        rating: 5,
        text: "Ambiance zen et professionnalisme. Mon institut préféré ! Les filles sont adorables et très compétentes.",
        date: "il y a 1 mois"
      },
      {
        author: "Camille B.",
        rating: 4,
        text: "Très bon massage relaxant, je me suis endormie tellement c'était agréable. Seul petit bémol : un peu d'attente à l'accueil.",
        date: "il y a 2 mois"
      },
      {
        author: "Léa P.",
        rating: 5,
        text: "Super expérience pour ma première visite ! L'épilation est rapide et quasi indolore. Merci à Emma pour sa douceur.",
        date: "il y a 2 mois"
      },
      {
        author: "Nathalie R.",
        rating: 5,
        text: "Je suis cliente depuis 3 ans et je ne changerais pour rien au monde. Qualité des soins au top !",
        date: "il y a 3 mois"
      }
    ]
  },

  // ─────────────────────────────────────────
  // PRESTATIONS
  // ─────────────────────────────────────────
  services: {
    sectionTitle: "Découvrez Nos Soins",
    sectionSubtitle: "Une sélection de rituels beauté pour révéler votre éclat naturel",
    defaultDescription: "Offrez-vous un moment de détente et de bien-être avec ce soin réalisé par nos expertes. Une expérience unique adaptée à vos besoins.",
    categories: [
      {
        name: "Soins Visage",
        displayTitle: "Soins Du Visage",
        slug: "visage",
        icon: "sparkles",
        heroImage: "/assets/categories/visage-hero.jpg",
        items: [
          { name: "Soin Éclat", duration: "60 min", price: "75€", originalPrice: "90€", image: "/assets/services/soin-eclat.jpg" },
          { name: "Anti-Âge Premium", duration: "90 min", price: "120€", originalPrice: "145€", image: "/assets/services/anti-age.jpg" },
          { name: "Hydratation Intense", duration: "45 min", price: "55€", originalPrice: "65€", image: "/assets/services/hydratation.jpg" },
          { name: "Nettoyage Profond", duration: "60 min", price: "65€", originalPrice: "80€", image: "/assets/services/nettoyage.jpg" }
        ]
      },
      {
        name: "Soins Corps",
        displayTitle: "Soins Du Corps",
        slug: "corps",
        icon: "heart",
        heroImage: "/assets/categories/corps-hero.jpg",
        items: [
          { name: "Gommage Corps", duration: "45 min", price: "60€", originalPrice: "70€", image: "/assets/services/gommage.jpg" },
          { name: "Enveloppement", duration: "60 min", price: "80€", originalPrice: "95€", image: "/assets/services/enveloppement.jpg" },
          { name: "Massage Relaxant", duration: "60 min", price: "70€", originalPrice: "85€", image: "/assets/services/massage.jpg" },
          { name: "Massage Drainant", duration: "75 min", price: "85€", originalPrice: "100€", image: "/assets/services/drainage.jpg" }
        ]
      },
      {
        name: "Épilations",
        displayTitle: "Nos Épilations",
        slug: "epilations",
        icon: "leaf",
        heroImage: "/assets/categories/epilations-hero.jpg",
        items: [
          { name: "Jambes complètes", duration: "30 min", price: "35€", originalPrice: "40€", image: "/assets/services/epilation-jambes.jpg" },
          { name: "Épilation laser", duration: "45 min", price: "90€", originalPrice: "110€", image: "/assets/services/epilation-laser.jpg" },
          { name: "Maillot intégral", duration: "20 min", price: "30€", originalPrice: "35€", image: "/assets/services/maillot.jpg" },
          { name: "Aisselles", duration: "10 min", price: "12€", originalPrice: "15€", image: "/assets/services/aisselles.webp" }
        ]
      },
    ]
  },

  // ─────────────────────────────────────────
  // EQUIPE
  // ─────────────────────────────────────────
  team: {
    sectionTitle: "Notre Équipe",
    sectionSubtitle: "Des professionnelles passionnées et diplômées à votre écoute",
    yearsLabel: "Professionnelle depuis {years} ans",
    members: [
      {
        name: "Marie",
        role: "Fondatrice & Esthéticienne",
        photo: "/assets/team/marie.png",
        specialty: "Soins visage",
        years: 8
      },
      {
        name: "Sophie",
        role: "Esthéticienne",
        photo: "/assets/team/sophie.png",
        specialty: "Massages",
        years: 5
      },
      {
        name: "Julie",
        role: "Prothésiste ongulaire",
        photo: "/assets/team/julie.png",
        specialty: "Nail art",
        years: 3
      },
      {
        name: "Emma",
        role: "Esthéticienne",
        photo: "/assets/team/emma.png",
        specialty: "Épilations",
        years: 4
      }
    ]
  },

  // ─────────────────────────────────────────
  // PHILOSOPHIE
  // ─────────────────────────────────────────
  philosophy: {
    sectionTitle: "Notre Philosophie",
    values: [
      {
        icon: "leaf",
        title: "Naturel",
        description: "Des produits sélectionnés avec soin pour respecter votre peau"
      },
      {
        icon: "sparkles",
        title: "Excellence",
        description: "Un savoir-faire reconnu et des techniques innovantes"
      },
      {
        icon: "heart",
        title: "Bien-être",
        description: "Votre détente et votre satisfaction sont notre priorité"
      }
    ]
  },

  // ─────────────────────────────────────────
  // CONTACT / MAP
  // ─────────────────────────────────────────
  map: {
    embedUrl: "https://www.google.com/maps/embed?pb=...",
    latitude: 48.8566,
    longitude: 2.3522
  },

  contactSection: {
    title: "Où nous retrouver ?",
    hoursTitle: "Horaires d'ouverture"
  },

  // ─────────────────────────────────────────
  // PAGE CARTE CADEAU
  // ─────────────────────────────────────────
  giftCard: {
    heroTitle: "Offrez un moment de bien-être",
    heroSubtitle: "Faites plaisir à vos proches avec une carte cadeau utilisable sur tous nos soins",
    heroTag: "Carte Cadeau",
    valentineTitle: "Meilleur cadeau de Saint-Valentin",
    features: [
      {
        icon: "gift",
        title: "Cadeau parfait",
        description: "Un moment de détente à offrir"
      },
      {
        icon: "heart",
        title: "Saint-Valentin",
        description: "Le meilleur cadeau pour votre moitié"
      },
      {
        icon: "sparkles",
        title: "Expérience unique",
        description: "Un souvenir inoubliable"
      }
    ],
    formTitle: "Créez votre carte cadeau",
    formSubtitle: "Choisissez le montant et recevez votre carte par email",
    emailLabel: "Email du destinataire",
    emailPlaceholder: "email@exemple.com",
    amountLabel: "Choisissez un montant",
    customAmountLabel: "Ou entrez un montant personnalisé",
    amounts: [25, 50, 75, 100, 150, 200],
    ctaButton: "Procéder au paiement",
    securityNote: "Paiement sécurisé • Carte envoyée instantanément par email"
  },

  // ─────────────────────────────────────────
  // PAGE A PROPOS
  // ─────────────────────────────────────────
  about: {
    sectionTitle: "Qui sommes-nous ?",
    sectionSubtitle: "Apprenez à nous connaître avant de nous rencontrer",
    sections: [
      {
        title: "Votre institut au cœur de Paris",
        text: "Niché au 123 Rue de la Beauté dans le 1er arrondissement, notre institut vous accueille dans un espace lumineux et apaisant. Notre équipe de 4 esthéticiennes diplômées vous reçoit du mardi au samedi pour des moments de détente sur-mesure.",
        image: "/assets/about/institut-interior.jpg",
        cta: "Prendre rendez-vous"
      },
      {
        title: "Plus de 10 ans d'expertise beauté",
        text: "Depuis 2014, nous avons accompagné plus de 1200 clientes dans leurs rituels beauté. Formées aux techniques les plus récentes, nous utilisons exclusivement des produits professionnels français et bio pour des résultats visibles dès la première séance.",
        image: "/assets/about/expertise.jpg",
        cta: "Voir nos soins"
      },
      {
        title: "Une note de 4.9★ sur Google",
        text: "Nos clientes nous font confiance et ça se voit. Avec 127 avis vérifiés et une note moyenne de 4.9 étoiles, nous mettons un point d'honneur à offrir un service irréprochable. Venez découvrir pourquoi elles reviennent.",
        image: "/assets/about/experience.jpg",
        cta: "Prendre rendez-vous"
      }
    ]
  },

  // ─────────────────────────────────────────
  // MENU NAVIGATION
  // ─────────────────────────────────────────
  navigation: {
    links: [
      { label: "Accueil", href: "#accueil" },
      { label: "Prestations", href: "#prestations" },
      { label: "Contact", href: "#contact" },
      { label: "À propos", href: "/a-propos" },
      { label: "Offrir", href: "/offrir" }
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
    columns: {
      location: "Nous trouver",
      contact: "Nous contacter",
      legal: "Informations légales",
      social: "Nos réseaux"
    },
    copyright: "© 2025 Institut de Beauté Exemple. Tous droits réservés.",
    legalLinks: [
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Politique de confidentialité", href: "/confidentialite" },
      { label: "CGV", href: "/cgv" }
    ]
  },

  // ─────────────────────────────────────────
  // LABELS UI (boutons, textes génériques)
  // ─────────────────────────────────────────
  ui: {
    callButton: "Nous appeler",
    bookButton: "Réserver cette séance",
    backToServices: "Retour aux prestations",
    categoryNotFound: "Catégorie non trouvée",
    viewAllLink: "Tout afficher →"
  },

  // ─────────────────────────────────────────
  // SEO & META
  // ─────────────────────────────────────────
  seo: {
    title: "Institut de Beauté Exemple | Soins Visage & Corps à Paris",
    description: "Découvrez notre institut de beauté à Paris. Soins du visage, massages, épilations et manucures dans une ambiance zen et relaxante.",
    keywords: "institut beauté, soins visage, massage, épilation, manucure, Paris",
    ogImage: "/assets/og-image.jpg",
    twitterHandle: "@institut_exemple"
  }
};

// Export des types pour TypeScript
export type ClientConfig = typeof clientConfig;
