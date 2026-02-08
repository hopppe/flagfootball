"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "./AnimatedSection";
import { ChevronRight, X, MapPin, Mail } from "lucide-react";
import { Dialog as DialogPrimitive } from "radix-ui";

export default function Hero() {
  const t = useTranslations("hero");
  const [open, setOpen] = useState(false);

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
            <Button
              onClick={() => setOpen(true)}
              className="mt-8 bg-white text-[#155724] hover:bg-gray-100 rounded-full px-8 py-6 text-base font-bold gap-2 shadow-xl"
            >
              <ChevronRight className="size-5" />
              {t("cta")}
            </Button>
          </AnimatedSection>
        </div>

        <AnimatedSection variant="scaleIn" delay={0.2} className="relative">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/hero-players.jpg"
              alt="Flag Football Players"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover scale-[1.15] hover:scale-[1.2] transition-transform duration-700"
              priority
            />
          </div>
        </AnimatedSection>
      </div>

      {/* Try Flag Football Modal */}
      <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-8 shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
            <DialogPrimitive.Close className="absolute top-4 right-4 rounded-full p-1 text-gray-400 hover:text-gray-600 transition-colors">
              <X className="size-5" />
            </DialogPrimitive.Close>

            <div className="w-12 h-12 bg-[#155724] rounded-xl flex items-center justify-center mb-5">
              <ChevronRight className="size-6 text-white" />
            </div>

            <DialogPrimitive.Title className="text-2xl font-black text-gray-900 mb-3">
              {t("modalTitle")}
            </DialogPrimitive.Title>

            <DialogPrimitive.Description className="text-gray-600 leading-relaxed mb-6">
              {t("modalDescription")}
            </DialogPrimitive.Description>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                <MapPin className="size-5 text-[#155724] mt-0.5 flex-shrink-0" />
                <p className="text-sm font-medium text-gray-700">{t("modalPractice")}</p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <Mail className="size-5 text-[#155724] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">{t("modalContact")}</p>
                  <a href={`mailto:${t("modalEmail")}`} className="text-sm font-bold text-[#155724] hover:underline">
                    {t("modalEmail")}
                  </a>
                </div>
              </div>
            </div>

            <Button
              onClick={() => setOpen(false)}
              className="mt-6 w-full bg-[#155724] hover:bg-[#1a6b2e] text-white rounded-full py-5 font-bold"
            >
              {t("modalClose")}
            </Button>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>

      {/* Diagonal shape divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path d="M0,6V0h1000v100L0,6z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
