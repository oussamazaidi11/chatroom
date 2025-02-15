import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../features/auth/authSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import log from "../assets/newlog.jpg?url";
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
    console.log(err);
    if (Object.keys(errors).length === 0) {
      dispatch(register(data)).then((res) => {
        console.log(res);
      });
    } else {
      console.log(err);
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
              <p className="font-semibold">username :</p>
              <input type="text" className="rounded shadow-md" />
              <div>
                {errors.username && (
                  <span className="text-red-600">{errors.username}</span>
                )}
              </div>
            </div>
            <div className="mt-4">
              <p className="font-semibold"> email :</p>
              <input type="email" className="rounded shadow-md" />
              <div>
                {errors.email && (
                  <span className="text-red-600">{errors.email}</span>
                )}
              </div>
            </div>

            <div className="mt-4">
              <p className="font-semibold"> password :</p>
              <input type="password" className="rounded shadow-md" />
              <div>
                {errors.password && (
                  <span className="text-red-600">{errors.password}</span>
                )}
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                className="bg-purple-700 rounded pl-1 pr-1  "
              >
                s inscrire
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
