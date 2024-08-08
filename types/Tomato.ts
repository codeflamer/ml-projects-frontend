export type TomatoSchema = {
  file: File;
};

export type ResponseTomatoes = {
  prediction_class: string;
  confidence: number;
};

export type PreventionType = {
  [disease: string]: {
    prevention: string[];
  };
};

// {
//   "prediction_class": "Tomato_Late_blight",
//   "confidence": 0.999943733215332
// }
