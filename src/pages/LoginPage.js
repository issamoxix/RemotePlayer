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
    <div className="HeroContainer">
      <div className="MainContainer">
        <div className="LoginWrapper">
          <div className="LoginSocials">
            <h1 className="Join">Sign in</h1>
            {/* Add more login methods in the futur */}
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
    </div>
  );
};

export default LoginPage;
