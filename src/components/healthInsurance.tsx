import Image from "next/image";
import { Button } from "./ui/button";

export default function HealthInsurance() {
  return (
    <section id="convenios">
      <div className="flex flex-col items-center justify-center p-10 pt-0">
        <div>
          <h1 className="text-[26px] md:text-4xl lg:text-[35px] font-bold text-[var(--color-primary)]">
            Convênios
          </h1>
        </div>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-5 min-h-[110px] mt-6">
          {/* Texto e botão */}
          <div className="flex flex-col items-center justify-center gap-2 lg:items-start">
            <h1 className="sm:text-2xl lg:text-xl xl:text-[24px] font-semibold text-center text-neutral-700 lg:text-start">
              Atendemos também{" "}
              <span className="text-[#FFA500] font-bold">particular!</span>
            </h1>
            <p className="max-w-xs text-sm md:text-[14px] lg:text-[16px] text-neutral-700 text-center lg:text-start">
              Fale conosco e saiba mais sobre as formas de pagamento e
              cobertura.
            </p>
            <Button className=" cursor-pointer w-fit bg-[#FE8A63] hover:bg-[#e56e4b] text-white px-8 py-5 rounded-md transition duration-300 flex align-center">
              <p className="text-sm text-white md:text-base">
                Entre em contato
              </p>
            </Button>
          </div>

          {/* Logos dos convênios */}
          <div className="flex flex-row gap-4 mt-4">
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
        </div>
      </div>
    </section>
  );
}
