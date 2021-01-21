import React, { useEffect, useState } from "react";
import "../styles/ExploreMobilePageStyles.css";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SearchCard from "../components/SearchCard";
import ytb from "../assets/youtube.png";
import sdc from "../assets/soundcloud.png";
import {
  selectSearch,
  setSearch,
  selectQuery,
  setQuery,
} from "../features/app/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MusicController from "../components/MusicController";
import { setSpl, selectSplat } from "../features/player/playerSlice";

import FilterListIcon from "@material-ui/icons/FilterList";
import API from "@aws-amplify/api";

const ExploreMobilePage = () => {
  const [input, setInupt] = useState();
  const [mx, setMx] = useState(20);
  const [open, setOpen] = useState(false);
  const [Qw, setQ] = useState();
  const plat = useSelector(selectSplat);
  const Query = useSelector(selectQuery);
  const dispatch = useDispatch();
  const SearchResult = useSelector(selectSearch);
  const Search = (query, plat, mx) => {
    dispatch(
      setQuery({
        query: query,
      })
    );
    API.get("api", "/api", {
      queryStringParameters: {
        type: plat,
        mx: mx ? mx : 20,
        query: query,
      },
    }).then((doc) => {
      dispatch(
        setSearch({
          Search: doc.collection,
        })
      );
      dispatch(
        setQuery({
          query: null,
        })
      );
    });
  };
  useEffect(() => {
    if (Query) {
      setQ(Query);
    }
  }, [Query]);
  return (
    <div
      className="MobileExploreContainer"
      style={{ backgroundImage: `url('/images/pic3.jpg')` }}
    >
      <div className="Header">
        <Link to="/">
          <h2>
            R
            <span
              className="TitleSpan"
              style={{ color: plat === "sdc" ? "#E08E45" : "#93032E" }}
            >
              P
            </span>
          </h2>
        </Link>
        <img
          className="TogglePlayMobile"
          src={plat !== "sdc" ? sdc : ytb}
          alt="plat"
          onClick={() =>
            dispatch(
              setSpl({
                Sp: plat === "sdc" ? "ytb" : "sdc",
              })
            )
          }
        />
        <form
          className="SearchForm"
          onSubmit={(e) => {
            e.preventDefault();

            Search(input, plat, mx);
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInupt(e.target.value)}
            className="SearchInput"
            placeholder={`Search in ${
              plat === "sdc" ? "Soundcloud" : "Youtube"
            }`}
          />
          <SearchRoundedIcon
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
              color: "#fff",
            }}
          />
          <FilterListIcon
            onClick={() => setOpen(!open)}
            style={{ color: "#fff", cursor: "pointer" }}
          />
        </form>
        {open && (
          <div className="Filtercontainer">
            <h3>Search Result</h3>
            <input
              type="text"
              value={mx}
              onChange={(e) => setMx(e.target.value)}
              className="FilterInput"
              placeholder="20"
            />
          </div>
        )}
      </div>
      <div className="SearchResult">
        {SearchResult ? (
          SearchResult.map((res, ket) => (
            <SearchCard
              key={ket}
              img={res.artwork_url}
              title={res.title}
              Sid={res.id}
              Cplat={res.type === "ytb" ? "ytb" : "sdc"}
            />
          ))
        ) : Qw ? (
          <p className="SearchingProgress">
            Searching for{" "}
            <span style={{ color: plat === "sdc" ? "#E08E45" : "#93032E" }}>
              {Query} ...{" "}
            </span>{" "}
          </p>
        ) : (
          <p className="SearchingProgress">Search for something .</p>
        )}
      </div>
      <MusicController mobile={true} />
    </div>
  );
};

export default ExploreMobilePage;
