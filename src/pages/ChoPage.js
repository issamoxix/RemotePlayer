import React from "react";
import SettingsRemoteIcon from "@material-ui/icons/SettingsRemote";
import VideoLabelRoundedIcon from "@material-ui/icons/VideoLabelRounded";
import { Link } from "react-router-dom";
import "../styles/ChossingStyles.css";
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
        <h1
          style={{
            color: "#fff",
          }}
        >
          Chosse :{" "}
        </h1>
        <div style={{ display: "flex", marginTop: "2rem" }}>
          <form
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
          <form style={{ position: "relative", borderRadius: "7px" }}>
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
