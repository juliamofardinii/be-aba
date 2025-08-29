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
import { useState } from "react";

export default function About() {
  const fotosClinica = [
    "/fotoClinica.jpg",
    "/fotoClinica5.jpg",
    "/fotoClinica3.jpg",
    "/foto-clinica2.jpg",
    "/fotoClinica4.jpg",
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  function openModal(src: string) {
    setModalImage(src);
    setModalOpen(true);
  }

  function closeModal() {
    setModalImage(null);
    setModalOpen(false);
  }

  return (
    <section id="sobre">
      <div className="flex flex-col items-center gap-5 pt-5 xl:pt-10 xl:gap-10">
        <h1 className="text-[26px] md:text-4xl lg:text-[35px] font-bold text-[var(--color-primary)]">
          Sobre nós
        </h1>

        <div className="flex flex-col items-center w-full gap-8 md:flex-row">
          <Carousel
            opts={{ align: "start" }}
            className="w-full md:max-w-[400px] lg:max-w-[700px] overflow-hidden"
          >
            <CarouselContent>
              {fotosClinica.map((src, i) => (
                <CarouselItem
                  key={i}
                  className={`w-full mx-auto bg-transparent basis-full md:basis-1/2 ${
                    i === 0 ? "pl-4 md:pl-6 lg:pl-8" : "px-2"
                  }`}
                >
                  <Card className="relative overflow-hidden rounded-2xl xl:h-[380px] lg:h-[350px] md:h-[320px] h-[320px]">
                    <CardContent className="p-0" onClick={() => openModal(src)}>
                      <Image
                        src={src}
                        alt={`Foto clínica ${i + 1}`}
                        fill
                        quality={100}
                        className="object-cover cursor-pointer rounded-2xl"
                        priority={i === 0}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute z-10 text-xl font-bold -translate-y-1/2 rounded-full cursor-pointer select-none left-2 top-1/2 bg-amber-200">
              ‹
            </CarouselPrevious>
            <CarouselNext className="absolute z-10 p-2 text-xl font-bold -translate-y-1/2 rounded-full cursor-pointer select-none right-2 top-1/2 bg-amber-200">
              ›
            </CarouselNext>
          </Carousel>

          <div className="md:ml-6 xl:space-y-15 lg:space-y-8 space-y-3 md:max-w-[500px] w-auto ">
            <div className=" xl:space-y-3 lg:space-y-2 md:space-y-1">
              <h2 className="font-semibold text-[18px] lg:text-xl xl:text-[24px] text-neutral-700 ">
                Onde <span className="text-[#FFA500] font-bold ">cuidado </span>
                e{" "}
                <span className="text-[#FFA500] font-bold ">
                  desenvolvimento{" "}
                </span>
                caminham juntos
              </h2>

              <p className="text-sm  lg:text-[16px] text-neutral-700">
                Na <span className="text-[#00b3b3] font-bold">beAba</span>, cada
                criança é acolhida de forma única, em um ambiente seguro e
                estimulante, sempre em parceria com a família.
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
        {modalOpen && modalImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-scroll bg-black/60"
            onClick={closeModal}
          >
            <div
              className="relative max-w-[90vw] max-h-[90vh] p-4 bg-white rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute text-3xl font-bold text-gray-700 cursor-pointer top-3 right-5 hover:text-gray-900 "
                aria-label="Fechar modal"
              >
                ×
              </button>

              <div className=" md:h-[80vh] md:w-[60vh] w-[40vh] h-[55vh] ">
                <Image
                  src={modalImage}
                  alt="Imagem ampliada"
                  width={700}
                  height={700}
                  priority
                  className="object-contain w-full h-full rounded c"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
