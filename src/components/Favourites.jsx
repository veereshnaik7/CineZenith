import React, { useEffect } from "react";
import { ColorRing } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFavouritesMovies,
  fetchFavouritesTVshows,
} from "../reduxToolkit/cineZenithSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Favourites = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchFavouritesMovies());
      dispatch(fetchFavouritesTVshows());
    }, 1500);
  }, []);

  const error = useSelector((state) => state.cineZenithSlice.error);
  const loading = useSelector((state) => state.cineZenithSlice.loading);
  const favouriteMovies = useSelector(
    (state) => state.cineZenithSlice.favouriteMovies
  );
  const favouriteTVshows = useSelector(
    (state) => state.cineZenithSlice.favouriteTVshows
  );
  const reversedFavouriteMovies = favouriteMovies.toReversed();
  const reversedFavouriteTVshows = favouriteTVshows.toReversed();
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
        here's ur Favourites list
      </h3>
      <h3>your Favourite movies...</h3>
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
          reversedFavouriteMovies.map(
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
                            `https://cinezenith-json-server.onrender.com/FavouriteMovies/${id}`
                          );
                          dispatch(fetchFavouritesMovies());
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
      <h6>{`you have ${reversedFavouriteMovies.length} Favourites movies`}</h6>
      <h3>your Favourite TV Shows...</h3>
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
          reversedFavouriteTVshows.map(
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
                            `https://cinezenith-json-server.onrender.com/FavouriteTvShows/${id}`
                          );
                          dispatch(fetchFavouritesTVshows());
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
      <h6>{`you have ${reversedFavouriteTVshows.length} favourite TV shows`}</h6>
    </div>
  );
};

export default Favourites;
