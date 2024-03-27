import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";

const Details = () => {
  const loaction = useLocation();
  const [trailer, settrailer] = useState("");
  const [movieCast, setmovieCast] = useState([]);
  const [error, seterror] = useState("");
  const details = loaction.state.details;
  const navigate = useNavigate();

  const {
    release_date,
    id,
    title,
    vote_average,
    poster_path,

    overview,
    backdrop_path,
    original_language,
    adult,
  } = details;

  const handleCastMovies = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWU4YjgxZTIwNmM2YmYzMjE2MzMzZDQ0Y2M3NjFkMSIsInN1YiI6IjY1ZTA0NzE3OWRlZTU4MDE2MzdiODQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vPF-246euc-mBIsoE37JF5OSxjzL2YyHKhn5x_AF2ag",
        },
      })
      .then((r) => {
        setmovieCast(r.data.cast);
      })
      .catch((error) => {
        seterror("no cast details found");
      });
  };
  const handleTrailerdetails = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movies/${id}/videos?api_key=01e8b81e206c6bf3216333d44cc761d1`
      )
      .then((r) => {
        settrailer(
          r.data.results?.find(
            (element) =>
              element.name.includes("Official Trailer") ||
              element.name.includes("Trailer") ||
              element.type.includes("Trailer") ||
              element.type.includes("Teaser") ||
              element.name.includes("Teaser")
          ).key
        );
      });
  };

  useEffect(() => {
    handleCastMovies();
    handleTrailerdetails();
  }, []);
  console.log(trailer);
  const backgroundimg = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
  };
  return (
    <div className="main-div" id="main-div">
      <div className="details" style={backgroundimg}>
        <div className="details-img">
          <img
            className="poster-path-img"
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt="img"
          />
        </div>
        <div className="details-content">
          <h4>
            {title} <br />({release_date})
            {adult === false ? "family entertiner" : "18+"}
          </h4>
          <>
            user score{" "}
            <div className="votescore">
              {Math.round((100 * vote_average) / 10)}%
            </div>
          </>
          <p className="content-p">original language : {original_language}</p>

          <div>
            <a
              title="play trailer"
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.youtube.com/watch?v=${trailer}`}
            >
              <CiPlay1 className="rating-icons" />
            </a>
            <MdOutlinePlaylistAdd
              className="rating-icons"
              title="add to watch list"
              onClick={() => {
                axios.post("http://localhost:3001/watchListMovies", details);
                localStorage.setItem("watchlistmovie", details);
                navigate("/watchlist");
              }}
            />
            <CiHeart
              className="rating-icons"
              title="add to favorites"
              onClick={() => {
                axios.post("http://localhost:3001/FavouriteMovies", details);
                navigate("/favourites");
              }}
            />

            <h4>overview</h4>
            <p className="content-p">{overview}</p>
          </div>
        </div>
      </div>
      <div className="cast-details">
        <h3>Cast Details</h3>
        <div className="outer">
          {movieCast.length > 0 ? (
            <>
              {movieCast.map(
                ({
                  id,
                  name,
                  known_for_department,
                  character,
                  profile_path,
                }) => (
                  <div className="top-card" key={id}>
                    <div className="wrapper">
                      <div className="card">
                        <img
                          className="poster-path-img"
                          src={`https://image.tmdb.org/t/p/w185/${
                            profile_path ?? poster_path
                          }`}
                          alt="img"
                        />
                        <div className="descriptions">
                          <p>{name}</p>
                          <p>character : {character}</p>
                          <p> {known_for_department}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </>
          ) : (
            <p>{error}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
