import type { Metadata } from "next";

import "@payroll/tailwind-config/globals.css";

export const metadata: Metadata = {
  title: "PayrollValidator - Validation de paie intelligente",
  description:
    "Validez vos données de paie contre la législation française en quelques secondes. Traitement de 500 lignes en moins de 30 secondes avec une précision de 99.9%.",
  keywords: [
    "paie",
    "validation",
    "législation française",
    "SMIC",
    "heures",
    "conformité",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
