"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, Globe, Mail, Instagram, MapPin, X } from "lucide-react";
import { Dialog as DialogPrimitive } from "radix-ui";

const navItems = ["about", "tournaments", "teams", "media", "calendar"] as const;

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const otherLocale = locale === "en" ? "ar" : "en";
  const tc = useTranslations("contact");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/80 backdrop-blur-sm"
      }`}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-3">
        <Link href={`/${locale}`} className="flex-shrink-0 flex items-center gap-3">
          <Image src="/images/partners/ksaff.png" alt="KSAFF" width={48} height={48} priority className="rounded-full" />
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-black text-[#155724] tracking-wide">KSAFF</span>
            <span className="text-[10px] font-semibold text-gray-500 tracking-widest uppercase">Saudi Flag Football</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isPage = ["about", "tournaments", "teams", "media"].includes(item);
            return isPage ? (
              <Link
                key={item}
                href={`/${locale}/${item}`}
                className="text-sm font-semibold text-gray-700 hover:text-[#155724] transition-colors uppercase tracking-wide"
              >
                {t(item)}
              </Link>
            ) : (
              <a
                key={item}
                href={`/${locale}#${item}`}
                className="text-sm font-semibold text-gray-700 hover:text-[#155724] transition-colors uppercase tracking-wide"
              >
                {t(item)}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href={`/${otherLocale}`}>
            <Button variant="ghost" size="sm" className="gap-2 text-gray-600">
              <Globe className="size-4" />
              {t("language")}
            </Button>
          </Link>
          <Button onClick={() => setContactOpen(true)} className="bg-[#155724] hover:bg-[#1a6b2e] text-white rounded-full px-6">
            {t("contact")}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          {mounted ? (
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side={locale === "ar" ? "left" : "right"} className="w-[280px] bg-white">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-6 mt-8">
                <Image src="/images/partners/ksaff.png" alt="KSAFF" width={44} height={44} className="rounded-full" />
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => {
                    const isPage = ["about", "tournaments", "teams", "media"].includes(item);
                    return isPage ? (
                      <Link
                        key={item}
                        href={`/${locale}/${item}`}
                        onClick={() => setOpen(false)}
                        className="text-lg font-semibold text-gray-700 hover:text-[#155724] transition-colors"
                      >
                        {t(item)}
                      </Link>
                    ) : (
                      <a
                        key={item}
                        href={`/${locale}#${item}`}
                        onClick={() => setOpen(false)}
                        className="text-lg font-semibold text-gray-700 hover:text-[#155724] transition-colors"
                      >
                        {t(item)}
                      </a>
                    );
                  })}
                </nav>
                <Link href={`/${otherLocale}`}>
                  <Button variant="outline" className="w-full gap-2">
                    <Globe className="size-4" />
                    {t("language")}
                  </Button>
                </Link>
                <Button onClick={() => { setOpen(false); setContactOpen(true); }} className="bg-[#155724] hover:bg-[#1a6b2e] text-white w-full rounded-full">
                  {t("contact")}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
          ) : (
            <Button variant="ghost" size="icon">
              <Menu className="size-6" />
            </Button>
          )}
        </div>
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
    </header>
  );
}
