import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectArt, selectPlat } from "../features/player/playerSlice";

const Banner = () => {
  const [imgz, setImgz] = useState(
    "http://192.168.1.129:3000/images/banner.jpg"
  );
  const artW = useSelector(selectArt);
  const plat = useSelector(selectPlat);
  useEffect(() => {
    if (artW) {
      plat === "sdc"
        ? setImgz(`${artW.split("-large.jpg")[0]}-t500x500.jpg`)
        : setImgz(artW);
    }
  }, [artW]);
  return (
    <div
      className="SongBanner"
      style={{
        backgroundImage: `url('${imgz}')`,
      }}
    ></div>
  );
};

export default Banner;
