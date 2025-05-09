import React from "react";
import { Send } from "lucide-react";
import Footer from "../component/Footer";
import chatbg from "../assets/chatbg.jpg?url";
import { useDispatch } from "react-redux";
import { addMessage, Sendmessage } from "../features/room/roomSlice";
const Roomdisplaymsg = () => {
  const dispatch = useDispatch();
  const sendMessage = (e) => {
    const dat = e.target[0];
    if (length(dat) > 0) {
      dispatch(Sendmessage(dat));
      dispatch(addMessage(dat));
    }
  };
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${chatbg})` }}
        className="flex justify-center bg-cover bg-center"
      >
        <div className="mb-4">
          <div
            name="textarea"
            className="shadow-md shadow-black h-[50rem] w-[50rem] rounded bg-amber-800/20"
          ></div>
          <form action="" className="flex w-[50rem]  ">
            <input
              type="text"
              className="w-full rounded shadow-sm"
              placeholder="ecrire votre message"
            />
            <button
              type="submit"
              className="bg-blue-500 p-1 pl-4 pr-4  rounded-full"
            >
              <Send />
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Roomdisplaymsg;
