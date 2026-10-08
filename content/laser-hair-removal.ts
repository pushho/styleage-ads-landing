import { CLINIC } from "@/lib/clinic";
import type { TreatmentPageContent } from "@/lib/treatment";

export const laserHairRemoval: TreatmentPageContent = {
  meta: {
    title: "Laser Hair Removal Dubai | Face & Body Hair Reduction | StyleAge",
    description:
      "Laser hair removal in Dubai Healthcare City. A consultation comes first. The area, your skin and hair, the session plan, and the fee are explained before a course is booked.",
  },
  brandEyebrow: "Laser hair removal · Dubai",
  nav: [
    { href: "#why", label: "The treatment" },
    { href: "#process", label: "The course" },
    { href: "#areas", label: "Areas" },
    { href: "#day", label: "The session" },
    { href: "#recovery", label: "Aftercare" },
    { href: "#questions", label: "Questions" },
    { href: "#team", label: "Clinic" },
  ],
  cta: {
    book: "Book a Laser Hair Removal Consultation",
    call: `Call ${CLINIC.name} Clinic`,
    whatsapp: "WhatsApp Us",
    appointment: "Request an Appointment",
  },
  whatsappMessage: `Hi ${CLINIC.name}, I'd like to ask about laser hair removal.`,
  hero: {
    image: {
      src: "/images/laser-hair-removal.jpg",
      alt: "A clinician treating the lower leg with a laser hair removal handpiece",
      className: "object-[50%_62%] sm:object-[48%_55%] lg:object-[42%_48%]",
    },
    eyebrow: "Laser hair removal · Dubai Healthcare City",
    title: "Laser hair removal in Dubai",
    body: `Laser hair removal at ${CLINIC.name} Clinic aims to reduce regrowth over a course of sessions, not to clear an area in one visit. The laser is aimed at hair that is actively growing. Hair that is resting is not treated that day. Whether a course is appropriate depends on your skin, the colour and thickness of the hair, the area, and what can realistically be reduced.`,
    formTitle: "Book a laser hair removal consultation in Dubai",
    formBody:
      "A coordinator replies on the number you leave. You decide about a course after you have heard the plan.",
  },
  why: {
    id: "why",
    eyebrow: "Hair reduction in Dubai",
    title: "The follicle is treated while it is growing.",
    intro:
      "Shaving and waxing clear hair for a short time. Laser hair removal is different: light is absorbed by the pigment in the hair and heats the follicle, to slow the hair that is in its growing phase. Follicles that are resting are missed, which is why a single session is not a course. Over repeated visits the treated hair often becomes finer, lighter, and slower to return. It does not promise that every hair is gone, and it does not replace an assessment of your skin.",
    link: { href: "#areas", label: "See the areas we treat" },
    image: {
      src: "/images/laser-hair-why.jpg",
      alt: "Close view of a laser handpiece against the skin during hair removal",
      className: "object-[70%_72%] sm:object-[62%_60%] lg:object-[80%_70%]",
    },
    reasons: [
      {
        title: "Skin and hair, seen first",
        body: "The area, your skin tone, recent sun, and the colour and thickness of the hair are looked at before a setting is chosen.",
        icon: "surgeon",
      },
      {
        title: "Settings follow that exam",
        body: "Coarse, dark hair usually responds more readily than fine or light hair. Darker skin can be treated when the device and the settings are chosen for it. That choice is made in the room, not from a menu.",
        icon: "technology",
      },
      {
        title: "Sessions are spaced",
        body: "Visits are timed so the next set of growing hairs can be treated. The gap is often about four to eight weeks. It depends on the area.",
        icon: "course",
      },
      {
        title: "Fee before booking",
        body: "The areas, the suggested number of sessions, and your laser hair removal cost in Dubai are explained at consultation. You can leave and decide later.",
        icon: "discreet",
      },
    ],
  },
  process: {
    id: "process",
    eyebrow: "Laser hair removal consultation in Dubai",
    title: "Five steps.\nNothing booked before the skin is seen.",
    intro:
      "From the first consultation to the next session, the area, the limits, and the fee are explained before you decide. You can stop after the consultation.",
    steps: [
      {
        title: "Consultation",
        body: "The area you want treated is examined, along with skin tone, hair colour and thickness, recent sun, medicines, and how you remove hair now. A course is not assumed. A photograph sent ahead can start the conversation. It is not a diagnosis.",
      },
      {
        title: "Planning",
        body: "If laser is suitable, the areas and a session plan are discussed. Most people need several visits, commonly in the range of four to eight, because only growing hairs are treated each time. The number is an estimate, not a promise.",
      },
      {
        title: "Preparation",
        body: "You are asked to shave the area as directed, usually the day before, and to arrive with clean skin: no makeup, lotion, or deodorant on the zone. Waxing, plucking, and threading are avoided for several weeks beforehand, because they remove the follicle the laser needs to see.",
      },
      {
        title: "Session",
        body: "Usually 15 to 60 minutes, depending on the size of the area. The feeling is often described as quick bursts of heat or a mild sting. Eye protection is worn. You are not sedated, and you leave the same day.",
      },
      {
        title: "The next visit",
        body: "Treated hairs often shed over the following days and weeks. The next session is booked for when a new set of follicles is growing. After a course, some people need only occasional maintenance. That is discussed from what your skin actually does, not from a fixed calendar.",
      },
    ],
  },
  suitability: {
    id: "areas",
    eyebrow: "Areas",
    title: "Most of the face and body, once the hair and skin are suitable.",
    intro:
      "People usually ask about laser hair removal for convenience, smoother skin, and fewer ingrown hairs from shaving or waxing. Underarms, legs, arms, the bikini area, back, chest, and the face — upper lip, chin, or jaw — are the requests we hear most. The same rules apply to each: there has to be a follicle the laser can target, the skin has to tolerate the setting, and the aim has to be reduction over a course. Eyelids, eyebrows, and the skin around the eyes are not treated, because of the risk to the eye. Tattoos in the zone are avoided.",
    items: [
      {
        label: "Underarms",
        body: "A small area, often chosen because shaving there irritates the skin. Deodorant is left off on the day. The session itself is short.",
      },
      {
        label: "Arms and legs",
        body: "Larger areas take longer, often toward the upper end of 15 to 60 minutes. Coarse dark hair on the legs is a common reason a course is considered.",
      },
      {
        label: "Bikini area",
        body: "Assessed like any other zone: hair colour, skin, and how much of the area you want treated. Comfort is discussed before the session, not during it.",
      },
      {
        label: "Back or chest",
        body: "Density varies a great deal. A wide, dense area may need more sessions than a small patch, and that is said when the skin is seen.",
      },
      {
        label: "Upper lip, chin, or jaw",
        body: "Facial hair is planned carefully. Fine, light, or hormonal hair may respond less, and the face is one of the places where extra hair growth is rarely reported. The consultation is where that risk is weighed.",
      },
      {
        label: "Ingrown hairs",
        body: "Laser is sometimes chosen when shaving or waxing keeps causing irritation, folliculitis, or ingrown hairs. It treats the hair. It is not a cure for every rash on the skin.",
      },
    ],
  },
  day: {
    id: "day",
    eyebrow: "The session",
    title: "You come in, and you leave the same day.",
    intro:
      "A session is often 15 to 60 minutes. A small zone such as the upper lip is quicker. Legs, back, or several areas together take longer. There is no anaesthetic sleep and no overnight stay. In Dubai, sun on the area in the weeks before the visit can mean the session is delayed.",
    items: [
      {
        mark: "Arrival",
        body: "The area is checked again: colour, recent tan, cuts, and anything new since the consultation. The plan starts from the skin in front of us.",
      },
      {
        mark: "Preparation",
        body: "The skin should be clean and recently shaved, not waxed. You and the person treating you wear eye protection before the laser is used.",
      },
      {
        mark: "Treatment",
        body: "The handpiece is moved over the area. Pulses feel hot or sharp for a moment. Cooling or another comfort measure is used when it is needed. You can say if a pass is too much.",
      },
      {
        mark: "Home",
        body: "Redness and warmth are common and usually settle over hours to a couple of days. You leave with aftercare in writing, including sun, heat, and what not to put on the skin.",
      },
    ],
  },
  recovery: {
    id: "recovery",
    eyebrow: "Aftercare",
    title: "What the weeks after usually involve.",
    intro:
      "These are typical stages, not a timetable every skin follows. Mild redness is expected. A blister, a colour change that spreads, or pain that worsens is not, and should be reported to the clinic.",
    items: [
      {
        when: "The day",
        title: "Warmth and redness",
        body: "The area often looks flushed, as if it has been in the sun briefly. Small bumps around follicles are common, especially where the skin is thin. Cool the skin only as you were shown.",
      },
      {
        when: "1–2 days",
        title: "It settles",
        body: "Most of that redness fades within a few hours to two days. Hot showers, saunas, steam, and hard exercise wait until the redness has gone. Friction from tight clothing on a fresh area is worth avoiding.",
      },
      {
        when: "The next weeks",
        title: "The shed",
        body: "Treated hairs often work their way out and look as if they are growing, then fall. That is the follicle letting go. It is not a sign the session failed. Plucking them out is not the aftercare.",
      },
      {
        when: "About 4–8 weeks",
        title: "The next session",
        body: "The interval is set so a new group of growing hairs can be treated. The face is often sooner than the body. Your written plan is the one that applies, not a gap copied from someone else’s course.",
      },
      {
        when: "After the course",
        title: "Maintenance",
        body: "Regrowth is often finer and slower. Many people later need only an occasional session. Hair colour, hormones, and the area all change how long that lasts. A full head of smooth skin from one package is not a result we describe.",
      },
    ],
  },
  limits: {
    id: "limits",
    eyebrow: "Limits",
    title: "What laser hair removal can and cannot do.",
    intro:
      "Laser hair removal reduces hair. It does not create a hairless result for every person, and it is declined when the hair, the skin, or the timing make a session a poor plan. The American Academy of Dermatology and standard dermatology references describe a series of treatments, spaced weeks apart, with maintenance sometimes required.",
    items: [
      {
        title: "Light hair is a poor target",
        body: "The laser is absorbed by pigment in the hair. White, grey, red, and very light blonde hair often respond little or not at all, because there is not enough pigment to heat the follicle. That is said at consultation, before you pay for a course.",
      },
      {
        title: "Skin colour changes the setting",
        body: "Darker skin contains more pigment, so the wrong device or a setting that is too strong can burn or change colour. Treatment is possible for many darker skin tones when it is planned for that skin. A recent tan, sunburn, or self-tanner is a reason to wait.",
      },
      {
        title: "One session is not the result",
        body: "Only hairs in the growing phase are affected. A course is several visits. Even then, some hair returns, and maintenance is common. “Permanent removal of all hair” is not an accurate description of what a course does.",
      },
      {
        title: "Risks are part of consent",
        body: "Possible effects include redness, swelling, tenderness, blistering, crusting, and skin that darkens or lightens for a time. Colour change can last. Scarring is uncommon and still discussed. Rarely, the treated area grows more hair rather than less, more often reported on the face. Pregnancy is a reason to delay. Some medicines mean a session should not go ahead.",
      },
    ],
  },
  questions: {
    id: "questions",
    eyebrow: "Questions",
    title: "Laser hair removal in Dubai: common questions.",
    intro:
      "Cost, sessions, skin type, pain, and aftercare. The answers describe laser hair removal in general. Your own plan is confirmed only after the area is examined.",
    items: [
      {
        q: "How much does laser hair removal cost in Dubai?",
        a: `The fee depends on the area, how large it is, and how many sessions your hair and skin are likely to need. Because those are known only after an examination, ${CLINIC.name} does not quote a fixed package price online. You receive the fee in writing at the consultation, before anything is booked, and you can take it away and decide later. Be cautious of a per-session price given without looking at the skin.`,
      },
      {
        q: "How many sessions will I need?",
        a: "Most courses are several visits, often around four to eight, spaced about four to eight weeks apart. The American Academy of Dermatology notes that treatments are commonly repeated every four to six weeks, and dermatology references describe a similar initial series, with maintenance sometimes every six to twelve months. Facial hair and body hair are not on the same clock. Your estimate is given after the area is seen. It can change if the hair responds more, or less, than expected.",
      },
      {
        q: "Will it work on my skin tone and hair colour?",
        a: "Coarse, dark hair on lighter skin is the most straightforward match, because the laser is looking for pigment in the hair and not in the skin. Darker skin can still be treated when the device and settings are chosen for it. The Mayo Clinic notes that this has to be done carefully. Very light, red, grey, or white hair is often a poor candidate. A patch test or a delayed start is sometimes the right plan. That decision is made in person.",
      },
      {
        q: "Which areas can be treated?",
        a: "Underarms, arms, legs, bikini, back, chest, and facial zones such as the upper lip and chin are the usual requests. Most skin with a suitable hair can be considered. Eyelids, eyebrows, and the skin around the eyes are not treated. Tattooed skin in the zone is avoided. A large area and a small area are priced and timed differently, which is why the consultation names the zones rather than “full body” as a single promise.",
      },
      {
        q: "Does laser hair removal hurt?",
        a: "People usually describe quick bursts of heat or a mild sting, stronger where the hair is coarse or the skin is thin. It is not described as painless. Comfort measures are used, and you can stop a pass. Numbing cream is not routine and is only used if the clinician treating you advises it.",
      },
      {
        q: "How should I prepare?",
        a: "Shave the area as directed, often the day before, and arrive with clean skin. Do not wax, pluck, or thread for several weeks before, and do not book a session on skin that is tanned, sunburnt, or irritated. Tell the clinic about medicines, recent procedures, and if you might be pregnant. In Dubai, keep the area out of direct sun in the weeks before you come in.",
      },
      {
        q: "What is the downtime?",
        a: "Most people return to ordinary plans the same day. Redness, warmth, and small follicular bumps are common and usually fade within a few hours to a couple of days. Heat, friction, and hard exercise wait until that settles. The Mayo Clinic advises protecting treated skin from the sun for several weeks afterwards, or as you are told, and using a broad-spectrum sunscreen of SPF 30 or higher on areas that see daylight. Your written aftercare is the instruction that applies to you.",
      },
      {
        q: "Is laser hair removal permanent?",
        a: "It is long-term reduction, not a guarantee that no hair will ever grow there again. Regulators use “permanent hair reduction” to mean a lasting drop in the number of hairs, checked over many months, not a hairless result for life. Hair often grows back finer and more slowly. Some returns, and maintenance sessions are common. Hormones, the area, and hair colour all change the outcome.",
      },
      {
        q: "How do I book a consultation?",
        a: `Fill in the form on this page, call ${CLINIC.phone}, or message us on WhatsApp. A coordinator will reply to arrange a time at ${CLINIC.name} Clinic, Dubai Healthcare City, open ${CLINIC.hours.days}, ${CLINIC.hours.weekdays}. Say which area you want treated. A photo can help but is not required. There is no obligation to start a course after the consultation.`,
      },
    ],
    prompt: {
      eyebrow: "Still have a question?",
      title: "Ask it at a laser hair removal consultation in Dubai.",
      body: "Your areas, session plan, and fee are answered after the skin and hair are examined. Call or WhatsApp us, or request an appointment online.",
      primary: {
        label: "Book a Laser Hair Removal Consultation",
        href: "#appointment",
      },
    },
  },
  book: {
    id: "book",
    eyebrow: "Book a Laser Hair Removal Consultation",
    title: "Start with your skin, not a session count.",
    body: "Leave your details and a coordinator will call or WhatsApp you to arrange a visit to our clinic in Dubai Healthcare City. Tell us the area. A daylight photo can help. It is not required, and it is not a quotation.",
    assurances: [
      "A reply from a coordinator at the clinic, not an automated message.",
      "The areas, the session plan, and the fee explained before a course is booked.",
      "No obligation to go ahead after the consultation.",
    ],
    formTitle: "Request an Appointment",
    formNote: "Takes under a minute. We reply on the number you leave.",
  },
  footer: {
    blurb: `Laser hair removal at ${CLINIC.name} Clinic, Dubai Healthcare City, operated by ${CLINIC.legalName}. Face and body hair reduction, planned after the skin and hair are examined.`,
    disclaimer:
      "Laser hair removal is a medical aesthetic procedure. Suitability, the number of sessions, recovery, and how much hair is reduced differ from person to person. This page is general information, not a diagnosis, a quotation, or a promise of outcome.",
    primary: {
      label: "Book a Laser Hair Removal Consultation",
      href: "#appointment",
    },
  },
  form: {
    concerns: [
      { value: "underarms", label: "Underarms" },
      { value: "arms-legs", label: "Arms or legs" },
      { value: "bikini", label: "Bikini area" },
      { value: "face", label: "Face (lip, chin, or jaw)" },
      { value: "body", label: "Back, chest, or another area" },
      { value: "several", label: "More than one area" },
      { value: "opinion", label: "I want an opinion first" },
    ],
    footnote: "Used only to reply. A course is never booked from a photograph alone.",
    source: "Laser hair removal",
  },
};
