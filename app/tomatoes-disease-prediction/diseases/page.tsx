"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const DiseaseContent = dynamic(() => import("./disease-content.mdx"));

const AboutDisease = () => {
  return (
    <div className="prose mx-auto prose-slate prose-hr:my-4 prose-img:rounded-md prose-img:mx-auto  prose-p:text-justify">
      <DiseaseContent />
      {/* <img
        src="/images/tomatoes/Tomato_Septoria_Leaf_spot.jpg"
        alt="Shadcn Avatar"
        style={{ width: "300px", height: "300px" }}
      /> */}
      {/* <Image
        src="/images/tomatoes/Tomato_Septoria_Leaf_spot.jpg"
        alt=""
        width="300"
        height="300"
      /> */}
    </div>
  );
};

export default AboutDisease;
