export type TomatoSchema = {
  file: File;
};

export type ResponseTomatoes = {
  prediction_class: string;
  confidence: number;
};

// {
//   "prediction_class": "Tomato_Late_blight",
//   "confidence": 0.999943733215332
// }
