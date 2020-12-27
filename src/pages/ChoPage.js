import React from "react";
import SettingsRemoteIcon from "@material-ui/icons/SettingsRemote";
import VideoLabelRoundedIcon from "@material-ui/icons/VideoLabelRounded";
import { Link } from "react-router-dom";
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
              <button
                style={{
                  padding: "12px",
                  background: "black",
                  border: "none",
                  color: "#fff",
                  borderRadius: "7px",
                  marginRight: "7px",
                  cursor: "pointer",
                  width: "10vw",
                }}
              >
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
              <button
                style={{
                  padding: "12px",
                  background: "black",
                  border: "none",
                  color: "#fff",
                  borderRadius: "7px",
                  marginRight: "7px",
                  cursor: "pointer",
                  width: "10vw",
                }}
              >
                Display
              </button>
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
