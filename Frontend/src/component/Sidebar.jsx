import React from "react";
import {
  User,
  CircleEllipsis,
  UserPen,
  CircleHelp,
  BadgePlus,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div>
      <div
        name="container"
        className="shadow-md  rounded w-[15%] h-[30rem] mt-24 bg-purple-300 "
      >
        <div className=" mt-4 font-semibold">
          <div className="p-2 mt-6 rounded flex gap-2 ">
            <User />
            Zone utilisateur
          </div>
          <div className="flex gap-2 p-2 rounded mt-6 cursor-pointer hover:bg-neutral-500 duration-300">
            <BadgePlus />
            Creé une room
          </div>
          <div className="flex gap-2 p-2 rounded mt-6 cursor-pointer hover:bg-neutral-500 duration-300">
            <UserPen />
            Gestion de profile
          </div>
          <div className=" flex gap-2 rounded p-2 mt-6 cursor-pointer hover:bg-neutral-500 duration-300">
            <CircleEllipsis />
            Options
          </div>
          <div className="flex gap-2 p-2 rounded mt-6 cursor-pointer hover:bg-neutral-500 duration-300">
            <CircleHelp />
            Aide
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
