import React from "react";

const Banner = () => {
  let imgz = "http://localhost:3000/images/banner.jpg";
  return (
    <div className="SongBanner" style={{ background: `url('${imgz}')` }}></div>
  );
};

export default Banner;
