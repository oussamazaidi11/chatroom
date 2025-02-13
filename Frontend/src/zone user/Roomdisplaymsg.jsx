import React from "react";

const Roomdisplaymsg = () => {
  return (
    <div className="flex justify-center bg-slate-400">
      <div>
        <div
          name="textarea"
          className="border border-black h-[50rem] w-[50rem] rounded bg-white"
        ></div>
        <form action="" className="flex w-[50rem]  ">
          <input
            type="text"
            className="w-full"
            placeholder="ecrire votre message"
          />
          <button type="submit" className="bg-blue-300 p-1 pl-4 pr-4  ">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Roomdisplaymsg;
