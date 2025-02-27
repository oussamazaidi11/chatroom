import React from "react";
import logg from "../assets/chatbg.jpg?url";
import Footer from "../component/Footer";

const Join = () => {
  return (
    <div>
      <div
        name="container"
        className="bg-center bg-cover h-[54rem] flex justify-center "
        style={{ backgroundImage: `url(${logg} )` }}
      >
        <form className="w-[15rem] mt-[7rem]">
          <center>
            <div className=" text-white"> Join Now</div>
          </center>

          <div className="mt-6">
            {" "}
            <label htmlFor="">Type the room name</label>
          </div>
          <div>
            <input type="text" className="w-full rounde shadow-md" />
          </div>
          <div className="mt-6">Type the password</div>
          <div>
            <input
              type="password"
              placeholder="insert the room password "
              className="w-full rounde shadow-md"
            />
          </div>
          <div className="mt-6">
            <center>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold ">
                Quick join
              </button>
            </center>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Join;
