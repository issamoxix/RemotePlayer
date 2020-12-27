import React from "react";
import { useSelector } from "react-redux";
import { selectPlat } from "../features/app/appSlice";

const SearchCard = () => {
  const plat = useSelector(selectPlat);
  return (
    <div className="Card">
      <div className="CardImage"></div>
      <div className="CardBody">
        <h3>Tired Su lee</h3>
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
