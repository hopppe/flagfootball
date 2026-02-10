"use client";

import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Tournaments from "@/components/Tournaments";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Trophy, Medal, Calendar, Users } from "lucide-react";

const achievements = [
  { key: "barcelona", icon: Trophy, color: "text-yellow-400", bgColor: "bg-yellow-400/10" },
  { key: "oasis", icon: Medal, color: "text-amber-500", bgColor: "bg-amber-500/10" },
  { key: "bridgeway", icon: Calendar, color: "text-blue-400", bgColor: "bg-blue-400/10" },
  { key: "ramadan", icon: Calendar, color: "text-emerald-400", bgColor: "bg-emerald-400/10" },
  { key: "womensTeam", icon: Users, color: "text-pink-400", bgColor: "bg-pink-400/10" },
] as const;

export default function TournamentsPage() {
  const t = useTranslations("tournamentsPage");

  return (
    <main>
      <Header />
      <div className="pt-20" />
      <Tournaments />

      {/* Tournaments & Achievements */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection variant="fadeInUp">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{t("achievementsTitle")}</h2>
            <div className="w-16 h-1 bg-[#155724] rounded-full mb-4" />
            <p className="text-gray-600 max-w-2xl mb-12 leading-relaxed">{t("achievementsDescription")}</p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map(({ key, icon: Icon, color, bgColor }) => (
              <StaggerItem key={key}>
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 ${bgColor} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className={`size-6 ${color}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{t(`achievements.${key}.title`)}</h3>
                      <span className="text-xs text-gray-500">{t(`achievements.${key}.date`)}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{t(`achievements.${key}.description`)}</p>
                  {t.has(`achievements.${key}.result`) && (
                    <div className="mt-4 inline-block px-3 py-1 bg-[#155724]/10 text-[#155724] text-xs font-bold rounded-full">
                      {t(`achievements.${key}.result`)}
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </main>
  );
}
