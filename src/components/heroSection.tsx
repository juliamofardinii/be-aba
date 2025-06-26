import "../styles/globals.css";
import Image from "next/image";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <div className="relative grid items-center grid-cols-1 md:grid-cols-[1fr_1fr] gap-10  text-center md:text-left  bg-[var(--color-background)] p-10">
      <div className="space-y-8 font-sans text-center w-full md:max-w-[500px] lg:max-w-[550px] xl:max-w-[600px] mx-auto">
        <h1 className="text-[28px] md:text-[36px] lg:text-[38px] font-bold leading-tight text-left text-[var(--color-primary)]">
          Cuidar com propósito, desenvolver com{" "}
          <span className="text-[#FFA500] font-bold">amor e atenção</span>
        </h1>
        <p className="text-[14px] md:text-[16px]  text-neutral-700  text-left ">
          Nossa clínica especializada oferece atendimento multidisciplinar para
          crianças com TEA, promovendo desenvolvimento, inclusão e qualidade de
          vida.
        </p>
        <Button
          className="mt-10 cursor-pointer bg-[#FFC83D] hover:bg-[#e0b232] text-white px-8 py-4 rounded-md transition"
          size={"lg"}
        >
          Entre em contato
        </Button>
      </div>

      <div className="w-full max-w-[500px] mx-auto md:w-[350px] lg:w-full">
        <Image
          src="/heroSectionPrincipal.jpg"
          alt="Menina brincando"
          width={500}
          height={300}
          quality={100}
          className="object-cover w-full h-auto rounded-xl"
          priority
        />
      </div>
    </div>
  );
}
