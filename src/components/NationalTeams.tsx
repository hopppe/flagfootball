"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const teams = [
  { key: "men", image: "/images/team-men.jpg", gradient: "from-[#155724] to-[#0d3a17]", objectPosition: "center" },
  { key: "women", image: "/images/team-women.jpg", gradient: "from-[#1a6b2e] to-[#155724]", objectPosition: "center 80%" },
] as const;

export default function NationalTeams() {
  const t = useTranslations("teams");
  const locale = useLocale();

  return (
    <section id="teams" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection variant="fadeInUp">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{t("title")}</h2>
          <div className="w-16 h-1 bg-[#155724] rounded-full mb-12" />
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {teams.map(({ key, image, gradient, objectPosition }) => (
            <StaggerItem key={key}>
              <div className={`relative bg-gradient-to-br ${gradient} rounded-2xl overflow-hidden shadow-xl group cursor-pointer`}>
                <div className="absolute inset-0">
                  <Image src={image} alt={t(key)} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectPosition }} className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500" />
                </div>
                <div className="relative z-10 p-8 md:p-10 min-h-[280px] flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-4">{t(key)}</h3>
                  <Link href={key === "women" ? `/${locale}/womens-team` : `/${locale}/teams`}>
                    <Button variant="outline" className="w-fit border-white/30 bg-transparent text-white hover:bg-white/10 rounded-full">
                      {t("learnMore")}
                    </Button>
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
