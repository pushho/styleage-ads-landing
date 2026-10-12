import { CLINIC } from "@/lib/clinic";
import type { TreatmentPageContent } from "@/lib/treatment";

export const hairTransplant: TreatmentPageContent = {
  meta: {
    title: "Hair Transplant Dubai | FUE & DHI Hair Transplant Clinic | StyleAge",
    description:
      "Hair transplant clinic in Dubai Healthcare City offering FUE, Sapphire FUE, DHI, and FUT hair restoration, plus beard and eyebrow transplant. Book a hair transplant consultation in Dubai; suitability, cost, and the treating doctor are confirmed before anything is booked.",
  },
  brandEyebrow: "Hair transplant · Dubai",
  nav: [
    { href: "#why", label: "The procedure" },
    { href: "#process", label: "Process" },
    { href: "#methods", label: "Methods" },
    { href: "#recovery", label: "Recovery" },
    { href: "#questions", label: "Questions" },
    { href: "#clinic", label: "Clinic" },
  ],
  cta: {
    book: "Book Hair Transplant Consultation",
    call: `Call ${CLINIC.name} Clinic`,
    whatsapp: "WhatsApp Us",
    appointment: "Request an Appointment",
  },
  whatsappMessage: `Hi ${CLINIC.name}, I'd like to ask about a hair transplant consultation.`,
  hero: {
    image: {
      src: "/images/hero-section.png",
      alt: "A clinician drawing a new hairline on a man's forehead before a hair transplant",
      className:
        "object-[60%_25%] sm:object-[62%_30%] lg:object-[10%_28%]",
    },
    eyebrow: "Hair transplant clinic · Dubai Healthcare City",
    title: "Hair transplant in Dubai",
    body: `FUE and DHI hair restoration at ${CLINIC.name} Clinic, Dubai Healthcare City. A consultation comes first. The hairline is drawn on the scalp, and you see it before a graft is taken. Whether a transplant is appropriate depends on your donor area, your health, and what can realistically be covered.`,
    formTitle: "Book a hair transplant consultation in Dubai",
    formBody:
      "A coordinator replies on the number you leave. You decide about a sitting after you have heard the plan.",
  },
  why: {
    id: "why",
    eyebrow: "Hair restoration in Dubai",
    title: "Your own follicles, moved from where they still grow.",
    intro:
      "A hair transplant is a surgical form of hair restoration, performed at our hair transplant clinic in Dubai Healthcare City by a licensed physician. Follicular units are taken from the donor fringe at the back and sides of the scalp and placed into areas of pattern hair loss. Dubai Health Authority describes it as a treatment option for male and female pattern hair loss when the donor area, general health, and expectations are suitable. It does not create new hair, and it does not stop future thinning of the hair left behind.",
    link: { href: "#methods", label: "Learn about our methods" },
    image: {
      src: "/images/why-portrait.jpg",
      alt: "A man in profile with a new hairline drawn on his forehead in dotted marker",
      className:
        "object-[75%_25%] sm:object-[70%_30%] lg:origin-[100%_30%] lg:scale-110 lg:object-[100%_30%] 2xl:scale-100",
    },
    reasons: [
      {
        title: "Licensed physicians",
        body: "Hair transplant is carried out by a doctor licensed to practise in Dubai, within this clinic’s facility licence and that doctor’s professional scope.",
        icon: "surgeon",
      },
      {
        title: "The method follows the exam",
        body: "FUE, Sapphire FUE, DHI, and FUT all move your own follicles. Beard, eyebrow, and PRP are discussed only when they fit that plan.",
        icon: "technology",
      },
      {
        title: "Hairline agreed in person",
        body: "Drawn on the scalp in ordinary light. You see it in a mirror before any graft is taken.",
        icon: "hairline",
      },
      {
        title: "Fee before booking",
        body: "The plan, the graft estimate, and your hair transplant cost in Dubai are explained at consultation. You can leave and decide later.",
        icon: "discreet",
      },
    ],
  },
  process: {
    id: "process",
    eyebrow: "Hair transplant consultation in Dubai",
    title: "Five steps.\nNothing booked in a hurry.",
    intro:
      "From the first hair transplant consultation to follow-up, the plan, the limits, and the fee are explained before you decide. You can stop after the consultation.",
    steps: [
      {
        title: "Consultation",
        body: "The scalp is examined, along with the type and pattern of hair loss and the donor area. Your medical history, general health, and what you hope to change are discussed. Photographs are taken. A transplant is not assumed.",
      },
      {
        title: "Planning",
        body: "If a transplant is suitable, the hairline is planned and, where it applies, a graft estimate is discussed. The safe number depends on donor density, head size, skin, age, and whether a later session may be needed.",
      },
      {
        title: "Consent",
        body: "The treating doctor explains benefits, limits, risks, cost, and whether more than one session may be required. Written consent is taken before the procedure.",
      },
      {
        title: "Procedure",
        body: "Usually one day, under local anaesthetic. You stay awake. The method agreed after the donor area is examined is the one used, including beard or eyebrow placement when that is the plan.",
      },
      {
        title: "Follow-up",
        body: "You leave with written aftercare. Growth is reviewed over the following months. Medical treatment is often advised as well, because pattern hair loss can continue in hair that was not moved.",
      },
    ],
  },
  methods: {
    id: "methods",
    image: {
      src: "/images/methods-procedure.jpg",
      alt: "A gloved clinician placing a hair graft into the scalp with fine forceps",
      className: "object-[40%_center]",
    },
    eyebrow: "Hair transplant methods",
    title: "FUE, DHI, and FUT: same donor hair, moved differently.",
    intro: `FUE, Sapphire FUE, DHI, and FUT hair transplant in Dubai are offered at ${CLINIC.name}, along with beard and eyebrow placement and PRP support. None of them creates new follicles. The examination decides which, if any, is suitable.`,
    groups: [
      {
        id: "Scalp",
        note: "Four ways to move follicles on the scalp. The donor area decides which one is even possible.",
      },
      {
        id: "Face",
        note: "Beard and eyebrow work uses the same donor hair. The direction on the face is the part that has to be right.",
      },
      {
        id: "Support",
        note: "PRP does not replace a transplant. It is only discussed when the examination supports it.",
      },
    ],
    items: [
      {
        group: "Scalp",
        name: "FUE",
        full: "Follicular Unit Excision",
        summary: "Follicles taken one by one. No strip, so no single linear scar.",
        detail:
          "Small, naturally occurring follicular units are excised with a micro-punch from the donor fringe above the ears and around the back of the head, then placed into sites opened in the area of hair loss. This is often how a larger area is covered. Tiny dot marks can remain in the donor area. How visible they are depends on hair length, healing, and how many grafts are taken.",
        icon: "fue",
      },
      {
        group: "Scalp",
        name: "Sapphire FUE",
        full: "Same harvest, different blade",
        summary: "FUE extraction. Recipient sites opened with a sapphire blade.",
        detail:
          "The grafts are still taken one by one with a punch. The difference is the blade used to open the sites where they are placed: a sapphire blade makes a narrower cut than a typical steel blade. That is a tool choice, not a different operation. It does not guarantee density, faster healing, or a better result. Donor supply, design, and how the grafts are handled matter more than the blade.",
        icon: "sapphire",
      },
      {
        group: "Scalp",
        name: "DHI",
        full: "Direct Hair Implantation",
        summary: "The same FUE harvest, placed with an implanter.",
        detail:
          "After the follicles are taken, each graft is placed with an implanter pen that sets angle, direction, and depth as it goes in. It is often used on the hairline, and where hair is added among hair that is still there. It uses the same donor hair as FUE. It does not create new follicles, and it is not a higher-density guarantee. A session can take longer per graft.",
        icon: "dhi",
      },
      {
        group: "Scalp",
        name: "FUT",
        full: "Follicular Unit Transplantation",
        summary: "A strip of donor scalp, closed as one linear scar.",
        detail:
          "A long, thin piece of skin is removed from the back of the scalp. Follicular units are dissected from that strip under magnification, and the wound is closed. Dubai Health Authority describes that closure as leaving a single fine linear scar. The scar can show if the hair above it is worn very short. FUT is sometimes considered when many grafts are planned in one session, or when punching the donor skin one follicle at a time is a poor fit. It is not scarless, and it is not chosen because it produces a better hairline.",
        icon: "fut",
      },
      {
        group: "Face",
        name: "Beard",
        full: "Beard and moustache",
        summary: "Scalp follicles placed to follow the direction of facial hair.",
        detail:
          "Follicles are usually taken from the scalp by FUE and placed into a beard, moustache, or a patch that is thin. Facial hair grows flatter against the skin than scalp hair, so the angle is planned on the face and agreed before anything is taken. Hair from the scalp keeps the growth of scalp hair, which means a transplanted beard usually needs regular trimming. How much can be covered depends on donor hair that can be spared from the scalp. A gap from scarring is assessed differently from a beard that was never dense.",
        icon: "beard",
      },
      {
        group: "Face",
        name: "Eyebrow",
        full: "Eyebrow restoration",
        summary: "A small number of fine grafts, set along the brow.",
        detail:
          "Follicles are placed to rebuild a brow that is thin, patchy, or missing after over-plucking, scarring, or a cause that has settled. Direction and curve matter more than graft count, and the shape is drawn first. Hair taken from the scalp often keeps growing longer than a natural brow, so trimming is part of aftercare. A brow that is still actively falling out is not treated until the cause is understood. The donor supply for this is small.",
        icon: "brow",
      },
      {
        group: "Support",
        name: "PRP",
        full: "Platelet-rich plasma",
        summary: "Your own plasma, sometimes used with a transplant. Not a transplant.",
        detail:
          "A sample of your blood is spun so the platelet-rich portion can be applied to the scalp. It is discussed as support around a transplant, or for early thinning, not as a replacement for a transplant. Studies of PRP for hair are mixed. It does not move follicles, it does not promise regrowth, and it is not a treatment for advanced pattern loss on its own. Whether it is suggested, and how many sessions, is decided after the scalp is examined.",
        icon: "prp",
      },
    ],
  },
  suitability: {
    id: "suitability",
    eyebrow: "Who is suitable for a hair transplant",
    title: "Pattern hair loss, a usable donor area, and a clear aim.",
    intro:
      "Dubai Health Authority standards say a person in good general health, with a good donor area and reasonable expectations, may be considered for transplantation in pattern hair loss. Suitability depends on the donor area, the type and pattern of hair loss, general health, and realistic expectations. Beard and eyebrow requests are assessed the same way: donor supply, the cause of the gap, and whether the aim can be met. The examination decides. A photograph sent in advance can start the conversation. It is not a diagnosis.",
    items: [
      {
        label: "A hairline that has moved",
        body: "Temples, or the frontal line, planned against the donor hair available. A teenage hairline is not the aim in adult pattern loss.",
      },
      {
        label: "Crown, or a widened part",
        body: "Coverage through the top, including women with pattern hair loss and a usable donor area. Not every cause of women’s hair loss is treated with a transplant.",
      },
      {
        label: "An earlier transplant",
        body: "A review of grafts already placed. The first conversation is what can be changed, what cannot, and whether the donor area can still supply hair.",
      },
      {
        label: "A beard or moustache",
        body: "A patch, a thin beard, or a shape to rebuild with scalp follicles. The direction is drawn on the skin. Scalp hair placed in a beard usually needs trimming.",
      },
      {
        label: "Eyebrows",
        body: "A brow that is thin or missing, once the cause is clear. Few grafts are used, and the curve is drawn first. Scalp hair in a brow often grows longer than brow hair and is trimmed.",
      },
    ],
  },
  day: {
    id: "day",
    eyebrow: "The day",
    title: "One sitting. You go home the same day.",
    intro:
      "Most sessions last several hours, depending on the number of grafts. Larger plans are sometimes split. Pre-operative blood tests are arranged before the day, including a blood count, clotting, and blood sugar, as required for the procedure.",
    items: [
      {
        mark: "Arrival",
        body: "Photographs first. The plan starts from the donor area you actually have, not from a graft number quoted in advance.",
      },
      {
        mark: "Design",
        body: "The hairline is drawn in ordinary light, with your age and facial proportions in view. You look in a mirror before anything is taken.",
      },
      {
        mark: "Procedure",
        body: "Local anaesthetic is used. The injections sting, then the scalp is numb. You are awake. Breaks are taken during a long sitting.",
      },
      {
        mark: "Home",
        body: "You leave the same day with written aftercare. Direct sun, swimming, and hard exercise wait until you are cleared.",
      },
    ],
  },
  recovery: {
    id: "recovery",
    eyebrow: "Hair transplant recovery",
    title: "What the year after usually involves.",
    intro:
      "These are typical stages, not a schedule that every scalp follows. Shock shedding is expected. Early growth is uneven. Proper hair growth is generally looked for from about nine months, and the result is reviewed through the first year.",
    items: [
      {
        when: "The day",
        title: "You go home",
        body: "The sitting is long, often several hours. You leave the same day with aftercare in writing, including how to sleep, wash, and what to avoid.",
      },
      {
        when: "Days 1–10",
        title: "The scalp settles",
        body: "Redness, tenderness, and swelling are common. Swelling often peaks around days 2–4. Scabs loosen over the first week or two. Desk work is often possible before day 10 if the job is not physical.",
      },
      {
        when: "Weeks 2–8",
        title: "The shed",
        body: "Transplanted hairs often fall. The follicles stay in the skin. This is expected. Hair next to the grafts can shed for a time as well.",
      },
      {
        when: "Around month 4",
        title: "Early growth",
        body: "New hair tends to show. It often comes in fine at first. Timing varies, and some people see little change at this point.",
      },
      {
        when: "About 9–12 months",
        title: "The review",
        body: "Dubai Health Authority guidance is that proper hair growth can be expected after about nine months. Direction, coverage, and the hairline are reviewed through the first year. A further session is sometimes discussed. Growth is not the same for every person.",
      },
    ],
  },
  limits: {
    id: "limits",
    eyebrow: "Limits",
    title: "What a transplant can and cannot do.",
    intro:
      "A transplant redistributes hair you already have. Coverage depends on the donor supply. The consultation is also where a procedure is declined, if the donor area, the cause of hair loss, or the aim make a transplant a poor plan.",
    items: [
      {
        title: "The donor area is finite",
        body: "Follicles are moved, not newly created. How many can be taken safely depends on the donor zone, hair density, head size, skin, the technique, your age, and the chance of a later session.",
      },
      {
        title: "Pattern loss can continue",
        body: "Hair around the transplant can keep thinning. Most people with pattern loss are advised to consider medical treatment as well as a transplant. A transplant does not stop the underlying process.",
      },
      {
        title: "More than one session may be needed",
        body: "If further work is likely, that is said before you consent, and the cost of the procedure and follow-up is set out in writing. A single sitting does not restore a full head of hair in advanced loss.",
      },
      {
        title: "Risks are part of consent",
        body: "Possible effects include swelling, redness, itching, temporary numbness, infection, bleeding, shock loss, uneven growth, visible donor marks, and a result that differs from what you hoped. Poor wound healing is uncommon and still discussed. “No risk” is not an accurate description.",
      },
    ],
  },
  questions: {
    id: "questions",
    eyebrow: "Questions",
    title: "Hair transplant in Dubai: common questions.",
    intro:
      "Cost, grafts, suitability, the procedure, and recovery. The answers describe hair transplant in general. Your own plan is confirmed only after you are examined.",
    items: [
      {
        q: "How much does a hair transplant cost in Dubai?",
        a: `The fee depends on the area to be treated, the method (FUE, Sapphire FUE, DHI, or FUT), and how many grafts your donor area can safely supply. Because those are only known after an examination, ${CLINIC.name} does not quote a fixed price online. You receive the fee in writing at the consultation, including any follow-up, before anything is booked, and you can take it away and decide later. Be cautious of a fixed price given without an examination.`,
      },
      {
        q: "How many grafts might I need?",
        a: "It depends on the size of the area, the hairline that is agreed, and how many follicles the donor area can spare without thinning it visibly. Ranges seen online, often around 1,500 to 4,000 grafts, describe other people’s cases. Your estimate is given after the donor area is examined. Some people need more than one session, and that is said before you consent.",
      },
      {
        q: "Am I suitable for a hair transplant?",
        a: "You may be if the hair loss is patterned, the donor area at the back and sides can spare follicles, your general health allows the procedure, and your expectations are realistic. Women with pattern thinning are assessed too. A transplant is not planned when the donor area is poor, when loss is diffuse, or when a medical cause is still active. In your early twenties the pattern is often still changing, so medical treatment and waiting are usually discussed first.",
      },
      {
        q: "How long does the procedure take?",
        a: "Most sessions take several hours, commonly around four to eight, depending on the number of grafts and the method. Larger plans are sometimes split over two days. It is done under local anaesthetic; you are awake, with breaks, and usually go home the same day. The procedure is carried out by a physician licensed to perform hair transplant, with licensed staff assisting.",
      },
      {
        q: "What is the recovery period?",
        a: "Redness, tenderness, and some forehead swelling are common in the first days. Small scabs usually clear within about 10 to 14 days. Between roughly two and eight weeks the transplanted hairs often shed; the follicles stay and grow new hair later. New growth tends to show around three to four months, and Dubai Health Authority guidance is that proper growth can be expected after about nine months. Recovery differs from person to person.",
      },
      {
        q: "When can I return to work?",
        a: "Many people with desk jobs return within a few days to a week. Some wait until the scabs clear at around 10 to 14 days. Physical work, hard exercise, swimming, and steam rooms wait until the doctor clears you, often a few weeks. In Dubai, keep the grafts out of direct sun in the early weeks. Your written aftercare sets out what applies to you.",
      },
      {
        q: "How is the donor area assessed?",
        a: "The doctor examines the back and sides of the scalp, usually with magnification, to check how many follicles there are per area, the thickness of the hair, and whether the donor area itself is thinning. Scalp size, skin elasticity, any scarring from an earlier procedure, your age, and the chance of a future session are also considered. Together these set how many grafts can be taken safely and which method fits.",
      },
      {
        q: "How do I book a consultation?",
        a: `Fill in the form on this page, call ${CLINIC.phone}, or message us on WhatsApp. A coordinator will reply to arrange a time with the doctor at ${CLINIC.name} Clinic, Dubai Healthcare City, open ${CLINIC.hours.days}, ${CLINIC.hours.weekdays}. A daylight photo of the hairline and crown helps but is not required. There is no obligation to go ahead after the consultation.`,
      },
    ],
    prompt: {
      eyebrow: "Still have a question?",
      title: "Ask it at a hair transplant consultation in Dubai.",
      body: "Your cost, graft estimate, and suitability are answered after the doctor examines your scalp. Call or WhatsApp us, or request an appointment online.",
      primary: { label: "Book Hair Transplant Consultation", href: "#appointment" },
    },
  },
  book: {
    id: "book",
    eyebrow: "Book Hair Transplant Consultation",
    title: "Start with a consultation, not a graft count.",
    body: "Leave your details and a coordinator will call or WhatsApp you to arrange a visit to our hair transplant clinic in Dubai Healthcare City. A daylight photo of the hairline and the top of the head helps. It is not required, and it is not a quotation.",
    assurances: [
      "A reply from a coordinator at the clinic, not an automated message.",
      "The plan, the fee, and the treating doctor’s name explained before a procedure is booked.",
      "No obligation to go ahead after the consultation.",
    ],
    formTitle: "Request an Appointment",
    formNote: "Takes under a minute. We reply on the number you leave.",
  },
  footer: {
    blurb: `Hair transplant clinic in Dubai Healthcare City, operated by ${CLINIC.legalName}. FUE, Sapphire FUE, DHI, and FUT hair restoration, including beard and eyebrow placement and PRP support.`,
    disclaimer:
      "Hair transplantation is a medical procedure. Suitability, graft numbers, recovery, and growth differ from person to person. This page is general information, not a diagnosis, a quotation, or a promise of outcome.",
    primary: { label: "Book Hair Transplant Consultation", href: "#appointment" },
  },
  form: {
    concerns: [
      { value: "hairline", label: "The hairline" },
      { value: "crown", label: "The crown" },
      { value: "density", label: "Overall density" },
      { value: "repair", label: "An earlier transplant" },
      { value: "beard", label: "Beard or moustache" },
      { value: "eyebrow", label: "Eyebrows" },
      { value: "prp", label: "PRP support" },
      { value: "opinion", label: "I want an opinion first" },
    ],
    successNote:
      "Keep {phone} nearby. A clear photograph of the hairline, and one of the top of the head in daylight, will give the conversation a head start.",
    footnote: "Used only to reply. A sitting is never booked from a photograph alone.",
  },
};
