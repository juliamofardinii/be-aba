import Image from "next/image";
export default function OurTeam() {
  return (
    <div className="flex flex-col gap-10 p-10 pt-0">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-[var(--color-primary)]">
          Nossa equipe
        </h1>
      </div>

      <div className="flex flex-row pt-10 justify-center gap-15">
        <div className=" h-[100px] ">
          <div className="flex items-center justify-center transition-transform duration-300 bg-white rounded-full lg:h-36 lg:w-36 md:h-32 md:w-32 hover:scale-105">
            <Image
              src="/homem.png"
              alt="membro"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <p className="mt-4 font-semibold text-[#ffca64]">
            Henrique Mofardini
          </p>
          <p className="text-sm text-neutral-500">Sócio Administrador</p>
        </div>

        <div className=" h-[100px] ">
          <div className="flex items-center justify-center transition-transform duration-300 bg-white rounded-full lg:h-36 lg:w-36 md:h-32 md:w-32 hover:scale-105">
            <Image
              src="/homem.png"
              alt="membro"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <p className="mt-4 font-semibold text-[#ffca64]">Luana Mofardini</p>
          <p className="text-sm text-neutral-500">Coordenadora X</p>
        </div>

        <div className=" h-[100px] ">
          <div className="flex items-center justify-center transition-transform duration-300 bg-white rounded-full lg:h-36 lg:w-36 md:h-32 md:w-32 hover:scale-105">
            <Image
              src="/homem.png"
              alt="membro"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <p className="mt-4 font-semibold text-[#ffca64]">Joana da Silva</p>
          <p className="text-sm text-neutral-500">Psicologa</p>
        </div>
      </div>
      <div className="flex flex-row justify-center pt-25 gap-15">
        <div className=" h-[100px] ">
          <div className="flex items-center justify-center transition-transform duration-300 bg-white rounded-full lg:h-36 lg:w-36 md:h-32 md:w-32 hover:scale-105">
            <Image
              src="/homem.png"
              alt="membro"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <p className="mt-4 font-semibold text-[#ffca64]">Maria Pereira</p>
          <p className="text-sm text-neutral-500">Psicologa</p>
        </div>
        <div className=" h-[100px] ">
          <div className="flex items-center justify-center transition-transform duration-300 bg-white rounded-full lg:h-36 lg:w-36 md:h-32 md:w-32 hover:scale-105">
            <Image
              src="/homem.png"
              alt="membro"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <p className="mt-4 font-semibold text-[#ffca64]">Sandra Maria</p>
          <p className="text-sm text-neutral-500">Psicologa</p>
        </div>
      </div>
    </div>
  );
}
