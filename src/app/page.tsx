import HeroSection from "@/components/heroSection";
import Services from "@/components/services";
import About from "@/components/aboutUs";
import Aba from "@/components/aba";
import OurTeam from "@/components/ourTeam";
import Feedback from "@/components/feedback";
import HealthInsurance from "@/components/healthInsurance";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <About />
      <Aba />
      <OurTeam />
      <Feedback />
      <HealthInsurance />
    </>
  );
}
