# Content Strategy

This project uses a content-driven page system.

Instead of hardcoding each page as a one-off Astro template, we describe the page in data, then render that data through a small section library. The goal is to keep copy, page structure, and visual rendering separate enough that we can change one without rebuilding the others.

## Core idea

Every marketing page follows the same top-to-bottom pipeline:

1. A route selects a page object from `src/data`.
2. That page object is passed into `src/components/MarketingPage.astro`.
3. `MarketingPage.astro` renders the page shell:
   - SEO title/description
   - optional progress bar
   - hero
   - ordered body sections
4. The hero is rendered by `HeroSection.astro`.
5. Each body section is rendered by `SectionRenderer.astro`, which switches on `section.type` and sends the content to the correct section component.

This means the page is effectively:

`route -> page data -> MarketingPage -> HeroSection + SectionRenderer -> section components`

## Render pipeline diagram

```text
src/pages/*.astro or src/pages/[slug].astro
        |
        v
select page object from src/data/*
        |
        v
MarketingPage.astro
        |
        +--> BaseLayout.astro
        |      |
        |      +--> Navbar.astro
        |      +--> shared meta tags
        |      +--> shared reveal/progress behavior
        |      +--> Footer.astro
        |
        +--> HeroSection.astro
        |
        +--> page.sections[]
                |
                v
          SectionRenderer.astro
                |
                +--> RichTextSection.astro
                +--> TopicCardsSection.astro
                +--> SplitChecklistSection.astro
                +--> LinkGridSection.astro
                +--> FeatureGridSection.astro
                +--> ProcessStepsSection.astro
                +--> DarkInfoBandSection.astro
                +--> QuestionListSection.astro
                +--> TextWithFactsSection.astro
                +--> EmbedPlaceholderSection.astro
                +--> ClosingCtaSection.astro
```

The key point is that the route does not directly render section markup.
It only selects content. The rendering layer stays shared.

## Why the system is split this way

### 1. `src/data/site.ts`

This file is not page content. It is global navigation content.

It exists separately because nav/footer links are a site-wide concern, not a page-family concern. If menu order changes, or a footer link changes, we should not have to touch page content files.

It drives:

- desktop nav
- mobile nav
- nav dropdown groups
- footer quick links
- footer specialty links

Reasoning:

- avoids duplicating navigation labels in many places
- keeps routing labels consistent
- makes global nav changes low-risk

### 2. `src/data/content-types.ts`

This file defines the schema for content.

It is the contract between:

- the content files in `src/data`
- the rendering layer in `src/components/sections`

It defines:

- what a page must contain
- what a hero can contain
- what kinds of sections exist
- what fields each section type supports

Reasoning:

- prevents ad hoc content shapes
- forces consistency across page families
- makes section reuse safe because each component knows exactly what it can expect
- makes future refactors easier because the content model is explicit

### 3. `src/components/MarketingPage.astro`

This is the page compositor.

Its job is intentionally narrow:

- receive one `PageContent` object
- apply the shared layout
- render the hero
- render the ordered section list

It does not know whether the page is About, a specialty page, or a location page. It only knows how to render a valid page object.

Reasoning:

- keeps page rendering generic
- avoids repeating hero/section loops in every route
- makes page-family routes very small

### 4. `src/components/sections/SectionRenderer.astro`

This is the dispatch layer.

It maps `section.type` to the corresponding section component:

- `richText` -> `RichTextSection`
- `cardGrid` -> `TopicCardsSection`
- `splitAside` -> `SplitChecklistSection`
- `linkGrid` -> `LinkGridSection`
- `featureGrid` -> `FeatureGridSection`
- `processSteps` -> `ProcessStepsSection`
- `darkBand` -> `DarkInfoBandSection`
- `questionList` -> `QuestionListSection`
- `textWithFacts` -> `TextWithFactsSection`
- `embedPlaceholder` -> `EmbedPlaceholderSection`
- `ctaBand` -> `ClosingCtaSection`

Reasoning:

- centralizes section selection in one place
- keeps route files clean
- makes it obvious how a new section type would be added later

## How content is organized in `src/data`

The data folder is split by content responsibility, not by route count.

### `src/data/home.ts`

Contains the homepage only.

Reasoning:

- the homepage is visually and structurally special
- it uses the `home` hero variant
- keeping it isolated avoids cluttering shared data with one-off home concerns

### `src/data/singleton-pages.ts`

Contains unique, direct-route pages:

- about
- emdr
- fees
- faq
- book
- contact
- blog
- specialties index
- locations index

These pages do not need dynamic route generation, but they still benefit from the same section system.

Reasoning:

- these pages are unique enough to deserve direct ownership
- they still share sections, so they should stay in data rather than bespoke Astro markup
- this is the middle ground between “everything dynamic” and “everything hardcoded”

### `src/data/specialty-pages.ts`

Contains the specialty page family.

Each specialty entry has:

- `slug`
- SEO fields
- hero content
- ordered section list

These are rendered by the shared dynamic route in `src/pages/[slug].astro`.

Reasoning:

- specialty pages are highly repetitive structurally
- the real difference between them is copy, not layout logic
- a shared family reduces maintenance cost and visual drift

### `src/data/location-pages.ts`

Contains the location page family.

It follows the same model as specialties, but uses a small builder helper because the location pages are even more repetitive.

Reasoning:

- most location pages share the same architecture
- the builder keeps the repeated shape consistent
- city-specific differences stay in copy rather than branching template logic

## How the routes map to content

### Direct routes

These route files are intentionally tiny:

- `src/pages/index.astro`
- `src/pages/about.astro`
- `src/pages/emdr-therapy.astro`
- `src/pages/fees-insurance.astro`
- `src/pages/faq.astro`
- `src/pages/book.astro`
- `src/pages/contact.astro`
- `src/pages/blog.astro`
- `src/pages/specialties.astro`
- `src/pages/online-therapy-california.astro`

Each one imports a page object and passes it to `MarketingPage`.

Reasoning:

- direct routes remain explicit and easy to scan
- route files stay almost logic-free
- content changes happen in the data layer, not in page templates

### Dynamic family route

`src/pages/[slug].astro` handles:

- all specialty detail pages
- all location detail pages

It uses `getStaticPaths()` to combine `specialtyPages` and `locationPages` into one generated route set.

Reasoning:

- both families already use root-level slugs
- one shared dynamic route prevents dozens of near-empty page files
- the route stays simple because the page objects already contain everything needed

## Why the section library looks the way it does

The section library is built around content patterns that repeat across the site.

### `HeroSection`

Supports:

- `home` hero
- `interior` hero

Reasoning:

- the homepage hero is a visual poster with image composition
- interior pages need a much calmer editorial hero
- keeping both in one component preserves shared hero semantics while acknowledging they are different visual jobs

### `RichTextSection`

Used for long-form editorial content.

Reasoning:

- many pages are mostly heading + lead + paragraphs + occasional quote
- this pattern should not be rebuilt repeatedly as custom markup

### `TopicCardsSection`

Used for card grids with 1, 2, or 3 columns.

Reasoning:

- homepage topic cards, fees details, and some specialty breakdowns are the same visual pattern
- card content varies, but the structure is stable

### `SplitChecklistSection`

Used for text on one side and structured support content on the other.

Reasoning:

- About, EMDR, and other pages needed “prose + facts/checklist”
- this is more reusable than maintaining separate `ProfileSection` and `PricingSection`-style one-offs

### `ProcessStepsSection`

Used for ordered step narratives.

Reasoning:

- steps are distinct from normal cards because the numbering matters
- Book and future onboarding/process sections benefit from a dedicated primitive

### `LinkGridSection`

Used for grouped navigation/browse grids.

Reasoning:

- specialties and locations index pages are fundamentally browse pages
- the grid needs to support grouped content, not just a flat list

### `FeatureGridSection`

Used for paired proof points or differentiators.

Reasoning:

- the pattern is common, but more editorial than card-based
- keeping it separate avoids forcing proof content into cards

### `DarkInfoBandSection`

Used for emphasis sections on dark backgrounds.

Reasoning:

- some content should feel like a tonal break or emphasis block
- handling dark sections separately avoids bloating the standard prose/card components

### `QuestionListSection`

Used for FAQ-style question/answer lists.

Reasoning:

- Q&A content is structurally distinct from general cards
- keeping a dedicated section avoids mixing FAQs into generic card grids

### `TextWithFactsSection`

Used for “main copy + supporting fact list”.

Reasoning:

- some pages need a lighter split than a full checklist card
- Contact and some location pages fit this pattern well

### `EmbedPlaceholderSection`

Used to reserve future product/booking space without hardcoding a vendor.

Reasoning:

- the Book page clearly has a future embed need
- we want the layout decided now without coupling the site to a booking implementation yet

### `ClosingCtaSection`

Used for conversion-focused footer bands.

Reasoning:

- nearly every page ends in the same job: reduce hesitation and convert to a call
- this should be consistent site-wide

## Page family strategy

### Homepage

The homepage is the broadest “overview” page.

Its job is:

1. establish trust and tone
2. explain the core offer
3. preview specialties and differentiators
4. move people toward booking

Reasoning:

- the homepage needs a wider range of section types than inner pages
- it acts as the system’s broadest composition example

### Core editorial pages

These include:

- About
- EMDR
- Fees
- FAQ
- Book
- Contact
- Blog

Their structure is mostly editorial:

- interior hero
- prose or Q&A sections
- optional split/facts/cards
- final CTA

Reasoning:

- these pages are content-led rather than browse-led
- they need custom sequencing, but not custom rendering infrastructure

### Specialty detail pages

These are intentionally normalized.

Typical structure:

1. interior hero
2. 1–3 content sections
3. final CTA

Reasoning:

- users land on these pages from search or internal browse flows
- consistency matters more than novelty
- copy should do the differentiation, not layout complexity

### Location detail pages

These are even more normalized than specialties.

Typical structure:

1. interior hero
2. local value/support section
3. access/logistics section
4. final CTA

Reasoning:

- the location pages are SEO/support pages, not fully unique editorial experiences
- they need consistency and low maintenance
- a builder function is justified because the structure repeats heavily

### Listing pages

These are:

- specialties index
- locations index

Their job is browse and route users deeper.

Reasoning:

- they should feel navigational, not essay-like
- link grids are the dominant content form

## Why we chose data-driven rendering instead of page-by-page Astro templates

### Decision: put most copy in data, not markup

Reasoning:

- content changes become safer
- structure stays consistent across families
- routes become very small and easy to reason about
- reusable sections are actually reusable because they do not depend on page-specific hardcoded content

### Decision: keep singleton pages explicit

Reasoning:

- not everything should be dynamic just because it can be
- singleton pages are easier to find and reason about as named routes
- they still benefit from the shared section system

### Decision: use one dynamic route for specialties and locations

Reasoning:

- both families already fit root-level slug routing
- the route logic is trivial when the content model is strong
- avoids maintaining many thin route wrappers

### Decision: utility pages use a different layout

Reasoning:

- `401` and `404` are not marketing pages
- they should not drag in the full hero/section stack
- a minimal utility layout keeps them visually aligned without overengineering them

## Practical editing guide

If you want to update content:

- nav/footer labels: edit `src/data/site.ts`
- page schema or add a new section type: edit `src/data/content-types.ts`
- homepage copy/order: edit `src/data/home.ts`
- one-off page copy/order: edit `src/data/singleton-pages.ts`
- specialty page copy/order: edit `src/data/specialty-pages.ts`
- location page copy/order: edit `src/data/location-pages.ts`

If you want to change rendering:

- full page wrapper behavior: edit `src/components/MarketingPage.astro`
- section dispatch rules: edit `src/components/sections/SectionRenderer.astro`
- visual implementation of a section type: edit the corresponding file in `src/components/sections`

## Short version

The system is designed so that:

- data decides what the page says
- types decide what the data is allowed to look like
- `MarketingPage` decides how a page is assembled
- `SectionRenderer` decides which section component renders each block
- section components decide how each content pattern looks

That separation is the main strategy.
