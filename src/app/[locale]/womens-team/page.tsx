"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function WomensTeamPage() {
  const t = useTranslations("womensTeam");

  return (
    <main>
      <Header />
      <div className="pt-20" />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/team-women.jpg"
          alt={t("title")}
          fill
          priority
          className="object-cover object-[center_80%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl w-full px-6 pb-12">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-3">{t("title")}</h1>
            <p className="text-lg text-white/80 max-w-2xl">{t("subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection variant="fadeInUp">
            <div>
              <span className="inline-block px-3 py-1 bg-[#155724]/10 text-[#155724] text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                {t("badge")}
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{t("storyTitle")}</h2>
              <div className="w-16 h-1 bg-[#155724] rounded-full mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">{t("storyP1")}</p>
              <p className="text-gray-600 leading-relaxed">{t("storyP2")}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Up Sponsor */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedSection variant="fadeInUp">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">{t("sponsorLabel")}</p>
            <div className="bg-white rounded-2xl p-10 shadow-md border border-gray-100 inline-flex flex-col items-center">
              <div className="w-36 h-36 flex items-center justify-center mb-4">
                <img
                  src="/images/partners/teamup.png"
                  alt="Team Up"
                  width={120}
                  height={120}
                  style={{ maxWidth: 120, maxHeight: 120, width: "auto", height: "auto", objectFit: "contain" }}
                />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Team Up</h3>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
