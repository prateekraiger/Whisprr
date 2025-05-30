import { HeroSection } from "../components/ui/hero-section";
import { Navbar } from "../components/ui/navbar";
import { Footer } from "../components/ui/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}
