// "use server";
import { Schema } from "@/types/Insurance";
import { ResponseTomatoes, TomatoSchema } from "@/types/Tomato";

export const handleTomatoesPredict = async (
  data: TomatoSchema
): Promise<ResponseTomatoes> => {
  // await new Promise((resolve, reject) => setTimeout(resolve, 5000));
  const formData = new FormData();
  formData.append("file", data.file);
  try {
    const response = await fetch("http://localhost:8000/predict", {
      method: "POST",
      body: formData,
    });
    return await response.json();
  } catch (error) {
    throw new Error("something went wrong");
    console.log(error);
    console.log("something went wrongd");
  }
};
