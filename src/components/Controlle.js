import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import PauseIcon from "@material-ui/icons/Pause";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import YouTube from "react-youtube";
import {
  selectSongId,
  selectSongPlay,
  selectVol,
  selectSongName,
  selectPlat,
} from "../features/player/playerSlice";
import db from "../db/firebase";
import { selectUser } from "../features/user/userSlice";
const Controlle = () => {
  const [pl, setPl] = useState(false);

  const ytbRef = useRef();
  const plat = useSelector(selectPlat);
  const Vol = useSelector(selectVol);
  const user = useSelector(selectUser);
  const playing = useSelector(selectSongPlay);
  const SongName = useSelector(selectSongName);
  const SongId = useSelector(selectSongId);
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const src = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${SongId}&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;
  const Go = () => {
    var iframeElement = document.querySelector("iframe");

    var widget1 = window.SC.Widget(iframeElement);

    return widget1;
  };

  const MediaCheck = () => {
    var f = Go();
    if (playing) {
      f.play();
      f.setVolume(Vol);
    } else {
      f.setVolume(Vol);
      f.pause();
    }
  };
  useEffect(() => {
    if (plat === "sdc") {
      if (playing) {
        var r = Go();

        r.play();
        r.setVolume(Vol);
      } else {
        var r = Go();
        r.pause();
      }
    } else if (plat === "ytb") {
      if (pl) {
        if (playing) {
          ytbRef.current.internalPlayer.playVideo();
        } else {
          ytbRef.current.internalPlayer.pauseVideo();
        }
      }
    }
    if (Vol && plat === "ytb") {
      if (pl) {
        ytbRef.current.internalPlayer.setVolume(Vol);
      }
    }
  }, [playing, Vol, plat, pl]);
  return (
    <div className="ControlContainer">
      <div className="SongTitle">
        <h2>{SongName && SongName.substring(0, 20)} </h2>
        <p style={{ color: "#035F87", fontWeight: "bold" }}>
          {plat === "ytb" ? "Youtube" : "Soundcloud"}{" "}
        </p>
      </div>

      <div id="ytplayer"></div>
      <div className="HidenFrame">
        {plat === "sdc" ? (
          <iframe
            id="myFrame"
            title="player"
            width="100%"
            height="366"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            className="IframePlayer"
            src={src}
            onLoad={() => MediaCheck()}
          ></iframe>
        ) : (
          plat === "ytb" && (
            <YouTube
              videoId={SongId}
              opts={opts}
              ref={ytbRef}
              onPause={() => {
                playing && ytbRef.current.internalPlayer.playVideo();
              }}
              onStateChange={() => console.log("Stage Changed")}
              onReady={() => {
                console.log("Song is Ready !!");
                setPl(true);
                playing && ytbRef.current.internalPlayer.playVideo();
              }}
            />
          )
        )}
      </div>
      <div className="ControlBody">
        <VolumeDownIcon style={{ fontSize: 30, cursor: "pointer" }} />
        {playing ? (
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
            onClick={() => {
              if (plat === "sdc") {
                var p = Go();
                p.toggle();
              } else {
                if (pl) {
                  ytbRef.current.internalPlayer.pauseVideo();
                }
              }
              db.collection("users").doc(user.email).update({
                playing: false,
              });
            }}
          />
        ) : (
          <PlayArrowRoundedIcon
            style={{
              background: plat === "sdc" ? "#E08E45" : "#93032E",
              borderRadius: 50,
              padding: "5px",
              fontSize: 50,
              cursor: "pointer",
              transition: "all 0.2s linear",
              margin: "0 1rem",
            }}
            onClick={() => {
              if (plat === "sdc") {
                var p = Go();
                p.toggle();
              } else {
                if (pl) {
                  ytbRef.current.internalPlayer.playVideo();
                }
              }
              db.collection("users").doc(user.email).update({
                playing: true,
              });
            }}
          />
        )}
        <VolumeUpIcon style={{ fontSize: 30, cursor: "pointer" }} />
      </div>
      <input
        onChange={(e) => {
          db.collection("users").doc(user.email).update({
            vol: e.target.value,
          });
          var g = Go();
          g.setVolume(e.target.value);
        }}
        type="range"
        min="0"
        max="100"
        value={Vol}
      />
      {/* Debugging */}
      {/* <button
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
        onClick={() => console.log(pl, plat, ytbRef.current.internalPlayer)}
      >
        CLick Test
      </button> */}
    </div>
  );
};

export default Controlle;
