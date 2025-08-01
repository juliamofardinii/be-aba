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
    "A equipe da Be-Aba é incrível! Profissionais dedicados e sempre prontos para ajudar.",
    "A clínica é um lugar acolhedor e seguro, onde me sinto à vontade para falar sobre meus desafios.",
    "A equipe da Be-Aba é incrível! Profissionais dedicados e sempre prontos para ajudar.",
    "A equipe da Be-Aba é incrível! Profissionais dedicados e sempre prontos para ajudar.",
    "A equipe da Be-Aba é incrível! Profissionais dedicados e sempre prontos para ajudar.",
  ];

  return (
    <section id="depoimentos">
      <div className="flex flex-col items-center gap-10 p-10 pt-0">
        <h1 className="text-[26px] md:text-4xl lg:text-[35px] font-bold text-[var(--color-primary)]">
          O que dizem sobre nós
        </h1>

        {/* Carrossel com 3 fotos visíveis */}
        <Carousel
          opts={{ align: "start" }}
          className="w-[250px] md:w-[500px] lg:w-full "
        >
          <CarouselContent>
            {feedbacks.map((src, i) => (
              <CarouselItem
                key={i}
                className="w-full mx-auto basis-1/1 md:basis-1/2 lg:basis-1/4"
              >
                <Card className="rounded-2xl shadow-lg h-[200px] md:h-[230px] lg:h-[250px] flex flex-col justify-center bg-[#fafafa]">
                  <CardContent className="flex flex-col items-center justify-center gap-5 p-5">
                    <Image
                      src="/quote (1).png"
                      alt="quote"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                    <p className="text-sm text-center text-neutral-500">
                      {src}
                    </p>
                    <div className="self-start leading-tight">
                      <p className="text-sm font-semibold text-[#ffca64]">
                        Maria
                      </p>
                      <p className="text-sm text-gray-500">Cliente</p>
                    </div>
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
      </div>
    </section>
  );
}
