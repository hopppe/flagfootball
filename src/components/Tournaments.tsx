"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { MapPin, Calendar, Sun, GraduationCap } from "lucide-react";

const tournaments = [
  { key: "international", image: "/images/gallery/scrimmage.jpg" },
  { key: "local", image: "/images/gallery/outdoor-action.jpg" },
  { key: "community", image: "/images/gallery/community-event.jpg" },
  { key: "invitational", image: "/images/gallery/huddle.jpg" },
] as const;

const events2025 = [
  { key: "abuDhabi", icon: MapPin, month: "monthApr" },
  { key: "barcelona", icon: MapPin, month: "monthJun" },
  { key: "summerLeague", icon: Sun, month: "monthSummer" },
  { key: "kaust", icon: GraduationCap, month: "monthEndSummer" },
  { key: "dubai", icon: Calendar, month: "monthDec" },
] as const;

export default function Tournaments() {
  const t = useTranslations("tournaments");

  return (
    <section id="tournaments" className="py-24 px-6 bg-gradient-to-br from-[#0d3a17] via-[#155724] to-[#1a6b2e] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="mx-auto max-w-7xl relative z-10">
        <AnimatedSection variant="fadeInUp">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{t("title")}</h2>
        </AnimatedSection>
        <AnimatedSection variant="fadeInUp" delay={0.2}>
          <p className="text-white/70 max-w-2xl mb-12 leading-relaxed">{t("description")}</p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tournaments.map(({ key, image }) => (
            <StaggerItem key={key}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt={t(key)} className="w-full block" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <span className="text-base font-bold text-white">{t(key)}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* 2025 Season Recap */}
        <AnimatedSection variant="fadeInUp" delay={0.4}>
          <div className="mt-16 pt-12 border-t border-white/10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{t("season2025Title")}</h3>
            <p className="text-white/70 max-w-3xl mb-10 leading-relaxed">{t("season2025Description")}</p>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {events2025.map(({ key, icon: Icon, month }) => (
            <StaggerItem key={key}>
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/20 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="size-6 text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-white/50 uppercase tracking-wider">{t(month)}</span>
                    <h4 className="text-white font-semibold mt-1">{t(`events2025.${key}.title`)}</h4>
                    <p className="text-white/60 text-sm mt-1">{t(`events2025.${key}.description`)}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
