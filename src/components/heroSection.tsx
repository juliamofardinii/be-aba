import { MessageCircle, Star, Sun, Heart } from "lucide-react";
import "../styles/globals.css";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="gradient-hero overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-8">
        <div className="animate-fade-up">
          <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl lg:text-[3.4rem] text-[var(--color-primary)]">
            Cuidar com propósito, desenvolver com{" "}
            <span className="text-[#FFA500] font-bold">amor e atenção</span>
          </h1>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">
            Nossa clínica especializada oferece atendimento multidisciplinar
            para crianças com TEA, promovendo desenvolvimento, inclusão e
            qualidade de vida.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/5515981355254"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full cursor-pointer bg-[#FE8A63] hover:bg-[#e56e4b] text-white px-7 py-3.5 text-base font-bold  transition-transform "
            >
              <MessageCircle className="h-5 w-5" />
              Entre em contato
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 px-7 py-3 text-base font-bold text-primary transition-colors hover:bg-primary-soft"
            >
              Conhecer serviços
            </a>
          </div>
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
