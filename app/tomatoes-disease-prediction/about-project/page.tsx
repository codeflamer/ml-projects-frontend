"use client";
import React from "react";
import dynamic from "next/dynamic";

const Content = dynamic(() => import("./content.mdx"));

const AboutProject = () => {
  return (
    <div className="prose mx-auto prose-slate prose-hr:my-4 prose-img:rounded-md prose-img:mx-auto  prose-p:text-justify">
      {/* // TODO: Add info about the project, like the project name. The training process and resources mad use of . The tensorflow library and so on/. */}
      <Content />
    </div>
  );
};

export default AboutProject;
