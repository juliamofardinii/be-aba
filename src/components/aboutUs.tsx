import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center gap-10 p-10 pt-0 ">
      <h1 className="text-4xl font-bold text-[var(--color-primary)]">
        Sobre nós
      </h1>

      <div className="flex flex-row gap-2">
        <div className="relative w-[350px] h-82 border-[6px] border-amber-200 rounded-2xl">
          <Image
            src="/fotoClinica.jpg"
            alt="foto clinica"
            fill
            quality={100}
            className="object-cover rounded-md"
            priority
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="relative w-[180px] h-40 border-[6px] border-amber-200 rounded-2xl">
            <Image
              src="/foto-clinica2.jpg"
              alt="foto clinica"
              fill
              quality={100}
              className="object-cover rounded-md"
              priority
            />
          </div>

          <div className="relative w-[180px] h-40 border-[6px] border-amber-200 rounded-2xl">
            <Image
              src="/fotoClinica3.jpg"
              alt="foto clinica"
              fill
              quality={100}
              className="object-cover rounded-md"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="relative w-[180px] h-40 border-[6px] border-amber-200 rounded-2xl">
            <Image
              src="/fotoClinica4.jpg"
              alt="foto clinica"
              fill
              quality={100}
              className="object-cover rounded-md"
              priority
            />
          </div>

          <div className="relative w-[180px] h-40 border-[6px] border-amber-200 rounded-2xl">
            <Image
              src="/fotoClinica5.jpg"
              alt="foto clinica"
              fill
              quality={100}
              className="object-cover rounded-md"
              priority
            />
          </div>
        </div>

        <div className="ml-6 space-y-8 max-w-[400px]">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-neutral-700">
              Lorem Ipsum is not{" "}
              <span className="text-[#FFA500] font-bold">
                {" "}
                simply random text
              </span>
            </h2>

            <p className="text-md text-neutral-700 ">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isnt.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex flex-row gap-8">
              <div className="relative w-[50px] h-[30px]">
                <Image
                  src="/target (1).png"
                  alt="foto clinica"
                  fill
                  quality={100}
                  priority
                />
              </div>
              <div>
                <p className="">Contrary to popular</p>
                <p className="text-sm text-neutral-700">
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-5">
              <div className="relative w-[50px] h-[30px]">
                <Image
                  src="/maternity.png"
                  alt="foto clinica"
                  fill
                  quality={100}
                  priority
                />
              </div>
              <div>
                <p className="">Contrary to popular</p>
                <p className="text-sm text-neutral-700">
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
