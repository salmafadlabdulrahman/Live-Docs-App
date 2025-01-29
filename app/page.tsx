"use client";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewDoc from "./components/NewDoc";
import { useDoc } from "./context/DocContext";

export default function Home() {
  const { docState } = useDoc();
  return (
    <div>
      <Navbar />
      {!docState && (
        <div className="w-[90%] md:w-[80%] lg:w-[60%] max-w-[1200px] m-auto">
          <Hero />
        </div>
      )}

      {docState && (
          <div>
            <NewDoc />
          </div>
      )}
      
    </div>
  );
}
