import Image from "next/image";
import "../styles/globals.css";

export default function AbotUs() {
  return (
    <div className="relative w-full p-10 overflow-hidden rounded-xl">
      <Image
        src="/sectionFundo.jpg"
        alt="Menina brincando"
        width={1100}
        height={660}
        quality={100}
        className="object-cover w-full h-auto"
        priority
      />

      <h1 className="absolute text-4xl font-bold top-20 left-1/2 -translate-x-1/2 text-[var(--color-primary)]">
        Nossos Serviços
      </h1>

      {/* Container dos ícones centralizado */}
      <div className="absolute flex gap-20 -translate-x-1/2 top-45 left-1/2">
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-[var(--color-secondary)] h-20 w-20 flex items-center justify-center">
            <Image
              src="/brain.png"
              alt="Psico"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className="mt-2 font-semibold text-center text-neutral-700 ">
            Psicologia
          </span>
        </div>

        {/* Ícone 2 */}
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-[var(--color-secondary)] h-20 w-20 flex items-center justify-center">
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
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-[var(--color-secondary)] h-20 w-20 flex items-center justify-center">
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
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-[var(--color-secondary)] h-20 w-20 flex items-center justify-center">
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
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-[var(--color-secondary)] h-20 w-20 flex items-center justify-center">
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
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-[var(--color-secondary)] h-20 w-20 flex items-center justify-center">
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
