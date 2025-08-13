"use client";

import "../styles/globals.css";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ícones

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`w-full bg-[var(--color-background)] rounded-b-4xl relative z-50
    flex flex-col md:flex-row
    px-5
    ${isOpen ? "pb-6" : ""}
  `}
    >
      {/* Linha superior: logo + menu desktop + ícone mobile */}
      <div className="flex w-full h-[60px] justify-between items-center">
        <div>
          <Image
            src="/beAba-logo.png"
            alt="Logo Be Aba"
            width={50}
            height={40}
          />
        </div>

        <nav className="hidden md:flex gap-5 text-[var(--color-primary)] font-semibold">
          <a href="#home" className="cursor-pointer">
            Home
          </a>
          <a href="#servicos" className="cursor-pointer">
            Serviços
          </a>
          <a href="#sobre" className="cursor-pointer">
            Sobre nós
          </a>
          <a href="#depoimentos" className="cursor-pointer">
            Depoimentos
          </a>
          <a href="#convenios" className="cursor-pointer">
            Convênios
          </a>
        </nav>

        <div className="md:hidden">
          {isOpen ? (
            <X
              size={30}
              onClick={toggleMenu}
              className="text-[var(--color-primary)] cursor-pointer"
            />
          ) : (
            <Menu
              size={30}
              onClick={toggleMenu}
              className="text-[var(--color-primary)] cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Menu mobile expandido, em coluna */}
      {isOpen && (
        <nav className="flex flex-col gap-6 mt-4 text-[var(--color-primary)] font-semibold md:hidden text-center">
          <a href="#home" className="cursor-pointer" onClick={toggleMenu}>
            Home
          </a>
          <a href="#servicos" className="cursor-pointer" onClick={toggleMenu}>
            Serviços
          </a>
          <a href="#sobre" className="cursor-pointer" onClick={toggleMenu}>
            Sobre nós
          </a>
          <a
            href="#depoimentos"
            className="cursor-pointer"
            onClick={toggleMenu}
          >
            Depoimentos
          </a>
          <a href="#convenios" className="cursor-pointer" onClick={toggleMenu}>
            Convênios
          </a>
          <a href="#contato" className="cursor-pointer" onClick={toggleMenu}>
            Contato
          </a>
        </nav>
      )}
    </header>
  );
}
