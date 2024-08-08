import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NavHeader = () => {
  return (
    <nav
      className="flex flex-col mb-10 sticky top-0 px-6 xl:px-0 py-2 transition-opacity backdrop-blur-xl
bg-white/30 shadow-md"
    >
      <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto">
        <div className=" w-full text-center md:w-fit font-bold sm:text-xl text-2xl text-green-600">
          TomaClass
        </div>
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent className="px-1">
            <SheetHeader>
              <SheetTitle>TomaClass</SheetTitle>
              <SheetDescription>
                <ul className=" space-y-4 text-[18px] items-center flex flex-col mt-5">
                  <li>
                    <Link href="/tomatoes-disease-prediction/about-project">
                      About the Project
                    </Link>
                  </li>
                  <li>
                    <Link href="/tomatoes-disease-prediction/diseases">
                      About Diseases
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/tomatoes-disease-prediction/make-prediction">
                      <Button className="bg-red-500 hover:bg-red-300">
                        Predict
                      </Button>
                    </Link>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <ul className="space-x-8 items-center hidden md:flex">
          <li>
            <Link href="/tomatoes-disease-prediction/about-project">
              About the Project
            </Link>
          </li>
          <li>
            <Link href="/tomatoes-disease-prediction/diseases">
              About Diseases
            </Link>
          </li>
          <li className="">
            <Link href="/tomatoes-disease-prediction/make-prediction">
              <Button className="bg-red-500 hover:bg-red-300">Predict</Button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavHeader;
