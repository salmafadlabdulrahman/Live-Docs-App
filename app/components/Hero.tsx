"use client";

import Image from "next/image";
import DocCard from "./DocCard";
import { useDoc } from "../context/DocContext";

const Hero = () => {
  const { docState, setDocState } = useDoc();
  return (
    <div>
      {!docState && (
        <div>
          <div className="mt-[1.5em] flex justify-between">
            <p className="font-bold text-[1.3rem] lg:text-2xl tracking-">
              All documents
            </p>
            <button
              className="flex items-center gap-1 bg-blue-400 w-[40px] h-[40px] sm:w-[210px] sm:px-2 lg:px-4 lg:w-[230px]  rounded-md font-semibold"
              onClick={() => setDocState((prev: boolean) => !prev)}
            >
              {" "}
              <Image
                src={"/assets/icons/add.svg"}
                alt="add icon"
                width={20}
                height={20}
                unoptimized
                className="m-auto"
              />
              <p className="text-[15px] hidden sm:block">
                Start a blank document
              </p>
            </button>
          </div>

          <div className="mt-[3em]">
            <DocCard />
            <DocCard />
            <DocCard />
            <DocCard />
            <DocCard />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
