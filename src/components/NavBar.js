import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { setLoading, setSearch } from "../features/app/appSlice";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ytb from "../assets/youtube.png";
import sdc from "../assets/soundcloud.png";
import "../styles/Navbar.css";
import { Avatar } from "@material-ui/core";
import { logOut, selectUser } from "../features/user/userSlice";
import db, { auth } from "../db/firebase";
import { selectPlat } from "../features/player/playerSlice";
import FilterListIcon from "@material-ui/icons/FilterList";

const NavBar = ({ style }) => {
  const Plat = useSelector(selectPlat);
  const user = useSelector(selectUser);
  const [open, setOpen] = useState(false);
  const [filer, setFiler] = useState(false);
  const [mx, setMx] = useState(20);
  const dispatch = useDispatch();

  const [input, setInupt] = useState();
  const log_out = () => {
    auth.signOut();
    dispatch(logOut());
  };
  const Search = (query, plat, mx) => {
    dispatch(setLoading());
    axios
      .get(`/api?type=${plat}&query=${query}&mx=${mx ? mx : 20}`)
      .then((doc) => {
        dispatch(
          setSearch({
            Search: doc.data.collection,
          })
        );
        dispatch(setLoading());
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
            Search(input, Plat, mx);
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
          <FilterListIcon
            onClick={() => setFiler(!filer)}
            style={{ color: "#fff", cursor: "pointer" }}
          />
        </form>
        {filer && (
          <div className="Filtercontainer">
            <h3>Search Result</h3>
            <input
              type="text"
              value={mx}
              onChange={(e) => setMx(e.target.value)}
              className="FilterInput"
            />
          </div>
        )}
      </div>
      <div className="UserTab">
        <img
          style={{ height: "32px" }}
          className="TogglePlayMobileNavBar"
          src={Plat !== "sdc" ? sdc : ytb}
          alt="plat"
          onClick={() => {
            db.collection("users")
              .doc(user.email)
              .update({
                type: Plat === "sdc" ? "ytb" : "sdc",
              });
          }}
        />
        <li className="ProfileIcon">
          <Avatar
            className="AvatarIcon"
            onClick={() => setOpen(!open)}
            src={user.photo}
          />
          {open && (
            <ul>
              <Link to="/display">
                <li>Display</li>
              </Link>
              <Link to="/remote">
                {" "}
                <li>Remote</li>
              </Link>
              <li onClick={() => log_out()}>Log Out</li>
            </ul>
          )}
        </li>
      </div>
    </div>
  );
};

export default NavBar;
