import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SponsorCarousel from "@/components/SponsorCarousel";
import JoinCommunity from "@/components/JoinCommunity";
import NationalTeams from "@/components/NationalTeams";
import Tournaments from "@/components/Tournaments";
import YearCalendar from "@/components/YearCalendar";
import EveryBodyCounts from "@/components/EveryBodyCounts";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <SponsorCarousel />
      <JoinCommunity />
      <NationalTeams />
      <Tournaments />
      <YearCalendar />
      <EveryBodyCounts />
      <Footer />
    </main>
  );
}
