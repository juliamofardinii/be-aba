import { MessageCircle } from "lucide-react";
import Image from "next/image";

export default function HealthInsurance() {
  return (
    <section id="convenios">
      <div className="flex flex-col items-center justify-center gap-5 py-5 xl:pt-10 xl:pb-10">
        {/* TÍTULO */}
        <div>
          <h1 className="text-[26px] md:text-4xl lg:text-[35px] font-bold text-[var(--color-primary)]">
            Convênios
          </h1>
        </div>

        {/* LOGOS */}
        <div className="flex flex-row gap-8 mt-4 flex-wrap justify-center">
          <div className="md:w-[200px] md:h-[130px] w-[150px] h-[80px] flex items-center justify-center rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 bg-white hover:shadow-[0_0_20px_rgba(90,88,88,0.5)]">
            <Image
              src="/unimed.png"
              alt="logo unimed"
              width={120}
              height={70}
              className="object-contain rounded"
              priority
            />
          </div>

          <div className="md:w-[200px] md:h-[130px] w-[150px] h-[80px] flex items-center justify-center rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 bg-white hover:shadow-[0_0_20px_rgba(90,88,88,0.5)]">
            <Image
              src="/funservLogo.png"
              alt="logo funserv"
              width={120}
              height={70}
              className="object-contain rounded"
              priority
            />
          </div>

          <div className="md:w-[200px] md:h-[130px] w-[150px] h-[80px] flex items-center justify-center rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 bg-white hover:shadow-[0_0_20px_rgba(90,88,88,0.5)]">
            <Image
              src="/gamasaude.png"
              alt="logo gama"
              width={120}
              height={70}
              className="object-contain rounded"
              priority
            />
          </div>
        </div>

        {/* TEXTO + BOTÃO */}
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <h1 className="sm:text-2xl lg:text-xl xl:text-[24px] font-semibold text-neutral-700">
            Atendemos também{" "}
            <span className="text-[#FFA500] font-bold">particular!</span>
          </h1>

          <p className="max-w-max text-sm md:text-[14px] lg:text-[16px] text-neutral-700">
            Fale conosco e saiba mais sobre as formas de pagamento e cobertura.
          </p>

          <a
            href="https://wa.me/5515981355254"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-bold bg-[#FE8A63] hover:bg-[#e56e4b] text-white transition"
          >
            <MessageCircle className="h-5 w-5" />
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  );
}
