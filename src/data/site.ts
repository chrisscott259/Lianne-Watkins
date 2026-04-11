export type NavLink = {
  href: string;
  label: string;
};

export type NavGroup = {
  href: string;
  label: string;
  items: NavLink[];
};

export const primaryNavLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/emdr-therapy", label: "EMDR" },
  { href: "/fees-insurance", label: "Fees" },
  { href: "/faq", label: "FAQ" }
];

export const specialtiesGroup: NavGroup = {
  href: "/specialties",
  label: "Specialties",
  items: [
    { href: "/trauma-ptsd", label: "Trauma & PTSD" },
    { href: "/anxiety-depression", label: "Anxiety & Depression" },
    { href: "/narcissistic-abuse-recovery", label: "Narcissistic Abuse Recovery" },
    { href: "/relationship-issues-divorce", label: "Relationship Issues & Divorce" },
    { href: "/domestic-violence-abuse", label: "Domestic Violence & Abuse" },
    { href: "/bpd-personality-disorders", label: "BPD & Personality Disorders" },
    { href: "/parenting-support", label: "Parenting Support" },
    { href: "/adhd", label: "ADHD" },
    { href: "/self-esteem", label: "Self-Esteem" },
    { href: "/grief-life-transitions", label: "Grief & Life Transitions" },
    { href: "/sleep-insomnia", label: "Sleep & Insomnia" },
    { href: "/mood-disorders", label: "Mood Disorders" },
    { href: "/family-conflict", label: "Family Conflict" },
    { href: "/stress-coping-skills", label: "Stress & Coping Skills" },
    { href: "/specialties", label: "All Specialties →" }
  ]
};

export const locationsGroup: NavGroup = {
  href: "/online-therapy-california",
  label: "Locations",
  items: [
    { href: "/online-therapy-california", label: "All of California" },
    { href: "/online-therapist-los-angeles", label: "Los Angeles" },
    { href: "/online-therapist-san-diego", label: "San Diego" },
    { href: "/online-therapist-san-francisco", label: "San Francisco" },
    { href: "/online-therapist-sacramento", label: "Sacramento" },
    { href: "/online-therapist-san-jose", label: "San Jose" },
    { href: "/online-therapist-orange-county", label: "Orange County" },
    { href: "/online-therapist-oakland", label: "Oakland" },
    { href: "/online-therapist-long-beach", label: "Long Beach" },
    { href: "/online-therapist-riverside", label: "Riverside" },
    { href: "/online-therapist-fresno", label: "Fresno" },
    { href: "/online-therapist-santa-barbara", label: "Santa Barbara" },
    { href: "/online-therapist-ventura", label: "Ventura" }
  ]
};

export const mobileNavLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/emdr-therapy", label: "EMDR" },
  { href: "/specialties", label: "Specialties" },
  { href: "/online-therapy-california", label: "Locations" },
  { href: "/fees-insurance", label: "Fees" },
  { href: "/faq", label: "FAQ" }
];

export const footerQuickLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Lianne" },
  { href: "/emdr-therapy", label: "EMDR Therapy" },
  { href: "/fees-insurance", label: "Fees & Insurance" },
  { href: "/faq", label: "FAQ" },
  { href: "/book", label: "Book Free Call" }
];

export const footerSpecialties: NavLink[] = [
  { href: "/trauma-ptsd", label: "Trauma & PTSD" },
  { href: "/anxiety-depression", label: "Anxiety & Depression" },
  { href: "/bpd-personality-disorders", label: "BPD & Personality Disorders" },
  { href: "/relationship-issues-divorce", label: "Relationship Issues" },
  { href: "/parenting-support", label: "Parenting Support" },
  { href: "/privacy-practices", label: "HIPAA Privacy Notice" },
  { href: "/privacy-policy", label: "Privacy Policy" }
];
