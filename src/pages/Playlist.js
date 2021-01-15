import React from "react";
import NavBar from "../components/NavBar";
import PlayListCard from "../components/PlayListCard";
import "../styles/Playlist.css";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
const Playlist = () => {
  return (
    <div className="Main">
      {" "}
      <NavBar style={{ background: "transparent" }} SearchBar={false} />
      <div className="playlistcontainer">
        <PlayListCard>
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
