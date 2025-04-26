import React, { useState } from "react";
import { Opulento } from "uvcanvas";
import {
  User,
  CircleEllipsis,
  UserPen,
  CircleHelp,
  BadgePlus,
  LogOut,
  ShieldAlert,
  SmilePlus,
} from "lucide-react";
import chatbg from "../assets/chatbg.jpg?url";
import { useDispatch } from "react-redux";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { deleteUser } from "../features/auth/authSlice";

import { createRoom, joinRoom } from "../features/room/roomSlice";
const Profile = () => {
  const dispatch = useDispatch();

  const [create, setcreate] = useState(false);
  const [visible, setvisible] = useState(false);
  const [option, setoption] = useState(false);
  const [join, setjoin] = useState(false);
  const backgroundImage = Opulento();

  const Handlecreateroom = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const owner = e.target[1].value;
    const password = e.target[2].value;
    const limits = e.target[3].value;
    const data = {
      name: name,
      owner: owner,
      password: password,
      limits: limits,
    };

    dispatch(createRoom(data)).then((res) => {
      console.log(res);
    });
    console.log("create with sucess");
  };
  const Logout = () => {
    dispatch(deleteUser());
  };
  const Handlejoinroom = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const password = e.target[1].value;
    const data = {
      name: name,
      password: password,
    };
    console.log(data);
    dispatch(joinRoom(data)).then((res) => {
      console.log(res);
    });
    console.log("join with sucess");
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
            className="shadow-md  rounded w-[15%] h-[30rem]  bg-amber-800/20 "
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
                  setoption(false);
                  setjoin(false);
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
              <div
                className=" flex gap-2 rounded p-2 mt-6 cursor-pointer hover:bg-neutral-500 duration-300"
                onMouseEnter={() => {
                  setoption(!option);
                  setcreate(false);
                }}
              >
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

              <div>Crée un mot de passe</div>
              <div>
                <input
                  placeholder="type a password"
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
          {option && (
            <div
              className="w-[20rem] h-[15rem] bg-white/40 mt-[15rem] shadow-lg rounded font-medium   "
              onMouseLeave={() => {
                setoption(!option);
              }}
            >
              {" "}
              <div className="mt-6">
                <button
                  onClick={() => {
                    setjoin(!join);
                    setoption(false);
                    setcreate(false);
                    setvisible(false);
                  }}
                  className="w-full  flex gap-2 p-2 rounded mt-6 cursor-pointer hover:bg-neutral-300 duration-300"
                >
                  Participer dans une room <SmilePlus className="ml-12" />
                </button>
              </div>
              <div className="mt-6">
                <button className="w-full  flex gap-2 p-2 rounded mt-6 cursor-pointer hover:bg-neutral-300 duration-300 ">
                  Signaler un utilisateur{" "}
                  <ShieldAlert className="ml-[4.4rem]" />
                </button>
              </div>
              <div className="mt-6 ">
                <button
                  onClick={Logout}
                  className="w-full  flex gap-2 p-2 rounded mt-6 cursor-pointer hover:bg-neutral-300 duration-300"
                >
                  logout
                  <LogOut className="ml-[11.5rem]" />
                </button>
              </div>
            </div>
          )}
          {visible && (
            <div
              name="profile"
              className="w-[25%] h-[40rem] bg-white/40 rounded shadow ml-[35%] font-semibold"
            >
              <div
                name="photo"
                className="rounded-full w-36 h-36  bg-white flex justify-center"
              ></div>
              <div>
                <span className="text-blue-700 font-semibold flex justify-center">
                  upload your profile photo
                </span>
                <input type="file" name="" id="" />
              </div>

              <div className="mt-6">
                <div>
                  <p>changer le nom</p>
                  <input
                    type="text"
                    className="mt-4 w-[20rem] rounded shadow-md"
                  />
                </div>

                <div className="mt-6">
                  <p>ajouter une adresse</p>
                  <input
                    type="email"
                    className="mt-4 w-[20rem] rounded shadow-md"
                  />
                </div>

                <div className="mt-6">
                  <p>modifier le mot de passe </p>
                  <input
                    type="password"
                    className="mt-4 w-[20rem] rounded shadow-md"
                  />
                </div>
                <div className="mt-16 flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-500 p-1 rounded shadow-lg hover:bg-blue-400 cursor-pointer"
                  >
                    appliquer les modifications
                  </button>
                </div>
              </div>
            </div>
          )}
          {join && (
            <form
              onSubmit={Handlejoinroom}
              className="ml-[15rem] mt- bg-slate-200/50 h-[20rem] w-[20rem] rounded font-medium shadow-lg flex justify-center"
            >
              <div>
                <p className="ml-14 text-xl  font-bold"> Quick join</p>
                <p className="mt-6">insérer le nom du salle :</p>
                <input type="text" className="mt-6 w-full rounded shadow-lg" />
                <p className="mt-6"> isérer le mot de passe du salle :</p>
                <input
                  type="password"
                  name=""
                  id=""
                  className="mt-6 w-full rounded shadow-lg"
                />
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-blue-400 mt-6 p-1 rounded shadow-xl hover:bg-blue-300 duration-500"
                  >
                    Participer
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
