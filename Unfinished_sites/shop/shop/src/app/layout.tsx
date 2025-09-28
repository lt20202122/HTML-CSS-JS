import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Nav from "@/components/layout/nav/Nav";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import { Merriweather } from 'next/font/google'

// Initialize the font
const merriweather = Merriweather({
  subsets: ['latin'], // include what you need
  weight: ['400', '700'], // specify font weights
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shop",
  description: "Discription",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-root dark:bg-root_dark">
      <body>
        <div className = "flex-col">
        <header className="w-screen"><Header /></header>
        {/*<nav><Nav /></nav>*/}
        <main>{ children }</main>
        <footer><Footer /></footer>

    </div>
      </body>
    </html>
  );
}
