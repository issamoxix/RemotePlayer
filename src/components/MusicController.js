import React from "react";
import PauseIcon from "@material-ui/icons/Pause";
import { useSelector } from "react-redux";

import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import {
  selectArt,
  selectPlat,
  selectSongName,
  selectSongPlay,
  selectVol,
} from "../features/player/playerSlice";
import db from "../db/firebase";
import { selectUser } from "../features/user/userSlice";

const MusicController = ({ mobile }) => {
  const plat = useSelector(selectPlat);
  const playing = useSelector(selectSongPlay);
  const user = useSelector(selectUser);
  const ArtW = useSelector(selectArt);
  const SongName = useSelector(selectSongName);
  const vol = useSelector(selectVol);
  const TogglePlaying = (n) => {
    db.collection("users").doc(user.email).update({
      playing: n,
    });
  };
  return (
    <div
      className="MusicControllerContainer"
      style={{
        position: mobile && "fixed",
        bottom: 0,
        background: mobile && "#000",
      }}
    >
      <div
        className="SongArtPic"
        style={{
          backgroundImage: `url('${ArtW}')`,
          display: mobile && "none",
        }}
      ></div>
      <div
        className="SongTitle"
        style={{
          height: "100%",
          display: mobile && "flex",
          flexDirection: mobile && "column",
          justifyContent: mobile && "center",
        }}
      >
        <h3 style={{ marginBottom: "-7px" }}> {SongName} </h3>
        <p style={{ color: "#035F87", fontWeight: "bold" }}>
          {plat === "ytb" ? "Youtube" : "Soundcloud"}
        </p>
      </div>
      <div className="SongController">
        {playing ? (
          <PauseIcon
            style={{
              background: plat === "sdc" ? "#E08E45" : "#93032E",
              borderRadius: 50,
              fontSize: 50,
              color: "#fff",
              cursor: "pointer",
              transition: "all 0.2s linear",
            }}
            onClick={() => TogglePlaying(!playing)}
          />
        ) : (
          <PlayArrowRoundedIcon
            style={{
              background: plat === "sdc" ? "#E08E45" : "#93032E",
              borderRadius: 50,
              fontSize: 50,
              color: "#fff",
              cursor: "pointer",
              transition: "all 0.2s linear",
            }}
            onClick={() => TogglePlaying(!playing)}
          />
        )}
      </div>
      {/* <ProgressBar prg={20} /> */}
      <input
        className="ProgressBar"
        onChange={(e) => {
          db.collection("users").doc(user.email).update({
            vol: e.target.value,
          });
        }}
        value={vol}
        type="range"
        min="0"
        max="100"
      />
    </div>
  );
};

export default MusicController;
