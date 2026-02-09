"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "./AnimatedSection";
import { ChevronRight, X, Mail, Instagram, MapPin, Phone } from "lucide-react";
import { Dialog as DialogPrimitive } from "radix-ui";

export default function EveryBodyCounts() {
  const t = useTranslations("everyBody");
  const tc = useTranslations("contact");
  const [contactOpen, setContactOpen] = useState(false);

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
            <Button
              onClick={() => setContactOpen(true)}
              className="bg-[#155724] hover:bg-[#1a6b2e] text-white rounded-full px-8 gap-2"
            >
              <ChevronRight className="size-4" />
              {t("cta")}
            </Button>
          </AnimatedSection>
        </div>

        <AnimatedSection variant="scaleIn" delay={0.2}>
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/images/gallery/community-event.jpg" alt="Flag Football Action" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </AnimatedSection>
      </div>

      {/* Contact Modal */}
      <DialogPrimitive.Root open={contactOpen} onOpenChange={setContactOpen}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-8 shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
            <DialogPrimitive.Close className="absolute top-4 right-4 rounded-full p-1 text-gray-400 hover:text-gray-600 transition-colors">
              <X className="size-5" />
            </DialogPrimitive.Close>

            <div className="w-12 h-12 bg-[#155724] rounded-xl flex items-center justify-center mb-5">
              <Mail className="size-6 text-white" />
            </div>

            <DialogPrimitive.Title className="text-2xl font-black text-gray-900 mb-3">
              {tc("title")}
            </DialogPrimitive.Title>

            <DialogPrimitive.Description className="text-gray-600 leading-relaxed mb-6">
              {tc("description")}
            </DialogPrimitive.Description>

            <div className="space-y-3">
              <a href={`mailto:${tc("email")}`} className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-100 hover:bg-green-100 transition-colors">
                <Mail className="size-5 text-[#155724] flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500">{tc("emailLabel")}</p>
                  <p className="text-sm font-bold text-[#155724]">{tc("email")}</p>
                </div>
              </a>

              <a href={`tel:${tc("phone")}`} className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100 hover:bg-blue-100 transition-colors">
                <Phone className="size-5 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500">{tc("phoneLabel")}</p>
                  <p className="text-sm font-bold text-blue-600">{tc("phoneName")} — {tc("phone")}</p>
                </div>
              </a>

              <a href="https://instagram.com/flagfootballksa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-pink-50 rounded-xl border border-pink-100 hover:bg-pink-100 transition-colors">
                <Instagram className="size-5 text-pink-600 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500">{tc("instagramLabel")}</p>
                  <p className="text-sm font-bold text-pink-600">@flagfootballksa</p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <MapPin className="size-5 text-[#155724] flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500">{tc("practiceLabel")}</p>
                  <p className="text-sm font-medium text-gray-700">{tc("practice")}</p>
                </div>
              </div>
            </div>

            <Button
              onClick={() => setContactOpen(false)}
              className="mt-6 w-full bg-[#155724] hover:bg-[#1a6b2e] text-white rounded-full py-5 font-bold"
            >
              {tc("close")}
            </Button>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </section>
  );
}
