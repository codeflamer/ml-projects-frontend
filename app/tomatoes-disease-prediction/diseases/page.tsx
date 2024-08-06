"use client";
import React from "react";
import dynamic from "next/dynamic";

const DiseaseContent = dynamic(() => import("./disease-content.mdx"));

const AboutDisease = () => {
  return (
    <div className="prose mx-auto prose-slate prose-hr:my-4 prose-img:rounded-md prose-img:mx-auto  prose-p:text-justify">
      <DiseaseContent />
    </div>
  );
};

export default AboutDisease;
