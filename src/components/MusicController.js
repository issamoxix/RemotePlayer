import React from "react";
import PauseIcon from "@material-ui/icons/Pause";
import { useSelector } from "react-redux";
import { selectPlat } from "../features/app/appSlice";

const MusicController = () => {
  const plat = useSelector(selectPlat);
  return (
    <div className="MusicControllerContainer">
      <div className="SongTitle">
        <h2 style={{ marginBottom: "-7px" }}> Su lee tired </h2>
        <p style={{ color: "#035F87", fontWeight: "bold" }}>
          {plat === "ytb" ? "Youtube" : "Soundcloud"}
        </p>
      </div>
      <div className="SongController">
        <PauseIcon
          style={{
            color: "#fff",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default MusicController;
