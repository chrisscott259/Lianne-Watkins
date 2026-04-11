export type ButtonVariant = "primary" | "secondary" | "cream";

export type CtaLink = {
  href: string;
  label: string;
  variant?: ButtonVariant;
};

export type LinkItem = {
  href: string;
  label: string;
};

export type Tone = "cream" | "mint" | "linen";
export type DarkTone = "forest" | "navy";

export type HeroImage = {
  src: string;
  alt: string;
  srcset?: string;
  sizes?: string;
};

export type HeroContent = {
  variant: "home" | "interior";
  eyebrow?: string;
  title: string;
  lead: string;
  ctas?: CtaLink[];
  image?: HeroImage;
  align?: "left" | "center";
  showScrollIndicator?: boolean;
};

export type CardItem = {
  eyebrow?: string;
  title: string;
  body: string;
};

export type FeatureItem = {
  title: string;
  body: string;
};

export type QuestionItem = {
  question: string;
  answer: string;
};

export type SplitAside = {
  mode: "checklist" | "facts";
  eyebrow?: string;
  title?: string;
  items: string[];
  cta?: CtaLink;
};

export type RichTextSectionDefinition = {
  type: "richText";
  background?: Tone;
  eyebrow?: string;
  title: string;
  lead?: string;
  paragraphs: string[];
  quote?: string;
  cta?: CtaLink;
};

export type CardGridSectionDefinition = {
  type: "cardGrid";
  background?: Tone;
  eyebrow?: string;
  title?: string;
  lead?: string;
  columns?: 1 | 2 | 3;
  cards: CardItem[];
  cta?: CtaLink;
};

export type SplitAsideSectionDefinition = {
  type: "splitAside";
  background?: Tone;
  eyebrow?: string;
  title: string;
  lead?: string;
  paragraphs: string[];
  quote?: string;
  cta?: CtaLink;
  aside: SplitAside;
};

export type LinkGridSectionDefinition = {
  type: "linkGrid";
  background?: Tone;
  eyebrow?: string;
  title?: string;
  lead?: string;
  columns?: 1 | 2 | 3;
  groups: {
    links: LinkItem[];
  }[];
  cta?: CtaLink;
};

export type FeatureGridSectionDefinition = {
  type: "featureGrid";
  background?: Tone;
  eyebrow?: string;
  title: string;
  lead?: string;
  items: FeatureItem[];
};

export type ProcessStepsSectionDefinition = {
  type: "processSteps";
  background?: Tone;
  eyebrow?: string;
  title: string;
  lead?: string;
  steps: Array<{
    number?: string;
    eyebrow?: string;
    title: string;
    body: string;
  }>;
  cta?: CtaLink;
};

export type DarkInfoBandSectionDefinition = {
  type: "darkBand";
  tone?: DarkTone;
  eyebrow?: string;
  title: string;
  lead?: string;
  paragraphs?: string[];
  cta?: CtaLink;
};

export type QuestionListSectionDefinition = {
  type: "questionList";
  background?: Tone;
  eyebrow?: string;
  title?: string;
  lead?: string;
  columns?: 1 | 2;
  items: QuestionItem[];
};

export type TextWithFactsSectionDefinition = {
  type: "textWithFacts";
  background?: Tone;
  eyebrow?: string;
  title: string;
  lead?: string;
  paragraphs: string[];
  factsEyebrow?: string;
  facts: string[];
  factsTone?: "soft" | "plain";
};

export type EmbedPlaceholderSectionDefinition = {
  type: "embedPlaceholder";
  background?: Tone;
  eyebrow?: string;
  title: string;
  lead?: string;
  placeholderTitle?: string;
  placeholderBody?: string;
};

export type CtaBandSectionDefinition = {
  type: "ctaBand";
  variant?: "forest" | "cream-on-dark";
  eyebrow?: string;
  title: string;
  lead: string;
  cta: CtaLink;
};

export type SectionDefinition =
  | RichTextSectionDefinition
  | CardGridSectionDefinition
  | SplitAsideSectionDefinition
  | LinkGridSectionDefinition
  | FeatureGridSectionDefinition
  | ProcessStepsSectionDefinition
  | DarkInfoBandSectionDefinition
  | QuestionListSectionDefinition
  | TextWithFactsSectionDefinition
  | EmbedPlaceholderSectionDefinition
  | CtaBandSectionDefinition;

export type PageContent = {
  title: string;
  description: string;
  hero: HeroContent;
  sections: SectionDefinition[];
  showProgressBar?: boolean;
};

export type SingletonPageContent = PageContent;
export type SpecialtyPage = PageContent & {
  slug: string;
};
export type LocationPage = PageContent & {
  slug: string;
};
