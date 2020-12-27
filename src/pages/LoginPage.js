import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addUser, selectPlat } from "../features/app/appSlice";
import "../styles/HomeStyles.css";
import "../styles/LoginStyles.css";
const LoginPage = () => {
  const Plat = useSelector(selectPlat);
  const dispatch = useDispatch();
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

          <button
            className="LoginButton"
            onClick={() => dispatch(addUser({ user: "issam" }))}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
