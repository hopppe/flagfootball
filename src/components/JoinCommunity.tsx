"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { Check, ChevronRight } from "lucide-react";

const membershipKeys = ["players", "teams", "referees", "coaches", "medical", "membership"] as const;

export default function JoinCommunity() {
  const t = useTranslations("community");

  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-gradient-to-br from-[#155724] to-[#0d3a17] rounded-3xl p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full" />
            <div className="relative z-10">
              <div className="w-2 h-12 bg-[#86efac] rounded-full mb-6" />
              <div className="text-sm font-bold text-[#86efac] uppercase tracking-widest mb-2">KSAFF</div>
            </div>
          </div>

          <div>
            <AnimatedSection variant="fadeInUp">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                {t("title")}
              </h2>
            </AnimatedSection>
            <AnimatedSection variant="fadeInUp" delay={0.2}>
              <p className="text-gray-600 leading-relaxed mb-8">
                {t("description")}
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-2 gap-3 mb-8">
              {membershipKeys.map((key) => (
                <StaggerItem key={key}>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-green-50 border border-green-100">
                    <div className="w-6 h-6 rounded-full bg-[#155724] flex items-center justify-center flex-shrink-0">
                      <Check className="size-3.5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{t(key)}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <AnimatedSection variant="fadeIn" delay={0.4}>
              <Button className="bg-[#155724] hover:bg-[#1a6b2e] text-white rounded-full px-8 gap-2">
                <ChevronRight className="size-4" />
                {t("cta")}
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
