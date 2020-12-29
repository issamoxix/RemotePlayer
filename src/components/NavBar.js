import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectPlat, setPlat } from "../features/app/appSlice";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

import "../styles/Navbar.css";
const NavBar = ({ style }) => {
  const Plat = useSelector(selectPlat);
  const dispatch = useDispatch();
  const [input, setInupt] = useState();
  return (
    <div className="NavBar" style={style}>
      <Link to="/">
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
      </Link>
      <div className="title">
        <form className="searchForm">
          <input
            type="text"
            value={input}
            onChange={(e) => setInupt(e.target.value)}
            className="searchInput"
            placeholder="Search"
          />
          <SearchRoundedIcon
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
            }}
          />
        </form>
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
