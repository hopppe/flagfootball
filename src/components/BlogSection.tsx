"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const posts = [
  { key: "post1", image: "/images/blog-1.jpg" },
  { key: "post2", image: "/images/blog-2.jpg" },
  { key: "post3", image: "/images/blog-3.jpg" },
] as const;

export default function BlogSection() {
  const t = useTranslations("blog");

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection variant="fadeInUp">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12">{t("title")}</h2>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {posts.map(({ key, image }) => (
            <StaggerItem key={key}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={image}
                    alt={t(`${key}Title`)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{t(`${key}Title`)}</h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-3">{t(`${key}Excerpt`)}</p>
                  <Button variant="outline" size="sm" className="rounded-full text-[#155724] border-[#155724]/30 hover:bg-[#155724] hover:text-white">
                    {t("readMore")}
                  </Button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
