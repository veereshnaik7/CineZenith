import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ColorRing } from "react-loader-spinner";
import {
  fetchTrendingAll,
  fetchTrendingMovies,
  fetchTrendingPeoples,
  fetchTrendingTvShows,
} from "../reduxToolkit/cineZenithSlice";

const Trending = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const error = useSelector((state) => state.cineZenithSlice.error);
  const loading = useSelector((state) => state.cineZenithSlice.loading);
  const TrendingAll = useSelector((state) => state.cineZenithSlice.TrendingAll);
  const TrendingMovies = useSelector(
    (state) => state.cineZenithSlice.TrendingMovies
  );
  const TrendingTvShows = useSelector(
    (state) => state.cineZenithSlice.TrendingTvShows
  );
  const TrendingPeoples = useSelector(
    (state) => state.cineZenithSlice.TrendingPeoples
  );

  useEffect(() => {
    dispatch(fetchTrendingAll());
    dispatch(fetchTrendingPeoples());
    dispatch(fetchTrendingTvShows());
    dispatch(fetchTrendingMovies());
  }, []);

const handleTrendingPeople=({ adult,
  gender,
  id,
  known_for,
  known_for_department,
  media_type,
  name,
  original_name,
  popularity,
  profile_path,})=>{
    const TrendingPeopleDetails={ adult,
      gender,
      id,
      known_for,
      known_for_department,
      media_type,
      name,
      original_name,
      popularity,
      profile_path,};
      navigate(`/TrendingPeopledetails/:${name} ${id}`, {
        state: {  TrendingPeopleDetails},
      });

}
  const handleTrendingTvShowsDetails = ({
    adult,
    backdrop_path,
    first_air_date,
    genre_ids,
    id,
    media_type,
    name,
    origin_country,
    original_language,
    original_name,
    overview,
    popularity,
    poster_path,
    vote_average,
    vote_count,
  }) => {
    const TrendingTvShowDetails = {
      adult,
      backdrop_path,
      first_air_date,
      genre_ids,
      id,
      media_type,
      name,
      origin_country,
      original_language,
      original_name,
      overview,
      popularity,
      poster_path,
      vote_average,
      vote_count,
    };
    navigate(`/TrendingTvshowDetails/:${name} ${id}`, {
      state: { TrendingTvShowDetails },
    });
  };

  const handleAllAndMOvieDetails = ({
    adult,
    backdrop_path,
    id,
    media_type,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
    vote_average,
    vote_count,
  }) => {
    const detailsAllAndMovie = {
      adult,
      backdrop_path,
      id,
      media_type,
      original_language,
      original_title,
      overview,
      popularity,
      poster_path,
      release_date,
      title,
      vote_average,
      vote_count,
    };
    navigate(`/TrendingAllAndMovies/:${title} ${id}`, {
      state: { detailsAllAndMovie },
    });
  };
  return (
    <div className="main-div" id="main-div">
      <h4>Trending All</h4>
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
          TrendingAll.map(
            ({
              adult,
              backdrop_path,
              id,
              media_type,
              original_language,
              original_title,
              overview,
              popularity,
              poster_path,
              release_date,
              title,
              vote_average,
              vote_count,
              name,
              first_air_date,
            }) => (
              <div className="top-card" key={id}>
                <div className="wrapper">
                  <div className="card">
                    <img
                      className="poster-path-img"
                      src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
                      alt="img"
                    />
                    <div className="descriptions">
                      <p className="name">{title ?? name}</p>
                      <p>{release_date ?? first_air_date}</p>
                      <p> {vote_average}/10</p>
                      <button
                        className="btn"
                        onClick={() =>
                          handleAllAndMOvieDetails({
                            adult,
                            backdrop_path,
                            id,
                            media_type,
                            original_language,
                            original_title,
                            overview,
                            popularity,
                            poster_path,
                            release_date,
                            title,
                            vote_average,
                            vote_count,
                          })
                        }
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
      </div>
      <h4>Trending Movies</h4>
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
          TrendingMovies.map(
            ({
              adult,
              backdrop_path,
              id,
              media_type,
              original_language,
              original_title,
              overview,
              popularity,
              poster_path,
              release_date,
              title,
              vote_average,
              vote_count,
            }) => (
              <div className="top-card" key={id}>
                <div className="wrapper">
                  <div className="card">
                    <img
                      className="poster-path-img"
                      src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
                      alt="img"
                    />
                    <div className="descriptions">
                      <p className="name">{title ?? original_title}</p>
                      <p>{release_date}</p>
                      <p> {vote_average}/10</p>
                      <button
                        className="btn"
                        onClick={() =>
                          handleAllAndMOvieDetails({
                            adult,
                            backdrop_path,
                            id,
                            media_type,
                            original_language,
                            original_title,
                            overview,
                            popularity,
                            poster_path,
                            release_date,
                            title,
                            vote_average,
                            vote_count,
                          })
                        }
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
      </div>
      <h4> Trending Tv Shows</h4>
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
          TrendingTvShows.map(
            ({
              adult,
              backdrop_path,
              first_air_date,
              genre_ids,
              id,
              media_type,
              name,
              origin_country,
              original_language,
              original_name,
              overview,
              popularity,
              poster_path,
              vote_average,
              vote_count,
            }) => (
              <div className="top-card" key={id}>
                <div className="wrapper">
                  <div className="card">
                    <img
                      className="poster-path-img"
                      src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
                      alt="img"
                    />
                    <div className="descriptions">
                      <p className="name">{name}</p>
                      <p>{first_air_date}</p>
                      <p> {vote_average}/10</p>
                      <button
                        className="btn"
                        onClick={() =>
                          handleTrendingTvShowsDetails({
                            adult,
                            backdrop_path,
                            first_air_date,
                            genre_ids,
                            id,
                            media_type,
                            name,
                            origin_country,
                            original_language,
                            original_name,
                            overview,
                            popularity,
                            poster_path,
                            vote_average,
                            vote_count,
                          })
                        }
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
      </div>
      <h4>Trending Peoples</h4>
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
          TrendingPeoples.map(
            ({
              adult,
              gender,
              id,
              known_for,
              known_for_department,
              media_type,
              name,
              original_name,
              popularity,
              profile_path,
            }) => (
              <div className="top-card" key={id}>
                <div className="wrapper">
                  <div className="card">
                    <img
                      className="poster-path-img"
                      src={`https://image.tmdb.org/t/p/w185/${profile_path}`}
                      alt="img"
                    />
                    <div className="descriptions">
                      <p className="name">{name}</p>
                      <p>{media_type}</p>
                      <p> {known_for_department}</p>
                      <button
                        className="btn"
                        onClick={() =>
                          handleTrendingPeople({
                            adult,
                            gender,
                            id,
                            known_for,
                            known_for_department,
                            media_type,
                            name,
                            original_name,
                            popularity,
                            profile_path,
                          })
                        }
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default Trending;
