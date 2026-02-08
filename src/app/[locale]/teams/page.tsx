"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { MapPin, Trophy } from "lucide-react";

const clubTeams = [
  { key: "alBahara", logo: "/images/teams/albaharah.png" },
  { key: "ballhawks", logo: "/images/teams/ballhawks.png" },
  { key: "cobras", logo: "/images/teams/cobras.png" },
  { key: "eagles", logo: "/images/teams/eagles.png" },
  { key: "hunters", logo: "/images/teams/hunters.png" },
  { key: "jaws", logo: "/images/teams/jaws.png" },
  { key: "reapers", logo: "/images/teams/reapers.png" },
  { key: "rebels", logo: "/images/teams/rebels.png" },
  { key: "tigers", logo: "/images/teams/tigers.png" },
] as const;

export default function TeamsPage() {
  const t = useTranslations("teamsPage");

  return (
    <main>
      <Header />
      <div className="pt-20" />

      {/* Club Teams */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection variant="fadeInUp">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{t("clubTitle")}</h2>
            <div className="w-16 h-1 bg-[#155724] rounded-full mb-4" />
            <p className="text-gray-600 max-w-2xl mb-12 leading-relaxed">{t("clubDescription")}</p>
          </AnimatedSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 16 }}>
            {clubTeams.map(({ key, logo }) => (
              <div key={key} className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group text-center h-[180px] w-full flex flex-col items-center justify-center">
                <div className="w-20 h-20 mx-auto mb-3 overflow-hidden flex items-center justify-center">
                  <img
                    src={logo}
                    alt={t(`clubs.${key}.name`)}
                    width={64}
                    height={64}
                    style={{ maxWidth: 64, maxHeight: 64, width: "auto", height: "auto", objectFit: "contain" }}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-sm">{t(`clubs.${key}.name`)}</h3>
                <p className="text-xs text-gray-500 mt-1">{t(`clubs.${key}.city`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Team Stories */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection variant="fadeInUp">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{t("storiesTitle")}</h2>
            <div className="w-16 h-1 bg-[#155724] rounded-full mb-12" />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Al Bahara */}
            <AnimatedSection variant="fadeInUp" delay={0.1}>
              <div className="bg-gradient-to-br from-[#155724] to-[#0d3a17] rounded-2xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-white/5 rounded-full" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white/10 rounded-xl p-2 flex-shrink-0 flex items-center justify-center">
                      <Image src="/images/teams/albaharah.png" alt="Al Bahara" width={48} height={48} className="object-contain" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{t("alBahara.name")}</h3>
                      <div className="flex items-center gap-1.5 text-white/60 text-sm mt-1">
                        <MapPin className="size-3.5" />
                        {t("alBahara.location")}
                      </div>
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed mb-6">{t("alBahara.description")}</p>
                  <div className="flex flex-wrap gap-2">
                    {["Abu Dhabi", "Dubai", "Jeddah"].map((city) => (
                      <span key={city} className="px-3 py-1.5 bg-white/10 rounded-full text-xs font-medium text-white/90">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Cheetahs */}
            <div>
              <div style={{ background: "linear-gradient(to bottom right, #d97706, #92400e)" }} className="rounded-2xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-white/5 rounded-full" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Trophy className="size-8" style={{ color: "#fde68a" }} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{t("cheetahs.name")}</h3>
                      <div className="flex items-center gap-1.5 text-white/60 text-sm mt-1">
                        <Trophy className="size-3.5" />
                        {t("cheetahs.achievement")}
                      </div>
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed mb-6">{t("cheetahs.description")}</p>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1.5 bg-white/10 rounded-full text-xs font-medium text-white/90">
                      Barcelona
                    </span>
                    <span style={{ backgroundColor: "rgba(245, 158, 11, 0.3)", color: "#fef3c7" }} className="px-3 py-1.5 rounded-full text-xs font-bold">
                      {t("cheetahs.badge")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
