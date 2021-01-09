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
import VolumeDownRoundedIcon from "@material-ui/icons/VolumeDownRounded";

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
      }}
    >
      <div
        className="SongArtPic"
        style={{
          backgroundImage: `url('${ArtW}')`,
        }}
      ></div>
      <div className="SongTitle">
        <h3> {SongName && SongName.substring(0, 13)} </h3>
        <p>{plat === "ytb" ? "Youtube" : "Soundcloud"}</p>
      </div>
      <div className="SongController">
        {playing ? (
          <PauseIcon onClick={() => TogglePlaying(!playing)} />
        ) : (
          <PlayArrowRoundedIcon onClick={() => TogglePlaying(!playing)} />
        )}
      </div>
      {/* <ProgressBar prg={20} /> */}
      <div className="VolumeContainer">
        <VolumeDownRoundedIcon />
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
    </div>
  );
};

export default MusicController;
