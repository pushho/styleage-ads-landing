import { CLINIC } from "@/lib/clinic";
import type { TreatmentPageContent } from "@/lib/treatment";

export const facial: TreatmentPageContent = {
  meta: {
    title: "Medical Facial Dubai | Glow and Clarity | StyleAge",
    description:
      "A clinician-led facial in Dubai Healthcare City. The skin is seen first. Cleansing, exfoliation, and any extractions are matched to that day. The fee is explained before a visit is booked.",
  },
  brandEyebrow: "Facial · Dubai",
  nav: [
    { href: "#why", label: "The treatment" },
    { href: "#process", label: "The visit" },
    { href: "#who", label: "Who it suits" },
    { href: "#day", label: "The session" },
    { href: "#recovery", label: "Aftercare" },
    { href: "#questions", label: "Questions" },
    { href: "#team", label: "Clinic" },
  ],
  cta: {
    book: "Book a Facial Consultation",
    call: `Call ${CLINIC.name} Clinic`,
    whatsapp: "WhatsApp Us",
    appointment: "Request an Appointment",
  },
  whatsappMessage: `Hi ${CLINIC.name}, I'd like to ask about a facial.`,
  hero: {
    image: {
      src: "/images/facial-hero.jpg",
      alt: "A clinician in a white coat examining a woman's cheek before a facial",
      className: "object-[85%_35%] sm:object-[80%_35%] lg:object-[100%_35%]",
    },
    eyebrow: "Medical facial · Dubai Healthcare City",
    title: "A medical facial in Dubai",
    bodyClassName:
      "mt-4 max-w-md text-[0.95rem] leading-relaxed text-muted sm:text-base lg:max-w-[18rem]",
    body: `A facial at ${CLINIC.name} Clinic is planned after the skin is seen. It is not a fixed spa menu. The visit stays gentle, or includes exfoliation, depending on what the skin can take that day.`,
    formTitle: "Book a facial consultation in Dubai",
    formBody:
      "A coordinator replies on the number you leave. You decide about a visit after you have heard the plan.",
  },
  why: {
    id: "why",
    eyebrow: "Skin in Dubai",
    title: "The steps follow the skin in front of us.",
    intro:
      "A spa facial often follows the same sequence for everyone. A medical facial is prescribed. Strength, ingredients, and whether anything is extracted are set for your skin type, what it has been through lately, and what you want from this visit. The aim is cleaner, better-hydrated skin and a fresher surface. It maintains and refreshes. It does not replace a peel, a laser, or microneedling when the concern sits deeper than the surface.",
    link: { href: "#who", label: "See who a facial suits" },
    image: {
      src: "/images/facial-why.jpg",
      alt: "A woman in profile against a plain warm wall",
      className:
        "object-[80%_20%] sm:object-[75%_25%] lg:object-[100%_28%]",
    },
    reasons: [
      {
        title: "The skin is seen first",
        body: "Concerns, sensitivity, recent products, and any treatment in the last few weeks are reviewed before a product is opened.",
        icon: "surgeon",
      },
      {
        title: "Depth is chosen that day",
        body: "Some visits stay with cleansing, hydration, and a calm finish. Others add a mild exfoliation or extractions when the skin can tolerate them.",
        icon: "technology",
      },
      {
        title: "One visit refreshes",
        body: "Glow is often noticed the same day and can look its best over the next day or two. Steadier skin usually comes from a rhythm, often about monthly, not from a single sitting.",
        icon: "course",
      },
      {
        title: "Fee before booking",
        body: "What the visit will include, and your facial cost in Dubai, are explained at consultation. You can leave and decide later.",
        icon: "discreet",
      },
    ],
  },
  process: {
    id: "process",
    eyebrow: "Facial consultation in Dubai",
    title: "Five steps.\nNothing applied before the skin is seen.",
    intro:
      "From the first look at the skin to what you do at home, the intensity and the fee are explained before you decide. You can stop after the consultation.",
    steps: [
      {
        title: "Consultation",
        body: "The face is examined. Dullness, congestion, dryness, mild uneven tone, and sensitivity are discussed, along with medicines, recent peels or lasers, and what you hope this visit will change. A facial is not assumed to be the right tool.",
      },
      {
        title: "The plan",
        body: "You are told what will be used and why. A gentle, glow-focused visit is one plan. A more active visit, with exfoliation or extractions, is another. The choice follows what the skin can take that day, not a package name.",
      },
      {
        title: "Preparation",
        body: "Arrive with clean skin when you can, and pause strong acids or retinoids beforehand if you were asked to. Sunburnt, broken, or infected skin is a reason to wait. In Dubai, a fresh tan can change how much exfoliation is sensible.",
      },
      {
        title: "The session",
        body: "Usually 45 to 90 minutes. Cleansing comes first. Exfoliation, extractions, masks, and a finishing step are used only if they were part of the plan. The feeling should be comfortable. Pressure during an extraction is different from a treatment that stings for hours.",
      },
      {
        title: "Home",
        body: "You leave with what to use, what to pause, and when a next visit makes sense. A facial can stand alone, sit between stronger treatments, or be the gentle start before you decide on anything else.",
      },
    ],
  },
  suitability: {
    id: "who",
    eyebrow: "Who it suits",
    title: "Dull, congested, or easily irritated skin, when the aim is the surface.",
    intro:
      "People book a facial for a cleaner look, better hydration, and makeup that sits more evenly, without the peeling of a stronger resurfacing treatment. It is a common request before an event, as monthly maintenance, or as a calmer step between peels, lasers, or other corrective work. It is a poor plan when the real concern is scarring, marked pigmentation, or laxity. Those are said plainly, and another treatment is discussed instead of stretching a facial past what it does.",
    items: [
      {
        label: "Dull or tired skin",
        body: "A surface refresh: cleanse, light exfoliation if the skin allows, and hydration. The change people notice first is glow, not a new face shape.",
      },
      {
        label: "Congestion",
        body: "Blackheads and whiteheads may be extracted when they are ready and the skin is calm. Inflamed cysts are not squeezed. Extraction clears what is there. It does not stop new ones forming.",
      },
      {
        label: "Dryness or a stressed barrier",
        body: "The visit stays gentle: less exfoliation, more hydration, no extra actives. A facial is not used to push a raw barrier harder.",
      },
      {
        label: "Sensitive or reactive skin",
        body: "A softer visit is often the right one. Some clinics call that kind of surface treatment a nanofacial: glow and comfort, without a peel. Here it is simply the gentle end of a facial, chosen after the skin is seen.",
      },
      {
        label: "Before an event",
        body: "Useful when you want to look fresher and still be presentable the same day. It is not booked as a peel the week of a photograph.",
      },
      {
        label: "Between other treatments",
        body: "A facial can maintain the skin between peels or lasers, or be the first visit before you decide those are needed. It does not replace them.",
      },
    ],
  },
  day: {
    id: "day",
    eyebrow: "The session",
    title: "You come in, and you leave the same day.",
    intro:
      "A session is often 45 to 90 minutes. There is no anaesthetic and no overnight stay. Makeup can often go on later the same day, once any pinkness has settled. If extractions were done, that pinkness can last longer than a hydration-only visit.",
    items: [
      {
        mark: "Arrival",
        body: "The skin is looked at again: new spots, recent products, sun, and anything that has changed since you booked. The plan can be softened on the day.",
      },
      {
        mark: "Cleanse",
        body: "Makeup and the day’s film come off so the surface can actually be seen. This is also when congestion, dryness, and sensitivity show themselves more clearly.",
      },
      {
        mark: "Treatment",
        body: "Exfoliation, extractions, a mask, and targeted products are used only as agreed. You should be able to say if a step is too much. A gentle visit feels closer to a thorough cleanse than to a procedure.",
      },
      {
        mark: "Home",
        body: "A barrier cream and sun advice finish the visit. You leave with written notes: what to pause, when SPF matters, and whether the next visit is maintenance or something else.",
      },
    ],
  },
  recovery: {
    id: "recovery",
    eyebrow: "Aftercare",
    title: "What the days after usually involve.",
    intro:
      "These are typical stages, not a timetable every face follows. A little pinkness is common. Peeling sheets of skin, swelling, or pain that builds is not what this visit is for, and should be reported to the clinic.",
    items: [
      {
        when: "The day",
        title: "Fresher, sometimes pink",
        body: "Many people look cleaner straight away. Mild redness is more likely if the skin was exfoliated or extracted. It often fades within a few hours.",
      },
      {
        when: "That evening",
        title: "Keep it simple",
        body: "A gentle cleanser and a moisturiser. No new acid, retinoid, or scrub until you are told the skin is ready. Heat, steam, and a hard workout can wait if the face is still flushed.",
      },
      {
        when: "1–2 days",
        title: "The glow",
        body: "Smoothness and glow often look their best over the next day or two, once the surface has settled. Small marks from an extraction can take a little longer, sometimes a few days.",
      },
      {
        when: "The week",
        title: "Sun and actives",
        body: "Daily sunscreen matters more if anything was exfoliated. In Dubai that is not optional advice. Strong home actives restart only when the aftercare says so.",
      },
      {
        when: "About a month",
        title: "The next visit",
        body: "If a facial is maintenance, the gap is often about monthly. Sooner is not better when the barrier is still recovering from a peel or a laser. The date is set from your plan, not from a standing offer.",
      },
    ],
  },
  limits: {
    id: "limits",
    eyebrow: "Limits",
    title: "What a facial can and cannot do.",
    intro:
      "A facial refreshes the surface and supports a routine. It is declined, or swapped for another treatment, when the concern needs more than cleansing and a measured exfoliation. One calm visit is not a correction for scarring or marked pigment.",
    items: [
      {
        title: "It does not remodel the skin",
        body: "Texture that is only dull or rough can look smoother. Acne scars, deep lines, laxity, and significant pigmentation usually need a peel, a laser, microneedling, or another plan. A facial can sit beside that plan. It is not a substitute for it.",
      },
      {
        title: "Extractions are not a cure",
        body: "A careful extraction can clear a blackhead or whitehead that is ready. It does not treat the reason congested pores keep forming. Inflamed cysts and deep spots are left alone. Forcing them marks the skin.",
      },
      {
        title: "Gentle is not the same as empty",
        body: "A nanofacial-style visit, aimed at hydration and glow with little or no peeling, is a real option for reactive skin. It will not clear scars or replace a course of corrective treatment. The name on a menu does not change that limit.",
      },
      {
        title: "Some skin should wait",
        body: "Sunburn, broken skin, a cold sore, and an active infection are reasons to postpone. Recent isotretinoin, a fresh peel, or a laser can mean the facial is delayed or kept very mild. Possible effects of a session include redness, tightness, small extraction marks, and a flare if the wrong active is used. Those are discussed before you book.",
      },
    ],
  },
  questions: {
    id: "questions",
    eyebrow: "Questions",
    title: "A facial in Dubai: common questions.",
    intro:
      "Cost, time, downtime, and how this differs from a spa facial or a stronger treatment. The answers describe a medical facial in general. Your own visit is confirmed only after the skin is seen.",
    items: [
      {
        q: "How much does a facial cost in Dubai?",
        a: `The fee depends on what the skin needs: a gentle hydration visit is not the same appointment as one with extractions or a stronger exfoliation. Because that is known after an examination, ${CLINIC.name} does not quote a single facial price online. You receive the fee in writing at the consultation, before anything is booked, and you can take it away and decide later.`,
      },
      {
        q: "How is this different from a spa facial?",
        a: "A spa facial is often the same sequence for relaxation and a surface refresh. Here the steps are chosen after the skin is examined. Products, exfoliation, and extractions are included only when they fit. The room is a clinic, and the visit is allowed to be declined if a facial is the wrong tool.",
      },
      {
        q: "Is a nanofacial the same thing?",
        a: "Clinics use “nanofacial” for a gentle surface treatment aimed at glow and hydration, with little peeling and little downtime. It is not microneedling, which goes deeper and is a different procedure. At this clinic a facial can stay that gentle when the skin is sensitive, or be more active when assessment supports it. The word on the booking form does not decide the depth. The skin does.",
      },
      {
        q: "How long does a session take, and can I go back to work?",
        a: "Most facials take 45 to 90 minutes. There is usually no downtime that keeps you at home. Mild pinkness can show for a few hours, longer if extractions were done. Makeup is often fine the same day once the skin feels settled. A photograph or an event the same afternoon is more sensible after a gentle visit than after a session with extractions.",
      },
      {
        q: "Will you extract spots?",
        a: "Only congested pores that are ready, and only when the surrounding skin is calm. Blackheads and whiteheads are the usual targets. Inflamed, deep, or cystic spots are not squeezed, because that is how marks are made. Extraction clears what is visible today. A retinoid or other home treatment is what reduces the next crop, and that is a separate conversation.",
      },
      {
        q: "How often should I come?",
        a: "A single facial refreshes. People who want steadier hydration and a clearer surface often come about once a month. That is a common rhythm, not a rule. Skin that has just had a peel or a laser may need a longer gap. Frequency is set with the rest of your plan, not as a subscription you are expected to keep.",
      },
      {
        q: "What results should I expect?",
        a: "Cleaner, smoother, better-hydrated skin, often the same day, with glow that can peak over the next day or two. It will not remove scars, change facial shape, or even out marked pigment on its own. If that is the goal, you will be told at consultation, and a different treatment will be discussed.",
      },
      {
        q: "How do I book a consultation?",
        a: `Fill in the form on this page, call ${CLINIC.phone}, or message us on WhatsApp. A coordinator will reply to arrange a time at ${CLINIC.name} Clinic, Dubai Healthcare City, open ${CLINIC.hours.days}, ${CLINIC.hours.weekdays}. Say whether the skin is dull, congested, dry, or being prepared for an event. There is no obligation to go ahead after the consultation.`,
      },
    ],
    prompt: {
      eyebrow: "Still have a question?",
      title: "Ask it at a facial consultation in Dubai.",
      body: "What the visit will include, and what it will not, is answered after the skin is examined. Call or WhatsApp us, or request an appointment online.",
      primary: { label: "Book a Facial Consultation", href: "#appointment" },
    },
  },
  book: {
    id: "book",
    eyebrow: "Book a Facial Consultation",
    title: "Start with the skin, not a spa menu.",
    body: "Leave your details and a coordinator will call or WhatsApp you to arrange a visit to our clinic in Dubai Healthcare City. Tell us what is bothering you. A daylight photo of the face can help. It is not required, and it is not a quotation.",
    assurances: [
      "A reply from a coordinator at the clinic, not an automated message.",
      "The steps, the intensity, and the fee explained before a facial is booked.",
      "No obligation to go ahead after the consultation.",
    ],
    formTitle: "Request an Appointment",
    formNote: "Takes under a minute. We reply on the number you leave.",
  },
  footer: {
    blurb: `Medical facials at ${CLINIC.name} Clinic, Dubai Healthcare City, operated by ${CLINIC.legalName}. Cleansing, exfoliation, and extractions are planned after the skin is examined.`,
    disclaimer:
      "A facial is a skin treatment. Suitability, the products used, recovery, and how much the skin changes differ from person to person. This page is general information, not a diagnosis, a quotation, or a promise of outcome.",
    primary: { label: "Book a Facial Consultation", href: "#appointment" },
  },
  form: {
    concerns: [
      { value: "dull", label: "Dull or tired skin" },
      { value: "congestion", label: "Congestion or breakouts" },
      { value: "dryness", label: "Dryness or sensitivity" },
      { value: "tone", label: "Uneven tone" },
      { value: "event", label: "A facial before an event" },
      { value: "plan", label: "Where a facial fits in my skin plan" },
      { value: "opinion", label: "I want an opinion first" },
    ],
    footnote: "Used only to reply. A facial is never booked from a photograph alone.",
    source: "Facial",
  },
};
