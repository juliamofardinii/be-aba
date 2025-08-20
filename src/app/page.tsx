import HeroSection from "@/components/heroSection";
import Services from "@/components/services";
import About from "@/components/aboutUs";
import Aba from "@/components/aba";
import Feedback from "@/components/feedback";
import HealthInsurance from "@/components/healthInsurance";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <About />
      <Aba />
      <Feedback />
      <HealthInsurance />
    </>
  );
}
