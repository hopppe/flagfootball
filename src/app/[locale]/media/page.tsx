import Header from "@/components/Header";
import MediaGallery from "@/components/MediaGallery";
import Footer from "@/components/Footer";

export default function MediaPage() {
  return (
    <main>
      <Header />
      <div className="pt-20" />
      <MediaGallery />
      <Footer />
    </main>
  );
}
