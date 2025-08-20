"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function Feedback() {
  const feedbacks = [
    {
      text: "O atendimento da Be-Aba transformou nossa rotina. A dedicação e carinho da equipe são incomparáveis.",
      name: "Carla Nogueira",
      role: "Mãe de paciente",
    },
    {
      text: "Profissionais atenciosos, capacitados e sempre prontos para ouvir e orientar. Recomendo de olhos fechados!.",
      name: "Rafael Martins ",
      role: "Pai de paciente",
    },
    {
      text: "Desde o primeiro atendimento, senti segurança e acolhimento. A clínica realmente se preocupa com cada detalhe",
      name: "Ana Beatriz Lima",
      role: "Cliente",
    },

    {
      text: "O progresso que meu filho teve após iniciar o acompanhamento foi surpreendente. Sou muito grato à equipe.",
      name: "Lucas Ferreira",
      role: "Responsável por paciente",
    },
    {
      text: "Um espaço acolhedor, profissionais incríveis e resultados visíveis. Não poderia estar mais satisfeita.",
      name: "Fernanda Alves",
      role: "Mãe de paciente",
    },
  ];

  return (
    <section id="depoimentos">
      <div className="flex flex-col items-center gap-5 pt-5 xl:pt-10 xl:gap-10">
        <h1 className="text-[26px] md:text-4xl lg:text-[35px] font-bold text-[var(--color-primary)] text-center">
          O que dizem sobre nós
        </h1>

        <Carousel
          opts={{ align: "start" }}
          className="w-[250px] md:w-[500px] lg:w-full px-5  "
        >
          <CarouselContent>
            {feedbacks.map(({ text, name, role }, i) => (
              <CarouselItem
                key={i}
                className="w-full mx-auto bg-transparent basis-1/1 md:basis-1/2 lg:basis-1/4"
              >
                <Card className="rounded-2xl h-[250px]  flex flex-col justify-center bg-[#fafafa] ">
                  <CardContent className="flex flex-col items-center justify-center gap-5 p-5">
                    <Image
                      src="/quote (1).png"
                      alt="quote"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                    <p className="text-sm text-center text-neutral-500">
                      {text}
                    </p>
                    <div className="self-start leading-tight">
                      <p className="text-sm font-semibold text-[#ffca64]">
                        {name}
                      </p>
                      <p className="text-sm text-gray-500">{role}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-[-2px] z-10 p-2 text-xl font-bold -translate-y-1/2 rounded-full cursor-pointer select-none top-1/2 bg-amber-200">
            ‹
          </CarouselPrevious>
          <CarouselNext className="absolute right-[-2px] z-10 p-2 text-xl font-bold -translate-y-1/2 rounded-full cursor-pointer select-none top-1/2 bg-amber-200">
            ›
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
}
