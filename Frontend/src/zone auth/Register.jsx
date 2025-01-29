import React, { useState } from "react";
import logg from "../assets/logg.jpg?url";
import Footer from "../component/footer";
import { LogIn, Eye, EyeClosed } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [visible, setvisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailerror, setemailError] = useState("");
  const [passworderror, setpasswordError] = useState("");
  const [username, setusername] = useState("");
  const [usernameerror, setusernameError] = useState("");
  const HandleChangeemail = (e) => {
    const email = e.target.value;
    setEmail(email);

    if (!/\S+@\S+\.\S+/.test(email) && length.email > 0) {
      setemailError("Invalid Email");
    } else {
      setemailError("");
    }
  };
  function HandleChangepassword(e) {
    const password = e.target.value;
    setPassword(password);
    if (
      !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password) &&
      length.password > 0
    ) {
      setpasswordError(
        "Password must be at least 8 characters long, and must contain at least"
      );
    } else {
      setpasswordError("");
    }
  }
  function HandleChangeusername(e) {
    const username = e.target.value;
    setusername(username);
    if (length.username < 2) {
      setusernameError("username must be contain at least 3 letters ");
    } else {
      setusernameError("");
    }
  }
  const data = {
    email,
    password,
    username,
  };
  console.log(data);
  const Handlesubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  const navigate = useNavigate();
  const signup = () => {
    navigate("/register");
  };
  return (
    <div>
      <div
        className=" h-[51.090rem]  flex justify-center bg-cover bg-center  "
        style={{ backgroundImage: `url(${logg})` }}
      >
        <div
          id="container"
          className="h-[35rem] w-[30rem] mt-36 text-white italic font-semibold  bg-slate-950/50 flex justify-center items-center rounded-[1rem] shadow-lg shadow-fuchsia-800 "
        >
          <div>
            <div className="mb-24 ml-6 text-3xl flex gap-6 ">
              {" "}
              <LogIn size={36} />
              <p className="gras">JOIN NOW</p>
            </div>
            <div>
              <label htmlFor="">username :</label>
              <br />
              <input
                onChange={HandleChangeusername}
                type="text"
                value={username}
                id="email"
                className="w-[17rem] mt-4 rounded border-none shadow-sm shadow-white text-black"
              />
            </div>
            <div className="mt-10">
              <label htmlFor="">E-mail:</label>
              <br />
              <input
                onChange={HandleChangeemail}
                type="text"
                value={email}
                id="email"
                className="w-[17rem] mt-4 rounded border-none shadow-sm shadow-white text-black"
              />
            </div>
            {emailerror && <span className="text-red-500"> invalid email</span>}

            <div className="mt-12 relative">
              <label htmlFor="">Password:</label>
              <br />
              <input
                onChange={HandleChangepassword}
                id="email"
                value={password}
                type={visible ? "text" : "password"}
                name="password"
                className="w-[17rem] mt-4 rounded border-none shadow-sm shadow-white text-black"
              />
            </div>
            {passworderror && (
              <span className="text-red-500">invalid password</span>
            )}

            <div className="absolute top-[30.4rem] left-[66.5rem]">
              {visible && (
                <Eye
                  className="cursor-pointer"
                  color="black"
                  onClick={() => {
                    setvisible(false);
                  }}
                />
              )}
              {!visible && (
                <EyeClosed
                  className="cursor-pointer"
                  color="black"
                  onClick={() => {
                    setvisible(true);
                  }}
                />
              )}
            </div>
            <div>
              <a href="#" className="text-blue-500 underline text-sm">
                forgot password
              </a>
            </div>

            <div id="button-section" className="flex justify-center mt-14">
              <input
                onClick={signup}
                type="button"
                value="join now"
                className="bg-fuchsia-600/40 w-24 h-8 rounded shadow-md shadow-indigo-500  cursor-pointer hover:bg-pink-400  duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
