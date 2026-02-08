import Header from "@/components/Header";
import JoinCommunity from "@/components/JoinCommunity";
import EveryBodyCounts from "@/components/EveryBodyCounts";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main>
      <Header />
      <div className="pt-20" />
      <JoinCommunity />
      <EveryBodyCounts />
      <Footer />
    </main>
  );
}
