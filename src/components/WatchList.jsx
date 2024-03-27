import { ColorRing } from "react-loader-spinner";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchWatchListMovies,
  fetchWatchlistTvShows,
} from "../reduxToolkit/cineZenithSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const WatchList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchWatchListMovies());
      dispatch(fetchWatchlistTvShows());
    }, 1500);
  }, []);

  const error = useSelector((state) => state.cineZenithSlice.error);
  const loading = useSelector((state) => state.cineZenithSlice.loading);
  const watchListMovies = useSelector(
    (state) => state.cineZenithSlice.watchListMovies
  );
  const watchListTvShows = useSelector(
    (state) => state.cineZenithSlice.watchListTvshows
  );
  const reversedWatchListMovies = watchListMovies.toReversed();
  const reversedWatchListTvShows = watchListTvShows.toReversed();

  const handlemovieDetails = ({
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
  }) => {
    const details = {
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
    };
    navigate(`/movies/:${title} and ${id}`, { state: { details } });
  };
  const handletvshowDetails = ({
    first_air_date,
    id,
    name,
    vote_average,
    poster_path,
    origin_country,
    original_name,
    vote_count,
    popularity,
    overview,
    backdrop_path,
    original_language,
    adult,
  }) => {
    const details = {
      first_air_date,
      id,
      name,
      vote_average,
      poster_path,
      origin_country,
      original_name,
      popularity,
      overview,
      backdrop_path,
      original_language,
      adult,
      vote_count,
    };
    navigate(`/tvdetails/:${name} ${id}`, { state: { details } });
  };
  return (
    <div className="main-div" id="main-div ">
      <h3
        style={{ textDecoration: "underline 2px solid", textAlign: "center" }}
      >
        here's ur watchlist
      </h3>
      <h3>your watchlist movies...</h3>
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

        {error && <p>{error}</p>}
        {!error &&
          reversedWatchListMovies.map(
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
              <div className="top-card" key={id} id="outerwatchlist">
                <div className="wrapper">
                  <div className="card">
                    <img
                      className="poster-path-img"
                      src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                      alt="img"
                    />
                    <div className="descriptions">
                      <p className="name">{title}</p>
                      <p>{release_date}</p>
                      <p> {vote_average}/10</p>
                      <button
                        onClick={() =>
                          handlemovieDetails({
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
                          })
                        }
                      >
                        Details
                      </button>
                      <button
                        style={{ marginTop: "0.5rem" }}
                        onClick={() => {
                          axios.delete(
                            `https://cinezenith-json-server.onrender.com/watchListMovies/${id}`
                          );

                          setTimeout(() => {
                            dispatch(fetchWatchListMovies());
                          }, 1200);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
      </div>
      <h6>{`you have ${reversedWatchListMovies.length} watchlist movies`}</h6>
      <h3>your watchlist TV shows...</h3>
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
          reversedWatchListTvShows.map(
            ({
              first_air_date,
              id,
              name,
              vote_average,
              poster_path,
              origin_country,
              original_name,
              popularity,
              overview,
              backdrop_path,
              original_language,
              adult,
              vote_count,
            }) => (
              <div className="top-card" key={id} id="outerwatchlist">
                <div className="wrapper">
                  <div className="card">
                    <img
                      className="poster-path-img"
                      src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                      alt="img"
                    />
                    <div className="descriptions">
                      <p className="name">{name}</p>
                      <p>{first_air_date}</p>
                      <p> {vote_average}/10</p>
                      <button
                        onClick={() =>
                          handletvshowDetails({
                            first_air_date,
                            id,
                            name,
                            vote_average,
                            poster_path,
                            origin_country,
                            original_name,
                            popularity,
                            overview,
                            backdrop_path,
                            original_language,
                            adult,
                            vote_count,
                          })
                        }
                      >
                        Details
                      </button>
                      <button
                        style={{ marginTop: "0.5rem" }}
                        onClick={() => {
                          axios.delete(
                            `https://cinezenith-json-server.onrender.com/watchListTvShows/${id}`
                          );

                          setTimeout(() => {
                            dispatch(fetchWatchlistTvShows());
                          }, 1200);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
      </div>
      <h6>{`you have ${reversedWatchListTvShows.length} watchlist TV shows`}</h6>
    </div>
  );
};

export default WatchList;
