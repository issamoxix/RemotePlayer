import React from "react";
import SettingsRemoteIcon from "@material-ui/icons/SettingsRemote";
import VideoLabelRoundedIcon from "@material-ui/icons/VideoLabelRounded";
import { Link } from "react-router-dom";
import "../styles/ChossingStyles.css";
import NavBar from "../components/NavBar";

const ChoPage = () => {
  return (
    <div className="HeroContainer" style={{ background: "#E54F6D" }}>
      <div
        className="MainContainer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <NavBar
          style={{ background: "transparent", position: "fixed", top: 0 }}
        />
        <h1
          style={{
            color: "#E08E45",
          }}
        >
          Remote<span style={{ color: "#93032E" }}>Player</span>
        </h1>
        <p className="CH__p" style={{ color: "#fff" }}>
          Start with choosing what you wanna use .
        </p>
        <div style={{ display: "flex", marginTop: "2rem" }}>
          <form
            className="choForm"
            onSubmit={(e) => e.preventDefault()}
            style={{ position: "relative", borderRadius: "7px" }}
          >
            <Link to="/remote">
              <button className="Chbutton" style={{}}>
                Remote
              </button>
            </Link>
            <SettingsRemoteIcon
              style={{
                position: "absolute",
                color: "#fff",
                left: "5%",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          </form>
          <form
            className="choForm"
            style={{ position: "relative", borderRadius: "7px" }}
          >
            <Link to="/display">
              <button className="Chbutton">Display</button>
            </Link>
            <VideoLabelRoundedIcon
              style={{
                position: "absolute",
                color: "#fff",
                left: "5%",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChoPage;
