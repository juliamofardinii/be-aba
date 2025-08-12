"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const fotosClinica = [
    "/fotoClinica.jpg",
    "/fotoClinica5.jpg",
    "/fotoClinica3.jpg",
    "/foto-clinica2.jpg",
    "/fotoClinica4.jpg",
  ];

  return (
    <section id="sobre">
      <div className="flex flex-col items-center gap-10 p-5 pt-0">
        <h1 className="text-[26px] md:text-4xl lg:text-[35px] font-bold text-[var(--color-primary)]">
          Sobre nós
        </h1>

        <div className="flex flex-col items-center w-full gap-8 md:flex-row">
          {/* Carrossel com 3 fotos visíveis */}
          <Carousel
            opts={{ align: "start" }}
            className="w-full lg:max-w-[700px] md:max-w-[400px]"
          >
            <CarouselContent>
              {fotosClinica.map((src, i) => (
                <CarouselItem key={i} className="pl-5 lg:basis-1/2 basis-1/1 ">
                  <Card className="relative overflow-hidden aspect-auto rounded-2xl xl:h-[380px] lg:h-[350px] md:h-[320px] h-[320px]">
                    <CardContent className="p-0">
                      <Image
                        src={src}
                        alt={`Foto clínica ${i + 1}`}
                        fill
                        quality={100}
                        className="object-cover rounded-2xl"
                        priority={i === 0}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute left-[-20px] z-10 p-2 text-xl font-bold -translate-y-1/2 rounded-full cursor-pointer select-none top-1/2 bg-amber-200">
              ‹
            </CarouselPrevious>
            <CarouselNext className="absolute right-[-24px] z-10 p-2 text-xl font-bold -translate-y-1/2 rounded-full cursor-pointer select-none top-1/2 bg-amber-200">
              ›
            </CarouselNext>
          </Carousel>

          {/* Texto ao lado */}
          <div className="ml-6 xl:space-y-8 lg:space-y-8 space-y-3 max-w-[400px] ">
            <div className=" xl:space-y-1 lg:space-y-2 md:space-y-1">
              <h2 className="font-semibold text-[18px] lg:text-xl xl:text-[24px] text-neutral-700 ">
                Onde <span className="text-[#FFA500] font-bold ">cuidado </span>
                e{" "}
                <span className="text-[#FFA500] font-bold ">
                  desenvolvimento{" "}
                </span>
                caminham juntos
              </h2>

              <p className="text-sm  lg:text-[16px] text-neutral-700">
                Na beAba, cada criança é acolhida de forma única, em um ambiente
                seguro e estimulante, sempre em parceria com a família.
              </p>
            </div>

            <div className="space-y-2 xl:space-y-7 lg:space-y-3 md:space-y-5">
              <div className="flex flex-row items-center gap-8">
                <div className="flex relative w-[60px] h-[40px]">
                  <Image
                    src="/target (1).png"
                    alt="icone target"
                    width={60}
                    height={40}
                    quality={100}
                    priority
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-base md:text-[14px] lg:text-[18px]">
                    Missão
                  </p>
                  <p className="text-sm md:text-[14px]  text-neutral-700">
                    Conduzir cada criança a alcançar seu potencial, oferecendo
                    um espaço seguro, estimulante e repleto de afeto.
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center gap-8">
                <div className="relative w-[60px] h-[40px]">
                  <Image
                    src="/maternity.png"
                    alt="icone maternity"
                    width={60}
                    height={40}
                    quality={100}
                    priority
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-base md:text-[14px] lg:text-[18px]">
                    Compromisso
                  </p>
                  <p className="text-sm md:text-[14px] text-neutral-700">
                    Trabalhar lado a lado com os pais, adaptando cada plano de
                    atendimento às necessidades e ao ritmo de cada família.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
