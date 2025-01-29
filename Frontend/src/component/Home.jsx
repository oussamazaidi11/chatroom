import React from "react";
import bgg from "../assets/bgg.avif?url";
import card from "../assets/card.jpg?url";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-[50rem] flex justify-center items-center  relative  "
        style={{ backgroundImage: `url(${bgg})` }}
      >
        <div className="inset-0 flex justify-center items-center absolute bottom-72 ">
          <Link
            to="#"
            className="text-5xl text-white font-bold font-serif bg-black/60 hover:text-purple-500 scale-x-125  duration-700  "
          >
            CONNECT WITH YOUR TEAM
          </Link>
        </div>
        <div id="card" className="absolute mt-28 flex justify-between gap-24">
          <div
            id="card1"
            className="bg-cover bg-center w-52 h-60 rounded shadow-md shadow-black text-white hover:scale-y-110 duration-500 cursor-pointer"
            style={{ backgroundImage: `url(${card})` }}
          >
            <p className="text-green-500 font-bold">PublicRoom</p>
            <br />
            <p>this room offert you to chat with a random person </p>
            <button className="bg-indigo-600 ml-20 rounded h-8 w-28 mt-12 hover:bg-indigo-400  hover:scale-105 duration-500 shadow-md shadow-violet-400">
              CREATE NOW
            </button>
          </div>
          <div
            id="card2"
            className="bg-cover bg-center w-52 h-60 rounded shadow-md shadow-black text-white hover:scale-y-110 duration-500 cursor-pointer"
            style={{ backgroundImage: `url(${card})` }}
          >
            <p className="text-green-500 font-bold">CustomRoom</p>
            <br />
            <p>this room offert you a private chat only with invited person </p>
            <button className="bg-indigo-600 ml-20 rounded h-8 w-28 mt-12 hover:bg-indigo-400  hover:scale-105 duration-500 shadow-md shadow-violet-400">
              CREATE NOW
            </button>
          </div>
          <div
            id="card3"
            className="bg-cover bg-center w-52 h-60 rounded shadow-md shadow-black text-white hover:scale-y-110 duration-500 cursor-pointer"
            style={{ backgroundImage: `url(${card})` }}
          >
            <p className="text-green-500 font-bold">StreamRoom</p>
            <br />
            <p>this room for streamers cooming soon </p>
            <button className="bg-indigo-600 ml-20 rounded h-8 w-28 mt-12 hover:bg-indigo-400  hover:scale-105 duration-500 shadow-md shadow-violet-400">
              CREATE NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
