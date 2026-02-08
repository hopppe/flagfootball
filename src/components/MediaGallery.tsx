"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog as DialogPrimitive } from "radix-ui";

const galleryImages = [
  { src: "/images/gallery/scrimmage.jpg", alt: "Line of scrimmage" },
  { src: "/images/gallery/catch.jpg", alt: "Making the catch" },
  { src: "/images/gallery/highfive.jpg", alt: "Celebration" },
  { src: "/images/gallery/rush.jpg", alt: "Rushing play" },
  { src: "/images/gallery/center.jpg", alt: "Center snap" },
  { src: "/images/gallery/community-event.jpg", alt: "Community event" },
  { src: "/images/gallery/huddle.jpg", alt: "Team huddle" },
  { src: "/images/gallery/snap.jpg", alt: "Pre-snap" },
  { src: "/images/gallery/outdoor-action.jpg", alt: "Outdoor action" },
  { src: "/images/gallery/touchdown-catch.jpg", alt: "Touchdown catch" },
  { src: "/images/gallery/refs-captains.jpg", alt: "Refs and captains" },
  { src: "/images/gallery/team-warmup.jpg", alt: "Team warmup" },
  { src: "/images/gallery/outdoor-practice.jpg", alt: "Practice session" },
  { src: "/images/gallery/game-play.jpg", alt: "Game play" },
  { src: "/images/gallery/tournament-action.jpg", alt: "Tournament action" },
  { src: "/images/gallery/match-day.jpg", alt: "Match day" },
  { src: "/images/gallery/game-day.jpg", alt: "Game day" },
  { src: "/images/gallery/team-spirit.jpg", alt: "Team spirit" },
  { src: "/images/gallery/competition.jpg", alt: "Competition" },
  { src: "/images/gallery/field-play.jpg", alt: "Field play" },
  { src: "/images/gallery/player-run.jpg", alt: "Player run" },
  { src: "/images/gallery/DSC00075.jpg", alt: "Tournament match" },
  { src: "/images/gallery/DSC00113.jpg", alt: "Game action" },
  { src: "/images/gallery/DSC00140.jpg", alt: "On the field" },
  { src: "/images/gallery/DSC00330.jpg", alt: "Flag football play" },
  { src: "/images/gallery/DSC00530.jpg", alt: "Competition day" },
  { src: "/images/gallery/DSC00617.jpg", alt: "Player spotlight" },
  { src: "/images/gallery/DSC09579.jpg", alt: "Season highlights" },
  { src: "/images/gallery/DSC09613.jpg", alt: "Team action" },
];

export default function MediaGallery() {
  const t = useTranslations("media");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section id="media" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection variant="fadeInUp">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{t("title")}</h2>
          <div className="w-16 h-1 bg-[#155724] rounded-full mb-4" />
          <p className="text-gray-600 mb-12 max-w-2xl">{t("description")}</p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryImages.map((img, index) => (
            <StaggerItem key={img.src}>
              <div
                className="relative aspect-[4/3] cursor-pointer group overflow-hidden rounded-xl"
                onClick={() => setSelectedIndex(index)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Lightbox */}
        <DialogPrimitive.Root
          open={selectedIndex !== null}
          onOpenChange={(open) => !open && setSelectedIndex(null)}
        >
          <DialogPrimitive.Portal>
            <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/90 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
            <DialogPrimitive.Content className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
              <DialogPrimitive.Title className="sr-only">
                {selectedIndex !== null ? galleryImages[selectedIndex].alt : "Photo"}
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="sr-only">
                Photo gallery viewer
              </DialogPrimitive.Description>

              <DialogPrimitive.Close className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors">
                <X className="size-6" />
              </DialogPrimitive.Close>

              <button
                onClick={goPrev}
                className="absolute left-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="size-6" />
              </button>

              <button
                onClick={goNext}
                className="absolute right-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="size-6" />
              </button>

              {selectedIndex !== null && (
                <Image
                  src={galleryImages[selectedIndex].src}
                  alt={galleryImages[selectedIndex].alt}
                  width={1600}
                  height={1000}
                  className="max-h-[85vh] w-auto object-contain rounded-lg"
                />
              )}
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        </DialogPrimitive.Root>
      </div>
    </section>
  );
}
