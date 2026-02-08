"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Instagram, Youtube, Twitter, Music2, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="bg-gradient-to-br from-[#0d3a17] to-[#155724] text-white py-16 px-6" dir={locale === "ar" ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image src="/images/partners/ksaff.png" alt="KSAFF" width={48} height={48} className="rounded-full" />
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-black text-white tracking-wide">KSAFF</span>
                <span className="text-[10px] font-semibold text-white/50 tracking-widest uppercase">Saudi Flag Football</span>
              </div>
            </div>
            <p className="text-white/60 text-sm mt-4 leading-relaxed">{t("tagline")}</p>
            <div className="flex gap-3 mt-6">
              {[
                { icon: Instagram, href: "https://instagram.com/flagfootballksa" },
                { icon: Twitter, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: Music2, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t("links")}</h3>
            <ul className="space-y-3">
              {(["home", "about", "tournaments", "teams", "media"] as const).map((key) => {
                const href = key === "home" ? `/${locale}` : `/${locale}/${key}`;
                return (
                  <li key={key}>
                    <Link href={href} className="text-white/60 hover:text-white transition-colors text-sm">{t(key)}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t("legal")}</h3>
            <ul className="space-y-3">
              {(["contact", "privacy", "terms"] as const).map((key) => (
                <li key={key}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">{t(key)}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t("contactUs")}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail className="size-4 flex-shrink-0" />
                <a href="mailto:flagfootball.ksa@gmail.com" className="hover:text-white transition-colors">{t("email")}</a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Instagram className="size-4 flex-shrink-0" />
                <a href="https://instagram.com/flagfootballksa" className="hover:text-white transition-colors">{t("instagram")}</a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <MapPin className="size-4 flex-shrink-0" /> {t("address")}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm">
          {t("copyright")}
        </div>
      </div>
    </footer>
  );
}
