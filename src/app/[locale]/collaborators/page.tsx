"use client";

import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const partners = [
  { key: "kaec", logo: "/images/partners/kaec.png", descKey: "kaecDescription", darkBg: false },
  { key: "teamup", logo: "/images/partners/teamup.png", descKey: "teamupDescription", darkBg: false },
  { key: "bridgeway", logo: "/images/partners/bridgeway.png", descKey: "bridgewayDescription", darkBg: false },
  { key: "buffaloWingsRings", logo: "/images/partners/buffalo-wings-rings.png", descKey: "buffaloDescription", darkBg: false },
  { key: "sportsForAll", logo: "/images/partners/sports-for-all.png", descKey: "sportsForAllDescription", darkBg: false },
  { key: "ambitious", logo: "/images/partners/ambitious.png", descKey: "ambitiousDescription", darkBg: true },
] as const;

export default function CollaboratorsPage() {
  const t = useTranslations("collaborators");

  return (
    <main>
      <Header />
      <div className="pt-20" />

      <section className="py-24 px-6 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection variant="fadeInUp">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{t("title")}</h2>
            <div className="w-16 h-1 bg-[#155724] rounded-full mb-4" />
            <p className="text-gray-600 max-w-2xl mb-12 leading-relaxed">{t("description")}</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map(({ key, logo, descKey, darkBg }) => (
              <div key={key} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 overflow-hidden flex items-center justify-center flex-shrink-0 rounded-xl ${darkBg ? "bg-gray-900 p-2" : ""}`}>
                    <img
                      src={logo}
                      alt={t(key)}
                      width={56}
                      height={56}
                      style={{ maxWidth: 56, maxHeight: 56, width: "auto", height: "auto", objectFit: "contain" }}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-bold text-gray-900">{t(key)}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{t(descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
