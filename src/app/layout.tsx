import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "./ConvexClientProvider";
import Navbar from "@/components/Navbar";
import { NextUIProvider } from "@nextui-org/react";
import Sidebar from "@/components/Sidebar";

import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-0">
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
          <main className="flex-1 overflow-y-auto">
            <ConvexClientProvider>
              <NextUIProvider>
                <ThemeProvider attribute="class">
                  <Navbar />
                  <Sidebar />
                  {children}
                </ThemeProvider>
              </NextUIProvider>
            </ConvexClientProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
