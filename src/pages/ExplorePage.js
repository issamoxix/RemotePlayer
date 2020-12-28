import React, { useState } from "react";
import NavBar from "../components/NavBar";
import "../styles/ExploreStyles.css";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SearchCard from "../components/SearchCard";
import ExploreMobilePage from "./ExploreMobilePage";
const ExplorePage = () => {
  const [input, setInupt] = useState();
  const [cName, setcName] = useState("title");

  if (window.innerWidth <= 600) return <ExploreMobilePage />;
  return (
    <div className="HeroContainer" style={{ background: "lightgray" }}>
      <div
        className="MainContainer"
        style={{
          background: "#000",
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <NavBar />
        <div className="container">
          <div className={cName}>
            <h2>Explore</h2>
            <form className="searchForm">
              <input
                type="text"
                value={input}
                onChange={(e) => {
                  setInupt(e.target.value);
                  input && setcName("title stick");
                }}
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
          <div className="searchResult">
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
