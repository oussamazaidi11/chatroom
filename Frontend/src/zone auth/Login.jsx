import React, { useState } from "react";
import logg from "../assets/logg.jpg?url";
import Footer from "../component/Footer";
import { LogIn, Eye, EyeClosed } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
const Login = () => {
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
    });
  };

  return (
    <div>
      <div>
        <form onSubmit={HandleSubmit}>
          <div>
            email :
            <input type="text" />
          </div>
          <div>
            password :
            <input type="password" />
          </div>
          <button type="submit">s inscrire</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
