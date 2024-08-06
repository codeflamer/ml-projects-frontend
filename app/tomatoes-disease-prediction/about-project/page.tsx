"use client";
import React from "react";
import dynamic from "next/dynamic";

const Content = dynamic(() => import("./content.mdx"));

const AboutProject = () => {
  return (
    <div className="prose mx-auto prose-slate prose-hr:my-4 prose-img:rounded-md prose-img:mx-auto  prose-p:text-justify">
      <Content />
    </div>
  );
};

export default AboutProject;
