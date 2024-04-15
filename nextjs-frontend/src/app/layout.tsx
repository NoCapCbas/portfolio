import type { Metadata } from "next";
import Head from 'next/head';
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Damon's Portfolio",
  description: "Damon Diaz's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <Head>
        <script src="/particles.js" defer />
      </Head>
      <body className="{inter.className}">
        <canvas></canvas>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
