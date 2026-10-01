import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AtuaTI | Suporte de TI para pequenas empresas",
  description: "Suporte de TI remoto e presencial, redes, segurança, cloud e infraestrutura para pequenas empresas em São Paulo e região.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
