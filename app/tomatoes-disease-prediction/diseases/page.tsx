import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import fs from "fs";
import path from "path";
// import matter from "gray-matter";
// import { MDXRemote } from "next-mdx-remote/rsc";

const DiseaseContent = dynamic(() => import("./disease-content.mdx"));

// export async function generateStaticParams() {
//   const filePath = path.join(process.cwd(), "content/example.mdx");
//   const fileContent = fs.readFileSync(filePath, "utf-8");
//   const { content, data: frontMatter } = matter(fileContent);
//   const mdxSource = await serialize(content, { scope: frontMatter });

//   return { mdxSource, frontMatter };
// }

const AboutDisease = () => {
  return (
    <div className="prose mx-auto prose-slate prose-hr:my-4 prose-img:rounded-md prose-img:mx-auto  prose-p:text-justify">
      <DiseaseContent />
      <Image
        src="/images/tomatoes/tolu.jpg"
        alt="Tomato Target Spot"
        width={200}
        height={200}
      />
      {/* <img
        src="/images/tomatoes/Tomato_Septoria_Leaf_spot.JPG"
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
