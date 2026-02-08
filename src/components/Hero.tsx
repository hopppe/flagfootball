"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "./AnimatedSection";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative bg-gradient-to-br from-[#155724] via-[#1a6b2e] to-[#0d3a17] pt-28 pb-32 overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <AnimatedSection variant="fadeInUp" delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              {t("title")}
            </h1>
          </AnimatedSection>
          <AnimatedSection variant="fadeInUp" delay={0.3}>
            <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-lg">
              {t("subtitle")}
            </p>
          </AnimatedSection>
          <AnimatedSection variant="fadeIn" delay={0.5}>
            <Button className="mt-8 bg-white text-[#155724] hover:bg-gray-100 rounded-full px-8 py-6 text-base font-bold gap-2 shadow-xl">
              <ChevronRight className="size-5" />
              {t("cta")}
            </Button>
          </AnimatedSection>
        </div>

        <AnimatedSection variant="scaleIn" delay={0.2} className="relative">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/hero-players.png"
              alt="Flag Football Players"
              fill
              className="object-cover scale-[1.15] hover:scale-[1.2] transition-transform duration-700"
              priority
            />
          </div>
        </AnimatedSection>
      </div>

      {/* Diagonal shape divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path d="M0,6V0h1000v100L0,6z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
