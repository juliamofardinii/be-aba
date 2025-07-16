import Header from "../components/header";
import HeroSection from "../components/heroSection";
import Services from "@/components/services";
import About from "@/components/aboutUs";
import OurTeam from "@/components/ourTeam";

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroSection />
      <Services />
      <About />
      <OurTeam />
      {/* <HealthInsurance /> */}
    </main>
  );
}
