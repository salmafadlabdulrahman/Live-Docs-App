import Image from "next/image";

const DocCard = () => {
  return (
    <div className="bg-dark-700 flex justify-between  rounded-md">
      <div className="flex gap-4 p-5">
        {" "}
        {/*<div className="sm:bg-dark-400 sm:p-2 sm:rounded-md "></div>*/}
        <div className="w-[50px] max-w-[120px] sm:w-[60px]  sm:bg-dark-400 rounded-md">
          <Image
            src={"/assets/icons/doc.svg"}
            alt="doc icon"
            width={50}
            height={50}
            unoptimized
            className="w-full object-cover sm:p-2"
          />
        </div>
        <div>
          <p className="capitalize font-semibold text-[18px] tracking-wide">
            JSM new project requirement
          </p>
          <p className="text-blue-100 mt-[.5em] ">Created about 03 hours ago</p>
        </div>
      </div>
      <div className="mt-[1.5em] pr-4">
        <Image
          src={"/assets/icons/delete.svg"}
          alt="delete icon"
          width={25}
          height={25}
          unoptimized
        />
      </div>
    </div>
  );
};

export default DocCard;
