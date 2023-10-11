import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./layout/header";
import Footer from "./layout/footer";
import { ThemeProvider } from "./context/themeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Step with Wayne Dev",
  description: "A blog post by a Next-Js developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={`${inter.className} bg-white dark:bg-dark `}>
          <Header />
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
