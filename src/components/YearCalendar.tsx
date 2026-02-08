"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { MapPin, Trophy, Users, Dumbbell } from "lucide-react";

type EventType = "tournament" | "league" | "practice" | "international";

interface CalendarEvent {
  key: string;
  month: number; // 0-indexed
  type: EventType;
  icon: typeof Trophy;
}

const events: CalendarEvent[] = [
  { key: "janPractice", month: 0, type: "practice", icon: Dumbbell },
  { key: "febPractice", month: 1, type: "practice", icon: Dumbbell },
  { key: "marFanatics", month: 2, type: "international", icon: Trophy },
  { key: "aprTournament", month: 3, type: "tournament", icon: MapPin },
  { key: "maySummerLeague", month: 4, type: "league", icon: Users },
  { key: "junSummerLeague", month: 5, type: "league", icon: Users },
  { key: "julSummerLeague", month: 6, type: "league", icon: Users },
  { key: "augKaust", month: 7, type: "tournament", icon: Trophy },
  { key: "sepTryouts", month: 8, type: "practice", icon: Dumbbell },
  { key: "octTournament", month: 9, type: "tournament", icon: MapPin },
  { key: "novAsiaChamp", month: 10, type: "international", icon: Trophy },
  { key: "decDubai", month: 11, type: "tournament", icon: MapPin },
];

const typeColors: Record<EventType, string> = {
  tournament: "bg-yellow-400",
  league: "bg-orange-400",
  practice: "bg-sky-400",
  international: "bg-pink-400",
};

const typeBorders: Record<EventType, string> = {
  tournament: "border-yellow-400/30",
  league: "border-orange-400/30",
  practice: "border-sky-400/30",
  international: "border-pink-400/30",
};

const months = [
  "jan", "feb", "mar", "apr", "may", "jun",
  "jul", "aug", "sep", "oct", "nov", "dec",
] as const;

export default function YearCalendar() {
  const t = useTranslations("calendar");

  return (
    <section id="calendar" className="py-24 px-6 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection variant="fadeInUp">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{t("title")}</h2>
          <div className="w-16 h-1 bg-[#155724] rounded-full mb-4" />
          <p className="text-gray-600 max-w-2xl mb-10 leading-relaxed">{t("description")}</p>
        </AnimatedSection>

        {/* Legend */}
        <AnimatedSection variant="fadeIn" delay={0.1}>
          <div className="flex flex-wrap gap-4 mb-8">
            {(["tournament", "league", "practice", "international"] as EventType[]).map((type) => (
              <div key={type} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${typeColors[type]}`} />
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{t(`type.${type}`)}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Calendar grid */}
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {months.map((month, i) => {
            const monthEvents = events.filter((e) => e.month === i);
            return (
              <StaggerItem key={month}>
                <div className={`bg-white rounded-xl border ${monthEvents.length > 0 ? typeBorders[monthEvents[0].type] : "border-gray-100"} p-4 min-h-[160px] flex flex-col hover:shadow-md transition-shadow`}>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    {t(`months.${month}`)}
                  </span>
                  <div className="flex flex-col gap-2 flex-1">
                    {monthEvents.map((event) => {
                      const Icon = event.icon;
                      return (
                        <div key={event.key} className="flex items-start gap-2">
                          <div className={`w-5 h-5 rounded ${typeColors[event.type]} flex items-center justify-center shrink-0 mt-0.5`}>
                            <Icon className="size-3 text-white" />
                          </div>
                          <span className="text-xs font-medium text-gray-700 leading-tight">
                            {t(`events.${event.key}`)}
                          </span>
                        </div>
                      );
                    })}
                    {monthEvents.length === 0 && (
                      <span className="text-xs text-gray-300 italic">—</span>
                    )}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* TBD note */}
        <AnimatedSection variant="fadeIn" delay={0.3}>
          <p className="text-center text-sm text-gray-400 mt-8">{t("note")}</p>
        </AnimatedSection>
      </div>
    </section>
  );
}
