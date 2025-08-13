"use client";

import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5515981355254"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 p-3 text-white transition-colors bg-green-500 rounded-full shadow-lg bottom-6 right-6 hover:bg-green-600"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <Image src="/whatsapp.png" alt="WhatsApp" width={30} height={30} />
    </a>
  );
}
