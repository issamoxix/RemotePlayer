import React from "react";
import { useSelector } from "react-redux";
import db from "../firebase";
import { selectVol } from "../features/player/playerSlice";
import PlaylistAddRoundedIcon from "@material-ui/icons/PlaylistAddRounded";
import { selectUser } from "../features/user/userSlice";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
const SearchCard = ({ img, title, Sid, Cplat }) => {
  const user = useSelector(selectUser);
  const get_vol = useSelector(selectVol);
  const handleCardClick = () => {
    db.collection("users")
      .doc(user.email)
      .update({
        playing: true,
        name: title,
        type: Cplat,
        id: Sid,
        vol: get_vol ? get_vol : 50,
        artW: img,
      });
  };
  return (
    <div className="Card" onClick={() => handleCardClick()}>
      <div
        className="CardImage"
        style={{
          backgroundImage:
            Cplat === "sdc"
              ? `URL('${img && img.split("-large.jpg")[0]}-t500x500.jpg')`
              : `URL('${img && img}')`,
        }}
      >
        {/* play button */}
        <div
          className="PlaybuttonIcon"
          style={{ background: Cplat === "sdc" ? "#E08E45" : "#93032E" }}
          onClick={() => {
            handleCardClick();
          }}
        >
          <PlayArrowRoundedIcon />
        </div>
        {/* add to playlist button */}
        {/* <div
          className="AddToPlaylist"
          onClick={() => console.log("add to playlist")}
        >
          <PlaylistAddRoundedIcon />
        </div> */}
      </div>
      <div className="CardBody">
        <h4>{title && title.substring(0, 17)} </h4>
        <p
          style={{ color: "#035F87", fontWeight: "bold", marginBottom: "1rem" }}
        >
          {Cplat === "ytb" ? "Youtube" : "Soundcloud"}{" "}
        </p>
        {/* <button
          className="PlayButton"
          style={{
            background: plat === "sdc" ? "#E08E45" : "#93032E",
          }}
          onClick={() => {
            db.collection("users").doc(user.email).update({
              playing: true,
              name: title,
              type: plat,
              id: Sid,
              vol: 50,
              artW: img,
            });
          }}
        >
          Play
        </button> */}
      </div>
    </div>
  );
};

export default SearchCard;
