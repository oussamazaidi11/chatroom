import React, { useState } from "react";
import {
  SlidersVertical,
  UserRoundCog,
  CircleHelp,
  BadgePlus,
  LogOut,
  ShieldAlert,
  UserRoundX,
} from "lucide-react";
import chatbg from "../assets/chatbg.jpg?url";
import Dashboard from "./Dashboard";
import Navbar from "../component/Navbar";
import { BetweenHorizonalStart, Pencil, Trash } from "lucide-react";
const Adminprofile = () => {
  const [visible, setvisible] = useState(false);
  return (
    <div>
      <Navbar />
      <div
        className="bg-cover bg-center h-[60rem] bg-black flex justify-between"
        style={{ backgroundImage: `url(${chatbg})` }}
      >
        <div
          name="sidebar"
          className="shadow-md  rounded w-[15%] h-[26rem]  bg-amber-800/20 font-semibold mt-7"
        >
          <div className="flex gap-2">
            {" "}
            <UserRoundCog /> Zone Adminstrateur
          </div>
          <div>
            <button
              onMouseEnter={() => setvisible(true)}
              className="w-full  flex gap-2 p-2 rounded mt-6 cursor-pointer hover:bg-neutral-500 duration-300"
            >
              <SlidersVertical />
              Gerer les offre
            </button>
          </div>
          <div>
            <button className="w-full  flex gap-2 p-2 rounded mt-6 cursor-pointer hover:bg-neutral-500 duration-300">
              <UserRoundX /> Bloquer un utilisateur
            </button>
          </div>
          <div>
            <button className="w-full  flex gap-2 p-2 rounded mt-6 cursor-pointer hover:bg-neutral-500 duration-300">
              <CircleHelp /> Aide
            </button>
          </div>
          <div>
            <button className="w-full  flex gap-2 p-2 rounded mt-6 cursor-pointer hover:bg-neutral-500 duration-300">
              <LogOut /> Logout
            </button>
          </div>
        </div>
        {visible && (
          <div
            onMouseLeave={() => setvisible(false)}
            className="mt-[6rem] mr-[45rem]  bg-yellow-900/20 h-[15rem] w-[20rem] shadow-lg flex "
          >
            <div className="w-full font-medium ">
              <div>
                <button className="w-full  flex gap-2 p-2 rounded mt-6 cursor-pointer hover:bg-white duration-300">
                  <BetweenHorizonalStart />
                  Ajouter un offre
                </button>
              </div>
              <div>
                <button className="w-full  flex gap-2 p-2 rounded mt-6 cursor-pointer hover:bg-white duration-300">
                  <Pencil />
                  modifier un offre
                </button>
              </div>
              <div>
                <button className="w-full  flex gap-2 p-2 rounded mt-6 cursor-pointer hover:bg-white duration-300">
                  <Trash />
                  supprimer un offre
                </button>
              </div>
            </div>
          </div>
        )}
        {/* <div
          onMouseLeave={() => setvisible(false)}
          className="mt-[10rem] mr-[45rem]  bg-yellow-900/20 h-[15rem] w-[20rem] shadow-lg flex "
        >
          <form className="w-full font-medium ">
            <p></p>
          </form>
        </div> */}

        <div
          name="dashboard"
          className="bg-black/20 h-[30rem] ml-9 rounded shadow-lg shadow-zinc-400"
        >
          <Dashboard />
        </div>
      </div>
    </div>
    //    <form action="">
    //    <p>Saisie le nom du l'offre</p>
    //    <input type="text" />
    //    <p>La description</p>
    //    <textarea name="" id="" rows={8} cols={50}></textarea>
    //    <div><button></button></div>
    //  </form>
  );
};

export default Adminprofile;
