import "../styles/globals.css";
import { Nunito } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsAppButton";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
});

export const metadata = {
  title: "beAba",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={nunito.variable}>
      <body>
        <div className="max-w-[1272px] mx-auto px-4">
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
