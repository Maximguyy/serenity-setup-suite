// ===========================================
// CONFIGURATION DES ASSETS / IMAGES
// Centralise tous les chemins d'images pour
// faciliter le changement lors du clonage
// ===========================================

export const assetsConfig = {
  // ─────────────────────────────────────────
  // BRANDING
  // ─────────────────────────────────────────
  logo: "/assets/logo.png",
  favicon: "/assets/favicon.ico",
  ogImage: "/assets/og-image.jpg",

  // ─────────────────────────────────────────
  // HERO
  // ─────────────────────────────────────────
  hero: {
    desktop: "/assets/hero-desktop.jpg",
    mobile: "/assets/hero-mobile.jpg",
  },

  // ─────────────────────────────────────────
  // GOOGLE REVIEWS
  // ─────────────────────────────────────────
  googleLogo: "/assets/google-reviews-logo.png",

  // ─────────────────────────────────────────
  // CATÉGORIES
  // ─────────────────────────────────────────
  categories: {
    visage: "/assets/categories/visage-hero.jpg",
    corps: "/assets/categories/corps-hero.jpg",
    epilations: "/assets/categories/epilations-hero.jpg",
  },

  // ─────────────────────────────────────────
  // SERVICES
  // ─────────────────────────────────────────
  services: {
    "soin-eclat": "/assets/services/soin-eclat.jpg",
    "anti-age": "/assets/services/anti-age.jpg",
    "hydratation": "/assets/services/hydratation.jpg",
    "nettoyage": "/assets/services/nettoyage.jpg",
    "gommage": "/assets/services/gommage.jpg",
    "enveloppement": "/assets/services/enveloppement.jpg",
    "massage": "/assets/services/massage.jpg",
    "drainage": "/assets/services/drainage.jpg",
    "epilation-jambes": "/assets/services/epilation-jambes.jpg",
    "epilation-laser": "/assets/services/epilation-laser.jpg",
    "maillot": "/assets/services/maillot.jpg",
    "aisselles": "/assets/services/aisselles.webp",
  },

  // ─────────────────────────────────────────
  // ÉQUIPE
  // ─────────────────────────────────────────
  team: {
    marie: "/assets/team/marie.png",
    sophie: "/assets/team/sophie.png",
    julie: "/assets/team/julie.png",
    emma: "/assets/team/emma.png",
  },

  // ─────────────────────────────────────────
  // PAGE À PROPOS
  // ─────────────────────────────────────────
  about: {
    interior: "/assets/about/institut-interior.jpg",
    expertise: "/assets/about/expertise.jpg",
    experience: "/assets/about/experience.jpg",
  },

  // ─────────────────────────────────────────
  // PLACEHOLDERS
  // ─────────────────────────────────────────
  placeholders: {
    service: "/placeholder.svg",
    team: "/placeholder.svg",
    category: "/placeholder.svg",
  },
};

export type AssetsConfig = typeof assetsConfig;
