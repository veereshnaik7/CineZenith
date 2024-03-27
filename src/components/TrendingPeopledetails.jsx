import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const TrendingPeopledetails = () => {
  const [data, setdata] = useState([]);
  const [error, seterror] = useState("");
  const loaction = useLocation();
  const TrendingPeopleDetails = loaction.state.TrendingPeopleDetails;
  const { known_for } = TrendingPeopleDetails;
  
  const handleCastMovies = () => {
    axios
      .get(`https://api.themoviedb.org/3/person/${TrendingPeopleDetails.id}`, {
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWU4YjgxZTIwNmM2YmYzMjE2MzMzZDQ0Y2M3NjFkMSIsInN1YiI6IjY1ZTA0NzE3OWRlZTU4MDE2MzdiODQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vPF-246euc-mBIsoE37JF5OSxjzL2YyHKhn5x_AF2ag",
        },
      })
      .then((r) => {
        setdata([r.data]);
      })
      .catch((error) => {
        seterror("no cast details found");
      });
  };
  useEffect(() => {
    handleCastMovies();
  }, []);
  return (
    <div className="main-div" >
      <div className="people-details">
        {data.map(
          ({
            biography,
            birthday,
            deathday,
            id,
            name,
            profile_path,
            known_for_department,
          }) => (
            <>
              <div className="profile-card" key={id}>
                <div className="content">
                  <div className="back">
                    <div className="back-content">
                      <img
                        classNameName="poster-path-img"
                        src={`https://image.tmdb.org/t/p/w185/${profile_path}`}
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="front">
                    <div className="img">
                      <div className="circle"></div>
                      <div className="circle" id="right"></div>
                      <div className="circle" id="bottom"></div>
                    </div>

                    <div className="front-content">
                      <p className="badge">{name}</p>
                      <div className="description">
                        <div className="title">
                          <p>DOB : {birthday}</p>
                          <p>Death Day :{deathday}</p>
                          <p>{known_for_department}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             {
               <div className="movies-did">
               <h4>Movies Acted</h4>
               <ul>
                 {known_for.map(({ title,name }) => (
                   <li>{title ?? name}</li>
                 ))}
               </ul>
             </div>
             }
              <h4>Biography</h4>
              <div className="bio">{biography}</div>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default TrendingPeopledetails;
