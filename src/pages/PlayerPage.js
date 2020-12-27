import React from "react";

import Banner from "../components/Banner";
import Controlle from "../components/Controlle";
import NavBar from "../components/NavBar";
import "../styles/PlayerStyles.css";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import { Link } from "react-router-dom";
const PlayerPage = () => {
  return (
    <div className="HeroContainer" style={{ background: "#E54F6D" }}>
      <div
        className="MainContainer"
        style={{
          background: "#360568",
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <NavBar />
        <div className="PlayerContainer">
          <Banner />
          <Controlle />
        </div>
        <Link to="/">
          <ArrowBackIosRoundedIcon
            style={{
              position: "absolute",
              left: "4%",
              bottom: "4%",
              color: "#fff",
              fontSize: 30,
              cursor: "pointer",
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default PlayerPage;
