import * as z from "zod";

export type GENDER = {
  gender: [string, string];
};

export type REGION = {
  locations: [];
};

export const schema = z.object({
  age: z.number(),
  bmi: z.number(),
  children: z.number(),
  smoker: z.number(),
  sex: z.string(),
  location: z.string(),
});

export type Schema = z.infer<typeof schema>;
