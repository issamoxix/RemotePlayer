import React from "react";
import { useSelector } from "react-redux";
import { selectPlat } from "../features/app/appSlice";

const SearchCard = ({ img, title }) => {
  const plat = useSelector(selectPlat);
  return (
    <div className="Card">
      <div
        className="CardImage"
        style={{
          backgroundImage: `URL('${
            img && img.split("-large.jpg")[0]
          }-t500x500.jpg')`,
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
        >
          Play
        </button>
      </div>
    </div>
  );
};

export default SearchCard;
