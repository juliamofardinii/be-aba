import Header from "../components/header";
import HeroSection from "../components/heroSection";
import Services from "@/components/services";
import About from "@/components/aboutUs";
import OurTeam from "@/components/ourTeam";
import Feedback from "@/components/feedback";
import HealthInsurance from "@/components/healthInsurance";

export default function Home() {
  return (
    <main className="max-w-[1272px] mx-auto">
      <Header />
      <HeroSection />
      <Services />
      <About />
      <OurTeam />
      <Feedback />
      <HealthInsurance />
    </main>
  );
}
