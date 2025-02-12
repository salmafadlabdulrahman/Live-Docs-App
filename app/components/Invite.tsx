import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Invite = () => {
  return (
    <div className="bg-dark-700 p-4 rounded-lg">
      <div className="flex justify-between">
        <div>
          <p className="font-semibold text-[1.2em] tracking-tight">
            Manage who can view this project
          </p>
          <p className="text-gray-400 font-medium">
            Select which users can access and view this project.{" "}
          </p>
        </div>

        <div className="cursor-pointer">
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>

      <div className="flex items-center justify-between mt-[1em]">
        <Select>
          <SelectTrigger className=" border-none outline-none w-[80%]">
            <SelectValue placeholder="can edit" className="" />
          </SelectTrigger>
          <SelectContent className="bg-dark-700">
            <SelectGroup className="">
              <SelectLabel>Can view</SelectLabel>
              <SelectItem value="apple">Can edit</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <button className="main-btn py-2 px-2">Invite</button>
      </div>
    </div>
  );
};

export default Invite;
