import React from "react";

import Banner from "../components/Banner";
import Controlle from "../components/Controlle";
import NavBar from "../components/NavBar";
import "../styles/PlayerStyles.css";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import { Link } from "react-router-dom";
import { selectArt } from "../features/player/playerSlice";
import { useSelector } from "react-redux";
const PlayerPage = () => {
  const artw = useSelector(selectArt);
  return (
    <div
      className="HeroContainer"
      style={{ backgroundImage: `url("${artw}")` }}
    >
      <div
        className="MainContainer"
        style={{
          // background: "#360568",
          background: "rgb(54 5 104 / 79%)",
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <NavBar
          style={{ position: "absolute", background: "transparent" }}
          SearchBar={false}
        />
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
