import React from "react";

const AddPlaylist = ({ set }) => {
  return (
    <div className="AddPlaylistWrapper">
      <div className="AddPlaylist">
        <div className="AddHeader">
          <h1>Create Playlist</h1>
          <p style={{ color: "#000" }}>Have fun listening</p>
          <h1 onClick={() => set(false)} className="CloseX">
            X
          </h1>
        </div>
        <div className="AddForm">
          <input type="text" placeholder="Playlist name" />
        </div>
        <div className="AddForm">
          <input type="text" placeholder="Playlist name" disabled />
        </div>
        <div className="AddForm">
          <input type="text" placeholder="Playlist name" />
        </div>
        <div className="AddForm">
          <button>Create</button>
        </div>
      </div>
    </div>
  );
};

export default AddPlaylist;
