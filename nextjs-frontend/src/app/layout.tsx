import type { Metadata } from "next";
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
      <body className="{inter.className}">
        <script defer data-domain="damondiaz.xyz" src="https://plausible.damondiaz.xyz/js/script.js"></script>

        <canvas></canvas>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
