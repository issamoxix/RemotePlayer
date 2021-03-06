import React from "react";
import "../styles/HomeStyles.css";
import Mkd from "../assets/pic2.jpg";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div
      className="HeroContainer"
      style={{ backgroundImage: `url('/images/pic3.jpg')`, display: "block" }}
    >
      <div
        className="MainContainer"
        style={{
          backgroundImage: `url('/images/pic3.jpg')`,
          width: "100%",
          height: "100%",
          borderRadius: "0px",
        }}
      >
        <div className="Wrapper">
          <div className="BodyContainer">
            <h1>
              Remote<span style={{ color: "rgb(147, 3, 46)" }}>Player</span>
            </h1>
            <p>
              RemptePlayer is an app where you can play Youtube and Soundcloud
              Music remotely, and also you can play Youtube songs while mobile
              screen off
            </p>
            <div className="buttonContainer">
              <Link to="/login">
                <button className="StartBtn">Sign in</button>
              </Link>
            </div>
          </div>
          <img
            src={Mkd}
            alt="Music"
            style={{ marginRight: "2rem", borderRadius: "17px" }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
