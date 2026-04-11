import type { SpecialtyPage } from "./content-types";

const specialtyCta = {
  type: "ctaBand" as const,
  eyebrow: "START HERE",
  title: "Ready to start processing?",
  lead:
    "The free 15-minute call is where you start. Lianne will listen to what you're carrying and tell you honestly whether this work is a good fit for your situation.",
  cta: { href: "/book", label: "Book Your Free 15-Min Call" }
};

export const specialtyPages = [
  {
    slug: "trauma-ptsd",
    title: "Trauma & PTSD Therapy California | EMDR for Trauma | Lianne Watkins, AMFT",
    description:
      "Something happened. You're still carrying it. Trauma-informed EMDR therapy for adults across California.",
    hero: {
      variant: "interior",
      title: "Something happened. You're still carrying it.",
      lead:
        "Maybe you know exactly what it was. Maybe you've never fully named it as trauma — you just know something is still stuck, still running the show, still pulling you back when you least expect it. EMDR helps you process it without having to relive it over and over.",
      align: "center",
      ctas: [{ href: "/book", label: "Book Your Free 15-Min Call" }]
    },
    sections: [
      {
        type: "richText",
        background: "cream",
        title: "Trauma doesn't always look the way people expect.",
        lead:
          "It might look like a memory that comes back without permission. A smell, a sound, a moment in an otherwise ordinary day that pulls you somewhere you don't want to go.",
        paragraphs: [
          "It might look like staying very busy so you never have to sit still with yourself. Or shutting down completely and feeling nothing at all.",
          "It might look like a body that won't relax. Muscles always braced. Sleep that doesn't come, or comes and brings nightmares.",
          "Trauma takes many forms. It doesn't require a capital-T traumatic event. Prolonged stress, chronic emotional neglect, or a relationship that left you questioning your own reality can leave the same kinds of marks."
        ]
      },
      {
        type: "richText",
        background: "mint",
        title: "What makes EMDR different for trauma.",
        lead:
          "Most approaches to trauma ask you to talk about what happened. That can help. But for many people, it only goes so far.",
        paragraphs: [
          "Trauma isn't primarily stored in the part of the brain that processes words. It's stored lower — in the body, in the nervous system, in the part of the brain that fires before thought.",
          "EMDR reaches that level directly. Using bilateral stimulation while you hold a memory in mind, it helps the brain reprocess what got stuck — so it can finally be filed away as something that happened, rather than something that is happening."
        ]
      },
      {
        type: "richText",
        background: "cream",
        title: "What Lianne brings to trauma work.",
        lead:
          "Lianne is trauma-informed at the level of how she sits with you, not just at the level of technique.",
        paragraphs: [
          "She understands how trauma affects the nervous system, why safety has to be built before processing can happen, and why rushing any of this is counterproductive.",
          "She will not push you faster than you can go. She will also not let you stay stuck forever out of excessive caution."
        ],
        quote:
          "The memory doesn't go away. But it loses its grip. It stops feeling like it's happening now."
      },
      specialtyCta
    ]
  },
  {
    slug: "anxiety-depression",
    title: "Anxiety & Depression Therapy California | Online Therapist | Lianne Watkins",
    description:
      "This is treatable. Not just manageable — treatable. Therapy for anxiety and depression across California.",
    hero: {
      variant: "interior",
      title: "This is treatable. Not just manageable — treatable.",
      lead:
        "The 3am thoughts. The chest tightness before nothing in particular. The numbness that makes ordinary things feel impossible. If you've been trying to manage this for a long time, you already know that managing it isn't the same as actually getting better.",
      align: "center",
      ctas: [{ href: "/book", label: "Book Your Free 15-Min Call" }]
    },
    sections: [
      {
        type: "cardGrid",
        background: "cream",
        title: "Anxiety and depression don't always look dramatic.",
        columns: 2,
        cards: [
          {
            title: "Anxiety",
            body:
              "It can look like constant scanning, overthinking, dread, irritability, trouble sleeping, and a body that never really lands."
          },
          {
            title: "Depression",
            body:
              "It can look like numbness, shutdown, low motivation, feeling detached from yourself, and the quiet sense that ordinary things now take too much effort."
          }
        ]
      },
      {
        type: "richText",
        background: "mint",
        title: "These states usually have a story under them.",
        lead:
          "Anxiety and depression are not moral failures. They're often the downstream result of unresolved stress, painful experiences, and a nervous system that has had to do too much for too long.",
        paragraphs: [
          "That is part of why insight alone doesn't always shift them. Your brain may understand what's happening while your body keeps reacting as if the threat is still current.",
          "EMDR helps process what the nervous system never got to finish processing — which is why many clients feel change at a deeper level than they expected."
        ]
      },
      specialtyCta
    ]
  },
  {
    slug: "bpd-personality-disorders",
    title: "BPD Therapy California | Borderline Personality Disorder | Lianne Watkins, AMFT",
    description:
      "You're not broken. You're someone whose nervous system learned to survive something hard. Trauma-informed support for BPD and personality-disorder patterns.",
    hero: {
      variant: "interior",
      title: "You're not broken. You're someone whose nervous system learned to survive something hard.",
      lead:
        "A BPD diagnosis can feel like a life sentence. It doesn't have to be. Many of the experiences associated with BPD and personality disorders are rooted in trauma — and trauma, with the right approach, can be processed and changed.",
      align: "center",
      ctas: [{ href: "/book", label: "Book Your Free 15-Min Call" }]
    },
    sections: [
      {
        type: "richText",
        background: "cream",
        title: "Diagnoses describe patterns. They don't define your future.",
        paragraphs: [
          "Intense emotions, fear of abandonment, rapid shifts in closeness and distance, or feeling like you don't know who you are did not appear out of nowhere.",
          "For many people these are adaptations to environments that were unsafe, chaotic, invalidating, or painful enough that the nervous system learned extreme strategies to keep you connected and alive."
        ]
      },
      {
        type: "richText",
        background: "mint",
        title: "Therapy helps by changing the system underneath the symptoms.",
        paragraphs: [
          "Lianne approaches this work without shame, sensationalism, or diagnostic fatalism. She focuses on regulation, history, and the specific experiences that left your nervous system on high alert.",
          "EMDR can help when the emotional charge, triggers, and relationship patterns are tied to unresolved trauma."
        ]
      },
      specialtyCta
    ]
  },
  {
    slug: "domestic-violence-abuse",
    title: "Domestic Violence & Abuse Therapy California | Lianne Watkins, AMFT",
    description:
      "Recover from abuse, coercion, and fear with trauma-informed therapy across California.",
    hero: {
      variant: "interior",
      title: "What happened to you matters. And what it did to your nervous system matters too.",
      lead:
        "Domestic violence and abuse leave more than memories. They leave a body that stays alert, a mind that second-guesses itself, and relationships that can feel harder to trust afterward. Recovery is possible, and it does not require minimizing what happened.",
      align: "center",
      ctas: [{ href: "/book", label: "Book Your Free 15-Min Call" }]
    },
    sections: [
      {
        type: "richText",
        background: "cream",
        title: "Abuse changes how safe the world feels.",
        paragraphs: [
          "Maybe you left already. Maybe you're still sorting out what to call what happened. Either way, abuse can leave you scanning for danger, doubting your memory, or feeling ashamed of choices you made while trying to survive.",
          "Those reactions are not signs of weakness. They're signs that your system adapted under pressure."
        ]
      },
      {
        type: "richText",
        background: "mint",
        title: "Trauma-focused therapy helps restore clarity and steadiness.",
        paragraphs: [
          "Lianne works slowly, carefully, and without pressure. Safety comes first. From there, the work can focus on processing trauma, rebuilding trust in your own perception, and reducing the grip of triggers and fear.",
          "EMDR can be especially useful once enough safety is established."
        ]
      },
      specialtyCta
    ]
  },
  {
    slug: "family-conflict",
    title: "Family Conflict Therapy California | Lianne Watkins, AMFT | Telehealth",
    description:
      "The same fights. Different triggers. Same ending. Individual therapy for family conflict and inherited patterns.",
    hero: {
      variant: "interior",
      title: "The same fights. Different triggers. Same ending.",
      lead:
        "Family conflict is often about much more than the current argument. Families carry patterns, histories, and inherited ways of communicating that can make real resolution feel impossible. Individual therapy can be one of the most powerful entry points for changing a family system — by changing yourself within it.",
      align: "center",
      ctas: [{ href: "/book", label: "Book Your Free 15-Min Call" }]
    },
    sections: [
      {
        type: "richText",
        background: "cream",
        title: "Family systems are old before the current conflict starts.",
        paragraphs: [
          "Arguments are rarely just about the argument. They sit on top of older roles, unspoken rules, chronic misunderstandings, and histories no one fully resolved.",
          "That is why you can know exactly how the conversation will go and still feel trapped inside it."
        ]
      },
      {
        type: "richText",
        background: "mint",
        title: "Therapy can change the way you occupy your place in the system.",
        paragraphs: [
          "Lianne helps you understand what gets activated, what you learned to do to stay connected, and what it would mean to respond differently without abandoning yourself.",
          "When your nervous system changes, the family dynamic often changes too — even if other people never enter the room."
        ]
      },
      specialtyCta
    ]
  },
  {
    slug: "grief-life-transitions",
    title: "Grief & Life Transitions Therapy California | Lianne Watkins, AMFT",
    description:
      "Loss takes many forms. Therapy for grief, identity shifts, endings, and major life transitions across California.",
    hero: {
      variant: "interior",
      title: "Loss takes many forms. It still deserves a real place to land.",
      lead:
        "Grief is not limited to death. It can be the end of a relationship, the loss of a role, the future you thought you would have, or the version of yourself you can no longer be. Transitions can unsettle you even when they are chosen.",
      align: "center",
      ctas: [{ href: "/book", label: "Book Your Free 15-Min Call" }]
    },
    sections: [
      {
        type: "richText",
        background: "cream",
        title: "Grief doesn't move on a schedule.",
        paragraphs: [
          "Sometimes it looks like tears. Sometimes it looks like numbness, irritability, disorientation, or not knowing who you are without what ended.",
          "People around you may want the grief to be tidy. It usually isn't."
        ]
      },
      {
        type: "richText",
        background: "mint",
        title: "Transitions often stir up more than the transition itself.",
        paragraphs: [
          "Major changes can activate old attachment wounds, fear, and identity questions that were already there under the surface.",
          "Therapy offers a place to feel the loss, make meaning of what changed, and move through the transition without pretending it didn't cost you something."
        ]
      },
      specialtyCta
    ]
  },
  {
    slug: "mood-disorders",
    title: "Mood Disorders Therapy California | Lianne Watkins, AMFT",
    description:
      "Therapy for chronic mood instability, depression, and emotionally exhausting cycles across California.",
    hero: {
      variant: "interior",
      title: "When your mood keeps taking over, life starts organizing itself around damage control.",
      lead:
        "Mood disorders can distort motivation, energy, relationships, and your sense of who you are. The work is not about shaming symptoms away. It's about understanding what is driving the shifts and building real steadiness.",
      align: "center",
      ctas: [{ href: "/book", label: "Book Your Free 15-Min Call" }]
    },
    sections: [
      {
        type: "richText",
        background: "cream",
        title: "Mood patterns are not random.",
        paragraphs: [
          "Even when the symptoms feel unpredictable, there are often deeper layers underneath: chronic stress, trauma, attachment wounds, burnout, or long stretches of operating beyond your actual capacity.",
          "Therapy can help you understand those layers and reduce the intensity and disruption they create."
        ]
      },
      specialtyCta
    ]
  },
  {
    slug: "narcissistic-abuse-recovery",
    title: "Narcissistic Abuse Recovery Therapy California | Lianne Watkins, AMFT",
    description:
      "You're not crazy. And you're not the problem. Recovery-focused therapy for narcissistic abuse across California.",
    hero: {
      variant: "interior",
      title: "You're not crazy. And you're not the problem.",
      lead:
        "Narcissistic abuse can leave you confused in a very specific way. You know something was wrong, but you've spent so long being told otherwise that your own memory and instincts no longer feel trustworthy. Therapy helps you get those back.",
      align: "center",
      ctas: [{ href: "/book", label: "Book Your Free 15-Min Call" }]
    },
    sections: [
      {
        type: "richText",
        background: "cream",
        title: "Gaslighting doesn't just hurt. It destabilizes reality.",
        paragraphs: [
          "You may still hear the other person's voice when you question yourself. You may replay conversations trying to prove to yourself that what happened really happened.",
          "That confusion is one of the deepest injuries of this kind of abuse."
        ]
      },
      {
        type: "richText",
        background: "mint",
        title: "Recovery means more than leaving.",
        paragraphs: [
          "Leaving may be the beginning, but the nervous system often keeps living as if the relationship is still active. Triggers, panic, guilt, and hypervigilance can continue long after contact ends.",
          "Therapy helps process the trauma, rebuild trust in your own perception, and interrupt the attachment patterns that make these relationships feel familiar."
        ]
      },
      {
        type: "richText",
        background: "cream",
        title: "Lianne approaches this work with clarity and steadiness.",
        paragraphs: [
          "She will not minimize what happened, sensationalize it, or flatten it into internet language. She works with the real emotional aftermath: fear, self-doubt, grief, anger, shame, and the complicated pull that can remain even when you know the relationship was harmful."
        ]
      },
      specialtyCta
    ]
  },
  {
    slug: "parenting-support",
    title: "Parenting Support Therapy California | Lianne Watkins, AMFT",
    description:
      "You love your children and you're still struggling. Therapy for parenting stress and inherited patterns across California.",
    hero: {
      variant: "interior",
      title: "You love your children. You're still struggling. Both can be true.",
      lead:
        "Parenting doesn't create all your triggers. It exposes them. Old wounds, overwhelm, perfectionism, fear, and the ways you were parented often show up most intensely in the relationships that matter most.",
      align: "center",
      ctas: [{ href: "/book", label: "Book Your Free 15-Min Call" }]
    },
    sections: [
      {
        type: "richText",
        background: "cream",
        title: "The hardest parts of parenting are rarely just about your child.",
        paragraphs: [
          "Sometimes it is the sound, the chaos, the defiance, or the demand. Sometimes it is what those moments activate in you — fear, helplessness, rage, guilt, shame, or the ache of becoming the parent you needed and did not have.",
          "That does not make you a bad parent. It makes you a human being parenting with a history."
        ]
      },
      {
        type: "richText",
        background: "mint",
        title: "Support helps you respond differently without pretending this is easy.",
        paragraphs: [
          "Lianne understands this work from both sides: clinically and personally. Therapy can help you regulate faster, understand your own triggers, and stop reenacting old patterns in current moments.",
          "The goal isn't perfection. It's more choice, more steadiness, and more repair."
        ]
      },
      specialtyCta
    ]
  },
  {
    slug: "relationship-issues-divorce",
    title: "Relationship Therapy California | Divorce Recovery Counseling | Lianne Watkins",
    description:
      "The same patterns keep showing up. Therapy for relationship pain and divorce recovery across California.",
    hero: {
      variant: "interior",
      title: "The same patterns keep showing up. Different relationship, same ending.",
      lead:
        "Patterns that repeat across relationships usually have a source that predates the relationships themselves. Therapy helps you understand that source — and more importantly, actually change it.",
      align: "center",
      ctas: [{ href: "/book", label: "Book Your Free 15-Min Call" }]
    },
    sections: [
      {
        type: "richText",
        background: "cream",
        title: "Relationship pain is rarely just about the current partner.",
        paragraphs: [
          "Maybe you keep choosing unavailable people. Maybe conflict escalates in ways that leave you feeling small, angry, or confused. Maybe you are trying to recover after a breakup, betrayal, or divorce and you can feel the old pattern underneath the current grief.",
          "When the same dynamic shows up again and again, the pattern deserves direct attention."
        ]
      },
      {
        type: "richText",
        background: "mint",
        title: "Healing the source changes what feels normal.",
        paragraphs: [
          "Therapy helps identify where the template formed, what your system learned to expect from connection, and how those expectations still shape what you tolerate, chase, fear, or avoid.",
          "EMDR can be especially helpful when the pull toward certain relationship dynamics feels stronger than logic."
        ]
      },
      specialtyCta
    ]
  },
  {
    slug: "self-esteem",
    title: "Self-Esteem Therapy California | Lianne Watkins, AMFT, APCC | Online",
    description:
      "The way you talk to yourself — you wouldn't speak that way to anyone you love. Therapy for chronic self-doubt and shame.",
    hero: {
      variant: "interior",
      title: "The way you talk to yourself — you wouldn't speak that way to anyone you love.",
      lead:
        "Low self-esteem is not a personality trait. It's the downstream result of specific experiences — things that happened, things that were said, messages you absorbed when you were too young to question them. EMDR addresses it at the source.",
      align: "center",
      ctas: [{ href: "/book", label: "Book Your Free 15-Min Call" }]
    },
    sections: [
      {
        type: "richText",
        background: "cream",
        title: "Self-esteem is often a trauma story in disguise.",
        paragraphs: [
          "Sometimes it comes from overt criticism. Sometimes from emotional neglect, chronic comparison, shame, relational instability, or being valued for performance instead of personhood.",
          "Over time, those messages stop sounding external. They start sounding like you."
        ]
      },
      specialtyCta
    ]
  },
  {
    slug: "sleep-insomnia",
    title: "Sleep & Insomnia Therapy California | Lianne Watkins, AMFT",
    description:
      "Sleep problems rarely exist in isolation. Therapy for insomnia and the underlying anxiety, trauma, or stress driving it.",
    hero: {
      variant: "interior",
      title: "When your body won't fully let go, sleep becomes one more thing you can't force.",
      lead:
        "Sleep problems rarely exist in isolation. They're usually connected to anxiety, trauma, depression, or chronic stress — things the nervous system hasn't been able to fully process or settle. EMDR addresses those underlying roots.",
      align: "center",
      ctas: [{ href: "/book", label: "Book Your Free 15-Min Call" }]
    },
    sections: [
      {
        type: "richText",
        background: "cream",
        title: "Insomnia is often a regulation problem, not just a sleep problem.",
        paragraphs: [
          "If your system stays activated, your body may be technically tired while still feeling too alert to let go. Racing thoughts, nightmares, dread at bedtime, or the sense that rest is never restorative all point to something deeper than a bedtime routine issue.",
          "Therapy can help reduce the charge in the system that keeps sleep from happening naturally."
        ]
      },
      {
        type: "richText",
        background: "mint",
        title: "Working on the root can change what nights feel like.",
        paragraphs: [
          "Lianne looks beyond surface coping strategies. The goal is not simply to manage another symptom. It's to understand why the system cannot settle and to help it learn that settling is safe again."
        ]
      },
      specialtyCta
    ]
  },
  {
    slug: "stress-coping-skills",
    title: "Stress Therapy & Coping Skills California | Lianne Watkins, AMFT | Online",
    description:
      "You've gotten very good at coping. But coping isn't the same as healing. Therapy for chronic stress across California.",
    hero: {
      variant: "interior",
      title: "You've gotten very good at coping. But coping isn't the same as healing.",
      lead:
        "Coping skills are real and useful. They help you get through. But if you've been using them for years and still feel like the baseline stress never goes away, that's often a sign that what's underneath needs direct attention.",
      align: "center",
      ctas: [{ href: "/book", label: "Book Your Free 15-Min Call" }]
    },
    sections: [
      {
        type: "richText",
        background: "cream",
        title: "Coping can become a full-time job.",
        paragraphs: [
          "Maybe you meditate, journal, exercise, organize, stay busy, distract, optimize, and still never quite feel calm. That does not mean you're doing it wrong.",
          "It may mean your system is trying to manage unresolved material rather than simply stress from the present moment."
        ]
      },
      {
        type: "richText",
        background: "mint",
        title: "The work is to lower the baseline, not just survive the spikes.",
        paragraphs: [
          "Therapy can help identify what keeps the nervous system so activated and process the experiences that keep current stress feeling larger than it is.",
          "When the underlying charge changes, the coping skills you already use start working better too."
        ]
      },
      specialtyCta
    ]
  },
  {
    slug: "adhd",
    title: "ADHD Therapy California | Online ADHD Therapist | Lianne Watkins, AMFT",
    description:
      "High-functioning on the outside. Running on empty on the inside. Therapy for ADHD and the emotional weight that often comes with it.",
    hero: {
      variant: "interior",
      title: "High-functioning on the outside. Running on empty on the inside.",
      lead:
        "ADHD is often described as a productivity problem. It's rarely just that. Underneath the missed deadlines and the restless mind is often a quieter story — years of feeling like you don't measure up, wired differently than everyone around you, and not sure what to do about it.",
      align: "center",
      ctas: [{ href: "/book", label: "Book Your Free 15-Min Call" }]
    },
    sections: [
      {
        type: "cardGrid",
        background: "cream",
        title: "The hidden emotional side of ADHD.",
        columns: 2,
        cards: [
          {
            title: "Shame & self-esteem",
            body:
              "Years of missed expectations and constant correction can turn difference into self-judgment."
          },
          {
            title: "Emotional dysregulation",
            body:
              "The difficulty is not just attention. It is often intensity, frustration, and the feeling that your reactions outrun your intentions."
          },
          {
            title: "Relationship impacts",
            body:
              "ADHD affects closeness, conflict, communication, and the stories you tell yourself about letting people down."
          },
          {
            title: "Burnout & capacity",
            body:
              "Many adults with ADHD look functional from the outside because they are spending unsustainable energy to hold things together."
          }
        ]
      },
      specialtyCta
    ]
  }
] satisfies SpecialtyPage[];

export function getSpecialtyPage(slug: string) {
  return specialtyPages.find((page) => page.slug === slug);
}
