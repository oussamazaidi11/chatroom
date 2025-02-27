import React from "react";
import { Handshake } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      <div
        id="container"
        className="h-8 flex justify-center gap-2  font-bold text-neutral-400 text-xl bg-opacity-50"
      >
        <div className=" mr-[80rem] flex  font-extrabold">
          <Handshake size={36} />
          <p>Union</p>
        </div>
        <div className=" flex justify-center  hover:bg-slate-600 cursor-pointer  duration-700 rounded w-28 h-7 ">
          HOME
        </div>
        <div className=" flex justify-center  hover:bg-slate-600 cursor-pointer  duration-700 rounded w-28 h-7 ">
          SERVICE
        </div>
        <div className=" flex justify-center  hover:bg-slate-600 cursor-pointer  duration-700 rounded w-28 h-7 ">
          CONTACT
        </div>
        <div className=" flex justify-center  hover:bg-slate-600 cursor-pointer  duration-700 rounded w-28 h-7 ">
          ABOUT
        </div>
      </div>
    </div>
  );
};

export default Navbar;
