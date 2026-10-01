import { ConsultForm } from "@/components/consult-form";
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
    title: "FUE and DHI",
    body: "Both move your own follicular units. The method is chosen after the donor area is examined.",
    icon: "technology",
  },
  {
    title: "Hairline agreed in person",
    body: "Drawn on the scalp in ordinary light. You see it in a mirror before any graft is taken.",
    icon: "hairline",
  },
  {
    title: "Fee before booking",
    body: "The plan, the graft estimate, and the fee are explained at consultation. You can leave and decide later.",
    icon: "discreet",
  },
] as const;

const steps = [
  {
    title: "Consultation",
    body: "Hair-loss pattern, donor area, general health, and what you hope to change are assessed. Photographs are taken. A transplant is not assumed.",
  },
  {
    title: "Planning",
    body: "If surgery is suitable, the hairline and a graft estimate are discussed. The safe number depends on donor density, head size, skin, age, and whether a later session may be needed.",
  },
  {
    title: "Consent",
    body: "The treating doctor explains benefits, limits, risks, cost, and whether more than one session may be required. Written consent is taken before the procedure.",
  },
  {
    title: "Procedure",
    body: "Usually one day, under local anaesthetic. You stay awake. FUE or DHI is used as agreed for your donor area.",
  },
  {
    title: "Follow-up",
    body: "You leave with written aftercare. Growth is reviewed over the following months. Medical treatment is often advised as well, because pattern hair loss can continue in hair that was not moved.",
  },
];

const methods = [
  {
    name: "FUE",
    full: "Follicular Unit Excision",
    summary: "Follicles taken one by one. No strip, so no single linear scar.",
    detail:
      "Small, naturally occurring follicular units are excised with a micro-punch from the donor fringe above the ears and around the back of the head, then placed into the area of hair loss. This is often how a larger area is covered. Tiny dot marks can remain in the donor area. How visible they are depends on hair length, healing, and how many grafts are taken.",
    icon: "fue",
  },
  {
    name: "DHI",
    full: "Direct Hair Implantation",
    summary: "The same FUE harvest, placed with an implanter.",
    detail:
      "After the follicles are taken, each graft is placed with an implanter pen that sets angle, direction, and depth as it goes in. It is often used on the hairline, and where hair is added among hair that is still there. It uses the same donor hair as FUE. It does not create new follicles, and it is not offered as a higher-density guarantee. A session can take longer per graft.",
    icon: "dhi",
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
    body: "Coverage through the top, including women with pattern hair loss and a usable donor area. Not every cause of women’s hair loss is treated with surgery.",
  },
  {
    label: "An earlier transplant",
    body: "A review of grafts already placed. The first conversation is what can be changed, what cannot, and whether the donor area can still supply hair.",
  },
];

const limits = [
  {
    title: "The donor area is finite",
    body: "Follicles are moved, not newly created. How many can be taken safely depends on the donor zone, hair density, head size, skin, the technique, your age, and the chance of a later session.",
  },
  {
    title: "Pattern loss can continue",
    body: "Hair around the transplant can keep thinning. Most people with pattern loss are advised to consider medical treatment as well as surgery. Surgery does not stop the underlying process.",
  },
  {
    title: "More than one session may be needed",
    body: "If further work is likely, that is said before you consent, and the cost of surgery and follow-up is set out in writing. A single sitting does not restore a full head of hair in advanced loss.",
  },
  {
    title: "Risks are part of consent",
    body: "Possible effects include swelling, redness, itching, temporary numbness, infection, bleeding, shock loss, uneven growth, visible donor marks, and a result that differs from what you hoped. Poor wound healing is uncommon and still discussed. “No risk” is not an accurate description.",
  },
];

const questions = [
  {
    q: "Will people be able to tell?",
    a: "The hairline is drawn so single hairs sit at the edge and the direction follows how your hair grows. Whether anyone notices depends on that design, on healing, and on your hair. It cannot be promised that a transplant will be undetectable.",
  },
  {
    q: "Does the sitting hurt?",
    a: "The local anaesthetic stings, then the scalp is numb for the procedure. You are awake. Afterwards, soreness is common and is managed with the aftercare you are given. The day is long. Absence of discomfort is not promised.",
  },
  {
    q: "How many grafts do I need?",
    a: "The count is made after the donor area is examined and the design is agreed. A figure given before that is an estimate. Published ranges you may see elsewhere — often roughly 1,500 to 4,000 grafts — describe other people’s cases, not yours.",
  },
  {
    q: "What does it cost?",
    a: "The fee follows the plan: the area to be treated and how many grafts the donor area can supply. You are given the figure at consultation, before a sitting is booked, including follow-up that applies. You can leave with it and decide later. This page does not publish a price, because a price before an examination would be a guess.",
  },
  {
    q: "Is the result permanent?",
    a: "Follicles are taken from the donor fringe, which is more resistant to pattern loss than the top of the scalp. They are not guaranteed for life. Hair that was not transplanted can continue to thin, which is why medical treatment is often discussed alongside surgery.",
  },
  {
    q: "Is this only for men?",
    a: "No. Women are assessed for a widening part, for temples, and for a hairline that has moved back, when the cause is suitable for surgery and the donor area can supply grafts. Diffuse hair loss that is not pattern loss is a reason not to operate.",
  },
  {
    q: "Who is not a candidate?",
    a: "A transplant is not planned when the donor area is poor, when hair loss is diffuse and unpatterned, or when the cause is not androgenetic. Significant health problems, a tendency to keloid scars, and expectations that cannot be met in one or more sessions are reasons to pause or decline. Early loss in younger adults is approached carefully, because the pattern is still changing.",
  },
  {
    q: "I am flying in. What should I plan?",
    a: "The sitting is usually one day. Plan to stay the night and be seen the next morning. Do not book a flight for the evening of the procedure. Blood tests are part of the pre-operative assessment. Written aftercare covers the days after you return home, and a follow-up is arranged.",
  },
];

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
              Request a consult
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
                Hair transplant in Dubai
              </p>
              <h1 className="mt-3 max-w-[12ch] font-heading text-[clamp(2.25rem,9vw,2.75rem)] leading-[1.04] font-medium tracking-[-0.035em] lg:text-[clamp(2.2rem,3.6vw,3.6rem)]">
                Agreed in the mirror, before a graft is taken.
              </h1>
              <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-muted sm:text-base">
                A consultation comes first. The hairline is drawn on the scalp,
                and you see it before a graft is taken. Whether surgery is
                appropriate depends on your donor area, your health, and what
                can realistically be covered.
              </p>
            </figcaption>
          </figure>

          <div
            id="consult"
            className="mx-4 mt-8 mb-12 flex flex-col justify-center rounded-lg border border-border bg-white p-5 shadow-card sm:mx-8 sm:p-8 lg:m-0 lg:rounded-none lg:border-y-0 lg:border-r-0 lg:border-l lg:bg-surface lg:px-8 lg:py-6 lg:shadow-none xl:px-10"
          >
            <h2 className="font-heading text-[1.5rem] leading-none font-medium tracking-tight">
              Request a consult
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
              The procedure
            </p>
            <h2 className="mt-3 max-w-[22ch] font-heading text-[clamp(1.9rem,2.8vw,2.6rem)] leading-[1.12] font-medium tracking-tight">
              Your own follicles, moved from where they still grow.
            </h2>
            <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-muted sm:text-base">
              A hair transplant is a surgical procedure. Follicular units are
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
              The process
            </p>
            <div className="lg:flex lg:justify-between lg:gap-12">
              <h2 className="mt-3 font-heading text-[clamp(2rem,3.4vw,2.85rem)] leading-[1.1] font-medium tracking-tight">
                Five steps.
                <br />
                Nothing booked in a hurry.
              </h2>
              <p className="mt-4 max-w-xl 2xl:max-w-3xl leading-relaxed text-muted">
                From the first visit to follow-up, the plan, the limits, and the
                fee are explained before you decide. You can stop after the
                consultation.
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
          className="scroll-mt-32 border-t border-border bg-white lg:grid lg:scroll-mt-24 lg:grid-cols-2"
        >
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
          <div className="flex flex-col justify-center px-5 pt-4 pb-14 sm:px-8 md:py-20 lg:px-14 xl:px-20">
            <p className="text-[0.68rem] tracking-[0.2em] text-accent-dark uppercase">
              Our methods
            </p>
            <h2 className="mt-3 max-w-[18ch] font-heading text-[clamp(2rem,3.4vw,2.85rem)] leading-[1.1] font-medium tracking-tight">
              Two ways to place the same donor hair.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted">
              FUE and DHI are offered at {CLINIC.name}. The difference is how
              the grafts are placed, not a promise of density. Strip surgery
              (FUT) is a recognised method in Dubai; it is not the method
              described on this page.
            </p>
            <div className="mt-8 grid max-w-xl gap-3">
              {methods.map((item) => (
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
        </section>

        <section id="suitability" className="border-t border-border">
          <div className="mx-auto w-full px-5 py-16 sm:px-8 md:py-20 lg:px-10">
            <p className="text-[0.68rem] tracking-[0.2em] text-accent-dark uppercase">
              Who is assessed
            </p>
            <div className="lg:flex lg:justify-between lg:gap-12">
              <h2 className="mt-3 max-w-[18ch] font-heading text-[clamp(2rem,3.4vw,2.85rem)] leading-[1.1] font-medium tracking-tight">
                Pattern hair loss, a usable donor area, and a clear aim.
              </h2>
              <p className="mt-4 max-w-xl 2xl:max-w-3xl leading-relaxed text-muted">
                Dubai Health Authority standards say a person in good general
                health, with a good donor area and reasonable expectations, may
                be considered for transplantation in pattern hair loss. The
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
              Recovery
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
              What surgery can and cannot do.
            </h2>
            <p className="mt-4 max-w-xl 2xl:max-w-3xl leading-relaxed text-muted">
              A transplant redistributes hair you already have. Coverage depends
              on the donor supply. The consultation is also where a procedure
              is declined, if the donor area, the cause of hair loss, or the
              aim make surgery a poor plan.
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
          <div className="mx-auto grid w-full gap-10 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-x-16 lg:gap-y-8 lg:px-10">
            <div>
              <p className="text-[0.68rem] tracking-[0.2em] text-accent-dark uppercase">
                Questions
              </p>
              <h2 className="mt-3 max-w-[16ch] font-heading text-[clamp(2rem,3.4vw,2.85rem)] leading-[1.1] font-medium tracking-tight">
                Answers before you book.
              </h2>
              <p className="mt-4 max-w-sm leading-relaxed text-muted">
                What people ask before a first consultation. The answers describe
                the procedure in general. Your own plan is confirmed only after
                you are examined.
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
                  <p className="max-w-xl px-4 pb-5 pl-14 text-sm leading-relaxed text-muted sm:px-6 sm:pb-6 sm:pl-17">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>

            <aside className="self-start rounded-md border border-border bg-white p-6 shadow-soft">
              <span className="flex size-11 items-center justify-center rounded-full bg-accent-wash text-accent-deep">
                <svg
                  viewBox="0 0 24 24"
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9a1.5 1.5 0 0 1-1.5 1.5H10l-4.5 4v-4h0A1.5 1.5 0 0 1 4 14.5z" />
                  <path d="M8.5 9h7M8.5 12h4" />
                </svg>
              </span>
              <p className="mt-4 font-heading text-lg font-medium tracking-tight">
                Still have a question?
              </p>
              <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-muted">
                Leave your number and a coordinator will answer it on a call
                or WhatsApp. No obligation to book.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                <a
                  href="#consult"
                  className="inline-flex items-center gap-2 bg-accent-dark px-5 py-3 text-sm text-white transition-opacity hover:opacity-90"
                >
                  Ask a coordinator
                  <ArrowRight className="size-3.5" />
                </a>
                <a
                  href={CLINIC_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-sm text-accent-dark hover:underline"
                >
                  <ContactIcon kind="whatsapp" className="size-4" />
                  WhatsApp us
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section id="clinic" className="border-t border-border bg-white">
          <div className="mx-auto grid w-full gap-12 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:px-10">
            <div>
              <p className="text-[0.68rem] tracking-[0.2em] text-accent-dark uppercase">
                The clinic
              </p>
              <h2 className="mt-3 font-heading text-[clamp(2rem,3.4vw,2.85rem)] leading-[1.1] font-medium tracking-tight">
                {CLINIC.name} Clinic, Dubai Healthcare City.
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-muted">
                This page is published by {CLINIC.legalName}. Consultations and
                procedures take place at the address below. The same clinic
                name, location, and contact details are the ones used for
                enquiries.
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                The facility licence and each doctor’s professional licence are
                displayed at the clinic. Before a procedure is booked you can
                ask for the treating physician’s name and confirmation that
                hair transplant is within that physician’s licensed scope.
                Licence numbers are not printed here; they are available at the
                premises and on request.
              </p>
            </div>
            <dl className="grid content-start gap-6 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-[0.68rem] tracking-[0.16em] text-accent-dark uppercase">
                  Legal name
                </dt>
                <dd className="mt-2 text-text">{CLINIC.legalName}</dd>
              </div>
              <div>
                <dt className="text-[0.68rem] tracking-[0.16em] text-accent-dark uppercase">
                  Service on this page
                </dt>
                <dd className="mt-2 leading-relaxed text-text">
                  Hair transplant consultation, FUE, and DHI. Other care at the
                  clinic is offered only where the facility licence and the
                  treating doctor’s licence cover it.
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-[0.68rem] tracking-[0.16em] text-accent-dark uppercase">
                  Address
                </dt>
                <dd className="mt-2 leading-relaxed text-text">
                  {CLINIC.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <a
                    href={CLINIC_LINKS.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-accent-dark hover:underline"
                  >
                    Open in Maps
                    <ArrowRight className="size-3.5" />
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.68rem] tracking-[0.16em] text-accent-dark uppercase">
                  Phone and WhatsApp
                </dt>
                <dd className="mt-2">
                  <a href={CLINIC_LINKS.phone} className="text-text hover:text-accent-dark">
                    {CLINIC.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.68rem] tracking-[0.16em] text-accent-dark uppercase">
                  Email
                </dt>
                <dd className="mt-2 break-all">
                  <a href={CLINIC_LINKS.email} className="text-text hover:text-accent-dark">
                    {CLINIC.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.68rem] tracking-[0.16em] text-accent-dark uppercase">
                  Hours
                </dt>
                <dd className="mt-2 leading-relaxed text-text">
                  {CLINIC.hours.days}
                  <span className="block">{CLINIC.hours.weekdays}</span>
                  <span className="mt-1 block text-muted">{CLINIC.hours.note}</span>
                </dd>
              </div>
              <div>
                <dt className="text-[0.68rem] tracking-[0.16em] text-accent-dark uppercase">
                  Regulator
                </dt>
                <dd className="mt-2 leading-relaxed text-text">
                  Dubai Healthcare City. The procedure is offered only where
                  the facility licence and the treating doctor’s professional
                  licence allow it.
                </dd>
              </div>
            </dl>
          </div>
        </section>

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
                Book your consultation
              </p>
              <h2 className="mt-3  font-heading text-[clamp(2.1rem,3.8vw,3.25rem)] leading-[1.08] font-medium tracking-tight">
                Start with a consultation, not a graft count.
              </h2>
              <p className="mt-5 leading-relaxed text-white/75">
                Leave your details and a coordinator will call or WhatsApp you
                to arrange a visit. A daylight photo of the hairline and the
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

              <div className="mt-10 grid max-w-xl gap-x-8 gap-y-5 border-t border-white/15 pt-8 text-sm sm:grid-cols-2">
                <a
                  href={CLINIC_LINKS.phone}
                  className="group flex items-start gap-3"
                >
                  <ContactIcon kind="phone" className="mt-0.5 size-4.5 shrink-0 text-accent-soft" />
                  <span>
                    <span className="block text-[0.68rem] tracking-[0.16em] text-white/60 uppercase">
                      Call
                    </span>
                    <span className="mt-1 block text-white group-hover:underline">
                      {CLINIC.phone}
                    </span>
                  </span>
                </a>
                <a
                  href={CLINIC_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3"
                >
                  <ContactIcon kind="whatsapp" className="mt-0.5 size-4.5 shrink-0 text-accent-soft" />
                  <span>
                    <span className="block text-[0.68rem] tracking-[0.16em] text-white/60 uppercase">
                      WhatsApp
                    </span>
                    <span className="mt-1 block text-white group-hover:underline">
                      Message us directly
                    </span>
                  </span>
                </a>
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

            <div className="min-w-0 rounded-md bg-white p-6 text-text shadow-elevated sm:p-8">
              <p className="font-heading text-[1.4rem] leading-none font-medium tracking-tight">
                Request a consult
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
              FUE and DHI hair transplant consultations at {CLINIC.legalName},
              Dubai Healthcare City. This page describes hair transplant only.
            </p>
            <a
              href="#consult"
              className="mt-6 inline-flex items-center gap-2 bg-accent-dark px-5 py-3 text-sm text-white transition-opacity hover:opacity-90"
            >
              Request a consult
              <ArrowRight className="size-3.5" />
            </a>
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
              Hair transplantation is surgery. Suitability, graft numbers,
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
            WhatsApp
          </a>
          <a
            href="#consult"
            className="flex h-12 items-center justify-center bg-accent-dark text-sm text-white"
          >
            Request a consult
          </a>
        </div>
      </div>
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

function MethodIcon({ kind }: { kind: "fue" | "dhi" }) {
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
      <path d="M7 20v-2.5a6.5 6.5 0 1 1 9.6-5.7l1.4 2.7h-1.5V17a2 2 0 0 1-2 2H13v1" />
      {kind === "fue" ? (
        <>
          <circle cx="9" cy="9" r="0.6" fill="currentColor" />
          <circle cx="11.5" cy="7.6" r="0.6" fill="currentColor" />
          <circle cx="9.6" cy="12" r="0.6" fill="currentColor" />
          <circle cx="12.4" cy="10.6" r="0.6" fill="currentColor" />
        </>
      ) : (
        <>
          <path d="M9 7.5l1.2 2M11.6 6.8l.6 2.2M8.6 10.8l1.4 1.6" />
          <path d="M13.4 9.6l1.8-1.8" />
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
