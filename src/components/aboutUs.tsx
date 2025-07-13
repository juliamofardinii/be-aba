"use client";

import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";
import {} from "@/components/ui/carousel";

export default function About() {
  // const fotosClinica = [
  //   "/fotoClinica.jpg",
  //   "/foto-clinica2.jpg",
  //   "/fotoClinica3.jpg",
  //   "/fotoClinica4.jpg",
  //   "/fotoClinica5.jpg",
  // ];

  return (
    <div className="flex flex-col items-center gap-10 p-10 pt-0">
      <h1 className="text-4xl font-bold text-[var(--color-primary)]">
        Sobre nós
      </h1>

      <div className="flex flex-row gap-6 max-w-[1000px] w-full">
        {/* Carrossel com 3 fotos visíveis */}
        {/* <Carousel opts={{ align: "start" }} className="w-full max-w-[650px]">
          <CarouselContent>
            {fotosClinica.map((src, i) => (
              <CarouselItem key={i} className="p-1 md:basis-1/2 lg:basis-1/2">
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

          <CarouselPrevious className="absolute left-[-24px] z-10 p-2 text-xl font-bold -translate-y-1/2 rounded-full cursor-pointer select-none top-1/2 bg-amber-200">
            ‹
          </CarouselPrevious>
          <CarouselNext className="absolute right-[-24px] z-10 p-2 text-xl font-bold -translate-y-1/2 rounded-full cursor-pointer select-none top-1/2 bg-amber-200">
            ›
          </CarouselNext>
        </Carousel> */}

        <div>
          <Image
            src="/sobre-nos.png"
            alt="TO"
            width={580}
            height={300}
            quality={100}
            className="object-contain"
          />
        </div>

        {/* Texto ao lado */}
        <div className="ml-6 space-y-8 max-w-[400px]">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-700">
              Lorem Ipsum is not{" "}
              <span className="text-[#FFA500] font-bold">
                simply random text
              </span>
            </h2>

            <p className="text-md text-neutral-700">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isnt.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex flex-row gap-8">
              <div className="relative w-[50px] h-[30px]">
                <Image
                  src="/target (1).png"
                  alt="icone target"
                  fill
                  quality={100}
                  priority
                />
              </div>
              <div>
                <p>Contrary to popular</p>
                <p className="text-sm text-neutral-700">
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-5">
              <div className="relative w-[50px] h-[30px]">
                <Image
                  src="/maternity.png"
                  alt="icone maternity"
                  fill
                  quality={100}
                  priority
                />
              </div>
              <div>
                <p>Contrary to popular</p>
                <p className="text-sm text-neutral-700">
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
