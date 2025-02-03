import React from "react";

const Navbar = () => {
  return (
    <div>
      <div
        id="container"
        className="h-8 flex justify-center gap-28 bg-indigo-500  font-bold text-neutral-800 text-xl bg-opacity-50"
      >
        <div className=" flex justify-center  hover:bg-violet-400 cursor-pointer  duration-700 rounded w-28 h-7">
          HOME
        </div>
        <div className=" flex justify-center  hover:bg-violet-400 cursor-pointer  duration-700 rounded w-28 h-7">
          SERVICE
        </div>
        <div className=" flex justify-center  hover:bg-violet-400 cursor-pointer  duration-700 rounded w-28 h-7">
          CONTACT
        </div>
        <div className=" flex justify-center  hover:bg-violet-400 cursor-pointer  duration-700 rounded w-28 h-7">
          ABOUT
        </div>
      </div>
    </div>
  );
};

export default Navbar;
