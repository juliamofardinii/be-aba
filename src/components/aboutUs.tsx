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
    "/foto-clinica2.jpg",
    "/fotoClinica3.jpg",
    "/fotoClinica4.jpg",
    "/fotoClinica5.jpg",
  ];

  return (
    <div className="flex flex-col items-center gap-10 p-10 pt-0">
      <h1 className="text-[26px] md:text-4xl lg:text-[35px] font-bold text-[var(--color-primary)]">
        Sobre nós
      </h1>

      <div className="flex flex-col items-center w-full gap-12 md:flex-row">
        {/* Carrossel com 3 fotos visíveis */}
        <Carousel
          opts={{ align: "start" }}
          className="w-full lg:max-w-[700px] md:max-w-[400px]"
        >
          <CarouselContent>
            {fotosClinica.map((src, i) => (
              <CarouselItem
                key={i}
                className="pl-5 lg:basis-1/2 md:basis-1/1 basis-1/2"
              >
                <Card className="relative overflow-hidden aspect-square rounded-2xl">
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
        <div className="ml-6 xl:space-y-12 lg:space-y-8 space-y-3 md:space-y-12 max-w-[400px]">
          <div className="xl:space-y-1 lg:space-y-2 md:space-y-4">
            <h2 className="font-semibold sm:text-2xl lg:text-xl xl:text-[24px] text-neutral-700">
              Lorem Ipsum is not{" "}
              <span className="text-[#FFA500] font-bold ">
                simply random text
              </span>
            </h2>

            <p className="text-sm md:text-[14px] lg:text-[16px] text-neutral-700">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn’t.
            </p>
          </div>

          <div className="space-y-2 xl:space-y-8 lg:space-y-3 md:space-y-8">
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
                  Contrary to popular
                </p>
                <p className="text-sm md:text-[14px] lg:text-[16px] text-neutral-700">
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary.
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
                  Contrary to popular
                </p>
                <p className="text-sm md:text-[14px] lg:text-[16px] text-neutral-700">
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
