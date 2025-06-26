"use client";

import "../styles/globals.css";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ícones

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full h-[60px] bg-[var(--color-background)] flex justify-between items-center px-15 rounded-b-4xl relative z-50">
      <div>
        <Image src="/logoBeAba.jpg" alt="Logo Be Aba" width={50} height={40} />
      </div>

      <nav className="hidden md:flex gap-5 text-[var(--color-primary)] font-semibold">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">Sobre Nós</p>
        <p className="cursor-pointer">Quem Somos</p>
        <p className="cursor-pointer">Contato</p>
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

      {isOpen && (
        <div className="absolute top-[60px] right-0 bg-[var(--color-neutral-secondary)] w-1/2 h-screen flex flex-col gap-8 p-6 text-[var(--color-primary)] font-semibold rounded-bl-5xl md:hidden">
          <p className="cursor-pointer" onClick={toggleMenu}>
            Home
          </p>
          <p className="cursor-pointer" onClick={toggleMenu}>
            Sobre Nós
          </p>
          <p className="cursor-pointer" onClick={toggleMenu}>
            Quem Somos
          </p>
          <p className="cursor-pointer" onClick={toggleMenu}>
            Contato
          </p>
        </div>
      )}
    </header>
  );
}
