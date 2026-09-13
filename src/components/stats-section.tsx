"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useTranslations } from "next-intl";

interface StatDef {
  target: number;
  prefix?: string;
  suffix: string;
  label: string;
  icon: string;
  raised: boolean;
}

function useCountUp(target: number, active: boolean, duration = 3000) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame: number;
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return value;
}

function StatCard({ stat, active }: { stat: StatDef; active: boolean }) {
  const value = useCountUp(stat.target, active);

  return (
    <div
      className={`p-6 rounded-2xl text-center flex flex-col items-center justify-center transform transition-transform shadow-lg ${
        stat.raised
          ? "bg-primary md:translate-y-8 hover:translate-y-6"
          : "bg-white border border-surface-variant hover:-translate-y-2"
      }`}
    >
      <span
        className={`mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full ${
          stat.raised
            ? "bg-white/10 text-secondary-fixed"
            : "bg-primary/5 text-secondary"
        }`}
      >
        <span className="material-symbols-outlined text-[22px]">{stat.icon}</span>
      </span>
      <span
        className={`font-display-lg text-[32px] md:text-[36px] leading-none mb-2 ${
          stat.raised ? "text-secondary-fixed" : "text-primary"
        }`}
      >
        {stat.prefix}
        {value}
        {stat.suffix}
      </span>
      <span
        className={`font-label-md text-label-md ${
          stat.raised ? "text-white/80" : "text-outline"
        }`}
      >
        {stat.label}
      </span>
      <span
        className={`mt-3 h-[3px] w-6 rounded-full ${
          stat.raised ? "bg-secondary-fixed-dim" : "bg-secondary"
        }`}
      />
    </div>
  );
}

export function StatsSection() {
  const t = useTranslations("stats");
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { once: true, margin: "-80px" });

  const stats: StatDef[] = [
    { target: 10, suffix: "K+", label: t("labels.clients"), icon: "groups", raised: false },
    { target: 15, suffix: "", label: t("labels.experience"), icon: "workspace_premium", raised: true },
    { target: 24, suffix: "h", label: t("labels.turnaround"), icon: "schedule", raised: true },
    { target: 100, suffix: "%", label: t("labels.compliance"), icon: "verified_user", raised: false },
  ];

  const features = t.raw("features") as { icon?: string; title: string; description: string }[];
  const featureIcons = ["verified_user", "bolt"];

  return (
    <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-container-low border-y border-surface-variant overflow-hidden">
      <div className="max-w-container-max mx-auto grid lg:grid-cols-[42%_58%] gap-10 lg:gap-16 items-center">
        {/* Left: copy + features */}
        <div className="space-y-8">
          <div className="space-y-5">
            <span className="font-label-md text-label-md text-secondary tracking-widest uppercase">
              {t("eyebrow")}
            </span>
            <h2 className="font-display-lg text-[32px] md:text-[40px] text-primary">
              {t("heading")}
            </h2>
            <span className="block h-1 w-16 rounded-full bg-secondary-fixed-dim" />
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              {t("description")}
            </p>
          </div>

          <div className="space-y-4">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 p-4 lg:p-0 rounded-2xl bg-primary/5 lg:bg-transparent"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <span className="material-symbols-outlined text-[20px]">
                    {featureIcons[i]}
                  </span>
                </span>
                <div>
                  <h3 className="font-headline-md text-[18px] font-semibold text-primary mb-1">
                    {feature.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: image (mobile only) + stat cards */}
        <div className="relative lg:h-auto">
          <div className="relative h-[300px] sm:h-[380px] lg:hidden">
            <Image
              src="/images/about/burj-khalifa.png"
              alt="Burj Khalifa, United Arab Emirates"
              fill
              sizes="100vw"
              className="object-contain object-bottom"
              priority={false}
            />
            <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-b from-transparent to-surface-container-low" />
          </div>

          <div
            ref={gridRef}
            className="relative grid grid-cols-2 gap-4 lg:gap-6 mt-6 lg:mt-0 lg:max-w-xl lg:mx-auto"
          >
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} active={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
