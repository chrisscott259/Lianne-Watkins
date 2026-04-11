import type { PageContent } from "./content-types";
import { specialtiesGroup } from "./site";

const specialtyBrowseLinks = specialtiesGroup.items.filter((item) => item.href !== "/specialties");

export const homePage = {
  title: "Lianne Watkins | EMDR Therapist | Online Therapy California",
  description:
    "Whatever you're carrying, there's a way through it. Trauma-informed, EMDR-based therapy for adults across California.",
  showProgressBar: true,
  hero: {
    variant: "home",
    eyebrow: "EMDR Therapy · California",
    title: "Whatever you're carrying, there's a way through it.",
    lead:
      "The anxiety that won't quiet. The old wounds still running the show. The patterns you keep repeating even when you know better. Lianne Watkins is an EMDR-trained therapist who helps adults across California move through what they've been carrying and not just manage it.",
    showScrollIndicator: true,
    ctas: [
      { href: "/book", label: "Book Your Free 15-Min Call" },
      { href: "/emdr-therapy", label: "Learn About EMDR", variant: "secondary" }
    ],
    image: {
      src: "/images/lianne-watkins-headshot.jpeg",
      srcset:
        "/images/medium-p-500.jpeg 500w, /images/medium-p-800.jpeg 800w, /images/lianne-watkins-headshot.jpeg 1000w",
      sizes: "(max-width: 640px) 280px, (max-width: 1024px) 380px, 500px",
      alt: "Lianne Watkins, EMDR therapist California"
    }
  },
  sections: [
    {
      type: "cardGrid",
      background: "mint",
      eyebrow: "Who Lianne Helps",
      title: "This is what it feels like to finally be understood.",
      columns: 3,
      cards: [
        {
          title: "Trauma & PTSD",
          body:
            "Something happened. Maybe a long time ago. Maybe you've never fully named it as trauma and you just know something feels stuck. EMDR helps you process it without having to relive it over and over."
        },
        {
          title: "Anxiety & Depression",
          body:
            "The 3am thoughts. The chest tightness before nothing in particular. The numbness that makes ordinary things feel impossible. This is treatable. Not just manageable, treatable."
        },
        {
          title: "Relationship Pain",
          body:
            "Patterns that keep repeating. Relationships that keep ending the same way. A dynamic with someone who leaves you questioning your own reality. You're not the problem, but you can be part of the solution."
        },
        {
          title: "Parenting Struggles",
          body:
            "You love your children and you're still struggling. Often the hardest part of parenting is the history we bring into it. Lianne is a mother who understands this from the inside."
        },
        {
          title: "Grief & Life Transitions",
          body:
            "Loss takes many forms. A person. A relationship. A version of yourself. A life you thought you'd have. Grief deserves more than time and it deserves a real place to land."
        },
        {
          title: "ADHD & Self-Esteem",
          body:
            "High-functioning on the outside. Running on empty on the inside. Whether it's ADHD, chronic self-doubt, or the quiet shame that lives under everything, there is practical, real help here."
        }
      ]
    },
    {
      type: "splitAside",
      background: "cream",
      eyebrow: "Why EMDR",
      title: "Your brain knows how to heal. EMDR helps it remember.",
      lead:
        "Most therapy works at the level of thoughts and words. EMDR works at the level of the nervous system and where trauma, anxiety, and painful memories actually live. That's why it moves things that years of other approaches sometimes can't.",
      paragraphs: [
        "You don't have to relive everything to heal from it. EMDR processes what's stored in your body and your nervous system gently, systematically, and at a pace that feels safe.",
        "For many people, the shift is unlike anything they've experienced in therapy before."
      ],
      cta: { href: "/emdr-therapy", label: "Learn How EMDR Works" },
      aside: {
        mode: "checklist",
        eyebrow: "Meet Lianne",
        items: [
          "You've tried talk therapy and something still feels stuck",
          "You have memories or experiences you've never fully processed",
          "Anxiety or emotional reactions feel disproportionate and hard to control",
          "You want to heal without having to narrate every detail",
          "You're ready to actually move and not just manage"
        ]
      }
    },
    {
      type: "processSteps",
      background: "mint",
      eyebrow: "How It Works",
      title: "Three steps. Zero pressure. Just a conversation.",
      steps: [
        {
          number: "01",
          eyebrow: "Areas of Focus",
          title: "Reach Out",
          body:
            "Click the button. Fill in your name and a line or two about what's going on. You don't need to explain it perfectly, just start."
        },
        {
          number: "02",
          eyebrow: "How It Works",
          title: "Free 15-Min Call",
          body:
            "A brief, no-pressure conversation to see if we're a good fit. No commitment, no intake paperwork, no obligation. Just a real conversation."
        },
        {
          number: "03",
          eyebrow: "What Clients Say",
          title: "Begin",
          body:
            "Your first session is a real conversation. You set the pace. By the end, you'll have a clear sense of what the work looks like and what's possible."
        }
      ],
      cta: { href: "/book", label: "Book Free Call — No Commitment" }
    },
    {
      type: "linkGrid",
      background: "cream",
      eyebrow: "Areas of Focus",
      title: "Find the right page for exactly what you're going through.",
      lead:
        "Lianne works with adults across California on a wide range of conditions. Each specialty has its own dedicated page because you deserve more than a bulleted list.",
      columns: 3,
      groups: [{ links: specialtyBrowseLinks }]
    },
    {
      type: "featureGrid",
      background: "mint",
      eyebrow: "Why Lianne",
      title: "Trained to go deeper. Wired to move you forward.",
      items: [
        {
          title: "EMDR Specialization",
          body:
            "EMDR is the most searched therapy modality right now and Lianne doesn't just offer it, she explains it clearly, uses it personally, and sees real results with it every week."
        },
        {
          title: "Warm AND Direct",
          body:
            "Most therapists signal one. Lianne signals both. She makes you feel completely safe and then, from that place of safety, she tells you something true that shifts everything."
        },
        {
          title: "Insurance Accepted",
          body:
            "Most EMDR specialists are cash-pay only at $200+. Lianne accepts 7 insurance plans and offers a sliding scale. High-quality trauma therapy that is actually accessible."
        },
        {
          title: "She's Been There",
          body:
            "Therapy changed Lianne's own life. She knows from the inside what it costs to finally ask for help, what it feels like when someone truly sees you, and what becomes possible."
        },
        {
          title: "Clients Don't Want to Leave",
          body:
            "Not because they're dependent, because things are actually different now. In a field where people cycle through therapists for years, this is the most honest proof of what works."
        },
        {
          title: "Online, California-Wide",
          body:
            "No commute. No waiting room. No logistical barriers for someone who is already overwhelmed. Secure video sessions from wherever you are in California."
        }
      ]
    },
    {
      type: "splitAside",
      background: "cream",
      eyebrow: "About Lianne",
      title: "A therapist who knows what it's like to finally be seen.",
      paragraphs: [
        "Lianne Watkins is a trauma-informed, EMDR-trained therapist serving adults across California. She has been on the other side of the couch. She knows from the inside what it costs to finally ask for help, what it feels like when someone truly sees you, and what becomes possible when the right approach meets the right person.",
        "She is a mother who understands from the inside, not from textbooks, what it means to carry your own history into your relationships with the people you love most. She is an intellectual who never stops learning, constantly bringing the best of what is known to every client."
      ],
      aside: {
        mode: "facts",
        eyebrow: "EMDR Trained · California",
        items: [
          "MA, Marriage & Family Therapy",
          "Registered Associate MFT (AMFT #143409)",
          "Registered Associate PCC",
          "EMDR Trained",
          "Gottman Method Training",
          "Trauma-Informed Practice",
          "Supervised by Lovie Bucknell, LMFT #104497"
        ],
        cta: { href: "/about", label: "Read Lianne's Full Story" }
      }
    },
    {
      type: "cardGrid",
      background: "mint",
      eyebrow: "Fees & Insurance",
      title: "No surprises. Just honest, accessible care.",
      lead:
        "$135 per session. Sliding scale available. Lianne accepts 7 insurance plans including Aetna, Cigna, and more. No hedging. No fine print. Just honest numbers so you can make a real decision.",
      columns: 3,
      cards: [
        {
          title: "Session Fee",
          body:
            "$135 per 50-minute session. Sliding scale available for those who need it and ask during your free consultation."
        },
        {
          title: "Insurance Accepted",
          body:
            "Lianne accepts several major insurance plans. Full list and how to verify your benefits is on the Fees page."
        },
        {
          title: "Free Consultation",
          body:
            "15 minutes. No cost. No commitment. Just a real conversation to see if this is the right fit for you."
        }
      ],
      cta: { href: "/fees-insurance", label: "See Full Fees & Insurance" }
    },
    {
      type: "ctaBand",
      eyebrow: "California Online Therapy",
      title: "The hardest part is reaching out. We made that part easy.",
      lead:
        "You've been putting this off. That's okay. The first step is the hardest, and it's also the smallest: click the button, leave your name, and I'll get back to you within 24 hours. No intake forms. No pressure. Just a real conversation to see if this feels right.",
      cta: { href: "/book", label: "Book Your Free 15-Min Call" }
    }
  ]
} satisfies PageContent;
