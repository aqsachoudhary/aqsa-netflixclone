import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "../@Api/axios";
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original/";
// import "../styles/Home.css";

const HomeRow = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://api.themoviedb.org/3${fetchUrl}`
      );
      console.log("request :>> ", request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "200px",
    width: "100%",
    playerVars: {
      //https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          //https://ww.youtube.com/watch?v=XtMThy8QK
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="headingmoviecontainer">
      <h2
        style={{
          color: "white",
          padding: "15px 15px",
          backgroundColor: "black",
        }}
      >
        {title}
      </h2>
      {/* <h4 style={{ color: "white", padding: "15px 15px" }}>{title}</h4> */}
      <div className="movies">
        {movies?.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={`${base_url}${movie.poster_path} `}
            alt={movie.name}
            style={{ padding: "0px 5px" }}
          />
        ))}
      </div>
      {/* hrere we add video id {trailerurl} */}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default HomeRow;
