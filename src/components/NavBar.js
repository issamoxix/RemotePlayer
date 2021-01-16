import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { setLoading, setSearch } from "../features/app/appSlice";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ytb from "../assets/youtube.png";
import sdc from "../assets/soundcloud.png";
import "../styles/Navbar.css";
import { Avatar, NativeSelect } from "@material-ui/core";
import { logOut, selectUser } from "../features/user/userSlice";
import { auth } from "../db/firebase";
import { selectSplat, setSpl } from "../features/player/playerSlice";
import FilterListIcon from "@material-ui/icons/FilterList";
import API from "@aws-amplify/api";

const NavBar = ({ style, SearchBar }) => {
  const Plat = useSelector(selectSplat);
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
    API.get("api", "/api", {
      queryStringParameters: {
        type: plat,
        mx: mx ? mx : 20,
        query: query,
      },
    }).then((doc) => {
      dispatch(
        setSearch({
          Search: doc.collection,
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
      {SearchBar && (
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
              <h3>Resulte</h3>
              <NativeSelect
                value={mx}
                id="demo-customized-select-native"
                onChange={(e) => setMx(e.target.value)}
              >
                <option value={20}>20</option>
                <option value={25}>25</option>
                <option value={30}>30</option>
                <option value={35}>35</option>
                <option value={40}>40</option>
              </NativeSelect>
            </div>
          )}
        </div>
      )}
      <div className="UserTab">
        {SearchBar && (
          <img
            style={{ height: "32px" }}
            className="TogglePlayMobileNavBar"
            src={Plat !== "sdc" ? sdc : ytb}
            alt="plat"
            onClick={() => {
              dispatch(
                setSpl({
                  Sp: Plat === "sdc" ? "ytb" : "sdc",
                })
              );
            }}
          />
        )}
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
