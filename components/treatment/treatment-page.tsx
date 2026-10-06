import { Team } from "@/components/Team";
import { whatsappLink } from "@/lib/clinic";
import type { TreatmentPageContent } from "@/lib/treatment";
import { BookSection } from "./book-section";
import { DaySection } from "./day-section";
import { FaqSection } from "./faq-section";
import { HeroSection } from "./hero-section";
import { LimitsSection } from "./limits-section";
import { MethodsSection } from "./methods-section";
import { MobileBar } from "./mobile-bar";
import { ProcessSection } from "./process-section";
import { ReasonsSection } from "./reasons-section";
import { RecoverySection } from "./recovery-section";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { SuitabilitySection } from "./suitability-section";

export function TreatmentPage({ content }: { content: TreatmentPageContent }) {
  const actions = {
    callLabel: content.cta.call,
    whatsappLabel: content.cta.whatsapp,
    whatsappHref: whatsappLink(content.whatsappMessage),
  };

  return (
    <div id="top" className="bg-surface text-text">
      <SiteHeader
        brandEyebrow={content.brandEyebrow}
        nav={content.nav}
        appointmentLabel={content.cta.appointment}
      />
      <main>
        <HeroSection
          hero={content.hero}
          form={content.form}
          submitLabel={content.cta.book}
        />
        {content.why ? <ReasonsSection why={content.why} /> : null}
        {content.process ? <ProcessSection process={content.process} /> : null}
        {content.methods ? <MethodsSection methods={content.methods} /> : null}
        {content.suitability ? (
          <SuitabilitySection suitability={content.suitability} />
        ) : null}
        {content.day ? <DaySection day={content.day} /> : null}
        {content.recovery ? <RecoverySection recovery={content.recovery} /> : null}
        {content.limits ? <LimitsSection limits={content.limits} /> : null}
        {content.questions ? (
          <FaqSection questions={content.questions} actions={actions} />
        ) : null}
        {content.showTeam === false ? null : <Team />}
        <BookSection
          book={content.book}
          form={content.form}
          actions={actions}
          submitLabel={content.cta.appointment}
        />
      </main>
      <SiteFooter nav={content.nav} footer={content.footer} actions={actions} />
      <MobileBar actions={actions} appointmentLabel={content.cta.appointment} />
    </div>
  );
}
