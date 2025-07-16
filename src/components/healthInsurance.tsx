import Image from "next/image";

export default function HealthInsurance() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div>
        <h1 className="text-4xl font-bold text-[var(--color-primary)]">
          Convênios
        </h1>
      </div>

      <div className="space-y-5">
        <div className="flex flex-row gap-4 mt-4">
          <div className="w-[150px] h-[90px] relative">
            <Image
              src="/funserv.jpg"
              alt="logo funserv"
              fill
              className="object-cover rounded"
              priority
            />
          </div>

          <div className="w-[150px] h-[90px] relative">
            <Image
              src="/gamasaude.png"
              alt="logo gama"
              fill
              className="object-cover rounded"
              priority
            />
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-semibold text-neutral-700">
            Atendemos também particular!
          </h1>
        </div>
      </div>
    </div>
  );
}
