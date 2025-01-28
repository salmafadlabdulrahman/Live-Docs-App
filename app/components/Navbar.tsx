import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
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

        <div className="flex items-center gap-5">
          <FontAwesomeIcon icon={faBell} className="text-[20px] cursor-pointer" />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[20px] cursor-pointer" />
          <FontAwesomeIcon icon={faUserPlus} className="text-[20px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
