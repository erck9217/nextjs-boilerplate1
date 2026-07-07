import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ingerickgarcia.com'),
  title: {
    default: 'Erick García | Control de Obra',
    template: '%s | Erick García'
  },
  description:
    'Gestión y control de obra especializada en acueductos y urbanización. Estimaciones, programación y QA/QC con entregas claras en costo, plazo y calidad.',
  openGraph: {
    type: 'website',
    url: 'https://ingerickgarcia.com',
    title: 'Erick García | Control de Obra',
    description:
      'Gestión y control de obra con enfoque en proyectos hidráulicos y urbanos en México.',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Erick García – Control de Obra'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://ingerickgarcia.com'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        <a href="#contenido" className="sr-only focus:not-sr-only">Saltar al contenido</a>
        <Header />
        <main id="contenido">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
