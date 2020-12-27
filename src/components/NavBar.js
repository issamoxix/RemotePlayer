import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPlat, setPlat } from "../features/app/appSlice";
import "../styles/Navbar.css";
const NavBar = () => {
  const Plat = useSelector(selectPlat);
  const dispatch = useDispatch();
  return (
    <div className="NavBar">
      <div className="LogoTitle">
        <h2>
          Remote
          <span
            className="TitleSpan"
            style={{ color: Plat === "sdc" ? "#E08E45" : "#93032E" }}
          >
            Player
          </span>
        </h2>
      </div>

      <div className="UserTab">
        <button
          onClick={() =>
            dispatch(
              setPlat({
                plat: Plat === "sdc" ? "ytb" : "sdc",
              })
            )
          }
          className="ToggleButton"
        >
          {Plat === "sdc" ? "Youtube" : "SoundCloud"}{" "}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
