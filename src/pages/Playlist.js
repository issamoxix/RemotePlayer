import React from "react";
import NavBar from "../components/NavBar";
import PlayListCard from "../components/PlayListCard";
import "../styles/Playlist.css";
import AddRoundedIcon from "@material-ui/icons/AddRounded";

const Playlist = () => {
  return (
    <div
      className="Main"
      style={{ backgroundImage: 'url("/images/pic3.jpg")' }}
    >
      {" "}
      <NavBar style={{ background: "transparent" }} SearchBar={false} />
      <div className="playlistcontainer">
        <PlayListCard event="add">
          <AddRoundedIcon />
        </PlayListCard>
        <PlayListCard />
        <PlayListCard />
        <PlayListCard />
        <PlayListCard />
        <PlayListCard />
        <PlayListCard />
        <PlayListCard />
        <PlayListCard />
      </div>
    </div>
  );
};

export default Playlist;
