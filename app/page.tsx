import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1 className="text-2xl italic ">
        Welcome to the home of all ML Projects
      </h1>
      <h3 className="mt-4">Here are the lists of all ml projects to explore</h3>
      <ul className="mt-10">
        <li>
          1. Linear Regression task:{" "}
          <Link href="/insurance-price-prediction">
            Insurance Price Prediction Model
          </Link>
        </li>
      </ul>
    </main>
  );
}
