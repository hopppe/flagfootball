"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "./AnimatedSection";
import { ChevronRight } from "lucide-react";

export default function EveryBodyCounts() {
  const t = useTranslations("everyBody");

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
        <div>
          <AnimatedSection variant="fadeInUp">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">{t("title")}</h2>
          </AnimatedSection>
          <AnimatedSection variant="fadeInUp" delay={0.2}>
            <p className="text-gray-600 leading-relaxed mb-8">{t("description")}</p>
          </AnimatedSection>
          <AnimatedSection variant="fadeIn" delay={0.4}>
            <Button className="bg-[#155724] hover:bg-[#1a6b2e] text-white rounded-full px-8 gap-2">
              <ChevronRight className="size-4" />
              {t("cta")}
            </Button>
          </AnimatedSection>
        </div>

        <AnimatedSection variant="scaleIn" delay={0.2}>
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/images/player-action.png" alt="Flag Football Action" fill className="object-cover" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
