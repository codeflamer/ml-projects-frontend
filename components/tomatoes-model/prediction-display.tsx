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
      // setShowModal(false);
      // toast({
      //   variant: "destructive",
      //   title: "Uh oh! Something went wrong.",
      //   description: "There was a problem with your request.",
      //   action: <ToastAction altText="Try again">Try again</ToastAction>,
      // });
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

  // TODO: Strick validatioon for drag and drop

  const thumbs = acceptedFiles.map((file: File) => (
    <div key={file.name}>
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="hello"
          src={filetempUrl}
          className="mx-auto"
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(filetempUrl || "");
          }}
        />
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div
        {...getRootProps({ className: "dropzone" })}
        className="space-y-4 flex flex-col justify-center border-2 border-dashed border-green-500 rounded-md  bg-gray-100 max-w-md mx-auto mt-10 min-h-[330px] "
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
                        Prediction result:{" "}
                        {JSON.stringify(mutation.data!.prediction_class)}
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Maiores, itaque sapiente unde corrupti soluta quo animi iure
                    vitae id excepturi ullam similique illum sequi illo, aliquid
                    suscipit nesciunt iusto modi. Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Quasi a ex ea maiores rerum
                    facilis nesciunt, dicta ratione deserunt minus molestiae
                    illum necessitatibus in explicabo cumque tempore? Modi,
                    praesentium deserunt?
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
      </div>
    </div>
  );
};

export default PredictionDisplay;
