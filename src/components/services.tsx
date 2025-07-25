"use client";
import Image from "next/image";
import "../styles/globals.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Lista de serviços
const services = [
  { src: "/brain.png", label: "Psicologia", alt: "Psico" },
  { src: "/pyramid.png", label: "Integração  Sensorial", alt: "Sensorial" },
  { src: "/blocks (2).png", label: "T.O ABA", alt: "Blocos" },
  { src: "/movimento.png", label: "Psicomotricidade", alt: "Movimento" },
  { src: "/balao-de-fala.png", label: "Fono ABA", alt: "Balao de fala" },
  { src: "/cerebro-humano.png", label: "Neuropsicologia", alt: "Neuro" },
];

export default function Services() {
  return (
    <div className="relative w-full p-10 pb-10 lg:pb-10 lg:p-0">
      <Image
        src="/sectionFundo.jpg"
        alt="Menina brincando"
        width={1100}
        height={700}
        quality={100}
        className="hidden object-cover w-full h-full md:block"
        priority
      />

      <h1 className="absolute text-[26px] md:text-4xl lg:text-[35px]  font-bold xl:top-15 lg:top-10 md:top-15 left-1/2 -translate-x-1/2 text-[var(--color-primary)] top-2  whitespace-nowrap">
        Nossos Serviços
      </h1>

      <div className="absolute w-full max-w-[190px] -translate-x-1/2 lg:max-w-3xl md:max-w-lg md:top-30 lg:top-30 left-1/2 md:block xl:hidden top-10 hidden">
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent className="">
            {services.map((service, index) => (
              <CarouselItem
                key={index}
                className="px-0 md:basis-1/3 lg:basis-1/4 basis-1/2 "
              >
                <div className="flex flex-col items-center w-full">
                  <div className="rounded-full bg-[var(--color-secondary)] lg:h-20 lg:w-20 md:w-15 md:h-15 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                    <Image
                      src={service.src}
                      alt={service.alt}
                      width={40}
                      height={40}
                      className="object-contain md:w-10 md:h-10"
                    />
                  </div>
                  <span className="mt-2 font-semibold text-center md:text-[14px] text-neutral-700 text-sm sm:text-[16px] lg:text-[18px]">
                    {service.label}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-amber-200" />
          <CarouselNext className="bg-amber-200" />
        </Carousel>
      </div>

      <div className="relative grid grid-cols-2 -translate-x-1/2 xl:absolute pb-15 sm:grid-cols-2 md:hidden xl:flex xl:justify-center xl:gap-2 xl:w-full xl:top-35 top-15 left-1/2 gap-y-6 w-max">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center w-40 md:w-50">
            <div className="rounded-full bg-[var(--color-secondary)] w-14 h-14 xl:h-18 xl:w-18 flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <Image
                src={service.src}
                alt={service.alt}
                width={40}
                height={40}
                className="object-contain w-6 h-6 md:w-5 md:h-5 lg:w-10 lg:h-10"
              />
            </div>
            <span className="mt-2 font-semibold text-center text-neutral-700 text-[14px] md:text-[16px]  ">
              {service.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
