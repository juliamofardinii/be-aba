import "../styles/globals.css";
import Image from "next/image";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <div className="relative grid items-center gap-20 p-8 text-center lg:gap-10 lg:grid-cols-2 md:p-15">
      <Image
        src="/solAmarelo.png"
        alt="Sol"
        width={120}
        height={120}
        className="absolute z-10 top-10 left-60 sm:top-10 sm:left-60 md:top-15 md:left-72 lg:top-7 lg:left-78"
      />

      <div className="relative overflow-hidden rounded-full w-65 h-65 sm:w-70 sm:h-70 md:w-80 md:h-80 lg:w-90 lg:h-90">
        <Image
          src="/meninaBrincando.jpg"
          alt="Menina brincando"
          fill
          className="object-cover rounded-full"
        />
      </div>

      <Image
        src="/gotasColoridas.png"
        alt="Gotas"
        width={120}
        height={120}
        className="absolute z-10 
        w-[80px] h-[80px] 
        sm:w-[90px] sm:h-[90px] 
        md:w-[100px] md:h-[100px] 
        lg:w-[120px] lg:h-[120px] 
        top-65 left-20 
        md:top-78 md:left-20 
        lg:top-80 lg:left-20"
      />

      <div className="space-y-8 font-sans text-center">
        <h1 className="text-[32px] md:text-[40px] font-bold text-[var(--color-primary)] leading-10 pt-10 lg:pt-0">
          Acolhendo e desenvolvendo com amor
        </h1>
        <p className="text-[15px] md:text-[20px] text-[var(--color-secondary)] px-6 md:px-8 mb-8">
          Nossa clínica especializada oferece atendimento multidisciplinar para
          crianças com TEA, promovendo desenvolvimento, inclusão e qualidade de
          vida.
        </p>
        <Button className="cursor-pointer" size={"lg"}>
          Entre em contato
        </Button>
      </div>

      <div className="absolute overflow-hidden rounded-full w-45 h-45 sm:w-50 sm:h-50 md:w-50 md:h-50 lg:w-60 lg:h-60 top-50 left-60 md:top-60 md:left-72 lg:top-58 lg:left-80">
        <Image
          src="/criancas.jpg"
          alt="Crianças"
          fill
          className="object-cover rounded-full"
        />
      </div>

      <Image
        src="/circulosAzuis.png"
        alt="Círculos"
        width={120}
        height={120}
        className="absolute z-10 
        w-[70px] h-[70px] 
        sm:w-[90px] sm:h-[90px] 
        md:w-[100px] md:h-[100px] 
        lg:w-[120px] lg:h-[120px] 
        top-80 left-55 
        md:top-90 md:left-65 
        lg:top-100 lg:left-80"
      />
    </div>
  );
}
