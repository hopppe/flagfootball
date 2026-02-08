"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, Globe } from "lucide-react";

const navItems = ["about", "tournaments", "teams", "calendar"] as const;

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const otherLocale = locale === "en" ? "ar" : "en";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
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
        <Link href={`/${locale}`} className="flex-shrink-0">
          <Image src="/images/logo.svg" alt="KSAFF" width={140} height={56} priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-sm font-semibold text-gray-700 hover:text-[#155724] transition-colors uppercase tracking-wide"
            >
              {t(item)}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href={`/${otherLocale}`}>
            <Button variant="ghost" size="sm" className="gap-2 text-gray-600">
              <Globe className="size-4" />
              {t("language")}
            </Button>
          </Link>
          <Button className="bg-[#155724] hover:bg-[#1a6b2e] text-white rounded-full px-6">
            {t("register")}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side={locale === "ar" ? "left" : "right"} className="w-[280px] bg-white">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-6 mt-8">
                <Image src="/images/logo.svg" alt="KSAFF" width={120} height={48} />
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a
                      key={item}
                      href={`#${item}`}
                      onClick={() => setOpen(false)}
                      className="text-lg font-semibold text-gray-700 hover:text-[#155724] transition-colors"
                    >
                      {t(item)}
                    </a>
                  ))}
                </nav>
                <Link href={`/${otherLocale}`}>
                  <Button variant="outline" className="w-full gap-2">
                    <Globe className="size-4" />
                    {t("language")}
                  </Button>
                </Link>
                <Button className="bg-[#155724] hover:bg-[#1a6b2e] text-white w-full rounded-full">
                  {t("register")}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
