import "../styles/globals.css";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home">
      <div className="relative grid items-center grid-cols-1 md:grid-cols-[1fr_1fr] gap-10  text-center md:text-left  bg-[var(--color-background)] pt-5 ">
        <div className="space-y-2 font-sans text-center w-full md:max-w-[500px] lg:max-w-[550px] xl:max-w-[800px] mx-auto">
          <h1 className="text-[28px] md:text-[36px] lg:text-[38px] xl:text-[40px] font-bold leading-tight text-left text-[var(--color-primary)]">
            Cuidar com propósito, desenvolver com{" "}
            <span className="text-[#FFA500] font-bold">amor e atenção</span>
          </h1>
          <p className="text-[14px] md:text-[16px]  text-neutral-700  text-left ">
            Nossa clínica especializada oferece atendimento multidisciplinar
            para crianças com TEA, promovendo desenvolvimento, inclusão e
            qualidade de vida.
          </p>
          <a
            href="https://wa.me/5515981355254"
            className="inline-block mt-10 cursor-pointer bg-[#FE8A63] hover:bg-[#e56e4b] text-white px-8 py-4 rounded-md transition lg:px-8 lg:py-4 md:px-10 md:py-6 text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-[14px] md:text-[16px] xl:text-[20px] text-white">
              Entre em contato
            </p>
          </a>
        </div>

        <div className="  mx-auto w-[350px] lg:w-full ">
          <Image
            src="/heroPrincipalFundo.png"
            alt="Menina brincando"
            width={500}
            height={300}
            quality={100}
            className="object-cover w-full h-auto rounded-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
