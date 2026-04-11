import type { LocationPage } from "./content-types";

type LocationBuilderInput = {
  slug: string;
  title: string;
  description: string;
  heroTitle: string;
  heroLead: string;
  benefitTitle: string;
  benefitLead: string;
  benefitParagraphs?: string[];
  accessTitle: string;
  accessLead: string;
  accessParagraphs?: string[];
  ctaTitle: string;
  ctaLead: string;
};

function createLocationPage(input: LocationBuilderInput): LocationPage {
  return {
    slug: input.slug,
    title: input.title,
    description: input.description,
    hero: {
      variant: "interior",
      title: input.heroTitle,
      lead: input.heroLead,
      align: "center",
      ctas: [{ href: "/book", label: "Book Your Free 15-Min Call" }]
    },
    sections: [
      {
        type: "richText",
        background: "mint",
        title: input.benefitTitle,
        lead: input.benefitLead,
        paragraphs: input.benefitParagraphs ?? []
      },
      {
        type: "textWithFacts",
        background: "cream",
        title: input.accessTitle,
        lead: input.accessLead,
        paragraphs: input.accessParagraphs ?? [
          "Sessions take place via secure, HIPAA-compliant video. All you need is a private space and a device with a camera.",
          "Many clients find telehealth easier than in-person care — no parking, no waiting room, and no commute layered on top of an already full life."
        ],
        factsEyebrow: "QUICK FACTS",
        facts: [
          "Online telehealth anywhere in California",
          "EMDR-trained, trauma-informed care",
          "7 insurance plans accepted",
          "Sliding scale available",
          "Free 15-minute consultation call"
        ],
        factsTone: "soft"
      },
      {
        type: "ctaBand",
        eyebrow: "ACCEPTING NEW CLIENTS",
        title: input.ctaTitle,
        lead: input.ctaLead,
        cta: { href: "/book", label: "Book Your Free 15-Min Call" }
      }
    ]
  };
}

export const locationPages = [
  createLocationPage({
    slug: "online-therapist-los-angeles",
    title: "Online Therapist Los Angeles | EMDR Therapy LA | Lianne Watkins, AMFT, APCC",
    description: "Online therapy for adults in Los Angeles. EMDR-trained. Insurance accepted.",
    heroTitle: "Online therapy for adults in Los Angeles. EMDR-trained. Insurance accepted.",
    heroLead:
      "Lianne Watkins provides telehealth therapy to adults across greater Los Angeles — from the Valley to Long Beach, Pasadena to Santa Monica. No commute on the 405. The same quality of EMDR-trained, trauma-informed care via secure video.",
    benefitTitle: "Most EMDR therapists in LA charge $200–$300 out of pocket. Here's what's different.",
    benefitLead:
      "Lianne accepts 7 insurance plans and offers a sliding scale. High-quality trauma therapy that doesn't require a second mortgage.",
    benefitParagraphs: [
      "Telehealth also means no commute — in a city where a 5-mile drive can take 45 minutes, attending from home is not a minor convenience."
    ],
    accessTitle: "California-licensed. Serving all of LA via secure video.",
    accessLead:
      "Whether you're in the Valley, on the Westside, in Pasadena, or anywhere in greater LA, you can work with Lianne from wherever you are.",
    ctaTitle: "Accepting new clients in Los Angeles and across California.",
    ctaLead: "7 insurance plans accepted. Sliding scale available. EMDR-trained. Free 15-minute consultation."
  }),
  createLocationPage({
    slug: "online-therapist-san-diego",
    title: "Online Therapist San Diego | EMDR Therapy San Diego | Lianne Watkins, AMFT",
    description: "Online therapy for adults in San Diego. EMDR-trained. Insurance accepted.",
    heroTitle: "Online therapy for adults in San Diego. EMDR-trained. Insurance accepted.",
    heroLead:
      "Lianne Watkins serves adults across San Diego via telehealth — North County, East County, Downtown, Chula Vista, and everywhere in between. EMDR-trained, 7 insurance plans accepted, sliding scale available.",
    benefitTitle: "The care is statewide. The convenience is local.",
    benefitLead:
      "San Diego clients can access trauma-informed support without adding traffic, parking, or an office commute to the emotional cost of getting help.",
    accessTitle: "Secure telehealth from anywhere in San Diego County.",
    accessLead:
      "As long as you're physically in California during sessions, you can meet from home, your office, or any private space that works for you.",
    ctaTitle: "Ready to start in San Diego?",
    ctaLead: "The first step is the same from every neighborhood: a free 15-minute consultation."
  }),
  createLocationPage({
    slug: "online-therapist-san-francisco",
    title: "Online Therapist San Francisco | EMDR Therapy San Francisco | Lianne Watkins, AMFT",
    description: "Telehealth therapy for adults in San Francisco and nearby neighborhoods.",
    heroTitle: "Telehealth therapy for adults in San Francisco.",
    heroLead:
      "Lianne Watkins provides secure-video therapy throughout San Francisco and the Bay Area. EMDR-trained, trauma-informed, and available anywhere in California that a stable connection and a private room exist.",
    benefitTitle: "No BART commute required.",
    benefitLead:
      "For many San Francisco clients, online therapy is the difference between meaning to start and actually starting.",
    accessTitle: "Trauma-informed care from anywhere in the city.",
    accessLead:
      "Whether you're in the Richmond, Mission, Noe Valley, SOMA, or nearby, telehealth keeps the process simple and private.",
    ctaTitle: "Accepting new clients in San Francisco.",
    ctaLead: "Start with a free consultation and decide from there."
  }),
  createLocationPage({
    slug: "online-therapist-sacramento",
    title: "Online Therapist Sacramento | EMDR Therapy Sacramento | Lianne Watkins, AMFT",
    description: "Telehealth therapy for adults in Sacramento and the greater Capital region.",
    heroTitle: "Telehealth therapy for adults in Sacramento. No office visit required.",
    heroLead:
      "Lianne Watkins provides EMDR-trained, trauma-informed therapy to adults in Sacramento and the greater Capital region via secure telehealth video. She isn't physically located in Sacramento — she's licensed to practice throughout California.",
    benefitTitle: "Statewide licensure means local access.",
    benefitLead:
      "You can access high-quality therapy from wherever you are in Sacramento without needing an office nearby.",
    accessTitle: "Serving Sacramento and the Capital region by video.",
    accessLead:
      "The format is simple: private space, camera, secure link, and the same clinical care you would expect in person.",
    ctaTitle: "Ready to start in Sacramento?",
    ctaLead: "Book a free 15-minute call and see whether the fit feels right."
  }),
  createLocationPage({
    slug: "online-therapist-san-jose",
    title: "Online Therapist San Jose | EMDR Therapy San Jose | Lianne Watkins, AMFT",
    description: "Telehealth therapy for adults in San Jose and Silicon Valley.",
    heroTitle: "Telehealth therapy for adults in San Jose and Silicon Valley.",
    heroLead:
      "Lianne Watkins is a California-licensed, EMDR-trained therapist who sees clients across the state via secure telehealth video. If you're in San Jose, Sunnyvale, Santa Clara, or anywhere in the Silicon Valley area, you can work with her without leaving home.",
    benefitTitle: "Good care does not need one more calendar scramble.",
    benefitLead:
      "Telehealth removes the drive, the parking, and the scheduling overhead that often stop overloaded people from actually getting help.",
    accessTitle: "Serving San Jose and nearby South Bay cities.",
    accessLead:
      "Whether you're in downtown San Jose or somewhere else in the South Bay, the process remains private, secure, and easy to attend.",
    ctaTitle: "Accepting new clients in San Jose.",
    ctaLead: "The consultation is free, short, and pressure-free."
  }),
  createLocationPage({
    slug: "online-therapist-orange-county",
    title: "Online Therapist Orange County | EMDR Therapy OC | Lianne Watkins, AMFT",
    description: "Telehealth therapy for adults across Orange County, CA.",
    heroTitle: "Telehealth therapy for adults across Orange County, CA.",
    heroLead:
      "Lianne Watkins is a California-licensed EMDR therapist who works with adults throughout OC via secure video — Irvine, Anaheim, Santa Ana, Huntington Beach, Newport Beach, and beyond. No office visit needed.",
    benefitTitle: "Accessible care across Orange County.",
    benefitLead:
      "Telehealth keeps therapy possible in a region where logistics alone can become a barrier to consistency.",
    accessTitle: "From Irvine to Huntington Beach, sessions stay simple.",
    accessLead:
      "You attend from wherever you are in California. No office, no waiting room, no extra travel planning on top of your week.",
    ctaTitle: "Ready to start in Orange County?",
    ctaLead: "Free consultation. Insurance accepted. Sliding scale available."
  }),
  createLocationPage({
    slug: "online-therapist-oakland",
    title: "Online Therapist Oakland | EMDR Therapy Oakland | Lianne Watkins, AMFT",
    description: "Telehealth therapy for adults in Oakland and the East Bay.",
    heroTitle: "Telehealth therapy for adults in Oakland and the East Bay.",
    heroLead:
      "Lianne Watkins is a California-licensed, EMDR-trained therapist seeing clients across the state via secure telehealth. If you're in Oakland, Berkeley, Alameda, or anywhere in the East Bay, you can access her trauma-informed practice via video.",
    benefitTitle: "The support is statewide. The experience still feels local.",
    benefitLead:
      "East Bay clients get the same warm, direct, trauma-informed care without needing to commute or coordinate an office visit.",
    accessTitle: "Serving Oakland, Berkeley, Alameda, and surrounding areas.",
    accessLead:
      "Telehealth keeps the process steady and private from home, office, or another quiet space that works for you.",
    ctaTitle: "Accepting new clients in Oakland and the East Bay.",
    ctaLead: "The free call is the easiest way to find out whether the fit feels right."
  }),
  createLocationPage({
    slug: "online-therapist-long-beach",
    title: "Online Therapist Long Beach | EMDR Therapy Long Beach | Lianne Watkins, AMFT",
    description: "Telehealth therapy for adults in Long Beach and greater LA County.",
    heroTitle: "Telehealth therapy for adults in Long Beach and greater LA County.",
    heroLead:
      "Lianne Watkins is a California-licensed EMDR therapist who sees clients throughout the state via secure video. Long Beach residents can access trauma-informed, insurance-accepted therapy without fighting traffic or finding parking.",
    benefitTitle: "One less layer of friction between you and help.",
    benefitLead:
      "When life already feels heavy, the ability to attend from home is not a small perk — it's often what makes consistent therapy possible.",
    accessTitle: "Serving Long Beach and nearby LA County communities.",
    accessLead:
      "You can access the same clinical care from anywhere in California you're physically located during sessions.",
    ctaTitle: "Ready to begin in Long Beach?",
    ctaLead: "Start with a free, no-pressure 15-minute consultation."
  }),
  createLocationPage({
    slug: "online-therapist-riverside",
    title: "Online Therapist Riverside | EMDR Therapy Inland Empire | Lianne Watkins, AMFT",
    description: "Telehealth therapy for adults in Riverside and the Inland Empire.",
    heroTitle: "Telehealth therapy for adults in Riverside and the Inland Empire.",
    heroLead:
      "Lianne Watkins is a California-licensed EMDR therapist who sees clients across the state via secure video. If you're in Riverside, San Bernardino, Corona, or anywhere in the Inland Empire, you can access trauma-informed, insurance-accepted therapy without the drive.",
    benefitTitle: "Support that does not require another freeway commitment.",
    benefitLead:
      "Telehealth lowers the friction for clients in the Inland Empire, where commutes are long and schedules are already crowded.",
    accessTitle: "Serving Riverside, San Bernardino, and nearby communities.",
    accessLead:
      "The practical setup stays simple while the clinical work remains deep, direct, and trauma-informed.",
    ctaTitle: "Accepting new clients in Riverside.",
    ctaLead: "Free consultation. Insurance accepted. Secure telehealth across California."
  }),
  createLocationPage({
    slug: "online-therapist-fresno",
    title: "Online Therapist Fresno | EMDR Therapy Fresno | Lianne Watkins, AMFT",
    description: "Telehealth therapy for adults in Fresno and the Central Valley.",
    heroTitle: "Telehealth therapy for adults in Fresno and the Central Valley.",
    heroLead:
      "Lianne Watkins sees clients throughout California via secure video, including adults in Fresno and surrounding Central Valley communities. EMDR-trained, trauma-informed care can happen from wherever you are.",
    benefitTitle: "Access quality care without needing a specialty office nearby.",
    benefitLead:
      "Telehealth expands options for Fresno clients looking for trauma-informed, EMDR-based therapy and a therapist who accepts insurance.",
    accessTitle: "Serving Fresno by secure video.",
    accessLead:
      "All you need is privacy, a device with a camera, and a connection stable enough for a conversation.",
    ctaTitle: "Ready to start in Fresno?",
    ctaLead: "Book a free 15-minute call and decide from there."
  }),
  createLocationPage({
    slug: "online-therapist-santa-barbara",
    title: "Online Therapist Santa Barbara | EMDR Therapy Santa Barbara | Lianne Watkins",
    description: "Telehealth therapy for adults in Santa Barbara County.",
    heroTitle: "Telehealth therapy for adults in Santa Barbara County.",
    heroLead:
      "Lianne Watkins is a California-licensed EMDR therapist who sees clients throughout the state via secure video. Adults in Santa Barbara, Goleta, Carpinteria, and surrounding areas can access trauma-informed, insurance-accepted therapy without leaving home.",
    benefitTitle: "Therapy that meets you where you already are.",
    benefitLead:
      "No office visit, no commute, and no extra logistics layered onto the emotional work of getting started.",
    accessTitle: "Serving Santa Barbara, Goleta, Carpinteria, and nearby areas.",
    accessLead:
      "Sessions happen online — all you need is a private space and a device with a camera.",
    ctaTitle: "Accepting new clients in Santa Barbara County.",
    ctaLead: "The next step is a free, short, no-pressure consultation."
  }),
  createLocationPage({
    slug: "online-therapist-ventura",
    title: "Online Therapist Ventura County | EMDR Therapy Ventura | Lianne Watkins, AMFT",
    description: "Telehealth therapy for adults in Ventura County, CA.",
    heroTitle: "Telehealth therapy for adults in Ventura County, CA.",
    heroLead:
      "Lianne Watkins is a California-licensed EMDR therapist serving adults across the state via secure video. If you're in Ventura, Oxnard, Thousand Oaks, Simi Valley, or anywhere in Ventura County, you can access quality, trauma-informed therapy from home.",
    benefitTitle: "Real support without an office visit.",
    benefitLead:
      "Telehealth removes the commute and keeps the process more doable, especially when overwhelm is already high.",
    accessTitle: "Serving Ventura County by secure video.",
    accessLead:
      "The format is straightforward while the therapy stays thoughtful, deep, and focused on real change.",
    ctaTitle: "Ready to begin in Ventura County?",
    ctaLead: "Book the free consultation and take the smallest useful first step."
  })
] satisfies LocationPage[];

export function getLocationPage(slug: string) {
  return locationPages.find((page) => page.slug === slug);
}
