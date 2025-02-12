import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../features/auth/authSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import log from "../assets/logg.jpg?url";
import Footer from "../component/Footer";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errors, seterrors] = useState({});
  const VerifyInformation = (data) => {
    const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const errors = {};
    if (!data.username) {
      errors.name = "Name is required";
    }
    if (!data.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is not valid";
    }

    if (!re.test(data.password)) {
      errors.password = "Password is required";
    }
    return errors;
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    const data = {
      username: username,
      email: email,
      password: password,
    };
    console.log(data);
    const err = VerifyInformation(data);
    seterrors(err);
    if (Object.keys(errors).length === 0) {
      dispatch(register(data)).then((res) => {
        console.log(res);
        navigate("/login");
      });
    }
  };

  return (
    <div>
      <div
        className="h-[53rem] flex justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${log})` }}
      >
        <form
          className="mt-[16rem] p-3 h-[20rem] w-[20rem] bg-white/50 rounded flex justify-center "
          onSubmit={HandleSubmit}
        >
          <div>
            <p className="ml-9 font-semibold text-2xl">Register</p>
            <div className="mt-4">
              username : <br />
              <input type="text" />
            </div>
            <div className="mt-4">
              email : <br />
              <input type="email" />
            </div>
            <div className="mt-4">
              password :<br />
              <input type="password" />
            </div>
            <div className="mt-4">
              <button type="submit">s inscrire</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
