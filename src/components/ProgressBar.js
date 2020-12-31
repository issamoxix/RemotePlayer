import React from "react";

const ProgressBar = ({ prg }) => {
  return (
    <div className="ProgressBar">
      <div className="Bar" style={{ width: `${prg}%` }}></div>
    </div>
  );
};

export default ProgressBar;
