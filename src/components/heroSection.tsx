import "../styles/globals.css";
import Image from "next/image";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <div className="relative grid items-center grid-cols-2 gap-10 p-15">
      <Image
        src="/solAmarelo.png"
        alt="Sol"
        width={120}
        height={120}
        className="absolute z-10 top-7 left-78"
      />

      <div className="relative overflow-hidden rounded-full w-90 h-90">
        <Image
          src="/meninaBrincando.jpg"
          alt="Menina brincando"
          fill
          className="object-cover rounded-full"
        />
      </div>

      <Image
        src="/gotasColoridas.png"
        alt="Sol"
        width={120}
        height={120}
        className="absolute z-10 top-80 left-20"
      />

      <div className="space-y-8 font-sans text-center">
        <h1 className="text-[40px] font-bold text-[var(--color-primary)] leading-10">
          Acolhendo e desenvolvendo com amor
        </h1>
        <p className="text-[20px] text-[var(--color-secondary)] px-15">
          Nossa clínica especializada oferece atendimento multidisciplinar para
          crianças com TEA, promovendo desenvolvimento, inclusão e qualidade de
          vida.
        </p>
        <Button className="cursor-pointer" size={"lg"}>
          Entre em contato
        </Button>
      </div>

      <div className="absolute overflow-hidden rounded-full w-60 h-60 top-58 left-80">
        <Image
          src="/criancas.jpg"
          alt="Crianças"
          fill
          className="object-cover rounded-full"
        />
      </div>
      <Image
        src="/circulosAzuis.png"
        alt="Sol"
        width={120}
        height={120}
        className="absolute z-10 top-100 left-80"
      />
    </div>
  );
}
