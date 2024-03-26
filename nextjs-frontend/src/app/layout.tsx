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
        <canvas></canvas>
        <script src="/particles.js"></script>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
