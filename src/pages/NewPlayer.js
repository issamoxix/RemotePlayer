import React from "react";
import NavBar from "../components/NavBar";
import "../styles/NewPlayer.css";
import remote from "../assets/remote.png";
import display from "../assets/display.png";
const NewPlayer = () => {
  return (
    <div className="HeroContainer" style={{ background: "lightgray" }}>
      <div
        className="MainContainer"
        style={{
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div className="Player__container">
          <NavBar style={{ background: "transparent" }} />
          <div className="Player__body">
            <section className="Info__card">
              <div className="Info__body">
                <h1 style={{ color: "rgb(147, 3, 46)" }}>Display</h1>
                <p>
                  lConsectetur adipisicing aliquip duis cillum officia consequat
                  qui ullamco nostrud cupidatat Lorem. Officia veniam
                  exercitation commodo reprehenderit est anim duis dolore ex
                  commodo laboris. Dolore qui dolore incididunt excepteur
                  dolore.
                </p>
                <button className="display_btn">Display</button>
              </div>
              <div className="Info__image">
                <img src={display} />
              </div>
            </section>
            <section className="Info__card reverse__card">
              <div className="Info__body">
                <h1 style={{ color: "rgb(224, 142, 69)" }}>Remote</h1>
                <p>
                  lConsectetur adipisicing aliquip duis cillum officia consequat
                  qui ullamco nostrud cupidatat Lorem. Officia veniam
                  exercitation commodo reprehenderit est anim duis dolore ex
                  commodo laboris. Dolore qui dolore incididunt excepteur
                  dolore.
                </p>
                <button className="remote_btn">Remote</button>
              </div>
              <div className="Info__image">
                <img src={remote} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPlayer;
