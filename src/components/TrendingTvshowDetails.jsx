import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";


const TrendingTvshowDetails = () => {
  const navigate=useNavigate()
    const [tvcast, settvcast] = useState([]);
    const [trailer, setTrailer] = useState([]);
    const [error, seterror] = useState("");
    const loaction = useLocation();
    
    const TrendingTvShowDetails = loaction.state.TrendingTvShowDetails;
    const {adult,
        backdrop_path,
        first_air_date,
        
        id,
        
        name,
        origin_country,
        
        overview,
        
        poster_path,
        vote_average,
        }=TrendingTvShowDetails
    const handleCastMovies = () => {
        axios
          .get(`https://api.themoviedb.org/3/tv/${id}/credits`, {
            params: { language: "en-US" },
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWU4YjgxZTIwNmM2YmYzMjE2MzMzZDQ0Y2M3NjFkMSIsInN1YiI6IjY1ZTA0NzE3OWRlZTU4MDE2MzdiODQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vPF-246euc-mBIsoE37JF5OSxjzL2YyHKhn5x_AF2ag",
            },
          })
          .then((r) => {
            settvcast(r.data.cast);
          }).catch((error)=>{seterror('no cast details found')})
      };
      
  const handleTVtrailers = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}/videos?api_key=01e8b81e206c6bf3216333d44cc761d1`
      )
      .then((r) => {
        setTrailer(
          r.data.results?.find(
            (element) =>
            element.name.includes("Official Trailer") ||
            element.name.includes("Trailer") ||
            element.type.includes("Trailer") ||
            element.type.includes("Teaser") ||
            element.name.includes("Teaser")
          ).key
        );
      })
      .catch((error) => {
        seterror(error.status.message);
      });
  };
      const backgroundimg = {
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
      };
      
      useEffect(() => {
        handleCastMovies();
        handleTVtrailers()
        
      }, []);
  return (
    <div className='main-div' id="main-div">
       <div className="details"  style={backgroundimg}>
        <div className="details-img">
          <img
            className="poster-path-img"
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt="img"
          />
        </div>
        <div className="details-content">
          <h4>
            {name} <br />({first_air_date})
            {adult === false ? "family entertiner" : "18+"}
          </h4>
          <>
            user score{" "}
            <div className="votescore">
              {Math.round((100 * vote_average) / 10)}%
            </div>
          </>
          <p className="content-p">countery origin : {origin_country}</p>
          <div>
            <a
              title="play trailer"
              target="_blank"
              href={`https://www.youtube.com/watch?v=${trailer}`}
            >
              <CiPlay1 className="rating-icons" />
            </a>

            <MdOutlinePlaylistAdd className="rating-icons" title="add to watch list"
            onClick={ ()=>{
              axios.post('http://localhost:3001/watchListTvShows',TrendingTvShowDetails)
             navigate('/watchlist')
           }} />
            <CiHeart className="rating-icons" title="add to favorites" 
             onClick={ ()=>{
              axios.post('http://localhost:3001/FavouriteTvShows',TrendingTvShowDetails)
             navigate('/favourites')
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
          {tvcast.length > 0 ? (
            <>
              {tvcast.map(
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
  )
}

export default TrendingTvshowDetails