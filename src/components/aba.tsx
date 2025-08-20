"use client";

import Image from "next/image";

export default function Aba() {
  return (
    <div className="flex flex-col gap-5 pt-5 xl:pt-10 xl:gap-10">
      <h1 className="text-[26px] md:text-4xl lg:text-[35px] font-bold text-[var(--color-primary)] text-center">
        Como atuamos
      </h1>

      <p className="text-sm  lg:text-[16px] text-neutral-700 text-justify md:text-start">
        Na <span className="text-[#00b3b3] font-bold">beAba</span> utilizamos a{" "}
        <span className="text-[#FFA500] font-bold">
          ABA - Análise do Comportamento Aplicada
        </span>{" "}
        para desenvolver habilidades e reduzir comportamentos desafiadores de
        forma positiva. Nossa abordagem é naturalista, unindo estratégias
        terapêuticas às brincadeiras e à rotina da criança, respeitando seus
        interesses e individualidade. Trabalhamos lado a lado com a família para
        que cada criança alcance seu máximo potencial, com autonomia e qualidade
        de vida.
      </p>

      <div className="">
        <h2 className="text-xl md:text-2xl font-bold text-[#FDBCAF]">
          Por que a ABA faz diferença
        </h2>

        <div className="flex flex-col-reverse items-center justify-center w-full gap-10 lg:gap-2 xl:gap-5 lg:flex-row lg:h-80">
          <div className="grid grid-cols-1 space-y-2 space-x-15 md:grid-cols-2">
            <div className="flex items-start gap-3 rounded-xl  md:h-[120px] w-[300px]  h-[80px]">
              <div className="relative flex items-center justify-center bg-[#FFB37A] rounded-xl  md:w-[60px] md:h-[60px] w-[45px] h-[45px] ">
                <Image
                  src="/check-mark.png"
                  alt="Comunicação"
                  fill
                  className="object-contain p-2 md:p-4"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[#FFA500] font-bold lg:text-base text-sm">
                  Resultados comprovados{" "}
                </h3>
                <p className="text-sm text-neutral-700">
                  {" "}
                  Baseados em evidências científicas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl md:h-[120px] w-[300px]  h-[80px]">
              <div className=" relative flex items-center justify-center bg-[#FFD3AA] rounded-xl  md:w-[60px] md:h-[60px] w-[45px] h-[45px] ">
                <Image
                  src="/hands-and-gestures.png"
                  alt="Autonomia"
                  fill
                  className="object-contain p-2 md:p-4"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[#FFA500] font-bold lg:text-base text-sm">
                  Ensina novas habilidades
                </h3>
                <p className="text-sm text-neutral-700">
                  {" "}
                  Estimula o aprendizado.{" "}
                </p>
              </div>
            </div>

            <div className="  flex items-start gap-3 rounded-xl md:h-[120px] w-[300px]  h-[80px]">
              <div className="relative flex items-center justify-center bg-[#3EC3D6] rounded-xl md:w-[60px] md:h-[60px] w-[45px] h-[45px] ">
                <Image
                  src="/person.png"
                  alt="Bem-estar"
                  fill
                  className="object-contain p-2 md:p-4"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[#FFA500] font-bold lg:text-base text-sm">
                  Comportamento e Bem-Estar
                </h3>
                <p className="text-sm text-neutral-700">
                  {" "}
                  Redução de comportamentos desafiadores.
                </p>
              </div>
            </div>

            <div className=" flex items-start gap-3 rounded-xl md:h-[120px] w-[300px]  h-[80px]">
              <div className="relative flex items-center justify-center bg-[#7FD5E1] rounded-xl  md:w-[60px] md:h-[60px] w-[45px] h-[45px] ">
                <Image
                  src="/family.png"
                  alt="Cuidado Personalizado"
                  fill
                  className="object-contain p-2 md:p-4"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[#FFA500] font-bold lg:text-base text-sm">
                  Cuidado personalizado
                </h3>
                <p className="text-sm text-neutral-700">
                  Terapia no ritmo da criança, com apoio da família.
                </p>
              </div>
            </div>
          </div>

          <div className="relative md:w-[400px] md:h-[300px] lg:w-[400px] lg:h-[280px] xl:w-[450px] xl:h-[400px] w-[250px] h-[200px] flex items-center justify-center">
            <Image
              src="/ABA.png"
              alt="Imagem ABA"
              fill
              className="object-contain "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
