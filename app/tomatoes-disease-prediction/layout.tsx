import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import NavHeader from "@/components/tomatoes-model/nav-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ML-Projects-Frontend",
  description:
    "Identify disease of a tomato plant using ML model built with CNN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* TODO: MAke page more beautiful; */}
      <body className={`${inter.className} `}>
        <NavHeader />
        <main className="flex flex-col max-w-screen-xl mx-auto px-5 md:px-0">
          {children}
        </main>
      </body>
    </html>
  );
}
