import React from "react";

import { auth, provider } from "../firebase";

import "../styles/HomeStyles.css";
import "../styles/LoginStyles.css";
const LoginPage = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div
      className="HeroContainer"
      style={{ backgroundImage: `url('/images/pic3.jpg')` }}
    >
      <div
        className="MainContainer"
        style={{ backgroundImage: `url('/images/pic3.jpg')` }}
      >
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
