import React, { useState } from "react";
import AddPlaylist from "./AddPlaylist";

const PlayListCard = (props) => {
  const [add, setAdd] = useState(false);
  return (
    <>
      <div className="PlayListCard" onClick={() => setAdd(true)}>
        {props.children}
      </div>
      {props.event === "add" && add && <AddPlaylist set={setAdd} />}
    </>
  );
};

export default PlayListCard;
