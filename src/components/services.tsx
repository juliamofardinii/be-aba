import Image from "next/image";
import "../styles/globals.css";

export default function Services() {
  return (
    <div className="relative w-full p-10 pt-0 ">
      <Image
        src="/sectionFundo.jpg"
        alt="Menina brincando"
        width={1100}
        height={700}
        quality={100}
        className="w-full h-full "
        priority
      />

      <div>
        <h1 className="absolute text-4xl font-bold xl:top-15 top-5 left-1/2 -translate-x-1/2 text-[var(--color-primary)]">
          Nossos Serviços
        </h1>
      </div>

      {/* Container dos ícones centralizado */}
      <div className="absolute grid grid-flow-col grid-rows-3 gap-1 space-x-8 -translate-x-1/2 md:grid-rows-1 xl:top-40 top-20 left-1/2">
        <div className="flex flex-col items-center w-40">
          <div className="rounded-full bg-[var(--color-secondary)] xl:h-20 xl:w-20 w-15 h-15 flex items-center justify-center hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-transform duration-300">
            <Image
              src="/brain.png"
              alt="Psico"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className="mt-2 font-semibold text-center text-neutral-700">
            Psicologia
          </span>
        </div>

        {/* Ícone 2 */}
        <div className="flex flex-col items-center w-40">
          <div className="rounded-full bg-[var(--color-secondary)] xl:h-20 xl:w-20 w-15 h-15  flex items-center justify-center hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-transform duration-300">
            <Image
              src="/blocks (2).png"
              alt="TO"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className="mt-2 font-semibold text-center text-neutral-700 ">
            T.O. ABA
          </span>
        </div>

        {/* Ícone 3 */}
        <div className="flex flex-col items-center w-40">
          <div className="rounded-full bg-[var(--color-secondary)] xl:h-20 xl:w-20 w-15 h-15  flex items-center justify-center hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-transform duration-300">
            <Image
              src="/pyramid.png"
              alt="Sensorial"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className="mt-2 font-semibold text-center text-neutral-700 ">
            Integração Sensorial
          </span>
        </div>

        {/* Ícone 4 */}
        <div className="flex flex-col items-center w-40">
          <div className="rounded-full bg-[var(--color-secondary)] xl:h-20 xl:w-20 w-15 h-15  flex items-center justify-center hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-transform duration-300">
            <Image
              src="/balao-de-fala.png"
              alt="Fono"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className="mt-2 font-semibold text-center text-neutral-700 ">
            Fono ABA
          </span>
        </div>

        {/* Ícone 5 */}
        <div className="flex flex-col items-center w-40">
          <div className="rounded-full bg-[var(--color-secondary)] xl:h-20 xl:w-20 w-15 h-15  flex items-center justify-center hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-transform duration-300">
            <Image
              src="/movimento.png"
              alt="Psicomotricidade"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className="mt-2 font-semibold text-center text-neutral-700 ">
            Psicomotricidade
          </span>
        </div>

        {/* Ícone 6 */}
        <div className="flex flex-col items-center w-40">
          <div className="rounded-full bg-[var(--color-secondary)] xl:h-20 xl:w-20 w-15 h-15  flex items-center justify-center hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-transform duration-300">
            <Image
              src="/cerebro-humano.png"
              alt="Neuro"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className="mt-2 font-semibold text-center text-neutral-700 ">
            Neuropsicologia
          </span>
        </div>
      </div>
    </div>
  );
}
