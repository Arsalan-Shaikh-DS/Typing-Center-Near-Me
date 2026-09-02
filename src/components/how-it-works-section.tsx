import { getTranslations } from "next-intl/server";

const stepIcons = ["checklist", "cloud_upload", "keyboard", "monitoring", "task_alt"];

export async function HowItWorksSection() {
  const t = await getTranslations("howItWorks");
  const rawSteps = t.raw("steps") as { title: string; description: string }[];
  const steps = rawSteps.map((s, i) => ({ ...s, number: i + 1, icon: stepIcons[i] }));

  return (
    <section
      id="how-it-works"
      className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-container-low border-y border-surface-variant overflow-hidden"
    >
      <div className="max-w-container-max mx-auto">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="font-label-md text-label-md text-secondary tracking-widest uppercase">
            {t("eyebrow")}
          </span>
          <h2 className="font-display-lg text-primary mt-3">
            <span className="block text-[22px] md:text-[28px] font-semibold mb-1">
              {t("headingLine1")}
            </span>
            <span className="block text-[30px] md:text-[40px] leading-tight">
              {t("headingLine2")}
            </span>
          </h2>

          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="h-px w-10 bg-secondary-fixed-dim/60" />
            <span className="material-symbols-outlined icon-fill text-secondary-fixed-dim text-[16px]">
              diamond
            </span>
            <span className="h-px w-10 bg-secondary-fixed-dim/60" />
          </div>
        </div>

        {/* Timeline — mobile: vertical alternating cards */}
        <div className="md:hidden relative max-w-xl mx-auto">
          {/* Center connecting line */}
          <div className="absolute left-1/2 top-10 bottom-10 -translate-x-1/2 w-0 border-l-2 border-dashed border-secondary-fixed-dim/50" />

          <ol className="relative space-y-10">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <li
                  key={step.number}
                  className={`relative flex ${isEven ? "justify-start" : "justify-end"}`}
                >
                  {/* Card */}
                  <div
                    className={`relative w-[82%] sm:w-[76%] rounded-2xl bg-surface-container-lowest border-l-4 border-secondary-fixed-dim shadow-lg p-5 flex items-center gap-4 ${
                      isEven ? "flex-row" : "flex-row-reverse text-right"
                    }`}
                  >
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary">
                      <span className="material-symbols-outlined text-[26px]">
                        {step.icon}
                      </span>
                    </span>
                    <div>
                      <h3 className="font-headline-md text-[18px] font-semibold text-primary mb-1">
                        {step.title}
                      </h3>
                      <span
                        className={`block h-[3px] w-8 rounded-full bg-secondary-fixed-dim mb-2 ${
                          isEven ? "" : "ml-auto"
                        }`}
                      />
                      <p className="font-body-md text-[14px] text-on-surface-variant">
                        {step.description}
                      </p>
                    </div>

                    {/* Numbered marker anchored to the card's own outer edge */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 z-10 ${
                        isEven ? "-right-5" : "-left-5"
                      }`}
                    >
                      <span className="absolute inset-[-6px] rounded-full border-2 border-dashed border-secondary-fixed-dim/60 bg-surface-container-low" />
                      <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-md">
                        <span className="font-display-lg text-[18px] font-bold">
                          {step.number}
                        </span>
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Timeline — desktop/tablet: horizontal stepper */}
        <div className="hidden md:block relative pt-7">
          {/* Connecting line, aligned exactly with badge centers */}
          <div className="absolute left-[10%] right-[10%] top-7 h-0 border-t-2 border-dashed border-secondary-fixed-dim/50" />

          <div className="grid grid-cols-5 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-2xl bg-surface-container-lowest border-t-4 border-secondary-fixed-dim shadow-lg pt-10 pb-6 px-5 flex flex-col items-center text-center gap-3"
              >
                {/* Numbered badge, centered on the card's top edge */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <span className="absolute inset-[-6px] rounded-full border-2 border-dashed border-secondary-fixed-dim/60 bg-surface-container-low" />
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-md">
                    <span className="font-display-lg text-[20px] font-bold">
                      {step.number}
                    </span>
                  </span>
                </div>

                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/5 text-primary">
                  <span className="material-symbols-outlined text-[24px]">
                    {step.icon}
                  </span>
                </span>
                <h3 className="font-headline-md text-[17px] font-semibold text-primary">
                  {step.title}
                </h3>
                <span className="h-[3px] w-8 rounded-full bg-secondary-fixed-dim" />
                <p className="font-body-md text-[14px] text-on-surface-variant">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom flourish */}
        <div className="flex items-center justify-center gap-3 mt-16 md:mt-20">
          <span className="h-px w-16 bg-secondary-fixed-dim/50" />
          <span className="material-symbols-outlined icon-fill text-secondary-fixed-dim text-[20px]">
            spa
          </span>
          <span className="h-px w-16 bg-secondary-fixed-dim/50" />
        </div>
      </div>
    </section>
  );
}
