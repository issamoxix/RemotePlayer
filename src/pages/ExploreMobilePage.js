import React from "react";
import "../styles/ExploreMobilePageStyles.css";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SearchCard from "../components/SearchCard";

const ExploreMobilePage = () => {
  return (
    <div className="MobileExploreContainer">
      <div className="Header">
        <h2>RemotePlayer</h2>
        <h2 className="TogglePlayMobile">X</h2>
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
