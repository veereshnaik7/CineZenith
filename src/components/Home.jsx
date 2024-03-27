import React, { useEffect, useState } from "react";
import video from "../assets/videos/background.mp4";
import { CiPlay1 } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { ColorRing } from "react-loader-spinner";
import {
  fetchFavouritesMovies,
  fetchFavouritesTVshows,
  fetchUpComingMovies,
  fetchWatchListMovies,
  fetchWatchlistTvShows,
} from "../reduxToolkit/cineZenithSlice";
import axios from "axios";
import { failure } from "../reduxToolkit/cineZenithSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [trailerkey, settrailerkey] = useState("");
  const error = useSelector((state) => state.cineZenithSlice.error);
  const loading = useSelector((state) => state.cineZenithSlice.loading);
  const upComingMovies = useSelector(
    (state) => state.cineZenithSlice.upComingMovies
  );

  const watchListMovies = useSelector(
    (state) => state.cineZenithSlice.watchListMovies
  );
  const watchListTvshows = useSelector(
    (state) => state.cineZenithSlice.watchListTvshows
  );
  const favouriteMovies = useSelector(
    (state) => state.cineZenithSlice.favouriteMovies
  );
  const favouriteTVshows = useSelector(
    (state) => state.cineZenithSlice.favouriteTVshows
  );

  const handleLogout = () => {
    for (let i of watchListMovies) {
      axios.delete(`http://localhost:3001/watchListMovies/${i.id}`);
    }
    for (let i of watchListTvshows) {
      axios.delete(`http://localhost:3001/watchListTvShows/${i.id}`);
    }
    for (let i of favouriteMovies) {
      axios.delete(`http://localhost:3001/FavouriteMovies/${i.id}`);
    }
    for (let i of favouriteTVshows) {
      axios.delete(`http://localhost:3001/FavouriteTvShows/${i.id}`);
    }

    localStorage.clear();
    dispatch(failure());

    navigate("/");
  };

  useEffect(() => {
    dispatch(fetchUpComingMovies());
    dispatch(fetchWatchListMovies());
    dispatch(fetchFavouritesMovies());
    dispatch(fetchFavouritesTVshows());
    dispatch(fetchWatchlistTvShows());
  }, []);

  const handleTrailerdetails = ({ id }) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=01e8b81e206c6bf3216333d44cc761d1`
      )
      .then((r) => {
        settrailerkey(
          r.data.results?.find(
            (element) =>
              element.name.includes("Official Trailer") ||
              element.name.includes("Trailer")
          ).key
        );
      });
  };

  return (
    <div className="main-div" id="main-vid">
      <div className="logout" title="logout">
          <button class="authbtn" onClick={handleLogout}>
            <div class="sign">
              <svg viewBox="0 0 512 512">
                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
              </svg>
            </div>
            <div class="text">Logout</div>
          </button>
        </div>
      <video src={video} autoPlay loop></video>
      <div className="welcome">
        <h1>Welcome, to CineZenith...</h1>
        <h4>
          Millions of movies, TV shows and people to discover. Explore now.
        </h4>
      </div>

      <h3>Latest Trailers</h3>
      <div className="outer">
        {loading && (
          <ColorRing
            visible={true}
            height="50"
            width="50"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        )}
        {error && <p> {error}</p>}
        {!error &&
          upComingMovies.map(
            ({
              release_date,
              id,
              title,
              vote_average,
              poster_path,
              vote_count,
              popularity,
              overview,
              backdrop_path,
              original_language,
              adult,
            }) => (
              <div className="t-card" key={id} onClick={() => handleTrailerdetails({ id })}  onMouseMove={() => handleTrailerdetails({ id })}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                  alt=""
                />
                <p className="trail-name">
                  {title} &nbsp; &nbsp;
                  {release_date}
                </p>
                <button
                  
                  className="card-btn"
                >
                  <a
                    target="_blank"
                    href={`https://www.youtube.com/watch?v=${trailerkey}`}
                  >
                    <CiPlay1 id="adjust" />
                  </a>
                </button>
              </div>
            )
          )}
        
      </div>
      
    </div>
  );
};

export default Home;
