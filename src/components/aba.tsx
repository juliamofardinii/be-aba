"use client";

import Image from "next/image";

export default function Aba() {
  return (
    <div className="flex flex-col items-center gap-10 p-10 pt-0">
      <h1 className="text-[26px] md:text-4xl lg:text-[35px] font-bold text-[var(--color-primary)]">
        Como atuamos
      </h1>
      <p>
        Utilizamos a{" "}
        <span className="text-[#FFA500] font-bold ">
          ABA - Análise do Comportamento Aplicada
        </span>
        , uma abordagem terapêutica que apoia o desenvolvimento de crianças com
        autismo de forma individualizada e acolhedora. Por meio de atividades
        lúdicas e personalizadas, estimulamos habilidades como comunicação,
        socialização e autonomia. Cada conquista é valorizada, com a
        participação ativa da família em todo o processo.
      </p>

      <div className="flex flex-col items-center w-full gap-2 md:flex-row">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="w-20 h-20 rounded-xl bg-[#FFE5B3]"></div>
            <p>Estímulo à comunicação e interação social</p>
          </div>
          <div className="flex flex-row">
            <div className="w-20 h-20 rounded-xl bg-[#FDBCAF]"></div>
            <p>Maior autonomia nas atividades diárias</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="w-20 h-20 rounded-xl bg-[#FFE5B3]"></div>
            <p>Redução de comportamentos desafiadores</p>
          </div>
          <div className="flex flex-row">
            <div className="w-20 h-20 rounded-xl bg-[#FDBCAF]"></div>
            <p>Terapia personalizada e envolvimento da família</p>
          </div>
        </div>
        <div className="md:w-[500px] md:h-[400px] w-[150px] h-[80px] flex items-center justify-center">
          <Image
            src="/ABA.png"
            alt="o que é ABA"
            width={450}
            height={50}
            quality={100}
            className="object-cover "
            priority
          />
        </div>
      </div>
    </div>
  );
}
