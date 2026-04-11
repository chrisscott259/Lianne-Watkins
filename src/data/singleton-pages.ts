import type { SingletonPageContent } from "./content-types";
import { locationsGroup, specialtiesGroup } from "./site";

const specialtyLinks = specialtiesGroup.items.filter((item) => item.href !== "/specialties");
const locationLinks = locationsGroup.items.filter((item) => item.href !== "/online-therapy-california");

export const singletonPages = {
  about: {
    title: "About Lianne Watkins | EMDR Therapist | Registered Associate MFT California",
    description:
      "A therapist who knows what it's like to finally be seen. Learn more about Lianne Watkins, her approach, training, and supervision.",
    hero: {
      variant: "interior",
      eyebrow: "ABOUT LIANNE",
      title: "A therapist who knows what it's like to finally be seen.",
      lead:
        "Lianne Watkins is a trauma-informed, EMDR-trained therapist serving adults across California via telehealth. She has been on the other side of the couch. She knows from the inside what it costs to finally ask for help and what becomes possible when the right approach meets the right person.",
      align: "center"
    },
    sections: [
      {
        type: "splitAside",
        background: "cream",
        eyebrow: "HER STORY",
        title: "She doesn't just hold space. She moves you forward.",
        lead:
          "Therapy changed Lianne's own life. That's not a tagline — it's the reason she does this work.",
        paragraphs: [
          "She sought her own therapy during a period of significant personal difficulty, found the right therapist and the right approach, and experienced what becomes possible when those two things align.",
          "That experience sits underneath everything she does. She understands what it costs to finally make the call. She understands the relief when someone in the room actually sees you. And she understands the difference between a therapist who makes you feel heard and one who actually helps you change.",
          "She is also a mother. That matters because parenting is one of the most profound sites where our own unresolved history shows up — in the moments we react bigger than the situation calls for, in the patterns we promised ourselves we wouldn't repeat."
        ],
        aside: {
          mode: "facts",
          eyebrow: "CREDENTIALS",
          items: [
            "MA, Marriage & Family Therapy",
            "Registered Associate MFT (AMFT #143409)",
            "Registered Associate PCC (APCC)",
            "EMDR Trained",
            "Gottman Method Training",
            "Trauma-Informed Practice",
            "Supervised by Lovie Bucknell, LMFT #104497",
            "Employed by Kindred Heart Therapy Group",
            "Telehealth — Serving all of California"
          ]
        }
      },
      {
        type: "richText",
        background: "mint",
        eyebrow: "HER APPROACH",
        title: "Warm enough to be safe. Direct enough to actually help.",
        lead:
          "Most therapists signal one or the other. Lianne signals both — and the combination is what makes the work possible.",
        paragraphs: [
          "She brings genuine warmth to every session. The kind of warmth that makes people feel, often for the first time, that someone in the room actually sees them — not the version they've been presenting to the world, but the real thing underneath.",
          "But she's also direct. She won't let you stay comfortable in the places that are keeping you stuck. She will tell you something true when it's the thing you need to hear, not the thing you're hoping to hear."
        ],
        quote:
          "She is an intellectual who never stops learning. Her clients benefit from a therapist who is always at the frontier of what works."
      },
      {
        type: "richText",
        background: "cream",
        eyebrow: "WHY EMDR",
        title: "She chose EMDR because it's what actually works.",
        lead:
          "Lianne is EMDR-trained because she has seen — in her own life and in her clinical work — what happens when therapy reaches the level where trauma, anxiety, and painful patterns actually live.",
        paragraphs: [
          "Talk therapy is valuable. Understanding yourself matters. But for many people, understanding isn't enough. The pattern keeps running even when you can describe it perfectly.",
          "EMDR reaches the level below words — the body, the nervous system, the part that fires before conscious thought — and helps the brain actually process and release what got stuck.",
          "She also accepts 7 insurance plans and offers a sliding scale. Not because it's easy to do, but because she believes cost should not be the reason someone can't get help."
        ]
      },
      {
        type: "darkBand",
        eyebrow: "SUPERVISION & DISCLOSURE",
        title: "Fully licensed and supervised — and transparent about what that means.",
        lead:
          "Lianne is a Registered Associate MFT and Associate PCC in California, working under the required supervision of Lovie Bucknell, LMFT #104497, through Kindred Heart Therapy Group.",
        paragraphs: [
          "She is actively accumulating the supervised clinical hours required for full licensure — a standard and required pathway in California.",
          "Supervision means her work is reviewed and supported by an experienced licensed clinician. Her supervisor is also bound by confidentiality. Your privacy is fully protected."
        ]
      },
      {
        type: "ctaBand",
        eyebrow: "WORK TOGETHER",
        title: "Ready to work with Lianne?",
        lead:
          "The free 15-minute call is where it starts. No paperwork, no commitment — just a real conversation about where you are and whether working together is the right fit.",
        cta: { href: "/book", label: "Book Your Free 15-Min Call" }
      }
    ]
  },
  emdr: {
    title: "EMDR Therapy California | Online EMDR Therapist | Lianne Watkins, AMFT",
    description:
      "Your brain knows how to heal. EMDR helps it remember. Learn how EMDR works and why Lianne uses it across trauma, anxiety, grief, and relationship patterns.",
    hero: {
      variant: "interior",
      title: "Your brain knows how to heal. EMDR helps it remember.",
      lead:
        "Most therapy works at the level of thoughts and words. EMDR works at the level of the nervous system — where trauma, anxiety, and painful memories actually live. That's why it moves things that years of other approaches sometimes can't.",
      align: "center",
      ctas: [{ href: "/book", label: "Book Your Free 15-Min Call" }]
    },
    sections: [
      {
        type: "richText",
        background: "cream",
        title: "EMDR explained without the jargon.",
        lead:
          "EMDR stands for Eye Movement Desensitization and Reprocessing. The name is a mouthful. The experience is not what you'd expect.",
        paragraphs: [
          "When something traumatic happens — or when something deeply painful gets lodged in us at a young age — the brain sometimes doesn't process it the way it processes ordinary memories.",
          "EMDR helps the brain do what it couldn't do on its own. Using bilateral stimulation — typically eye movements or tapping — while you hold a memory in mind, it helps the brain reprocess what got stuck.",
          "You don't have to relive it in detail. You don't have to narrate every moment. The processing happens largely below the level of words."
        ]
      },
      {
        type: "splitAside",
        background: "mint",
        title: "EMDR tends to work especially well when…",
        paragraphs: [
          "Talk therapy is valuable. Understanding yourself matters. Being witnessed matters. But sometimes understanding isn't enough.",
          "Sometimes you can map the source of a pattern down to the specific moment it started, describe it clearly, talk about it for years, and still feel it running you."
        ],
        aside: {
          mode: "checklist",
          eyebrow: "GOOD FIT FOR EMDR",
          items: [
            "You've tried talk therapy and something still feels stuck",
            "You have memories or experiences you've never fully processed",
            "Your emotional reactions sometimes feel disproportionate and hard to control",
            "Certain situations, people, or topics trigger you in ways you can't quite explain",
            "You understand yourself well intellectually but the understanding hasn't produced change",
            "You want to heal without having to narrate every painful detail",
            "You're ready to actually move — not just manage"
          ]
        }
      },
      {
        type: "richText",
        background: "cream",
        title: "Why some people find EMDR works when other things haven't.",
        lead: "Understanding isn't always the same as release.",
        paragraphs: [
          "Sometimes the pattern isn't primarily stored in the part of your brain that processes words and rational understanding. It's stored lower down — in the body, in the nervous system, in the part of the brain that fires before conscious thought.",
          "That's the level EMDR reaches. People often describe the shift as knowing something in their body for the first time, not just intellectually."
        ],
        quote:
          "I always knew it intellectually. After EMDR, I knew it in my body. And then it stopped having that hold on me."
      },
      {
        type: "darkBand",
        eyebrow: "WHAT EMDR TREATS",
        title: "What Lianne uses EMDR to treat.",
        lead:
          "EMDR was developed for trauma and PTSD. Over time it has proven effective for a much broader range of conditions — including anxiety, depression, grief, relationship patterns, and narcissistic abuse recovery."
      },
      {
        type: "richText",
        background: "cream",
        title: "EMDR is not an alternative therapy. It's evidence-based.",
        lead:
          "EMDR is recognized as an effective treatment for PTSD and trauma by the American Psychological Association, the World Health Organization, the Department of Veterans Affairs, and numerous international trauma treatment bodies.",
        paragraphs: [
          "Over 30 randomized controlled trials have demonstrated its efficacy for trauma. The research base continues to grow for anxiety, depression, and other conditions.",
          "Lianne keeps up with this research because it matters — both for the quality of her clinical work and because her clients deserve to know the evidence basis for every approach she recommends."
        ]
      },
      {
        type: "ctaBand",
        eyebrow: "START HERE",
        title: "Ready to see if EMDR is the right fit?",
        lead:
          "The free 15-minute call is where it starts. No paperwork, no commitment — just a conversation about what you're carrying and whether EMDR makes sense for your situation.",
        cta: { href: "/book", label: "Book Your Free 15-Min Call" }
      }
    ]
  },
  fees: {
    title: "Fees & Insurance | Lianne Watkins Therapy | 7 Insurance Plans Accepted",
    description:
      "High-quality trauma therapy that's actually accessible. Learn about fees, insurance, sliding scale options, and telehealth logistics.",
    hero: {
      variant: "interior",
      title: "High-quality trauma therapy that's actually accessible.",
      lead:
        "Most EMDR therapists in California charge $180–$250 per session out of pocket. Lianne accepts 7 insurance plans and offers a sliding scale for those without in-network coverage.",
      align: "center",
      ctas: [{ href: "/book", label: "Book Your Free 15-Min Call" }]
    },
    sections: [
      {
        type: "darkBand",
        eyebrow: "INSURANCE",
        title: "Accepted insurance plans.",
        lead:
          "Lianne is in-network with several major plans. If your insurance is listed, sessions are billed directly to your insurer at the contracted rate — you pay only your copay, coinsurance, or deductible.",
        paragraphs: [
          "Please contact Lianne directly to confirm which plans she is currently accepting, as her panel changes.",
          "The free 15-minute consultation call is a great time to check your benefits together."
        ]
      },
      {
        type: "richText",
        background: "cream",
        title: "No insurance? There are still options.",
        lead:
          "Lianne offers a limited number of reduced-fee spots on a sliding scale for clients who need them.",
        paragraphs: [
          "She believes cost should not be the reason someone can't get help. If the standard rate is a barrier, say so on the consultation call — she will work with you.",
          "If your insurance plan offers out-of-network mental health benefits, you may be able to get partial reimbursement for sessions even if Lianne is not in your network.",
          "Call your insurer and ask: Do I have out-of-network mental health benefits for telehealth services? What is my out-of-network deductible and reimbursement rate?"
        ]
      },
      {
        type: "cardGrid",
        background: "mint",
        title: "A few practical details.",
        columns: 2,
        cards: [
          {
            title: "Payment methods",
            body:
              "Credit card, HSA and FSA cards accepted. Payment is collected at the time of service via the secure client portal."
          },
          {
            title: "Session length",
            body:
              "Standard sessions are 50 minutes. Longer EMDR processing sessions may be scheduled when clinically appropriate."
          },
          {
            title: "Cancellation policy",
            body:
              "24-hour notice required to cancel or reschedule without charge. Late cancellations and no-shows are charged the full session rate."
          },
          {
            title: "Telehealth setup",
            body:
              "Sessions via HIPAA-compliant video. A smartphone, tablet, or computer with a camera and internet connection is all you need."
          }
        ]
      },
      {
        type: "ctaBand",
        eyebrow: "READY TO GET STARTED?",
        title: "Ready to get started?",
        lead:
          "The consultation call is free, and it's the right place to start — including checking on your insurance benefits together.",
        cta: { href: "/book", label: "Book Your Free 15-Min Call" }
      }
    ]
  },
  faq: {
    title: "Frequently Asked Questions | Lianne Watkins Therapy California",
    description:
      "Honest answers about telehealth, credentials, getting started, and what to expect from therapy with Lianne Watkins.",
    hero: {
      variant: "interior",
      title: "The questions most people have before they reach out.",
      lead:
        "Honest answers to the questions Lianne hears most — about how the process works, what her credentials mean, what insurance covers, and what to expect.",
      align: "center"
    },
    sections: [
      {
        type: "questionList",
        background: "cream",
        items: [
          {
            question: "How do I know if therapy is right for me?",
            answer:
              "If something feels stuck — a pattern you keep repeating, emotions that feel disproportionate, pain that won't move — therapy is probably worth exploring. You don't need to be in crisis to benefit."
          },
          {
            question: "What's the first step?",
            answer:
              "Book a free 15-minute consultation call. It costs nothing, requires no paperwork, and carries no obligation. It's just a conversation to see if working together makes sense."
          },
          {
            question: "What if I've tried therapy before and it didn't help?",
            answer:
              "There are several reasons therapy sometimes doesn't help: a poor fit with the therapist, an approach that didn't match the problem, or a point in life when you weren't ready. None of these mean therapy can't help you."
          },
          {
            question: "Do I need a diagnosis or referral to start therapy?",
            answer:
              "No. You don't need a referral from a doctor, and you don't need a diagnosis. You can reach out directly."
          }
        ]
      },
      {
        type: "questionList",
        background: "mint",
        columns: 2,
        items: [
          {
            question: "How does telehealth therapy work?",
            answer:
              "Sessions take place via secure video — HIPAA-compliant and private. You'll receive a link before each session. All you need is a quiet space, a device with a camera, and a reliable internet connection."
          },
          {
            question: "Is telehealth as effective as in-person therapy?",
            answer:
              "Research consistently shows that telehealth therapy produces outcomes equivalent to in-person sessions for most conditions, including trauma and anxiety."
          },
          {
            question: "Can I do therapy from anywhere in California?",
            answer:
              "Yes. As long as you are physically located in California during sessions, Lianne can see you. She cannot see clients located outside California at the time of the session."
          },
          {
            question: "What do I need for a telehealth session?",
            answer:
              "A quiet, private space. A device with a working camera and microphone. A stable internet connection. Headphones can help with privacy and sound quality."
          }
        ]
      },
      {
        type: "questionList",
        background: "cream",
        items: [
          {
            question: "What does AMFT mean?",
            answer:
              "AMFT stands for Associate Marriage and Family Therapist. It is the California designation for therapists who have completed graduate training and are completing the supervised clinical hours required for full licensure."
          },
          {
            question: "What is supervised practice?",
            answer:
              "California requires all associate therapists to work under the oversight of a licensed clinician until they have completed sufficient supervised hours and passed their licensing exams."
          },
          {
            question: "Does supervision affect my privacy?",
            answer:
              "No. Her supervisor is also bound by confidentiality requirements. Case consultation happens at a clinical level without unnecessary identifying detail."
          }
        ]
      },
      {
        type: "ctaBand",
        eyebrow: "STILL HAVE QUESTIONS?",
        title: "Still have questions?",
        lead:
          "The consultation call is the right place to ask them. It's free, it's short, and Lianne will give you straight answers.",
        cta: { href: "/book", label: "Book Your Free 15-Min Call" }
      }
    ]
  },
  book: {
    title: "Book a Free 15-Minute Call | Lianne Watkins Therapy California",
    description:
      "You don't have to have it figured out to make the call. Learn what happens on the consultation and reserve space for the eventual scheduling embed.",
    hero: {
      variant: "interior",
      eyebrow: "FREE 15-MIN CONSULTATION",
      title: "You don't have to have it figured out to make the call.",
      lead:
        "Most people spend weeks or months thinking about whether to reach out. The call takes fifteen minutes. It's free. There's no paperwork, no intake forms, no obligation on either side — just a real conversation about where you are and whether working together feels like a fit.",
      align: "center",
      ctas: [{ href: "/book", label: "Book Your Free 15-Min Call" }]
    },
    sections: [
      {
        type: "processSteps",
        background: "cream",
        eyebrow: "WHAT HAPPENS ON THE CALL",
        title: "Here's exactly what the call looks like.",
        steps: [
          {
            number: "01",
            title: "You talk, she listens.",
            body:
              "Tell her what's going on. You don't need to summarize your whole history or explain it perfectly — just start with what brought you here."
          },
          {
            number: "02",
            title: "She shares her honest take.",
            body:
              "Lianne will tell you what she's hearing, whether she thinks she can help, and what working together might look like."
          },
          {
            number: "03",
            title: "You decide.",
            body:
              "No pressure. No pitch. If it feels like a good fit, you'll schedule a first session. If not, she'll tell you that too."
          }
        ]
      },
      {
        type: "questionList",
        background: "cream",
        eyebrow: "COMMON QUESTIONS",
        title: "The things people wonder before they call.",
        items: [
          {
            question: "Do I need to know what I want to work on?",
            answer: "No. You just need to know that something isn't working. Lianne will help you figure out the rest."
          },
          {
            question: "What if I've tried therapy before and it didn't help?",
            answer:
              "That's one of the most common things she hears. It usually means you tried the wrong approach or the wrong therapist — not that therapy can't help you."
          },
          {
            question: "Is this really free, with no strings attached?",
            answer:
              "Yes. No credit card, no automatic enrollment. The call is free because it's the right way to start."
          },
          {
            question: "I'm nervous about starting.",
            answer:
              "Most people are. The nervousness doesn't mean it's the wrong decision. It often means it's exactly the right one."
          },
          {
            question: "Do you take my insurance?",
            answer:
              "Lianne accepts 7 insurance plans and offers a sliding scale. You can see the full list on the Fees & Insurance page before the call."
          }
        ]
      },
      {
        type: "embedPlaceholder",
        background: "cream",
        title: "Pick a time that works for you.",
        lead:
          "Use the calendar below to book your free 15-minute call. If you'd prefer to send a message first, head to the Contact page instead.",
        placeholderTitle: "Calendar embed reserved here.",
        placeholderBody:
          "This space is intentionally held for the future scheduling experience. The page structure and spacing are in place without committing to a booking vendor yet."
      },
      {
        type: "ctaBand",
        eyebrow: "READY TO TAKE THE FIRST STEP?",
        title: "Ready to take the first step?",
        lead:
          "The call is free. Fifteen minutes. No paperwork, no commitment. Just a real conversation about where you are and whether working together makes sense.",
        cta: { href: "/book", label: "Book Your Free 15-Min Call" }
      }
    ]
  },
  contact: {
    title: "Contact | Lianne Watkins Therapy | Reach Out Anytime",
    description:
      "Send a message or book directly. Contact Lianne Watkins for telehealth therapy across California.",
    hero: {
      variant: "interior",
      title: "The first step is the easiest one.",
      lead:
        "Send a message below or book directly using the calendar on the Book page. Either way, Lianne responds within 24 hours. No intake forms, no paperwork — just a short note about where you are.",
      align: "center",
      ctas: [{ href: "/book", label: "Book Your Free Call Instead" }]
    },
    sections: [
      {
        type: "textWithFacts",
        background: "cream",
        title: "You'll hear back within 24 hours.",
        lead:
          "Lianne reads every message personally. Send as much or as little as you want — your name and a line about why you're reaching out is enough.",
        paragraphs: [
          "If you're not sure what to say, you can just say: I'd like to learn more about working with you. That's enough to start.",
          "Sessions are via telehealth — secure video, from anywhere in California. No commute, no waiting room."
        ],
        factsEyebrow: "QUICK FACTS",
        facts: [
          "Online telehealth — serving all of California",
          "$135 per session · Sliding scale available",
          "7 insurance plans accepted",
          "Free 15-minute consultation call",
          "Response within 24 hours"
        ]
      },
      {
        type: "richText",
        background: "mint",
        title: "If you need help right now, please reach out to a crisis line.",
        paragraphs: [
          "Lianne is not able to provide crisis services through this contact form. If you are in immediate danger, please call 911.",
          "If you are experiencing a mental health crisis, please call or text 988 (Suicide & Crisis Lifeline), available 24 hours a day, 7 days a week.",
          "For domestic violence support: National Domestic Violence Hotline — 1-800-799-7233 (24/7)."
        ]
      },
      {
        type: "ctaBand",
        eyebrow: "BOOK DIRECTLY",
        title: "Ready to skip the form and book directly?",
        lead:
          "The free 15-minute call is the fastest way to get started. No paperwork, no commitment.",
        cta: { href: "/book", label: "Book Your Free 15-Min Call" }
      }
    ]
  },
  blog: {
    title: "Therapy Blog | Mental Health Resources | Lianne Watkins, AMFT",
    description:
      "Mental health resources from Lianne Watkins on trauma, EMDR, anxiety, relationships, and the therapy process.",
    hero: {
      variant: "interior",
      title: "Mental health resources. Coming soon.",
      lead:
        "Lianne writes about trauma, EMDR, anxiety, relationships, and the real experience of therapy — from the inside. Articles are in progress. In the meantime, the best next step is a free 15-minute call.",
      align: "center",
      ctas: [{ href: "/book", label: "Book Your Free 15-Min Call" }]
    },
    sections: [
      {
        type: "richText",
        background: "mint",
        title: "Articles written by someone who actually does this work.",
        paragraphs: [
          "Most therapy content online is written for clicks, not for people who are genuinely trying to understand what is happening in their nervous system, their relationships, or their history.",
          "Lianne writes differently — with the same directness and warmth she brings to sessions.",
          "Topics will include how EMDR actually works, what trauma does to the brain and body, why talk therapy alone sometimes isn't enough, and the experience of being a parent with your own unresolved history."
        ]
      },
      {
        type: "ctaBand",
        eyebrow: "READY TO START?",
        title: "Ready to start rather than just read about it?",
        lead:
          "The free 15-minute call is the fastest way to find out if working with Lianne is the right fit. No paperwork, no commitment.",
        cta: { href: "/book", label: "Book Your Free 15-Min Call" }
      }
    ]
  },
  specialtiesIndex: {
    title: "Therapy Specialties | Lianne Watkins, EMDR Therapist California",
    description:
      "Browse the therapy specialties Lianne Watkins supports across California, from trauma and anxiety to ADHD, grief, and relationship pain.",
    hero: {
      variant: "interior",
      title: "Every condition she treats has its own dedicated page.",
      lead:
        "Lianne works with adults across California on a wide range of conditions. Rather than a bulleted list, each specialty below has a dedicated page — written for the person actually dealing with that thing.",
      align: "center"
    },
    sections: [
      {
        type: "linkGrid",
        background: "cream",
        columns: 3,
        groups: [
          { links: specialtyLinks.slice(0, 6) },
          { links: specialtyLinks.slice(6, 12) },
          { links: specialtyLinks.slice(12) }
        ]
      },
      {
        type: "darkBand",
        eyebrow: "EMDR ACROSS SPECIALTIES",
        title: "All of this work is grounded in EMDR.",
        lead:
          "EMDR is the common thread across everything Lianne does. Whether you're processing a specific trauma, shifting a long-standing pattern, or working through grief, EMDR helps move things that talk therapy alone often can't reach.",
        cta: { href: "/emdr-therapy", label: "Learn How EMDR Works", variant: "cream" }
      },
      {
        type: "ctaBand",
        eyebrow: "NOT SURE WHERE TO START?",
        title: "Not sure which page fits what you're going through?",
        lead:
          "Start with the free 15-minute call. You don't need to categorize yourself first. Just tell Lianne what is going on.",
        cta: { href: "/book", label: "Book Your Free 15-Min Call" }
      }
    ]
  },
  locationsIndex: {
    title: "Online Therapy California | Lianne Watkins | Telehealth Across California",
    description:
      "Telehealth therapy for adults across California. Browse city and region pages for Los Angeles, San Diego, Oakland, Sacramento, and more.",
    hero: {
      variant: "interior",
      title: "Therapy for adults across California. Wherever you are.",
      lead:
        "Lianne Watkins provides telehealth therapy to adults anywhere in California via secure video. No commute. No waiting room. The same quality of EMDR-trained, trauma-informed care — from wherever you are in the state.",
      align: "center",
      ctas: [{ href: "/book", label: "Book Your Free 15-Min Call" }]
    },
    sections: [
      {
        type: "linkGrid",
        background: "cream",
        eyebrow: "CALIFORNIA CITIES",
        title: "Serving adults in every major California city.",
        columns: 3,
        groups: [{ links: locationLinks }]
      },
      {
        type: "richText",
        background: "mint",
        title: "Same quality of care. Zero commute.",
        lead:
          "As long as you're physically located in California during sessions, Lianne can work with you. Sessions take place via secure, HIPAA-compliant video.",
        paragraphs: [
          "All you need is a device with a camera and a quiet, private space.",
          "Research consistently shows that telehealth therapy produces outcomes equivalent to in-person sessions for most conditions — including trauma and PTSD. Many clients find it easier to open up from their own space."
        ]
      },
      {
        type: "ctaBand",
        eyebrow: "START ANYWHERE",
        title: "The first step is the same from every city.",
        lead:
          "Book a free 15-minute consultation and decide from there. No paperwork, no office visit, no pressure.",
        cta: { href: "/book", label: "Book Your Free 15-Min Call" }
      }
    ]
  }
} satisfies Record<string, SingletonPageContent>;
