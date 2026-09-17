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
      className={`p-6 rounded-2xl text-center flex flex-col items-center justify-center transition-transform hover:-translate-y-1 shadow-lg ${
        stat.raised ? "bg-primary" : "bg-white border border-surface-variant"
      }`}
    >
      <span
        className={`mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full ${
          stat.raised ? "bg-secondary text-white" : "bg-primary/5 text-secondary"
        }`}
      >
        <span className="material-symbols-outlined text-[22px]">{stat.icon}</span>
      </span>
      <span
        className={`font-display-lg text-[32px] md:text-[36px] leading-none mb-2 ${
          stat.raised ? "text-white" : "text-primary"
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
      <span className="mt-3 h-[3px] w-6 rounded-full bg-secondary" />
    </div>
  );
}

export function StatsSection() {
  const t = useTranslations("stats");
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { once: true, margin: "-80px" });

  const stats: StatDef[] = [
    { target: 8000, suffix: "+", label: t("labels.clients"), icon: "groups", raised: false },
    { target: 11, suffix: "", label: t("labels.experience"), icon: "workspace_premium", raised: true },
    { target: 24, suffix: "h", label: t("labels.turnaround"), icon: "schedule", raised: true },
    { target: 100, suffix: "%", label: t("labels.compliance"), icon: "verified_user", raised: false },
  ];

  return (
    <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-container-low border-y border-surface-variant overflow-hidden">
      <div className="max-w-container-max mx-auto grid lg:grid-cols-[42%_58%] gap-10 lg:gap-16 lg:items-stretch">
        {/* Left: copy + real office photo */}
        <div className="flex flex-col gap-8">
          <div className="space-y-5">
            <span className="font-label-md text-label-md text-secondary tracking-widest uppercase">
              {t("eyebrow")}
            </span>
            <h2 className="font-display-lg text-[32px] md:text-[40px] text-primary">
              {t("heading")}
            </h2>
            <span className="block h-1 w-16 rounded-full bg-secondary" />
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl h-[300px] sm:h-[380px] lg:h-auto lg:flex-1">
            <Image
              src="/images/about/why-choose-us-office.jpg"
              alt={t("imageAlt")}
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right: stat cards */}
        <div className="relative lg:flex lg:items-center">
          <div
            ref={gridRef}
            className="relative grid grid-cols-2 gap-4 lg:gap-6 mt-6 lg:mt-0 w-full lg:max-w-xl lg:mx-auto"
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
