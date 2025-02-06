import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../features/auth/authSlice";
const Register = () => {
  const dispatch = useDispatch();
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
    dispatch(register(data)).then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <div>
          {" "}
          username :
          <input type="text" />
        </div>
        <div>
          email :
          <input type="email" />
        </div>
        <div>
          password :
          <input type="password" />
        </div>
        <button type="submit">s inscrire</button>
      </form>
    </div>
  );
};

export default Register;
