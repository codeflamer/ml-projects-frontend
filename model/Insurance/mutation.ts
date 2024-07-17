import { Schema } from "@/types/Insurance";

export const handleRequest = async (data: Schema) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/predict_insurance", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.log("something went wrong");
    throw new Error("something went wrong");
  }
};
