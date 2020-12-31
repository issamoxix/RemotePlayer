import React, { useEffect, useState } from "react";
import "../styles/ExploreMobilePageStyles.css";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SearchCard from "../components/SearchCard";
import ytb from "../assets/youtube.png";
import sdc from "../assets/soundcloud.png";
import {
  selectPlat,
  selectSearch,
  setPlat,
  setSearch,
  selectQuery,
  setQuery,
} from "../features/app/appSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import MusicController from "../components/MusicController";

const ExploreMobilePage = () => {
  const [input, setInupt] = useState();
  const [Qw, setQ] = useState();
  const plat = useSelector(selectPlat);
  const Query = useSelector(selectQuery);
  const dispatch = useDispatch();
  const SearchResult = useSelector(selectSearch);
  const Search = (query, plat) => {
    dispatch(
      setQuery({
        query: query,
      })
    );
    if (plat === "sdc") {
      axios
        .get(
          `/search/tracks?q=${query}&sc_a_id=89c71e7048d8b7dbe860af3b3c34ba4d560b4bad&variant_ids=2077&facet=genre&user_id=23121-167625-690189-950869&client_id=wemqLM56wkD5McvdTn2KaZmQgQ0FC8Jg&limit=20&offset=0&linked_partitioning=1&app_version=1608213261&app_locale=en`
        )
        .then((doc) => {
          dispatch(
            setSearch({
              Search: doc.data.collection,
            })
          );
          dispatch(
            setQuery({
              query: null,
            })
          );
        });
    }
  };
  useEffect(() => {
    if (Query) {
      setQ(Query);
    }
  }, [Query]);
  return (
    <div className="MobileExploreContainer">
      <div className="Header">
        <Link to="/">
          <h2>RemotePlayer</h2>
        </Link>
        <img
          className="TogglePlayMobile"
          src={plat !== "sdc" ? sdc : ytb}
          alt="plat"
          onClick={() =>
            dispatch(setPlat({ plat: plat === "sdc" ? "ytb" : "sdc" }))
          }
        />
        <form
          className="SearchForm"
          onSubmit={(e) => {
            e.preventDefault();
            Search(input, plat);
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInupt(e.target.value)}
            className="SearchInput"
            placeholder="Search"
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
        </form>
      </div>
      <div className="SearchResult">
        {plat === "sdc" && SearchResult ? (
          SearchResult.map((res, ket) => (
            <SearchCard
              key={ket}
              img={res.artwork_url}
              title={res.title}
              Sid={res.id}
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
