import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../db/firebase";
import { selectPlat } from "../features/player/playerSlice";

import "../styles/HomeStyles.css";
import "../styles/LoginStyles.css";
const LoginPage = () => {
  const Plat = useSelector(selectPlat);
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  let history = useHistory();
  useEffect(() => {
    if (!Plat) {
      return history.push("/");
    }
  }, [history, Plat]);
  return (
    <div
      style={{ background: Plat === "sdc" ? "#E08E45" : "#93032E" }}
      className="HeroContainer"
    >
      <div className="MainContainer">
        <div className="LoginWrapper">
          <h1 className="Join">Log in</h1>
          <form
            className="LoginForm"
            onClick={() => signIn()}
            onSubmit={(e) => e.preventDefault()}
          >
            <span className="GoogleIcon">G</span>
            <button className="LoginButton">LOGIN WITH GOOGLE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
