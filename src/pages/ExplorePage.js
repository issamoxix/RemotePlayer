import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "../styles/ExploreStyles.css";
import SearchCard from "../components/SearchCard";
import ExploreMobilePage from "./ExploreMobilePage";
import MusicController from "../components/MusicController";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLoading,
  selectPlst,
  selectSearch,
  toggleCard,
} from "../features/app/appSlice";
import { CircularProgress } from "@material-ui/core";
import PlaylistHCard from "../components/PlaylistHCard";
import Controlle from "../components/Controlle";
const ExplorePage = () => {
  const [scr, setscr] = useState(true);
  const [mob, setMob] = useState(false);
  const SearchResult = useSelector(selectSearch);
  const Loading = useSelector(selectLoading);
  const hpl = useSelector(selectPlst);
  const dispatch = useDispatch();
  const div = document.getElementsByClassName("searchResult")[0];
  useEffect(() => {
    let scroll = 0;
    div &&
      div.addEventListener("scroll", () => {
        if (scroll > div.scrollTop) {
          setscr(true);
        } else {
          setscr(false);
        }
        scroll = div.scrollTop;
      });
  }, [div]);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 600) {
        setMob(true);
      } else {
        setMob(false);
      }
    });
  }, []);
  if (window.innerWidth <= 600 || mob) return <ExploreMobilePage />;
  return (
    <div
      className="HeroContainer"
      style={{ backgroundImage: `url('/images/pic3.jpg')` }}
    >
      <div
        className="MainContainer"
        style={{
          background: "transparent",
          display: "flex",
          alignItems: "center",
          position: "relative",
          height: "100%",
          width: "100%",
          borderRadius: "0px",
          backdropFilter: "blur(5px)",
        }}
      >
        <div className="container">
          {/* outer div got the full screen resolution and 
            background color is : rgb(40 10 70 / 68%)

          
          */}
          <NavBar
            style={{
              position: "absolute",
              top: 0,
              zIndex: 2,
              background: "#131313ad",
              backdropFilter: !scr ? "blur(0px)" : "blur(8px)",
              transform: scr ? "translateY(0%)" : "translateY(-100%)",
              borderRadius: "0px",
            }}
            SearchBar={true}
          />
          <div className="searchResult">
            {Loading && (
              <div className="LoadingWrapper">
                <div className="LoadingContainer">
                  <CircularProgress />
                  <h2>Loading ...</h2>
                </div>
              </div>
            )}
            {/* test */}
            {hpl && (
              <div className="LoadingWrapper">
                <div className="LoadingContainer playlistform">
                  <div className="HeadTitle">
                    <h2>Add to playlist</h2>
                  </div>
                  <div className="playlistList">
                    <PlaylistHCard />
                    <PlaylistHCard />
                    <PlaylistHCard />
                  </div>
                  <div className="settings">
                    <button>Save</button>
                    <button>Add playlist</button>
                    <button onClick={() => dispatch(toggleCard())}>
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
            {SearchResult &&
              SearchResult.map((res, ket) => (
                <SearchCard
                  key={ket}
                  img={res.artwork_url}
                  title={res.title}
                  Sid={res.id}
                  Cplat={res.type ? "ytb" : "sdc"}
                />
              ))}
          </div>
          <MusicController />
          <Controlle hide={true} />
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
