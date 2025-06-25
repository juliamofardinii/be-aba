import "../styles/globals.css";
import Image from "next/image";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <div className="relative grid items-center grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10 p-8 text-center md:p-15 bg-[var(--color-background)]">
      <div
        className="absolute z-10 animate-spin-slow 
        w-[70px] h-[70px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px] 
        top-6 left-10 md:top-17 md:left-52 lg:top-10 lg:left-72"
      >
        <Image
          src="/solAmarelo.png"
          alt="Sol"
          fill
          className="object-contain"
          sizes="(min-width: 1024px) 120px, (min-width: 768px) 90px, 70px"
        />
      </div>

      {/* Menina */}
      <div
        className="relative border-4 border-white rounded-full shadow-lg 
w-[260px] h-[260px] md:w-[300px] md:h-[300px] lg:w-[320px] lg:h-[320px]
"
      >
        <Image
          src="/meninaBrincando.jpg"
          alt="Menina brincando"
          fill
          className="object-cover rounded-full"
          sizes="(min-width: 1024px) 300px, (min-width: 768px) 260px, 200px"
          priority // se for importante no carregamento
        />
      </div>

      {/* Gotas */}
      <div
        className="absolute z-10 
        w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[120px] lg:h-[120px] 
        top-40 left-24 md:top-75 md:left-20 lg:top-72 lg:left-20"
      >
        <Image
          src="/gotasColoridas.png"
          alt="Gotas"
          fill
          className="object-contain"
          sizes="(min-width: 1024px) 120px, (min-width: 768px) 80px, 60px"
        />
      </div>

      <div className="space-y-8 font-sans text-center w-full md:max-w-[500px] lg:max-w-[550px] xl:max-w-[600px] mx-auto">
        <h1 className="text-[28px] md:text-[32px] lg:text-[40px] font-bold text-[var(--color-primary)] leading-tight pt-10 lg:pt-0 md:px-5 lg:px-0">
          Acolhendo e desenvolvendo com amor
        </h1>
        <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-neutral-700 px-6 md:px-10 mb-12">
          Nossa clínica especializada oferece atendimento multidisciplinar para
          crianças com TEA, promovendo desenvolvimento, inclusão e qualidade de
          vida.
        </p>
        <Button
          className="mt-10 cursor-pointer bg-[#FFC83D] hover:bg-[#e0b232] text-white px-8 py-4 rounded-xl transition"
          size={"lg"}
        >
          Entre em contato
        </Button>
      </div>

      {/* Crianças */}
      <div
        className="absolute overflow-hidden border-4 border-white rounded-full shadow-lg 
        w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] 
        top-32 left-64 md:top-60 md:left-60 lg:top-60 lg:left-75"
      >
        <Image
          src="/criancas.jpg"
          alt="Crianças"
          fill
          className="object-cover rounded-full"
          sizes="(min-width: 1024px) 180px, (min-width: 768px) 150px, 120px"
        />
      </div>

      {/* Círculos */}
      <div
        className="absolute z-10 
        w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[120px] lg:h-[120px] 
        top-60 left-24 md:top-84 md:left-57 lg:top-[23rem] lg:left-70"
      >
        <Image
          src="/circulosAzuis.png"
          alt="Círculos"
          fill
          className="object-contain"
          sizes="(min-width: 1024px) 120px, (min-width: 768px) 80px, 60px"
        />
      </div>
    </div>
  );
}
