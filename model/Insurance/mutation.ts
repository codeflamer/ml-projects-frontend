import { Schema } from "@/types/Insurance";

export const handleRequest = async (data: Schema) => {
  try {
    const response = await fetch(
      "https://us-central1-insurance-model-431300.cloudfunctions.net/predict",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    return await response.json();
  } catch (error) {
    console.log("something went wrongd");
    throw new Error("something went wrong");
  }
};
