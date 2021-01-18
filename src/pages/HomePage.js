import React from "react";
import "../styles/HomeStyles.css";
import Mkd from "../assets/pic2.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPlat } from "../features/player/playerSlice";
import Footer from "../components/Footer";

const HomePage = () => {
  const dispatch = useDispatch();
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
              Nostrud culpa nisi veniam enim exercitation consectetur ad minim
              eiusmod ex eu commodo. Dolor mollit nostrud laborum commodo nulla
            </p>
            <div className="buttonContainer">
              <Link to="/login">
                <button
                  className="Prbtn"
                  onClick={() =>
                    dispatch(
                      setPlat({
                        plat: "ytb",
                      })
                    )
                  }
                  style={{ background: "#93032E" }}
                >
                  Youtube
                </button>
              </Link>
              <Link to="/login">
                <button
                  className="Prbtn"
                  onClick={() =>
                    dispatch(
                      setPlat({
                        plat: "sdc",
                      })
                    )
                  }
                  style={{ background: "#E08E45" }}
                >
                  SoundCloud
                </button>
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
