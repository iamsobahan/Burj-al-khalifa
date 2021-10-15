import { signInWithPopup } from "@firebase/auth";
import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";

import "./Login.css";

const Login = () => {
  const { googleLogIn } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const reDirect = location.state?.from || "/home";
  const clickhandler = () => {
    googleLogIn().then((result) => {
      history.push(reDirect);
    });
  };
  console.log(location.state?.from);
  return (
    <div className="text_center">
      <h2>Login</h2>
      <input type="text" placeholder="Enter your email" />
      <br />
      <input type="password" placeholder="Enter your password" />
      <br />
      <br />
      <button>Login</button>
      <br />
      <p>New to burj khalif ?</p>

      <button onClick={clickhandler}> Log in with Google</button>
    </div>
  );
};

export default Login;
