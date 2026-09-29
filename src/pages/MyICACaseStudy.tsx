import { motion } from "framer-motion";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { CaseStudyHeroMetadata } from "@/components/CaseStudyHeroMetadata";
import { cn } from "@/lib/utils";
import {
  caseStudyEditorialBodyClass,
  caseStudyHeroShellClass,
  caseStudySectionLabelClass,
  heroHeadlineClass,
  pageHorizontalPaddingClass,
  scrollAnchorClass,
} from "@/design-system";
import kaiHendryArrivalForm from "@/assets/myica/kai-hendry-arrival-form.png";
import userTesting from "@/assets/myica/ICA_usertest.jpg";
import calendarDatePicker from "@/assets/myica/datepicker.jpg";
import errorFeedback from "@/assets/myica/error.jpg";
import forcedCapitalisation from "@/assets/myica/capitalisation.jpg";

const myicaToc = [
  { id: "why-accessibility", label: "Why accessibility matters" },
  { id: "role-impact", label: "My role & impact" },
];

const MyICAHero = () => (
  <section className={caseStudyHeroShellClass}>
    <div className={cn("w-full max-w-6xl mx-auto min-w-0", pageHorizontalPaddingClass)}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={cn(heroHeadlineClass, "text-myica-accent")}
      >
        MyICA.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className={`text-neutral-200 w-full break-words mt-10 ${caseStudyEditorialBodyClass}`}
      >
        For an essential immigration service, accessibility directly affects whether someone can complete the journey independently.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`text-neutral-200 w-full break-words mt-4 ${caseStudyEditorialBodyClass}`}
      >
At IDEMIA Public Security, I worked on MyICA with accessibility as a product requirement, from WCAG-aligned design decisions to usability testing with people with disabilities.      </motion.p>

      <CaseStudyHeroMetadata
        role="Product Designer"
        contributions={[
          "Translated accessibility requirements into interaction patterns, tested them with users with disabilities, and contributed accessible patterns to the design system."
        ]}
        organization="IDEMIA Public Security"
        tools="Figma, WCAG, screen reader testing"
        timeline="3 weeks"
        labelClassName="text-myica-accent"
        valueClassName="text-neutral-100"
      />
    </div>
  </section>
);

const MyICACaseStudy = () => {
  return (
    <CaseStudyLayout
      tableOfContents={myicaToc}
      theme="dark"
      navTone="dark"
      showSidebarsAfter="why-accessibility"
      hero={
        <div className="selection:bg-myica-accent/30 font-sans">
          <MyICAHero />
        </div>
      }
    >
      <div className="selection:bg-myica-accent/30 font-sans overflow-x-hidden min-w-0">
        <section
          id="why-accessibility"
          className={cn("relative flex flex-col pt-24 md:pt-32 pb-20", scrollAnchorClass)}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="w-full max-w-4xl space-y-6 text-left">
              <p className={cn(caseStudySectionLabelClass, "text-myica-accent")}>
                Why accessibility matters
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-100 leading-tight">
                Designing accessibility into an essential public service.
              </h2>
              <figure className="w-full max-w-3xl">
                <img
                  src={kaiHendryArrivalForm}
                  alt="Kai Hendry holding a phone showing ICA’s arrival form in a 2023 YouTube video about Singapore’s arrival card"
                  className="w-full h-auto object-contain border border-white/10"
                />
                <figcaption className="mt-3 text-center text-sm text-neutral-400">
                  Kai Hendry’s experience completing ICA’s online arrival form, 2023
                </figcaption>
              </figure>
              <div className={`text-neutral-200 ${caseStudyEditorialBodyClass}`}>
                <p>
                  In early 2023, a traveller publicly documented his frustration completing ICA&apos;s web form.
                </p>
                <p>
                  What should have been a routine form quickly became frustrating. There was too much information to process. The date input took too much effort. Unfamiliar controls, repeated fields and a long review screen made a mandatory process feel harder than it needed to be.
                </p>
                <p>
                  The complaint was about usability, not accessibility. But it raised a question that stayed with me.
                </p>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-100 leading-tight pt-6">
                What does good UX mean when users can&apos;t leave?
              </h3>
              <div className={`text-neutral-200 ${caseStudyEditorialBodyClass}`}>
                <p>
                  If an ecommerce checkout is frustrating, a customer can shop elsewhere, but if an arrival process is frustrating, the traveller still needs to complete it.
                </p>
                <p>
                  For an essential public service, success isn&apos;t conversion.{" "}
                  <strong className="font-semibold text-neutral-100">It&apos;s access.</strong>
                </p>
                <p>
                  A commercial product might ask whether users converted → I cared about whether they could complete the task.
                </p>
                <p>
                  A commercial product might measure retention → I cared about whether people could complete the journey independently.
                </p>
                <p>Instead of engagement, I wanted to know where people got stuck.</p>
                <p>Instead of revenue, I looked at whether people could recover from errors.</p>
                <p>
                  And instead of stopping at abandonment, I wanted to understand why someone couldn&apos;t continue.
                </p>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-100 leading-tight pt-6">
                The accessibility misconception
              </h3>
              <div className={`text-neutral-200 ${caseStudyEditorialBodyClass}`}>
                <p>
                  Accessibility is often framed as designing for “people with disabilities”, but its impact is much broader.
                </p>
                <p>
                  As we age, changes in vision, contrast sensitivity and motor control can affect how we interact with digital products. Temporary and situational limitations can change how easily we use an interface too.
                </p>
                <p>Someone may be holding luggage in one hand at an airport. Another traveller may be reading an unfamiliar language.</p>
                <p>
                  Their circumstances are different, but they benefit from many of the same things: clear feedback, predictable interactions and forgiving interfaces.
                </p>
                <p>
                  <strong className="font-semibold text-neutral-100">
                    Accessibility is essential for some, but useful for many.
                  </strong>
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="role-impact" className={cn("relative pb-32", scrollAnchorClass)}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl space-y-6"
          >
            <p className={cn(caseStudySectionLabelClass, "text-myica-accent")}>My role & impact</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-100 leading-tight">
              I made accessibility part of the design work, not a late audit.
            </h2>
            <div className={`text-neutral-200 ${caseStudyEditorialBodyClass}`}>
              <p>
              My early work focused on translating accessibility requirements into decisions that designers, developers and product managers could act on.
              </p>
              <p>
              I also performed manual accessibility checks, including colour contrast, greyscale testing and screen-reader testing, alongside automated checks using axe DevTools.
              </p>
              <p>
              But manual and automated checks cannot replace a human experience. I wanted to understand what each issue meant for the person trying to complete the task.
              </p>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-100 leading-tight pt-6">
                On-site user testing.
              </h3>
              <p>
                Conducted an on-site user testing session with three visually impaired participants and two participants with motor impairments.
              </p>
              <figure className="w-full max-w-3xl">
                <img
                  src={userTesting}
                  alt="Shin Lee conducting on-site user testing"
                  className="w-full h-auto object-contain border border-white/10"
                />
                <figcaption className="mt-3 text-center text-sm text-neutral-400">
                  Photo by colleague while I conducted on-site user testing
                </figcaption>
              </figure>

              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-100 leading-tight pt-6">
                Finding 1: The date picker
              </h3>
              <p>
              Two visually impaired participants struggled with the date roller and used their phone's Back action to dismiss it. For one participant, this cleared the form and forced them to restart.
              </p>
              <figure className="w-full max-w-3xl">
                <img
                  src={calendarDatePicker}
                  alt="Date roller used to enter travel dates in the SG Arrival Card flow."
                  className="w-auto h-[25rem] mx-auto object-contain border border-white/10"
                />
                <figcaption className="mt-3 text-center text-sm text-neutral-400">
                 Date roller used to enter travel dates in the SG Arrival Card flow.
                </figcaption>
              </figure>
              <p>
                  <strong className="font-semibold text-neutral-100">
                    My recommendation 
                  </strong> 
                  <br/>
                  Prioritise direct text input for screen-reader users instead of the date roller.
                </p>
                <p>
                  <strong className="font-semibold text-neutral-100">
                    Trade-off
                  </strong> 
                  <br/>
                  Changing the reading order was less disruptive to the existing design, but it only moved the inaccessible interaction later rather than removing it.
                </p>
              
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-100 leading-tight pt-6">
                Finding 2: Error feedback
              </h3>
              <p>
              After a failed submission, focus moved to the erroneous field without announcing the change. Screen-reader users had to find the error themselves.
              </p>
              <figure className="w-full max-w-3xl">
                <img
                  src={errorFeedback}
                  alt="Error feedback shown after an unsuccessful form submission."
                  className="w-auto h-[25rem] mx-auto object-contain border border-white/10"
                />
                <figcaption className="mt-3 text-center text-sm text-neutral-400">
                Validation state shown after an unsuccessful form submission.
                </figcaption>
              </figure>
              <p>
                  <strong className="font-semibold text-neutral-100">
                    My recommendation 
                  </strong> 
                  <br/>
                  Announce errors immediately when focus shifts, with an accessible error summary for all outstanding issues.                
              </p>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-100 leading-tight pt-6">
                Finding 3: Forced capitalisation
              </h3>
              <p>
              ICA uses forced capitalisation in some form fields. Screen-reader users heard uppercase text differently, while participants with motor impairments tried to manually correct it.
              </p>
              <figure className="w-full max-w-3xl">
                <img
                  src={forcedCapitalisation}
                  alt="Form fields automatically convert user input to uppercase."
                  className="w-auto h-[25rem] mx-auto object-contain border border-white/10"
                />
                <figcaption className="mt-3 text-center text-sm text-neutral-400">
                 Form fields automatically convert user input to uppercase.
                </figcaption>
              </figure>
              <p>
                  <strong className="font-semibold text-neutral-100">
                    My recommendation 
                  </strong> 
                  <br/>
                  Let users type naturally and convert text to uppercase only before sending it to the backend, if required.
                </p>
                <p>
                  <strong className="font-semibold text-neutral-100">
                    Trade-off
                  </strong> 
                  <br/>
                  Removing forced capitalisation improves the input experience, but can create differences between what users enter, what is displayed and what the backend stores.
                </p>

                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-100 leading-tight pt-6">
                What I could measure
              </h3>
              <p>
              The study showed where users struggled and whether they could recover, but it wasn't designed to measure long-term product outcomes.
              </p>
              <p>
                If given the opportunity, I would track task completion, completion time, error frequency, error recovery, and accessibility conformance across releases. To help answer the bigger question of whether people can complete the journey with less friction.
              </p>
            </div>
          </motion.div>
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default MyICACaseStudy;
