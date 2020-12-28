import React from "react";
import "../styles/ExploreMobilePageStyles.css";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SearchCard from "../components/SearchCard";
import ytb from "../assets/youtube.png";
import sdc from "../assets/soundcloud.png";
import { selectPlat, setPlat } from "../features/app/appSlice";
import { useDispatch, useSelector } from "react-redux";

const ExploreMobilePage = () => {
  const plat = useSelector(selectPlat);
  const dispatch = useDispatch();
  return (
    <div className="MobileExploreContainer">
      <div className="Header">
        <h2>RemotePlayer</h2>
        <img
          className="TogglePlayMobile"
          src={plat === "sdc" ? sdc : ytb}
          alt="plat"
          onClick={() =>
            dispatch(setPlat({ plat: plat === "sdc" ? "ytb" : "sdc" }))
          }
        />
        <form className="SearchForm">
          <input type="text" className="SearchInput" placeholder="Search" />
          <SearchRoundedIcon
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
              color: "#fff",
            }}
          />
        </form>
      </div>
      <div className="SearchResult">
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
      </div>
    </div>
  );
};

export default ExploreMobilePage;
