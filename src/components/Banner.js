import React from "react";

const Banner = () => {
  let imgz = "http://192.168.1.129:3000/images/banner.jpg";
  return (
    <div
      className="SongBanner"
      style={{
        background: `url('${imgz}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></div>
  );
};

export default Banner;
