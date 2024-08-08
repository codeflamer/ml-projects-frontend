"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { handleTomatoesPredict } from "@/model/tomatoes/mutation";

import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import { Loader } from "lucide-react";
import Image from "next/image";
import { PreventionType } from "@/types/Tomato";

const preventions: PreventionType = {
  Tomato_Bacterial_spot: {
    prevention: [
      "Use Disease-Resistant Varieties",
      "Improve Air Circulation and Reduce Leaf Wetness",
      "Sanitation and Proper Handling",
    ],
  },
  Tomato_Early_blight: {
    prevention: [
      "Use Resistant Varieties: Plant tomato varieties that are resistant to early blight.",
      "Mulching: Apply mulch around the base of plants to prevent soil from splashing onto leaves, which can spread the fungus.",
      "Fungicide Application: Apply fungicides like copper-based products early in the season as a preventive measure.",
    ],
  },
  Tomato_Late_blight: {
    prevention: [
      "Remove Infected Plants: Remove and destroy infected plants immediately to prevent the spread of spores.",
      "Avoid Overhead Watering: Water plants at the base rather than from above to minimize moisture on leaves.",
      "Use Certified Seedlings: Only plant healthy, certified seedlings to prevent the introduction of the pathogen.",
    ],
  },
  Tomato_Leaf_Mold: {
    prevention: [
      "Improve Air Circulation: Space plants properly and prune lower leaves to enhance air circulation and reduce humidity.",
      "Reduce Humidity: Avoid overhead watering and water early in the day to allow foliage to dry quickly.",
      "Sanitation: Remove and destroy infected leaves, and clean up plant debris at the end of the season.",
    ],
  },
  Tomato_Septoria_leaf_spot: {
    prevention: [
      "Crop Rotation: Avoid planting tomatoes in the same location for at least two to three years.",
      "Proper Spacing: Ensure adequate spacing between plants to improve air circulation and reduce humidity around the foliage.",
      "Remove Infected Leaves: Promptly remove and destroy infected leaves to prevent the spread of the disease.",
    ],
  },
  Tomato_Spider_mites_Two_spotted_spider_mite: {
    prevention: [
      "Regular Monitoring: Check plants frequently for early signs of mite infestation.",
      "Introduce Predatory Mites: Release natural predators like predatory mites or ladybugs to control spider mite populations.",
      "Water Spray: Use a strong jet of water to dislodge mites from the plants, especially on the undersides of leaves.",
    ],
  },
  Tomato__Target_Spot: {
    prevention: [
      "Use Resistant Varieties: Plant tomato varieties that are resistant to target spot.",
      "Proper Irrigation: Avoid overhead watering and ensure plants are watered early in the day.",
      "Fungicide Treatment: Apply appropriate fungicides at the first sign of disease.",
    ],
  },
  Tomato__Tomato_YellowLeaf__Curl_Virus: {
    prevention: [
      "Control Whiteflies: Use reflective mulches, insecticidal soaps, or yellow sticky traps to manage whiteflies, the primary vector of TYLCV.",
      "Plant Resistant Varieties: Choose tomato varieties that are resistant or tolerant to TYLCV.",
      "Remove Infected Plants: Uproot and destroy infected plants to prevent the virus from spreading.",
    ],
  },
  Tomato__Tomato_mosaic_virus: {
    prevention: [
      "Disinfect Tools: Regularly disinfect gardening tools and wash hands after handling infected plants.",
      "Plant Resistant Varieties: Use tomato varieties that are resistant to ToMV",
      "Avoid Tobacco Use: Tobacco products can carry the virus; avoid using them near tomato plants",
    ],
  },
  Tomato_healthy: {
    prevention: ["LOL:) , They are perfectly healthy."],
  },
};

// const name = []

const PredictionDisplay = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [filetempUrl, setFileTempUrl] = useState<string>();
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: handleTomatoesPredict,
    onSuccess: (res) => {
      console.log(res);
    },
    onError: () => {
      setShowModal(false);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    },
  });

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    noKeyboard: true,
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setShowModal(true);
      setFileTempUrl(URL.createObjectURL(acceptedFiles[0]));
      //request goes here
      //   handleTomatoesPredict
      mutation.mutate({ file: acceptedFiles[0] });
    },
  });

  const thumbs = acceptedFiles.map((file: File) => (
    <div key={file.name}>
      {/* given fixed heiht and width */}
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image
          alt="Prediction image"
          src={filetempUrl!}
          width="250"
          height="250"
          className="mx-auto rounded-md"
        />
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div
        {...getRootProps({ className: "dropzone" })}
        className={`space-y-4 text-white bg-[url("https://images.unsplash.com/photo-1602943543714-cf535b048440?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center bg-no-repeat bg-fixed flex flex-col justify-center border-2 border-dashed border-green-500 rounded-md  bg-gray-100 max-w-md mx-auto mt-10 min-h-[330px]`}
      >
        <input {...getInputProps()} accept="image/jpeg, image/jpg" />
        <p>Drag drop image here</p>
        <Button
          type="button"
          onClick={open}
          className="bg-green-500 hover:bg-green-300 w-[50%] mx-auto"
        >
          Upload file
        </Button>
      </div>

      <div>
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center">
                Tomatoe Leaf disease classification
              </DialogTitle>
              <DialogDescription className="text-center">
                Prediction from the Trained Model
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <div className="text-[17px]">
                  <div className="mx-auto">{thumbs}</div>
                  {mutation.isPending && (
                    <p className="text-center mt-3 mx-auto">
                      <Loader className="animate-spin mx-auto h-6 w-6" />
                    </p>
                  )}

                  {mutation.isSuccess && (
                    <>
                      <p className="text-bold mt-3">
                        Prediction result: {mutation.data!.prediction_class}
                      </p>
                      <p className="text-bold">
                        Confidence of prediction:{" "}
                        {(mutation.data!.confidence * 100).toFixed(2)}%
                      </p>
                    </>
                  )}
                </div>
                <div>
                  <h5 className="text-center mt-4 text-bold mb-1 text-[18px]">
                    Preventive measures
                  </h5>
                  <article>
                    {/* {preventions.disease["Tomato_Bacterial_spot"]}
                     */}
                    <ul>
                      {mutation?.data &&
                        preventions[
                          mutation.data!.prediction_class
                        ].prevention.map((tip: string, index: number) => (
                          <li key={index} className="text-left">
                            {index + 1}. {tip}
                          </li>
                        ))}
                    </ul>
                  </article>
                </div>
              </div>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild onClick={() => setShowModal(false)}>
                <Button type="button" variant="secondary" className="mx-auto">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <ul></ul>
      </div>
    </div>
  );
};

export default PredictionDisplay;
