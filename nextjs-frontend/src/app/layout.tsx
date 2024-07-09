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
        <script defer data-domain="damondiaz.xyz" src="https://plausible-y80sssg.damondiaz.xyz/js/script.js"></script>
      </Head>
      <body className="{inter.className}">
        <canvas></canvas>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
