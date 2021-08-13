import React, { useEffect, useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

import "../styles/Home.css";
import Pictures from "../helper/Pictures";
import PicturesItems from "../components/component/PicturesItems";
import axios from "../@Api/axios";
import HomeRow from "./HomeRow";
import request from "../@Api/request";
// const base_url = "https://image.tmdb.org/t/p/original/";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 lkj       n

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
};
const HomePage = () => {
  const [movie, setMovie] = useState([]);
  const [openDrop, setOpenDrop] = useState(false);
  useEffect(() => {
    async function fetchData() {
      console.log("fetchNetflixOriginals", request.fetchNetflixOriginals);
      const requests = await axios.get(
        `https://image.tmdb.org/t/p/original/${request.fetchNetflixOriginals}`,
        config
      );
      console.log("requests :>> ", requests);
      console.log("requests.data :>> ", requests.data);
      console.log(
        "requests.data.length :>> ",
        requests?.data.results[
          Math.floor(Math.random() * requests?.data.results.length - 1)
        ]
      );
      setMovie(
        requests?.data.results[
          Math.floor(Math.random() * requests?.data.results.length - 1)
        ]
      );
      return requests;
    }
    fetchData();
  }, []);

  const path = "https://image.tmdb.org/t/p/original";
  console.log("movie :>> ", path + "/" + movie.backdrop_path);
  return (
    <>
      <div className="mainhomepage">
        <div
          className="image"
          style={{
            objectFit: "cover",
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "98%",
              justifyContent: "flex-start",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <svg
              viewBox="0 0 111 30"
              className="svg-icon svg-icon-netflix-logo"
              focusable="false"
              style={{
                fill: "#e50914",
                lineHeight: "normal",
                height: "40px",
                padding: "25px 0px 0px 50px",
              }}
            >
              <g id="netflix-logo">
                <path
                  d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                  id="Fill-14"
                ></path>
              </g>
            </svg>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "relative",
              }}
            >
              <img
                className="logoimg"
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                alt="Netflix Logo"
                onClick={() => setOpenDrop(!openDrop)}
              ></img>
            </div>
          </div>
          {openDrop ? (
            <>
              <div className="opendrop">
                <button className="buttonsdrop">profile</button>
                <button className="buttonsdrop">saved</button>
                <button className="buttonsdrop">play</button>
                <button className="buttonsdrop">Setting</button>
                <button className="buttonsdrop">Switch</button>
              </div>
            </>
          ) : null}
          <div className="content">
            "Testing"
            <h1
              style={{
                display: "flex",
                color: "white",
                fontsize: "3rem",
                padding: "18px 18px",
                fontWeight: "800",
                width: "100%",
                alignItems: "center",
              }}
            >
              Who Killed Sara?
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="buttonsinfo">
              <button className="insidebutton">Play</button>
              <button className="insidebutton">My List</button>
            </div>
            <p className="paragraph">
              Hell-bent on exacting revenge and proving he was framed for his
              sister's murder, Álex sets out to unearth much more than the
              crime's real culprit.
              {/* {discription} */}
            </p>
          </div>
          <div className="emptybanner"></div>
        </div>
        <HomeRow
          title="NETFLIX ORIGINALS"
          fetchUrl={request.fetchNetflixOriginals}
        />
        <HomeRow title="Trending Now" fetchUrl={request.fetchTrending} />
        <HomeRow title="Top Rated" fetchUrl={request.fetchTopRated} />
        <HomeRow title="Action Movies" fetchUrl={request.fetchActionMovies} />
        <HomeRow title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
        <HomeRow title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
        <HomeRow title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
        <HomeRow title="Documentaries" fetchUrl={request.fetchDocumentaries} />
      </div>
    </>
  );
};
export default HomePage;
