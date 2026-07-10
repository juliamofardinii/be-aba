"use client";

import "../styles/globals.css";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#servicos", label: "Serviços" },
    { href: "#sobre", label: "Sobre nós" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#convenios", label: "Convênios" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a
          href="#home"
          className="flex items-center gap-1 font-display text-2xl font-bold leading-none"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <div>
            <Image
              src="/beAba-logo.png"
              alt="Logo Be Aba"
              width={50}
              height={40}
            />
          </div>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-foreground/80 transition-colors hover:text-[var(--color-primary)]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5515981355254"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-coral px-5 py-2 text-sm font-bold text-coral-foreground shadow-coral transition-transform hover:scale-105"
          >
            Agendar avaliação
          </a>
        </nav>

        <button
          className="rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-foreground/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/5515981355254"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-coral px-5 py-2 text-center text-sm font-bold text-coral-foreground"
            >
              Agendar avaliação
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
