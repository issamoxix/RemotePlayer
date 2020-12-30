import React from "react";
import { useSelector } from "react-redux";
import { selectPlat } from "../features/app/appSlice";
import PauseIcon from "@material-ui/icons/Pause";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

const Controlle = () => {
  const plat = useSelector(selectPlat);
  const src = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${314321552}&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;
  let SC;

  return (
    <div className="ControlContainer">
      <div className="SongTitle">
        <h2>Tired By Su lee</h2>
        <p style={{ color: "#035F87", fontWeight: "bold" }}>
          {plat === "ytb" ? "Youtube" : "Soundcloud"}{" "}
        </p>
      </div>
      <iframe
        id="myFrame"
        title="player"
        width="100%"
        height="366"
        scrolling="no"
        allow="autoplay"
        className="IframePlayer"
        src={src}
      ></iframe>
      <div className="ControlBody">
        <VolumeDownIcon style={{ fontSize: 30, cursor: "pointer" }} />
        <PauseIcon
          style={{
            background: plat === "sdc" ? "#E08E45" : "#93032E",
            borderRadius: 50,
            padding: "5px",
            fontSize: 50,
            cursor: "pointer",
            transition: "all 0.2s linear",
            margin: "0 1rem",
          }}
        />
        <VolumeUpIcon style={{ fontSize: 30, cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default Controlle;
