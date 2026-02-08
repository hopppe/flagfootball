"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { Trophy, Users, Star, Sparkles, Shield, Heart } from "lucide-react";

const tournamentIcons = [
  { key: "open5v5", icon: Trophy, color: "bg-yellow-400" },
  { key: "women5v5", icon: Star, color: "bg-pink-400" },
  { key: "youthBoys", icon: Shield, color: "bg-blue-400" },
  { key: "youthGirls", icon: Sparkles, color: "bg-purple-400" },
  { key: "clubLeague", icon: Users, color: "bg-orange-400" },
  { key: "community", icon: Heart, color: "bg-green-400" },
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

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {tournamentIcons.map(({ key, icon: Icon, color }) => (
            <StaggerItem key={key}>
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/20 transition-all cursor-pointer group">
                <div className={`w-14 h-14 ${color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="size-7 text-white" />
                </div>
                <span className="text-sm font-semibold text-white">{t(key)}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
