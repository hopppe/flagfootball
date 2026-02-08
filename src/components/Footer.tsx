"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Instagram, Youtube, Twitter, Music2, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="bg-gradient-to-br from-[#0d3a17] to-[#155724] text-white py-16 px-6" dir={locale === "ar" ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Image src="/images/logo-white.svg" alt="KSAFF" width={140} height={56} />
            <p className="text-white/60 text-sm mt-4 leading-relaxed">{t("tagline")}</p>
            <div className="flex gap-3 mt-6">
              {[
                { icon: Instagram, href: "#" },
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
              {(["home", "about", "tournaments", "teams", "calendar"] as const).map((key) => (
                <li key={key}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">{t(key)}</a>
                </li>
              ))}
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
                <Mail className="size-4 flex-shrink-0" /> {t("email")}
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone className="size-4 flex-shrink-0" /> {t("phone")}
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
