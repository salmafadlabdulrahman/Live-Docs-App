import Image from "next/image";

const DocCard = () => {
  return (
    <div className="bg-dark-700 flex justify-between items-start rounded-md">
      <div className="flex gap-4 p-5">
        {" "}
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
        <div className="">
          <p className="capitalize font-semibold text-[18px] tracking-wide">
            JSM new project requirement
          </p>
          <p className="text-blue-100 mt-[.5em] ">Created about 03 hours ago</p>
        </div>
      </div>
      <div className="mt-[1.5em] w-[35px] max-w-[50px] sm:w-[40px] cursor-pointer pr-1">
        <Image
          src={"/assets/icons/delete.svg"}
          alt="delete icon"
          width={25}
          height={25}
          unoptimized
          className=" sm:pr-4 w-full object-cover"
        />
      </div>
    </div>
  );
};

export default DocCard;
