import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../db/firebase";
import { selectPlat } from "../features/app/appSlice";
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
          <h1 className="Join">Start with Loging in ...</h1>

          <button className="LoginButton" onClick={() => signIn()}>
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
