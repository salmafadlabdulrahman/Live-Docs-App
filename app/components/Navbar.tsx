"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBell,
  faPenToSquare,
  faShareFromSquare,
} from "@fortawesome/free-regular-svg-icons";
import { useDoc } from "../context/DocContext";

const Navbar = () => {
  const { docState } = useDoc();
  return (
    <>
      <div className="p-5 md:px-7 md:py-8 lg:px-[5em]">
        <div className="flex items-center justify-between">
          <div>
            <Image
              src={"/assets/icons/logo.svg"}
              alt="a binder"
              width={120}
              height={120}
              unoptimized
            />
          </div>

          <div className="hidden sm:block">
            {docState && (
              <div className="flex-row-center pt-[3em] sm:p-0">
                <p className="font-bold">Untitled</p>
                <FontAwesomeIcon icon={faPenToSquare} />
              </div>
            )}
          </div>

          <div className="flex items-center gap-5">
            {!docState && (
              <>
                <FontAwesomeIcon
                  icon={faBell}
                  className="text-[20px] cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-[20px] cursor-pointer"
                />
              </>
            )}

            {docState && (
              <button className="main-btn w-[40px] h-[38px] sm:w-[110px] sm:h-[38px] flex-row-center ">
                <FontAwesomeIcon icon={faShareFromSquare} />{" "}
                <p className="hidden sm:block">Share</p>
              </button>
            )}
            <FontAwesomeIcon
              icon={faUserPlus}
              className="text-[20px] cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="sm:hidden">
        {docState && (
          <div className="flex-row-center">
            <p className="font-bold">Untitled</p>
            <FontAwesomeIcon icon={faPenToSquare} />
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
