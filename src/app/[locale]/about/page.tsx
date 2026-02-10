"use client";

import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Users, Trophy, Calendar, MapPin, Target, Check } from "lucide-react";

const journeyEvents = [
  { year: "2012", key: "j2012" },
  { year: "2013", key: "j2013" },
  { year: "2014", key: "j2014" },
  { year: "2016", key: "j2016" },
  { year: "2019", key: "j2019" },
  { year: "2023", key: "j2023" },
  { year: "2024", key: "j2024a" },
  { year: "2024", key: "j2024b" },
  { year: "2024", key: "j2024c" },
  { year: "2025", key: "j2025a" },
  { year: "2025", key: "j2025b" },
  { year: "2025", key: "j2025c" },
  { year: "2025", key: "j2025d" },
] as const;

const strategicObjectives = ["obj1", "obj2", "obj3"] as const;

const highlights = ["highlight1", "highlight2", "highlight3", "highlight4", "highlight5"] as const;

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <main>
      <Header />
      <div className="pt-20" />

      {/* Numbers */}
      <section className="py-6 px-6 bg-[#155724]" style={{ background: "linear-gradient(135deg, #0d3a17, #155724, #1a6b2e)" }}>
        <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <Users className="w-5 h-5 text-[#86efac] mx-auto mb-1" />
            <div className="text-3xl font-black text-white">130+</div>
            <div className="text-xs text-gray-300">{t("statPlayers")}</div>
          </div>
          <div className="text-center">
            <Trophy className="w-5 h-5 text-[#86efac] mx-auto mb-1" />
            <div className="text-3xl font-black text-white">14</div>
            <div className="text-xs text-gray-300">{t("statTeams")}</div>
          </div>
          <div className="text-center">
            <MapPin className="w-5 h-5 text-[#86efac] mx-auto mb-1" />
            <div className="text-3xl font-black text-white">3</div>
            <div className="text-xs text-gray-300">{t("statRegions")}</div>
          </div>
          <div className="text-center">
            <Calendar className="w-5 h-5 text-[#86efac] mx-auto mb-1" />
            <div className="text-3xl font-black text-white">13+</div>
            <div className="text-xs text-gray-300">{t("statYears")}</div>
          </div>
        </div>
      </section>

      {/* What is Flag Football */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <AnimatedSection variant="fadeInUp">
                <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">{t("title")}</h1>
                <div className="w-16 h-1 bg-[#155724] rounded-full mb-6" />
                <p className="text-gray-600 leading-relaxed mb-4">{t("introP1")}</p>
                <p className="text-gray-600 leading-relaxed mb-4">{t("introP2")}</p>
                <p className="text-gray-600 leading-relaxed">{t("introP3")}</p>
              </AnimatedSection>
            </div>
            <AnimatedSection variant="fadeInUp" delay={0.2}>
              <div className="space-y-3">
                {highlights.map((key) => (
                  <div key={key} className="flex items-start gap-3 p-3 rounded-xl bg-green-50 border border-green-100">
                    <div className="w-6 h-6 rounded-full bg-[#155724] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-sm text-gray-700 leading-relaxed">{t(key)}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection variant="fadeInUp">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{t("journeyTitle")}</h2>
            <div className="w-16 h-1 bg-[#155724] rounded-full mb-4" />
            <p className="text-gray-600 max-w-3xl leading-relaxed mb-10">{t("journeyOverview")}</p>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-[#155724]/20" />
            <div className="space-y-8">
              {journeyEvents.map(({ year, key }, i) => (
                <AnimatedSection key={key} variant="fadeInUp" delay={i * 0.05}>
                  <div className="flex gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-9 h-9 rounded-full bg-[#155724] flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-white" />
                      </div>
                    </div>
                    <div className="pb-2">
                      <span className="text-xs font-bold text-[#155724] uppercase tracking-wider">{year}</span>
                      <p className="text-gray-700 mt-1 leading-relaxed">{t(`journey.${key}`)}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2028 Olympics */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection variant="fadeInUp">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-[#155724]" />
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">{t("olympicsTitle")}</h2>
            </div>
            <div className="w-16 h-1 bg-[#155724] rounded-full mb-4" />
            <p className="text-gray-600 max-w-3xl mb-10 leading-relaxed">{t("olympicsDescription")}</p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {strategicObjectives.map((key) => (
              <StaggerItem key={key}>
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 h-full">
                  <div className="w-10 h-10 bg-[#155724]/10 rounded-xl flex items-center justify-center mb-4">
                    <Check className="w-5 h-5 text-[#155724]" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{t(key)}</p>
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
