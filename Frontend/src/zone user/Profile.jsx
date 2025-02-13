import React, { useState } from "react";
import {
  User,
  CircleEllipsis,
  UserPen,
  CircleHelp,
  BadgePlus,
} from "lucide-react";
import chatbg from "../assets/chatbg.jpg?url";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { use } from "react";

const Profile = () => {
  const [Roomname, setRoomname] = useState("");
  const [Roompassword, setRoompassword] = useState("");
  const [create, setcreate] = useState(false);
  const [visible, setvisible] = useState(false);
  const Handlecreateroom = (e) => {
    e.preventDefault();

    console.log("function executed ");
  };
  return (
    <div>
      <div
        className="bg-cover bg-center h-[60rem] bg-black "
        style={{ backgroundImage: `url(${chatbg})` }}
      >
        <Navbar />
        <div name="body section" className="flex gap-6 mt-9">
          <div
            name="container"
            className="shadow-md  rounded w-[15%] h-[30rem]  bg-purple-300/50 "
          >
            <div className=" mt-4 font-semibold">
              <div className="p-2 mt-6 rounded flex ">
                <User />
                Zone utilisateur
              </div>

              <button
                className="w-full  flex gap-2 p-2 rounded mt-6 cursor-pointer hover:bg-neutral-500 duration-300"
                onMouseEnter={() => {
                  setcreate(!create);
                }}
              >
                <BadgePlus />
                Creé une room
              </button>

              <button
                onClick={() => {
                  setvisible(!visible);
                }}
                className="w-full  flex gap-2 p-2 rounded mt-6 cursor-pointer hover:bg-neutral-500 duration-300"
              >
                <UserPen />
                Gestion de profile
              </button>
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
          {create && (
            <form
              onSubmit={Handlecreateroom}
              onMouseLeave={() => {
                setcreate(!create);
              }}
              className="w-[20rem] h-[15rem] bg-white/40 mt-28 shadow-lg rounded font-medium  "
            >
              <div>Crée le nom du room </div>
              <div>
                <input
                  type="text"
                  placeholder="entrer un nom"
                  className="bg-slate-300 w-full rounded"
                />
              </div>
              <div>Crée votre alias👾</div>
              <div>
                <input
                  type="text"
                  placeholder="entrer un nom"
                  className="bg-slate-300 w-full rounded"
                />
              </div>
              <div>Crée un mot de passe</div>
              <div>
                <input
                  type="password"
                  className="bg-slate-300 w-full rounded"
                />
              </div>
              <div>Limites des utilisateur</div>
              <div>
                <input type="number" className="bg-slate-300 w-full rounded" />
              </div>
              <div className=" mt-6 flex justify-end mr-8 ">
                <button
                  className="bg-cyan-600 pl-3 pr-3 rounded hover:bg-cyan-700 cursor-pointer"
                  type="submit"
                >
                  Créer
                </button>
              </div>
            </form>
          )}
          {visible && (
            <div
              name="profile"
              className="w-[25%] h-[40rem] bg-white/40 rounded shadow ml-[35%]"
            >
              <div
                name="photo"
                className="rounded-full w-36 h-36  bg-slate-500/50 flex justify-center"
              ></div>
              <div>
                <span className="text-blue-700 font-semibold flex justify-center">
                  upload your profile photo
                </span>
                <input type="file" name="" id="" />
              </div>

              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
