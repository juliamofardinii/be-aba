"use client";

import Image from "next/image";

export default function Aba() {
  return (
    <div className="flex flex-col gap-10 p-10 pt-0">
      {/* Título principal */}
      <h1 className="text-[26px] md:text-4xl lg:text-[35px] font-bold text-[var(--color-primary)] text-center">
        Como atuamos
      </h1>

      {/* Texto de introdução */}
      <p className="text-sm lg:text-[16px] text-neutral-700">
        Utilizamos a{" "}
        <span className="text-[#FFA500] font-bold">
          ABA - Análise do Comportamento Aplicada
        </span>
        , uma abordagem terapêutica que apoia o desenvolvimento de crianças com
        autismo de forma individualizada e acolhedora. Por meio de atividades
        lúdicas e personalizadas, estimulamos habilidades como comunicação,
        socialização e autonomia. Cada conquista é valorizada, com a
        participação ativa da família em todo o processo.
      </p>

      {/* Título seção benefícios */}
      <div className="">
        <h2 className="text-xl md:text-2xl font-bold text-[#FDBCAF]">
          Por que a ABA faz diferença
        </h2>

        {/* Grid de benefícios + imagem */}
        <div className="flex flex-col-reverse items-center justify-center w-full gap-10 lg:gap-2 xl:gap-5 lg:flex-row lg:h-80">
          {/* Benefícios em grid 2x2 */}
          <div className="grid grid-cols-1 space-y-2 space-x-15 md:grid-cols-2">
            {/* Item 1 */}
            <div className="flex items-start gap-3 rounded-xl  md:h-[120px] w-[300px]  h-[80px]">
              <div className="relative flex items-center justify-center bg-[#FFB37A] rounded-xl  md:w-[60px] md:h-[60px] w-[50px] h-[50px] ">
                <Image
                  src="/people-talking.png"
                  alt="Comunicação"
                  fill
                  className="object-contain p-2 md:p-4"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[#FFA500] font-bold lg:text-base text-sm">
                  Comunicação e Socialização
                </h3>
                <p className="text-sm text-neutral-700">
                  {" "}
                  Estímulo à comunicação e interação social.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-3 rounded-xl md:h-[120px] w-[300px]  h-[80px]">
              <div className=" relative flex items-center justify-center bg-[#FFD3AA] rounded-xl  md:w-[60px] md:h-[60px] w-[50px] h-[50px] ">
                <Image
                  src="/hands-and-gestures.png"
                  alt="Autonomia"
                  fill
                  className="object-contain p-2 md:p-4"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[#FFA500] font-bold lg:text-base text-sm">
                  Autonomia no Dia a Dia
                </h3>
                <p className="text-sm text-neutral-700">
                  {" "}
                  Independência em tarefas simples como se vestir e brincar.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="  flex items-start gap-3 rounded-xl md:h-[120px] w-[300px]  h-[80px]">
              <div className="relative flex items-center justify-center bg-[#3EC3D6] rounded-xl md:w-[60px] md:h-[60px] w-[50px] h-[50px] ">
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

            {/* Item 4 */}
            <div className=" flex items-start gap-3 rounded-xl md:h-[120px] w-[300px]  h-[80px]">
              <div className="relative flex items-center justify-center bg-[#7FD5E1] rounded-xl  md:w-[60px] md:h-[60px] w-[50px] h-[50px] ">
                <Image
                  src="/family.png"
                  alt="Cuidado Personalizado"
                  fill
                  className="object-contain p-2 md:p-4"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[#FFA500] font-bold lg:text-base text-sm">
                  Cuidado Personalizado
                </h3>
                <p className="text-sm text-neutral-700">
                  Terapia no ritmo da criança, com apoio da família.
                </p>
              </div>
            </div>
          </div>

          {/* Imagem ao lado */}
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
