import { InsuranceModelForm } from "@/components/insurance-model/insurance-model-form";
// import { getGenders, getLocations } from "@/model/Insurance/query";
import Image from "next/image";
import Link from "next/link";

export default async function Insurance() {
  // const regions = await getLocations();
  // const genders = await getGenders();

  const genders = { gender: ["female", "male"] };
  const regions = {
    locations: ["northeast", "northwest", "southeast", "southwest"],
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl italic ">
        Welcome to Insurance Price Prediction Model
      </h1>
      <h3 className="mt-4">Here are the lists of all ml projects to explore</h3>
      <InsuranceModelForm genders={genders} regions={regions} />
    </main>
  );
}
