"use client";

import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white px-6 py-5">
      <div className="max-w-[1272px] mx-auto flex flex-col items-center gap-6 text-center">
        <div>
          <h2 className="text-2xl font-bold">beAba</h2>
          <p className="mt-2 text-sm">
            Cuidado personalizado com base em evidências
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 text-sm md:flex-row md:flex-wrap md:justify-center md:gap-x-8 md:gap-y-2">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <a
              href="https://wa.me/5511912345678"
              target="_blank"
              rel="noopener noreferrer"
            >
              (11) 91234-5678
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={16} />
            <a href="mailto:contato@beaba.com.br">contato@beaba.com.br</a>
          </div>

          <div className="flex items-center gap-2">
            <Instagram size={16} />
            <a
              href="https://instagram.com/beaba.clinica"
              target="_blank"
              rel="noopener noreferrer"
            >
              @beaba.clinica
            </a>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <a
              href="https://www.google.com/maps?q=Rua+Exemplo+123+Sorocaba+SP"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rua Exemplo, 123 – Sorocaba/SP
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
