import React from "react";
import { useSelector } from "react-redux";
import db from "../db/firebase";
import { selectPlat } from "../features/player/playerSlice";

import { selectUser } from "../features/user/userSlice";

const SearchCard = ({ img, title, Sid }) => {
  const plat = useSelector(selectPlat);
  const user = useSelector(selectUser);
  return (
    <div className="Card">
      <div
        className="CardImage"
        style={{
          backgroundImage:
            plat === "sdc"
              ? `URL('${img && img.split("-large.jpg")[0]}-t500x500.jpg')`
              : `URL('${img && img}')`,
        }}
      ></div>
      <div className="CardBody">
        <h4>{title.substring(0, 17)} </h4>
        <p
          style={{ color: "#035F87", fontWeight: "bold", marginBottom: "1rem" }}
        >
          {plat === "ytb" ? "Youtube" : "Soundcloud"}{" "}
        </p>
        <button
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
        </button>
      </div>
    </div>
  );
};

export default SearchCard;
