import React, { useState } from "react";
import logg from "../assets/newlog.jpg?url";
import Footer from "../component/Footer";
import { LogIn, Eye, EyeClosed } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, setUser } from "../features/auth/authSlice";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const HandleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const data = {
      email: email,
      password: password,
    };

    console.log(data);

    dispatch(login(data)).then((res) => {
      console.log(res);
      dispatch(setUser(res.payload));
      //hneeeeeeeee aaaaaaa

      navigate("/profile");
    });
  };

  return (
    <div>
      <div
        className="h-[53rem] flex justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${logg})` }}
      >
        <form
          className="mt-[16rem] p-3 h-[20rem] w-[20rem] bg-white/30 rounded flex justify-center "
          onSubmit={HandleSubmit}
        >
          <div>
            <p className="ml-12 font-bold text-2xl">Login</p>

            <div className="mt-4">
              email : <br />
              <input type="email" />
            </div>
            <div className="mt-4">
              password :<br />
              <input type="password" />
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="bg-violet-700 shadow-md shadow-violet-400 rounded pl-1 pr- p-1"
              >
                se connecter
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
