import React from "react";
import NavBar from "../components/NavBar";
import "../styles/ExploreStyles.css";
import SearchCard from "../components/SearchCard";
import ExploreMobilePage from "./ExploreMobilePage";
import MusicController from "../components/MusicController";
const ExplorePage = () => {
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
        <div className="container">
          <NavBar />
          <div className="searchResult">
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
          </div>
          <MusicController />
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
