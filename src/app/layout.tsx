import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Receitas",
  description: "Site com as mais diversas e deliciosas receitas mineiras",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn("antialiased", "h-full", inter.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-screen flex flex-col bg-gray-50 text-amber-950">
        <Header />

        <main className="flex-grow">{children}</main> 
        
        <Footer />
        <Toaster richColors />
      </body>
    </html>
  );
}