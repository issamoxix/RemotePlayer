import React from "react";
import NavBar from "../components/NavBar";
import "../styles/ExploreStyles.css";
import SearchCard from "../components/SearchCard";
import ExploreMobilePage from "./ExploreMobilePage";
import MusicController from "../components/MusicController";
import { useSelector } from "react-redux";
import { selectSearch } from "../features/app/appSlice";
import { selectPlat } from "../features/player/playerSlice";
const ExplorePage = () => {
  const plat = useSelector(selectPlat);
  const SearchResult = useSelector(selectSearch);

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
            {SearchResult &&
              SearchResult.map((res, ket) => (
                <SearchCard
                  key={ket}
                  img={res.artwork_url}
                  title={res.title}
                  Sid={res.id}
                />
              ))}
          </div>
          <MusicController />
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
