import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { selectPlat, setPlat, setSearch } from "../features/app/appSlice";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ytb from "../assets/youtube.png";
import sdc from "../assets/soundcloud.png";
import "../styles/Navbar.css";
import { Avatar } from "@material-ui/core";
import { logOut, selectUser } from "../features/user/userSlice";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import { auth } from "../db/firebase";

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
    if (plat === "sdc") {
      axios
        .get(
          `/search/tracks?q=${query}&sc_a_id=89c71e7048d8b7dbe860af3b3c34ba4d560b4bad&variant_ids=2077&facet=genre&user_id=23121-167625-690189-950869&client_id=wemqLM56wkD5McvdTn2KaZmQgQ0FC8Jg&limit=20&offset=0&linked_partitioning=1&app_version=1608213261&app_locale=en`
        )
        .then((doc) => {
          dispatch(
            setSearch({
              Search: doc.data.collection,
            })
          );
        });
    }
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
        <img
          style={{ height: "32px" }}
          className="TogglePlayMobileNavBar"
          src={Plat !== "sdc" ? sdc : ytb}
          alt="plat"
          onClick={() =>
            dispatch(setPlat({ plat: Plat === "sdc" ? "ytb" : "sdc" }))
          }
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
