import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ML-Projects-Frontend",
  description: "Identify disease of a tomato plant using ML model",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* TODO: MAke page more beautiful; */}
      <body className={inter.className}>
        <main className="flex flex-col max-w-screen-xl mx-auto p-5">
          <nav className="flex justify-between mb-10 sticky top-0 ">
            <div>TomaClass</div>
            <ul className="flex space-x-8">
              <li>
                <Link href="/tomatoes-disease-prediction/about-project">
                  About the Project
                </Link>
              </li>
              <li>
                <Link href="/tomatoes-disease-prediction/diseases">
                  About Diseases
                </Link>
              </li>
              <li className="">
                <Link href="/tomatoes-disease-prediction/make-prediction">
                  Predict
                </Link>
              </li>
            </ul>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
