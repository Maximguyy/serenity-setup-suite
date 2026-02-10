// ===========================================
// FICHE CLIENT - INSTITUT DE BEAUTE
// Modifier uniquement ce fichier pour adapter
// le site a un autre institut
// ===========================================

export const clientConfig = {
  // ─────────────────────────────────────────
  // IDENTITE
  // ─────────────────────────────────────────
  institutName: "Skins & Lights",
  tagline: "Beauty Expert",
  logo: "/assets/logo.png",
  favicon: "/assets/favicon.ico",

  // ─────────────────────────────────────────
  // COORDONNEES
  // ─────────────────────────────────────────
  contact: {
    phone: "06 44 77 27 53",
    email: "contact@skins-and-lights.fr",
    address: {
      street: "47 Bd des Bouvets",
      postalCode: "92000",
      city: "Nanterre",
      country: "France",
      full: "47 Bd des Bouvets, 92000 Nanterre"
    }
  },

  // ─────────────────────────────────────────
  // RESEAUX SOCIAUX
  // ─────────────────────────────────────────
  social: {
    instagram: "https://www.instagram.com/skinstudio.paris.ladefense/",
    facebook: "https://facebook.com/institut-exemple",
    google: "https://www.google.com/maps/place/SKIN+STUDIO+PARIS+La+D%C3%A9fense/@48.896037,2.2244434,17z/data=!3m1!4b1!4m6!3m5!1s0x47e6650d5e96959b:0x5df8c1669be20fb3!8m2!3d48.896037!4d2.2270237!16s%2Fg%2F11yy0ynj56"
  },

  // ─────────────────────────────────────────
  // HORAIRES D'OUVERTURE
  // ─────────────────────────────────────────
  hours: {
    monday: "09:00 - 22:00",
    tuesday: "09:00 - 22:00",
    wednesday: "09:00 - 22:00",
    thursday: "09:00 - 22:00",
    friday: "09:00 - 22:00",
    saturday: "09:00 - 22:00",
    sunday: "09:00 - 22:00"
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
    title: "Révélez l'éclat de votre peau",
    subtitle: "Soins HYDRASKIN et Luminothérapie pour sublimer votre beauté naturelle",
    backgroundImage: {
      desktop: "/assets/hero-desktop.jpg",
      mobile: "/assets/hero-mobile.jpg"
    },
    backgroundImageAlt: "Institut de beauté élégant avec ambiance zen",
    // USPs affichés en bas du hero
    usps: [
      { value: "+500", label: "Clientes satisfaites" },
      { value: "+5", label: "Ans d'expérience" }
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
        text: "Un soin HYDRASKIN incroyable ! Ma peau est visiblement plus lumineuse et hydratée. L'équipe est aux petits soins, je reviendrai sans hésiter.",
        date: "il y a 2 semaines"
      },
      {
        author: "Sophie L.",
        rating: 5,
        text: "La luminothérapie a transformé ma peau. Après seulement quelques séances, les résultats sont bluffants. Je recommande vivement !",
        date: "il y a 1 mois"
      },
      {
        author: "Julie M.",
        rating: 5,
        text: "Ambiance zen et professionnalisme au top. Mon institut préféré à Nanterre ! Les filles sont adorables et très compétentes.",
        date: "il y a 1 mois"
      },
      {
        author: "Camille B.",
        rating: 4,
        text: "Très bon soin hydratant, ma peau n'a jamais été aussi douce. Seul petit bémol : un peu d'attente à l'accueil.",
        date: "il y a 2 mois"
      },
      {
        author: "Léa P.",
        rating: 5,
        text: "Super expérience pour ma première visite ! Le soin HYDRASKIN est rapide et efficace. Merci pour votre douceur.",
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
    sectionTitle: "Nos Soins",
    sectionSubtitle: "Des soins experts pour révéler la beauté de votre peau",
    defaultDescription: "Offrez-vous un moment de détente et de bien-être avec ce soin réalisé par nos expertes. Une expérience unique adaptée à vos besoins.",
    promoTag: {
      enabled: false,
      text: "",
      textDesktopOnly: ""
    },
    categories: [
      {
        name: "Nos Soins",
        displayTitle: "Nos Soins",
        slug: "soins",
        icon: "sparkles",
        heroImage: "/assets/categories/visage-hero.jpg",
        items: [
          { name: "HYDRASKIN EXPERT", duration: "60 min", price: "120€", originalPrice: undefined as string | undefined, image: "/assets/services/hydraskin.png", description: "Soin visage technologique combinant hydratation intense, nettoyage profond des pores et éclat de la peau." },
          { name: "NANONEEDLING", duration: "60 min", price: "100€", originalPrice: undefined as string | undefined, image: "/assets/services/nanoneedling.png", description: "Soin visage ciblé visant à améliorer la texture et l'aspect de la peau après nettoyage profond." },
          { name: "DUO SIGNATURE", duration: "90 min", price: "190€", originalPrice: undefined as string | undefined, image: "/assets/services/duo-signature.png", description: "Protocole complet associe hydratation, désincrustation des pores, soin visage technologique." },
          { name: "SOIN EXPRESS", duration: "25 min", price: "40€", originalPrice: undefined as string | undefined, image: "/assets/services/soin-express.png", description: "Soin visage rapide pour nettoyage profond, peau plus nette et plus fraîche." }
        ]
      }
    ],
    luminotherapy: {
      title: "Offerte à chaque séance",
      name: "Luminothérapie",
      duration: "30 min",
      image: "/assets/services/masque-led.jpg",
      description: "Renforcez les effets de chaque soin grâce à notre masque LED NOOANCE Elite X600. La luminothérapie stimule le collagène, apaise les rougeurs et booste l'éclat naturel de votre peau."
    }
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
    embedUrl: "https://maps.google.com/maps?q=47+Boulevard+des+Bouvets+92000+Nanterre&t=&z=16&ie=UTF8&iwloc=&output=embed",
    latitude: 48.8920,
    longitude: 2.2070
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
    discountPercentage: 20,
    discountBadgeText: "-{percentage}% sur toutes les cartes cadeaux",
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
    sectionTitle: "Skin Studio Paris La Défense Arena",
    sectionSubtitle: "L'expertise au service de votre peau",
    sections: [
      {
        title: "Un espace dédié aux soins visage experts",
        text: "Skin Studio Paris La Défense est un espace dédié aux soins visage experts, où technologie avancée et précision esthétique se rencontrent pour révéler l'éclat naturel de chaque peau. Nous croyons qu'une peau saine et lumineuse ne relève ni du hasard ni des tendances, mais d'une analyse personnalisée, d'un protocole adapté et d'un savoir-faire maîtrisé.",
        image: "/assets/about/skin-studio-marble.jpg",
        cta: "Prendre rendez-vous"
      },
      {
        title: "Des protocoles sur-mesure, une expertise de pointe",
        text: "Chaque soin est conçu comme un véritable protocole sur-mesure, combinant technologies esthétiques avancées, cosmétique coréenne haute performance, gestes techniques précis et une approche respectueuse de la barrière cutanée.",
        image: "/assets/about/technologies.jpg",
        cta: "Découvrir nos soins"
      },
      {
        title: "Votre peau, sublimée en profondeur",
        text: "Notre objectif n'est pas seulement d'améliorer l'apparence de la peau, mais de travailler sa qualité en profondeur : équilibre, texture, hydratation, fermeté et éclat. Chaque protocole est pensé pour des résultats visibles et durables.",
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
      { label: "À propos", href: "/a-propos" }
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
    copyright: "© 2025 Skins & Lights. Tous droits réservés.",
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
    viewAllLink: "Tout afficher →",
    daysLabels: {
      monday: "Lundi",
      tuesday: "Mardi",
      wednesday: "Mercredi",
      thursday: "Jeudi",
      friday: "Vendredi",
      saturday: "Samedi",
      sunday: "Dimanche"
    }
  },

  // ─────────────────────────────────────────
  // SEO & META
  // ─────────────────────────────────────────
  seo: {
    title: "Skins & Lights | HYDRASKIN & Luminothérapie à Nanterre",
    description: "Découvrez Skins & Lights à Nanterre. Soins HYDRASKIN et luminothérapie pour révéler l'éclat de votre peau. Ouvert 7j/7.",
    keywords: "hydraskin, luminothérapie, soins peau, institut beauté, Nanterre",
    ogImage: "/assets/og-image.jpg",
    twitterHandle: "@skins_and_lights"
  }
};

// Export des types pour TypeScript
export type ClientConfig = typeof clientConfig;
