import React from "react";
import { useSelector } from "react-redux";
import db from "../db/firebase";
import { selectSplat, selectVol } from "../features/player/playerSlice";

import { selectUser } from "../features/user/userSlice";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
const SearchCard = ({ img, title, Sid }) => {
  const plat = useSelector(selectSplat);
  const user = useSelector(selectUser);
  const get_vol = useSelector(selectVol);
  const handleCardClick = () => {
    db.collection("users")
      .doc(user.email)
      .update({
        playing: true,
        name: title,
        type: plat,
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
            plat === "sdc"
              ? `URL('${img && img.split("-large.jpg")[0]}-t500x500.jpg')`
              : `URL('${img && img}')`,
        }}
      >
        <div
          className="PlaybuttonIcon"
          style={{ background: plat === "sdc" ? "#E08E45" : "#93032E" }}
          onClick={() => {
            handleCardClick();
          }}
        >
          <PlayArrowRoundedIcon />
        </div>
      </div>
      <div className="CardBody">
        <h4>{title.substring(0, 17)} </h4>
        <p
          style={{ color: "#035F87", fontWeight: "bold", marginBottom: "1rem" }}
        >
          {plat === "ytb" ? "Youtube" : "Soundcloud"}{" "}
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
