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
      <p>
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
      <div className="space-y-5 ">
        <h2 className="text-xl md:text-2xl font-bold text-[var(--color-primary)]">
          Por que a ABA faz diferença
        </h2>

        {/* Grid de benefícios + imagem */}
        <div className="flex flex-col-reverse items-center justify-center w-full gap-2 xl:gap-8 lg:flex-row">
          {/* Benefícios em grid 2x2 */}
          <div className="grid grid-cols-1 space-y-2 space-x-15 md:grid-cols-2">
            {/* Item 1 */}
            <div className="flex items-start gap-3 rounded-xl  h-[120px] w-[300px] ">
              <div className="flex items-center justify-center bg-[#FFE5B3] rounded-xl w-[70px] h-[70px] ">
                <Image
                  src="/people-talking.png"
                  alt="Comunicação"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[#FFA500] font-bold text-base">
                  Comunicação e Socialização
                </h3>
                <p className="text-sm">
                  Estímulo à comunicação e interação social.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-3 rounded-xl h-[120px] w-[300px] ">
              <div className="flex items-center justify-center bg-[#FDBCAF] rounded-xl  xl:w-[70px] w-[70px] h-[70px] ">
                <Image
                  src="/hands-and-gestures.png"
                  alt="Autonomia"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[#FFA500] font-bold text-base">
                  Autonomia no Dia a Dia
                </h3>
                <p className="text-sm">
                  Independência em tarefas simples como se vestir e brincar.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-3 rounded-xl h-[120px] w-[300px] ">
              <div className="flex items-center justify-center bg-[#FFE5B3] rounded-xl  xl:w-[70px]  w-[70px] h-[70px] ">
                <Image
                  src="/person.png"
                  alt="Bem-estar"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[#FFA500] font-bold text-base">
                  Comportamento e Bem-Estar
                </h3>
                <p className="text-sm">
                  Redução de comportamentos desafiadores.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start gap-3 rounded-xl h-[120px] w-[300px] ">
              <div className="flex items-center justify-center bg-[#FDBCAF] rounded-xl   w-[70px] h-[70px] ">
                <Image
                  src="/family.png"
                  alt="Cuidado Personalizado"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[#FFA500] font-bold text-base">
                  Cuidado Personalizado
                </h3>
                <p className="text-sm">
                  Terapia no ritmo da criança, com apoio da família.
                </p>
              </div>
            </div>
          </div>

          {/* Imagem ao lado */}
          <div className="md:w-[400px] md:h-[250px] lg:w-[300px] lg:h-[150px] xl:w-[450px] xl:h-[300px] w-[250px] h-[200px] flex items-center justify-center">
            <Image
              src="/ABA.png"
              alt="Imagem ABA"
              width={450}
              height={300}
              className="object-cover rounded-lg"
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
