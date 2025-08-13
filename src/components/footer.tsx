"use client";

import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white px-6 py-5 ">
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
              href="https://wa.me/5515981355254"
              target="_blank"
              rel="noopener noreferrer"
            >
              (15) 981355-5254
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={16} />
            <a href="mailto:contato@beaba.com.br">
              recepcao.clinibeaba@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Instagram size={16} />
            <a
              href="https://www.instagram.com/clinica.be.aba?igsh=aWFxMWlkb21uc201"
              target="_blank"
              rel="noopener noreferrer"
            >
              @clinica.be.aba
            </a>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <a
              href="https://www.google.com/maps/place/Clinica+Be+Aba/@-23.5174906,-47.459871,17z/data=!3m1!4b1!4m6!3m5!1s0x94c58b25ab7c1667:0x7ade8a5abc7781f6!8m2!3d-23.5174956!4d-47.4550001!16s%2Fg%2F11w2xmfrsf?entry=ttu&g_ep=EgoyMDI1MDgxMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              R. M.nha Antônia Damini, 142 - Jardim Emilia, Sorocaba - SP
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
