import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { setSearch } from "../features/app/appSlice";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ytb from "../assets/youtube.png";
import sdc from "../assets/soundcloud.png";
import "../styles/Navbar.css";
import { Avatar } from "@material-ui/core";
import { logOut, selectUser } from "../features/user/userSlice";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import db, { auth } from "../db/firebase";
import { selectPlat, setPlat } from "../features/player/playerSlice";

const NavBar = ({ style }) => {
  const Plat = useSelector(selectPlat);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [input, setInupt] = useState();
  const log_out = () => {
    auth.signOut();
    dispatch(logOut());
  };
  const Search = (query, plat) => {
    axios.get(`/api/${plat}/${query}`).then((doc) => {
      dispatch(
        setSearch({
          Search: doc.data.collection,
        })
      );
    });
  };
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            Search(input, Plat);
          }}
          className="searchForm"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInupt(e.target.value)}
            className="searchInput"
            placeholder={`Search in ${
              Plat === "sdc" ? "Soundcloud" : "Youtube"
            }`}
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
        <img
          style={{ height: "32px" }}
          className="TogglePlayMobileNavBar"
          src={Plat !== "sdc" ? sdc : ytb}
          alt="plat"
          onClick={() => {
            console.log(Plat);
            db.collection("users")
              .doc(user.email)
              .update({
                type: Plat === "sdc" ? "ytb" : "sdc",
              });
          }}
        />
        <Avatar className="AvatarIcon" src={user.photo} />
        <ExitToAppRoundedIcon
          style={{
            cursor: "pointer",
          }}
          onClick={() => log_out()}
        />
      </div>
    </div>
  );
};

export default NavBar;
