import React from "react";
import NavBar from "../components/NavBar";
import "../styles/NewPlayer.css";

import { useHistory } from "react-router-dom";
const NewPlayer = () => {
  let history = useHistory();
  return (
    <div
      className="Main"
      style={{ backgroundImage: `url('/images/pic3.jpg')` }}
    >
      <NavBar style={{ background: "transparent" }} SearchBar={false} />
      <div className="Main__Container">
        <div className="Main__body">
          <h1>How to use ??</h1>
          <p>
            Use{" "}
            <span style={{ color: "rgb(147, 3, 46)", fontWeight: "bold" }}>
              display
            </span>{" "}
            to play the music , while if you wanna controll the music remotely
            or change music use{" "}
            <span style={{ color: "rgb(224, 142, 69)", fontWeight: "bold" }}>
              remote
            </span>
          </p>
          <div className="buttons__container">
            <button
              onClick={() => history.push("/remote")}
              className="remote_btn"
            >
              Remote
            </button>

            <button
              onClick={() => history.push("/display")}
              className="display_btn"
            >
              Display
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPlayer;
