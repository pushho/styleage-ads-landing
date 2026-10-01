import { ConsultForm } from "@/components/consult-form";
import { Team } from "@/components/Team";
import { CLINIC, CLINIC_LINKS } from "@/lib/clinic";

const nav = [
  { href: "#why", label: "The procedure" },
  { href: "#process", label: "Process" },
  { href: "#methods", label: "Methods" },
  { href: "#recovery", label: "Recovery" },
  { href: "#questions", label: "Questions" },
  { href: "#clinic", label: "Clinic" },
];

const reasons = [
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
] as const;

const steps = [
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
];

const methods = [
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
] as const;

const methodGroups = [
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
] as const;

const year = [
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
];

const day = [
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
];

const people = [
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
];

const limits = [
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
];

const questions = [
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
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: questions.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const assurances = [
  "A reply from a coordinator at the clinic, not an automated message.",
  "The plan, the fee, and the treating doctor’s name explained before a procedure is booked.",
  "No obligation to go ahead after the consultation.",
];

export default function Home() {
  return (
    <div id="top" className="bg-surface text-text">
      <header className="sticky top-0 z-40 border-b border-border/80 bg-surface/90 backdrop-blur-md">
        <div className="mx-auto flex w-full items-center justify-between gap-6 px-5 py-3.5 sm:px-8 lg:px-10">
          <a href="#top" className="flex items-center gap-3">
            <BrandMark />
            <span>
              <span className="block font-heading text-xl leading-none tracking-tight">
                {CLINIC.name}
              </span>
              <span className="mt-1 hidden text-[0.62rem] tracking-[0.18em] text-muted uppercase sm:block">
                Hair transplant · Dubai
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-text/80 lg:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-text">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-5">
            <a
              href={CLINIC_LINKS.phone}
              className="hidden items-center gap-2 text-sm text-text/80 hover:text-accent-dark xl:inline-flex"
            >
              <ContactIcon kind="phone" className="size-4 text-accent" />
              {CLINIC.phone}
            </a>
            <a
              href={CLINIC_LINKS.phone}
              aria-label={`Call ${CLINIC.name}`}
              className="flex size-10 items-center justify-center rounded-full bg-accent-wash text-accent-dark md:hidden"
            >
              <ContactIcon kind="phone" className="size-4.5" />
            </a>
            <a
              href="#consult"
              className="hidden bg-accent-dark px-4 py-2.5 text-sm text-white transition-opacity hover:opacity-90 md:inline-flex"
            >
              {CTA.appointment}
            </a>
          </div>
        </div>
        <nav
          aria-label="Sections"
          className="border-t border-border/80 lg:hidden"
        >
          <ul className="flex gap-1 overflow-x-auto px-3 py-1.5 [scrollbar-width:none] sm:px-6 [&::-webkit-scrollbar]:hidden">
            {nav.map((item) => (
              <li key={item.href} className="shrink-0">
                <a
                  href={item.href}
                  className="inline-flex min-h-9 items-center px-2.5 text-[0.8rem] whitespace-nowrap text-text/75 hover:text-accent-dark"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section className="lg:grid lg:min-h-[max(30rem,80svh)] lg:grid-cols-[minmax(0,1fr)_22rem] xl:grid-cols-[minmax(0,1fr)_24rem]">
          <figure className="relative overflow-hidden bg-surface">
            <div className="relative aspect-4/3 sm:aspect-video lg:absolute lg:inset-0 lg:aspect-auto">
              <img
                src="/images/hero-section.png"
                alt="A clinician drawing a new hairline on a man's forehead before a hair transplant"
                className="absolute inset-0 h-full w-full object-cover object-[60%_25%] sm:object-[62%_30%] lg:object-[10%_28%]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-y-0 left-0 hidden w-1/2 bg-linear-to-r from-surface/90 via-surface/50 to-transparent lg:block"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-surface via-surface/70 to-transparent lg:hidden"
              />
            </div>
            <figcaption className="relative -mt-14 px-5 pb-2 sm:-mt-16 sm:px-8 lg:absolute lg:inset-y-0 lg:left-0 lg:mt-0 lg:flex lg:flex-col lg:justify-center lg:px-10 lg:pb-0 xl:px-14">
              <p className="inline-flex items-center gap-2 text-[0.68rem] tracking-[0.2em] text-accent-dark uppercase">
                <span aria-hidden="true" className="h-px w-6 bg-accent lg:hidden" />
                Hair transplant clinic · Dubai Healthcare City
              </p>
              <h1 className="mt-3 max-w-[12ch] font-heading text-[clamp(2.25rem,9vw,2.75rem)] leading-[1.04] font-medium tracking-[-0.035em] lg:text-[clamp(2.2rem,3.6vw,3.6rem)]">
                Hair transplant in Dubai
              </h1>
              <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-muted sm:text-base">
                FUE and DHI hair restoration at {CLINIC.name} Clinic, Dubai
                Healthcare City. A consultation comes first. The hairline is
                drawn on the scalp, and you see it before a graft is taken.
                Whether a transplant is appropriate depends on your donor area, your
                health, and what can realistically be covered.
              </p>
            </figcaption>
          </figure>

          <div
            id="consult"
            className="mx-4 mt-8 mb-12 flex flex-col justify-center rounded-lg border border-border bg-white p-5 shadow-card sm:mx-8 sm:p-8 lg:m-0 lg:rounded-none lg:border-y-0 lg:border-r-0 lg:border-l lg:bg-surface lg:px-8 lg:py-6 lg:shadow-none xl:px-10"
          >
            <h2 className="font-heading text-[1.5rem] leading-none font-medium tracking-tight">
              Book a hair transplant consultation in Dubai
            </h2>
            <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-muted">
              A coordinator replies on the number you leave. You decide about a
              sitting after you have heard the plan.
            </p>
            <div className="mt-6 max-w-xl lg:max-w-none">
              <ConsultForm variant="aside" />
            </div>
          </div>
        </section>

        <section
          id="why"
          className="relative flex flex-col overflow-hidden border-t border-border lg:grid lg:min-h-112 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.85fr)_clamp(17rem,25vw,24rem)] 2xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.85fr)_27rem]"
        >
          <div className="relative z-10 order-1 px-5 pt-16 sm:px-8 lg:order-none lg:flex lg:flex-col lg:justify-center lg:py-16 lg:pr-8 lg:pl-10 xl:pl-14">
            <p className="text-[0.68rem] tracking-[0.2em] text-accent-dark uppercase">
              Hair restoration in Dubai
            </p>
            <h2 className="mt-3 max-w-[22ch] font-heading text-[clamp(1.9rem,2.8vw,2.6rem)] leading-[1.12] font-medium tracking-tight">
              Your own follicles, moved from where they still grow.
            </h2>
            <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-muted sm:text-base">
              A hair transplant is a surgical form of hair restoration,
              performed at our hair transplant clinic in Dubai Healthcare City
              by a licensed physician. Follicular units are
              taken from the donor fringe at the back and sides of the scalp
              and placed into areas of pattern hair loss. Dubai Health Authority
              describes it as a treatment option for male and female pattern
              hair loss when the donor area, general health, and expectations
              are suitable. It does not create new hair, and it does not stop
              future thinning of the hair left behind.
            </p>
            <a
              href="#methods"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 border border-accent px-5 py-3 text-sm text-accent-dark transition-colors hover:bg-accent hover:text-white sm:w-fit"
            >
              Learn about our methods
              <ArrowRight className="size-3.5" />
            </a>
          </div>

          <ul className="relative z-10 order-3 -mt-6 grid gap-3 px-5 pb-16 sm:-mt-10 sm:grid-cols-2 sm:gap-4 sm:px-8 lg:order-none lg:mt-0 lg:flex lg:flex-col lg:justify-center lg:gap-8 lg:px-0 lg:py-16">
            {reasons.map((item) => (
              <li
                key={item.title}
                className="flex gap-4 rounded-lg border border-border bg-white p-4 shadow-soft lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent-wash text-accent lg:mt-0.5 lg:size-auto lg:bg-transparent">
                  <ReasonIcon kind={item.icon} className="size-6 lg:size-8" />
                </span>
                <span className="min-w-0">
                  <span className="block font-heading text-base font-medium tracking-tight">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted lg:max-w-[30ch]">
                    {item.body}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <figure className="relative order-2 mt-4 aspect-square overflow-hidden sm:aspect-video lg:order-none lg:mt-0 lg:aspect-auto">
            <img
              src="/images/why-portrait.jpg"
              alt="A man in profile with a new hairline drawn on his forehead in dotted marker"
              className="absolute inset-0 h-full w-full object-cover object-[75%_25%] sm:object-[70%_30%] lg:origin-[100%_30%] lg:scale-110 lg:object-[100%_30%] 2xl:scale-100"
            />
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 hidden w-1/3 bg-linear-to-r from-surface to-transparent lg:block"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/4 bg-linear-to-b from-surface to-transparent lg:hidden"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-surface via-surface/60 to-transparent lg:hidden"
            />
          </figure>
        </section>
        <section id="process" className="border-t border-border">
          <div className="mx-auto w-full px-5 py-16 sm:px-8 md:py-20 lg:px-10">
            <p className="text-[0.68rem] tracking-[0.2em] text-accent-dark uppercase">
              Hair transplant consultation in Dubai
            </p>
            <div className="lg:flex lg:justify-between lg:gap-12">
              <h2 className="mt-3 font-heading text-[clamp(2rem,3.4vw,2.85rem)] leading-[1.1] font-medium tracking-tight">
                Five steps.
                <br />
                Nothing booked in a hurry.
              </h2>
              <p className="mt-4 max-w-xl 2xl:max-w-3xl leading-relaxed text-muted">
                From the first hair transplant consultation to follow-up, the
                plan, the limits, and the fee are explained before you decide.
                You can stop after the consultation.
              </p>
            </div>

            <ol className="mt-12 grid gap-8 lg:grid-cols-5 lg:gap-10">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="relative flex gap-4 lg:block"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent-dark text-xs font-medium text-white tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {index < steps.length - 1 && (
                    <>
                      <span
                        aria-hidden="true"
                        className="absolute top-11 -bottom-6 left-4.5 w-px bg-accent-soft lg:hidden"
                      />
                      <ArrowRight className="absolute top-2.5 -right-5 hidden size-4 translate-x-1/2 text-accent-soft-dark lg:block" />
                    </>
                  )}
                  <div>
                    <h3 className="font-heading text-lg leading-tight font-medium tracking-tight lg:mt-5">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="methods"
          className="scroll-mt-32 border-t border-border bg-white lg:scroll-mt-24"
        >
          <div className="lg:grid lg:grid-cols-2">
            <figure className="relative aspect-4/3 overflow-hidden bg-accent-wash sm:aspect-video lg:aspect-auto lg:min-h-136">
              <img
                src="/images/methods-procedure.jpg"
                alt="A gloved clinician placing a hair graft into the scalp with fine forceps"
                className="absolute inset-0 h-full w-full object-cover object-[40%_center]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-white to-transparent lg:hidden"
              />
            </figure>
            <div className="flex flex-col justify-center px-5 pt-4 pb-10 sm:px-8 md:py-20 lg:px-14 xl:px-20">
              <p className="text-[0.68rem] tracking-[0.2em] text-accent-dark uppercase">
                Hair transplant methods
              </p>
              <h2 className="mt-3 max-w-[18ch] font-heading text-[clamp(2rem,3.4vw,2.85rem)] leading-[1.1] font-medium tracking-tight">
                FUE, DHI, and FUT: same donor hair, moved differently.
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-muted">
                FUE, Sapphire FUE, DHI, and FUT hair transplant in Dubai are
                offered at {CLINIC.name},
                along with beard and eyebrow placement and PRP support. None of
                them creates new follicles. The examination decides which, if
                any, is suitable.
              </p>
            </div>
          </div>
          <div className="mx-auto w-full px-5 pb-16 sm:px-8 lg:px-10 lg:pt-10">
            {methodGroups.map((group) => (
              <div key={group.id} className="mt-10 first:mt-0">
                <h3 className="text-[0.68rem] tracking-[0.2em] text-accent-dark uppercase">
                  {group.id}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                  {group.note}
                </p>
                <div className="mt-4 grid items-start gap-3 lg:grid-cols-2">
                  {methods
                    .filter((item) => item.group === group.id)
                    .map((item) => (
                      <details
                        key={item.name}
                        className="group rounded-md border border-border bg-white shadow-soft transition-shadow open:shadow-card hover:shadow-card"
                      >
                        <summary className="flex cursor-pointer items-center gap-3.5 px-4 py-4 sm:gap-4 sm:px-5">
                          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent-wash text-accent-deep sm:size-11">
                            <MethodIcon kind={item.icon} />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="flex flex-wrap items-baseline gap-x-2">
                              <span className="font-heading text-[1.05rem] font-medium tracking-tight">
                                {item.name}
                              </span>
                              <span className="text-[0.68rem] tracking-[0.14em] text-accent-dark uppercase">
                                {item.full}
                              </span>
                            </span>
                            <span className="mt-1 block text-sm leading-snug text-muted">
                              {item.summary}
                            </span>
                          </span>
                          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent-wash text-accent-dark transition-colors group-open:bg-accent-dark group-open:text-white">
                            <ArrowRight className="size-3.5 transition-transform group-open:rotate-90" />
                          </span>
                        </summary>
                        <p className="border-t border-border px-4 py-4 text-sm leading-relaxed text-muted sm:px-5 sm:pl-20">
                          {item.detail}
                        </p>
                      </details>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="suitability" className="border-t border-border">
          <div className="mx-auto w-full px-5 py-16 sm:px-8 md:py-20 lg:px-10">
            <p className="text-[0.68rem] tracking-[0.2em] text-accent-dark uppercase">
              Who is suitable for a hair transplant
            </p>
            <div className="lg:flex lg:justify-between lg:gap-12">
              <h2 className="mt-3 max-w-[18ch] font-heading text-[clamp(2rem,3.4vw,2.85rem)] leading-[1.1] font-medium tracking-tight">
                Pattern hair loss, a usable donor area, and a clear aim.
              </h2>
              <p className="mt-4 max-w-xl 2xl:max-w-3xl leading-relaxed text-muted">
                Dubai Health Authority standards say a person in good general
                health, with a good donor area and reasonable expectations, may
                be considered for transplantation in pattern hair loss.
                Suitability depends on the donor area, the type and pattern of
                hair loss, general health, and realistic expectations. Beard and
                eyebrow requests are assessed the same way: donor supply, the
                cause of the gap, and whether the aim can be met. The
                examination decides. A photograph sent in advance can start the
                conversation. It is not a diagnosis.
              </p>
            </div>
            <ul className="mt-12 grid gap-6 md:grid-cols-3">
              {people.map((item) => (
                <li
                  key={item.label}
                  className="border-t border-border pt-5"
                >
                  <h3 className="font-heading text-lg font-medium tracking-tight">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="day" className="border-t border-border bg-white">
          <div className="mx-auto grid w-full gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16 lg:px-10">
            <div>
              <p className="text-[0.68rem] tracking-[0.2em] text-accent-dark uppercase">
                The day
              </p>
              <h2 className="mt-3 font-heading text-[clamp(2rem,3.4vw,2.85rem)] leading-[1.1] font-medium tracking-tight">
                One sitting. You go home the same day.
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-muted">
                Most sessions last several hours, depending on the number of
                grafts. Larger plans are sometimes split. Pre-operative blood
                tests are arranged before the day, including a blood count,
                clotting, and blood sugar, as required for the procedure.
              </p>
            </div>
            <ol className="grid gap-6">
              {day.map((item, index) => (
                <li key={item.mark} className="flex gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent-dark text-xs font-medium text-white tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-heading text-lg font-medium tracking-tight">
                      {item.mark}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">
                      {item.body}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="recovery" className="border-t border-border">
          <div className="mx-auto w-full px-5 py-16 sm:px-8 md:py-20 lg:px-10">
            <p className="text-[0.68rem] tracking-[0.2em] text-accent-dark uppercase">
              Hair transplant recovery
            </p>
            <div className="lg:flex lg:justify-between lg:gap-12">
              <h2 className="mt-3 max-w-[16ch] font-heading text-[clamp(2rem,3.4vw,2.85rem)] leading-[1.1] font-medium tracking-tight">
                What the year after usually involves.
              </h2>
              <p className="mt-4 max-w-xl 2xl:max-w-3xl leading-relaxed text-muted">
                These are typical stages, not a schedule that every scalp
                follows. Shock shedding is expected. Early growth is uneven.
                Proper hair growth is generally looked for from about nine months,
                and the result is reviewed through the first year.
              </p>
            </div>
            <ol className="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-5">
              {year.map((item) => (
                <li key={item.when} className="border-t border-accent-soft pt-5">
                  <p className="text-[0.68rem] tracking-[0.16em] text-accent-dark uppercase">
                    {item.when}
                  </p>
                  <h3 className="mt-2 font-heading text-lg font-medium tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="limits" className="border-t border-border bg-white">
          <div className="mx-auto w-full px-5 py-16 sm:px-8 md:py-20 lg:px-10">
            <p className="text-[0.68rem] tracking-[0.2em] text-accent-dark uppercase">
              Limits
            </p>
            <div className="lg:flex lg:justify-between lg:gap-12">
              
            <h2 className="mt-3 max-w-[20ch] font-heading text-[clamp(2rem,3.4vw,2.85rem)] leading-[1.1] font-medium tracking-tight">
              What a transplant can and cannot do.
            </h2>
            <p className="mt-4 max-w-xl 2xl:max-w-3xl leading-relaxed text-muted">
              A transplant redistributes hair you already have. Coverage depends
              on the donor supply. The consultation is also where a procedure
              is declined, if the donor area, the cause of hair loss, or the
              aim make a transplant a poor plan.
            </p>
            </div>
            <ul className="mt-12 grid gap-6 sm:grid-cols-2">
              {limits.map((item) => (
                <li
                  key={item.title}
                  className="rounded-md border border-border bg-surface p-6"
                >
                  <h3 className="font-heading text-lg font-medium tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="questions"
          className="scroll-mt-32 border-t border-border lg:scroll-mt-24"
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
            }}
          />
          <div className="mx-auto grid w-full gap-10 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-x-16 lg:gap-y-8 lg:px-10">
            <div>
              <p className="text-[0.68rem] tracking-[0.2em] text-accent-dark uppercase">
                Questions
              </p>
              <h2 className="mt-3 max-w-[16ch] font-heading text-[clamp(2rem,3.4vw,2.85rem)] leading-[1.1] font-medium tracking-tight">
                Hair transplant in Dubai: common questions.
              </h2>
              <p className="mt-4 max-w-sm leading-relaxed text-muted">
                Cost, grafts, suitability, the procedure, and recovery. The
                answers describe hair transplant in general. Your own plan is
                confirmed only after you are examined.
              </p>
            </div>

            <div className="grid content-start gap-3 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              {questions.map((item, index) => (
                <details
                  key={item.q}
                  name="faq"
                  open={index === 0}
                  className="faq group rounded-md border border-border bg-white transition-shadow open:shadow-card hover:shadow-soft"
                >
                  <summary className="flex cursor-pointer items-center gap-4 px-4 py-4 sm:gap-5 sm:px-6 sm:py-5">
                    <span className="w-6 shrink-0 text-xs text-accent tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1 font-heading text-base font-medium tracking-tight sm:text-lg">
                      {item.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent-wash text-accent-dark transition-colors group-open:bg-accent-dark group-open:text-white"
                    >
                      <svg
                        viewBox="0 0 16 16"
                        className="size-3.5 transition-transform duration-300 group-open:rotate-45"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      >
                        <path d="M8 3v10M3 8h10" />
                      </svg>
                    </span>
                  </summary>
                  <p className="px-4 pb-5 pl-14 text-sm leading-relaxed text-muted sm:px-6 sm:pb-6 sm:pl-17">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>

            <div className="rounded-md border border-border bg-accent-wash p-6 sm:p-8 lg:col-start-1 lg:row-start-2 lg:self-end">
              <p className="text-[0.68rem] tracking-[0.2em] text-accent-dark uppercase">
                Still have a question?
              </p>
              <p className="mt-3 max-w-[22ch] font-heading text-[1.6rem] leading-[1.15] font-medium tracking-tight">
                Ask it at a hair transplant consultation in Dubai.
              </p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                Your cost, graft estimate, and suitability are answered after
                the doctor examines your scalp. Call or WhatsApp us, or request
                an appointment online.
              </p>
              <div className="mt-6">
                <CtaButtons
                  primary={{ label: CTA.book, href: "#appointment" }}
                  stack
                />
              </div>
            </div>
          </div>
        </section>

        <Team />

        <section
          id="book"
          className="relative isolate overflow-hidden bg-accent-dark text-white"
        >
          <svg
            viewBox="0 0 800 400"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -left-24 -z-10 w-4xl max-w-none text-white/10"
          >
            <path
              d="M40 330 C 140 150, 300 80, 460 110 S 700 200, 780 120"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeDasharray="2 14"
              strokeLinecap="round"
            />
            <path
              d="M20 380 C 150 210, 310 150, 470 175 S 710 260, 790 190"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="2 12"
              strokeLinecap="round"
            />
          </svg>

          <div className="mx-auto grid w-full items-center gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] lg:gap-20 lg:px-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,30rem)]">
            <div>
              <p className="text-[0.68rem] tracking-[0.2em] text-accent-soft uppercase">
                {CTA.book}
              </p>
              <h2 className="mt-3  font-heading text-[clamp(2.1rem,3.8vw,3.25rem)] leading-[1.08] font-medium tracking-tight">
                Start with a consultation, not a graft count.
              </h2>
              <p className="mt-5 leading-relaxed text-white/75">
                Leave your details and a coordinator will call or WhatsApp you
                to arrange a visit to our hair transplant clinic in Dubai
                Healthcare City. A daylight photo of the hairline and the
                top of the head helps. It is not required, and it is not a
                quotation.
              </p>

              <ul className="mt-8 grid max-w-md gap-4">
                {assurances.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-px flex size-5 shrink-0 items-center justify-center rounded-full bg-white/15">
                      <svg
                        viewBox="0 0 12 12"
                        className="size-2.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M2.5 6.2l2.3 2.3 4.7-4.9" />
                      </svg>
                    </span>
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <CtaButtons tone="dark" />
              </div>

              <div className="mt-10 grid max-w-xl gap-x-8 gap-y-5 border-t border-white/15 pt-8 text-sm sm:grid-cols-2">
                <a
                  href={CLINIC_LINKS.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3"
                >
                  <PinIcon className="mt-0.5 size-4.5 shrink-0 text-accent-soft" />
                  <span>
                    <span className="block text-[0.68rem] tracking-[0.16em] text-white/60 uppercase">
                      Visit
                    </span>
                    <span className="mt-1 block text-white group-hover:underline">
                      Dubai Healthcare City
                    </span>
                  </span>
                </a>
                <div className="flex items-start gap-3">
                  <ContactIcon kind="clock" className="mt-0.5 size-4.5 shrink-0 text-accent-soft" />
                  <span>
                    <span className="block text-[0.68rem] tracking-[0.16em] text-white/60 uppercase">
                      Open
                    </span>
                    <span className="mt-1 block text-white">
                      {CLINIC.hours.days}
                    </span>
                    <span className="block text-white/75">
                      {CLINIC.hours.weekdays}
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div
              id="appointment"
              className="min-w-0 scroll-mt-28 rounded-md bg-white p-6 text-text shadow-elevated sm:p-8"
            >
              <p className="font-heading text-[1.4rem] leading-none font-medium tracking-tight">
                {CTA.appointment}
              </p>
              <p className="mt-2.5 mb-6 text-sm leading-relaxed text-muted">
                Takes under a minute. We reply on the number you leave.
              </p>
              <ConsultForm variant="closing" />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white pb-28 md:pb-0">
        <div className="mx-auto grid w-full gap-x-6 gap-y-10 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)_minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-12 lg:px-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#top" className="flex w-fit items-center gap-3">
              <BrandMark />
              <span>
                <span className="block font-heading text-xl leading-none tracking-tight">
                  {CLINIC.name}
                </span>
                <span className="mt-1 block text-[0.62rem] tracking-[0.18em] text-muted uppercase">
                  {CLINIC.tagline}
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Hair transplant clinic in Dubai Healthcare City, operated by{" "}
              {CLINIC.legalName}. FUE, Sapphire FUE, DHI, and FUT hair
              restoration, including beard and eyebrow placement and PRP
              support.
            </p>
            <div className="mt-6 max-w-xs">
              <CtaButtons
                primary={{ label: CTA.book, href: "#appointment" }}
                stack
              />
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="text-[0.68rem] tracking-[0.2em] text-accent-dark uppercase">
              Explore
            </p>
            <ul className="mt-2 grid text-sm lg:mt-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-10 items-center text-text/80 transition-colors hover:text-accent-dark lg:min-h-9"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[0.68rem] tracking-[0.2em] text-accent-dark uppercase">
              Contact
            </p>
            <ul className="mt-2 grid text-sm lg:mt-3">
              <li>
                <a
                  href={CLINIC_LINKS.phone}
                  className="inline-flex min-h-10 items-center gap-2 text-text/80 hover:text-accent-dark lg:min-h-9"
                >
                  <ContactIcon kind="phone" className="size-4 shrink-0 text-accent" />
                  {CLINIC.phone}
                </a>
              </li>
              <li>
                <a
                  href={CLINIC_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-2 text-text/80 hover:text-accent-dark lg:min-h-9"
                >
                  <ContactIcon kind="whatsapp" className="size-4 shrink-0 text-accent" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={CLINIC_LINKS.email}
                  className="inline-flex min-h-10 items-center gap-2 break-all text-text/80 hover:text-accent-dark lg:min-h-9"
                >
                  <ContactIcon kind="mail" className="size-4 shrink-0 text-accent" />
                  {CLINIC.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-[0.68rem] tracking-[0.2em] text-accent-dark uppercase">
              Visit
            </p>
            <address className="mt-4 text-sm leading-relaxed text-text/80 not-italic">
              {CLINIC.legalName}
              {CLINIC.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <a
              href={CLINIC_LINKS.map}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-1.5 text-sm text-accent-dark hover:underline"
            >
              Get directions
              <ArrowRight className="size-3.5" />
            </a>
            <p className="mt-5 text-sm leading-relaxed text-text/80">
              {CLINIC.hours.days}
              <span className="block">{CLINIC.hours.weekdays}</span>
            </p>
            <p className="mt-1.5 max-w-xs text-xs leading-relaxed text-muted">
              {CLINIC.hours.note}
            </p>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="mx-auto flex w-full flex-col gap-3 px-5 py-6 text-xs leading-relaxed text-muted sm:px-8 md:flex-row md:items-center md:justify-between md:gap-10 lg:px-10">
            <p>
              © {new Date().getFullYear()} {CLINIC.name} {CLINIC.tagline}. All
              rights reserved.
            </p>
            <p className="max-w-xl md:text-right">
              Hair transplantation is a medical procedure. Suitability, graft numbers,
              recovery, and growth differ from person to person. This page is
              general information, not a diagnosis, a quotation, or a promise
              of outcome.
            </p>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
        <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-2">
          <a
            href={CLINIC_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center gap-2 border border-accent-dark px-4 text-sm text-accent-dark"
          >
            <ContactIcon kind="whatsapp" className="size-4.5" />
            {CTA.whatsapp}
          </a>
          <a
            href="#appointment"
            className="flex h-12 items-center justify-center bg-accent-dark text-sm text-white"
          >
            {CTA.appointment}
          </a>
        </div>
      </div>
    </div>
  );
}

const CTA = {
  book: "Book Hair Transplant Consultation",
  call: `Call ${CLINIC.name} Clinic`,
  whatsapp: "WhatsApp Us",
  appointment: "Request an Appointment",
};

function CtaButtons({
  primary,
  tone = "light",
  stack = false,
}: {
  primary?: { label: string; href: string };
  tone?: "light" | "dark";
  stack?: boolean;
}) {
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 px-5 text-sm transition-colors";
  const secondary =
    tone === "dark"
      ? "border border-white/35 text-white hover:bg-white/10"
      : "border border-accent-dark/35 bg-white text-accent-dark hover:border-accent-dark hover:bg-accent-wash";

  return (
    <div
      className={
        stack
          ? "grid gap-2.5"
          : "flex flex-col gap-2.5 sm:flex-row sm:flex-wrap"
      }
    >
      {primary && (
        <a
          href={primary.href}
          className={`${base} bg-accent-dark text-white hover:bg-accent`}
        >
          {primary.label}
          <ArrowRight className="size-3.5" />
        </a>
      )}
      <a href={CLINIC_LINKS.phone} className={`${base} ${secondary}`}>
        <ContactIcon kind="phone" className="size-4" />
        {CTA.call}
      </a>
      <a
        href={CLINIC_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${secondary}`}
      >
        <ContactIcon kind="whatsapp" className="size-4" />
        {CTA.whatsapp}
      </a>
    </div>
  );
}

function BrandMark() {
  return (
    <span className="relative block size-10 shrink-0 overflow-hidden">
      <img
        src="/styleage-logo.png"
        alt=""
        className="absolute top-0 left-1/2 w-18 max-w-none -translate-x-1/2"
        width={128}
        height={128}
      />
    </span>
  );
}

function PinIcon({ className = "size-4 shrink-0" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 14.5s4.5-4.2 4.5-8a4.5 4.5 0 0 0-9 0c0 3.8 4.5 8 4.5 8z" />
      <circle cx="8" cy="6.5" r="1.6" />
    </svg>
  );
}

function ContactIcon({
  kind,
  className,
}: {
  kind: "phone" | "whatsapp" | "mail" | "clock";
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {kind === "phone" && (
        <path d="M5.5 3.5h3l1.5 4.2-2 1.3a11.5 11.5 0 0 0 7 7l1.3-2 4.2 1.5v3a2 2 0 0 1-2 2A16.5 16.5 0 0 1 3.5 5.5a2 2 0 0 1 2-2z" />
      )}
      {kind === "whatsapp" && (
        <>
          <path d="M3.5 20.5l1.3-4.3a8.6 8.6 0 1 1 3.1 3.1z" />
          <path d="M9.2 8.3c.2-.4.5-.5.8-.5h.5l.9 2.1-.7.9a5.2 5.2 0 0 0 2.5 2.5l.9-.7 2.1.9v.5c0 .3-.1.6-.5.8-1.6.9-4.2-.3-5.6-1.8-1.4-1.4-2.6-4-1.7-5.7z" />
        </>
      )}
      {kind === "mail" && (
        <>
          <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
          <path d="M4 6.5l8 6 8-6" />
        </>
      )}
      {kind === "clock" && (
        <>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l3 2" />
        </>
      )}
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2.5 8h11M9.5 4l4 4-4 4" />
    </svg>
  );
}

function ReasonIcon({
  kind,
  className = "size-8",
}: {
  kind: "surgeon" | "technology" | "hairline" | "discreet";
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {kind === "surgeon" && (
        <>
          <circle cx="16" cy="10" r="4.5" />
          <path d="M7 27v-2.5a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6V27" />
          <path d="M13 18.5l3 4 3-4" />
          <path d="M22 21.5v2.5a1.5 1.5 0 1 1-3 0" />
        </>
      )}
      {kind === "technology" && (
        <>
          <path d="M10 27v-3a8.5 8.5 0 1 1 12.4-7.6l1.8 3.6h-2v3.2a2.3 2.3 0 0 1-2.3 2.3H18v1.5" />
          <circle cx="15" cy="14" r="3" />
          <path d="M15 9.5V11M15 17v1.5M10.5 14H12M18 14h1.5" />
        </>
      )}
      {kind === "hairline" && (
        <>
          <path d="M10 27v-3a8.5 8.5 0 1 1 12.4-7.6l1.8 3.6h-2v3.2a2.3 2.3 0 0 1-2.3 2.3H18v1.5" />
          <path d="M9.5 13.5c1.5-3.5 5-5.2 9-4.4" strokeDasharray="1.4 1.8" />
        </>
      )}
      {kind === "discreet" && (
        <>
          <path d="M16 4.5l9 3.5v7c0 6-4 10.5-9 12.5-5-2-9-6.5-9-12.5V8z" />
          <path d="M16 20.5s-4.5-2.8-4.5-6a2.4 2.4 0 0 1 4.5-1.2 2.4 2.4 0 0 1 4.5 1.2c0 3.2-4.5 6-4.5 6z" />
        </>
      )}
    </svg>
  );
}

function MethodIcon({
  kind,
}: {
  kind: "fue" | "sapphire" | "dhi" | "fut" | "beard" | "brow" | "prp";
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6"
      aria-hidden="true"
    >
      {kind === "prp" ? (
        <>
          <path d="M12 3.5c2.2 3 5 5.6 5 9a5 5 0 0 1-10 0c0-3.4 2.8-6 5-9z" />
          <path d="M12 11.5v3.5" />
        </>
      ) : (
        <>
          <path d="M7 20v-2.5a6.5 6.5 0 1 1 9.6-5.7l1.4 2.7h-1.5V17a2 2 0 0 1-2 2H13v1" />
          {kind === "fue" && (
            <>
              <circle cx="9" cy="9" r="0.6" fill="currentColor" />
              <circle cx="11.5" cy="7.6" r="0.6" fill="currentColor" />
              <circle cx="9.6" cy="12" r="0.6" fill="currentColor" />
              <circle cx="12.4" cy="10.6" r="0.6" fill="currentColor" />
            </>
          )}
          {kind === "sapphire" && (
            <path d="M12 6.2l2.2 3.6h-4.4z" />
          )}
          {kind === "dhi" && (
            <>
              <path d="M9 7.5l1.2 2M11.6 6.8l.6 2.2M8.6 10.8l1.4 1.6" />
              <path d="M13.4 9.6l1.8-1.8" />
            </>
          )}
          {kind === "fut" && <path d="M8.2 11.2h5.2" />}
          {kind === "beard" && (
            <path d="M8.4 12.2c.8 1.6 2 2.4 3.4 2.4s2.6-.8 3.4-2.4" />
          )}
          {kind === "brow" && <path d="M8.2 8.4c1.2-.8 2.4-.6 3.4.2" />}
        </>
      )}
    </svg>
  );
}

function RuledEdge() {
  const hairs = Array.from({ length: 16 }, (_, index) => 14 + index * 12);
  return (
    <svg viewBox="0 0 220 148" className="h-auto w-full" aria-hidden="true">
      <rect x="0" y="96" width="220" height="52" fill="#ebe3db" />
      <line x1="0" y1="96" x2="220" y2="96" stroke="#c4a995" strokeWidth="1.25" />
      {hairs.map((x) => (
        <line
          key={x}
          x1={x}
          y1="96"
          x2={x}
          y2="34"
          stroke="#1e1e1e"
          strokeWidth="1.15"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

function AgreedEdge() {
  const hairs: Array<[number, number, number, number]> = [
    [12, 100, 10, 46],
    [24, 90, 26, 28],
    [36, 96, 33, 42],
    [48, 86, 50, 50],
    [62, 102, 59, 36],
    [74, 88, 77, 24],
    [88, 94, 85, 40],
    [102, 108, 104, 58],
    [116, 90, 114, 32],
    [130, 84, 133, 48],
    [144, 100, 141, 30],
    [158, 92, 161, 52],
    [172, 106, 169, 38],
    [186, 88, 189, 26],
    [200, 96, 197, 44],
  ];
  const singles: Array<[number, number, number, number]> = [
    [54, 112, 52, 90],
    [96, 118, 98, 96],
    [148, 114, 146, 92],
    [178, 116, 180, 94],
  ];

  return (
    <svg viewBox="0 0 220 148" className="h-auto w-full" aria-hidden="true">
      <path
        d="M0 98 C 28 84, 52 110, 86 92 C 118 76, 142 112, 176 90 C 198 76, 210 98, 220 92 L 220 148 L 0 148 Z"
        fill="#ebe3db"
      />
      {hairs.map(([x1, y1, x2, y2]) => (
        <line
          key={`${x1}-${y2}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#1e1e1e"
          strokeWidth="1.15"
          strokeLinecap="round"
        />
      ))}
      {singles.map(([x1, y1, x2, y2]) => (
        <line
          key={`s-${x1}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#8f4f42"
          strokeWidth="1.05"
          strokeLinecap="round"
        />
      ))}
      <path
        d="M0 98 C 28 84, 52 110, 86 92 C 118 76, 142 112, 176 90 C 198 76, 210 98, 220 92"
        fill="none"
        stroke="#a65d4e"
        strokeWidth="1.35"
        strokeLinecap="round"
        pathLength={980}
        className="hairline-draw"
      />
    </svg>
  );
}
