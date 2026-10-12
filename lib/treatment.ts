export type NavLink = {
  href: string;
  label: string;
};

export type TreatmentImage = {
  src: string;
  alt: string;
  className?: string;
};

export type ReasonIcon =
  | "surgeon"
  | "technology"
  | "hairline"
  | "discreet"
  | "course";

export type MethodIcon =
  | "fue"
  | "sapphire"
  | "dhi"
  | "fut"
  | "beard"
  | "brow"
  | "prp";

export type FormConcern = {
  value: string;
  label: string;
};

type SectionCopy = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  titleClassName?: string;
};

export type TreatmentPageContent = {
  meta: {
    title: string;
    description: string;
  };
  brandEyebrow: string;
  nav: NavLink[];
  cta: {
    book: string;
    call: string;
    whatsapp: string;
    appointment: string;
  };
  whatsappMessage: string;
  hero: {
    image: TreatmentImage;
    eyebrow: string;
    title: string;
    titleClassName?: string;
    body: string;
    bodyClassName?: string;
    formTitle: string;
    formBody: string;
  };
  why?: SectionCopy & {
    link: { href: string; label: string };
    image: TreatmentImage;
    reasons: { title: string; body: string; icon: ReasonIcon }[];
  };
  process?: SectionCopy & {
    steps: { title: string; body: string }[];
  };
  methods?: SectionCopy & {
    image: TreatmentImage;
    groups: { id: string; note: string }[];
    items: {
      group: string;
      name: string;
      full: string;
      summary: string;
      detail: string;
      icon: MethodIcon;
    }[];
  };
  suitability?: SectionCopy & {
    items: { label: string; body: string }[];
  };
  day?: SectionCopy & {
    items: { mark: string; body: string }[];
  };
  recovery?: SectionCopy & {
    items: { when: string; title: string; body: string }[];
  };
  limits?: SectionCopy & {
    items: { title: string; body: string }[];
  };
  questions?: SectionCopy & {
    items: { q: string; a: string }[];
    prompt: {
      eyebrow: string;
      title: string;
      titleClassName?: string;
      body: string;
      primary: { label: string; href: string };
    };
  };
  book: {
    id: string;
    eyebrow: string;
    title: string;
    body: string;
    assurances: string[];
    formTitle: string;
    formNote: string;
  };
  footer: {
    blurb: string;
    disclaimer: string;
    primary: { label: string; href: string };
  };
  form: {
    concerns: FormConcern[];
    successNote: string;
    footnote: string;
    source?: string;
  };
  showTeam?: boolean;
};

export type TreatmentActions = {
  callLabel: string;
  whatsappLabel: string;
  whatsappHref: string;
};
