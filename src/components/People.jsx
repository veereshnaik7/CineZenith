import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularPeople } from "../reduxToolkit/cineZenithSlice";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const People = () => {
  const [msg, setmsg] = useState("");
  const [searchpersondata, setsearchpersondata] = useState([]);
  const [searchperson, setsearchperson] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.cineZenithSlice.error);
  const loading = useSelector((state) => state.cineZenithSlice.loading);
  const popularPeople = useSelector(
    (state) => state.cineZenithSlice.popularPeople
  );

  useEffect(() => {
    dispatch(fetchPopularPeople());
  }, []);
console.log(popularPeople);
  const handlePopularPeopleDetails = ({
    adult,
    gender,
    id,
    known_for,
    known_for_department,
    name,
    original_name,
    popularity,
    profile_path,
  }) => {
    const popularPeopleDetails = {
      adult,
      gender,
      id,
      known_for,
      known_for_department,
      name,
      original_name,
      popularity,
      profile_path,
    };

    navigate(`/PopularPeopleDetails/:${name} ${id}`, {
      state: { popularPeopleDetails },
    });
  };
  return (
    <div className="main-div" id="main-div">
      <div className="searchBox">
        <input
          className="searchInput"
          type="text"
          name=""
          placeholder="Search peoples..."
          value={searchperson}
          onChange={(e) => setsearchperson(e.target.value)}
        />
        <button
          className="searchButton"
          href="#"
          onClick={() => {
            axios
              .get(
                `https://api.themoviedb.org/3/search/person?query=${searchperson}`,
                {
                  params: { language: "en-US" },
                  headers: {
                    accept: "application/json",
                    Authorization:
                      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWU4YjgxZTIwNmM2YmYzMjE2MzMzZDQ0Y2M3NjFkMSIsInN1YiI6IjY1ZTA0NzE3OWRlZTU4MDE2MzdiODQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vPF-246euc-mBIsoE37JF5OSxjzL2YyHKhn5x_AF2ag",
                  },
                }
              )
              .then((r) => setsearchpersondata(r.data.results))
              .catch((error) => error.status.message);
            setmsg("Search Details");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
          >
            <g clipPath="url(#clip0_2_17)">
              <g filter="url(#filter0_d_2_17)">
                <path
                  d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  shapeRendering="crispEdges"
                ></path>
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d_2_17"
                x="-0.418549"
                y="3.70435"
                width="29.7139"
                height="29.7139"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood
                  floodOpacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2_17"
                ></feBlend>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2_17"
                  result="shape"
                ></feBlend>
              </filter>
              <clipPath id="clip0_2_17">
                <rect
                  width="28.0702"
                  height="28.0702"
                  fill="white"
                  transform="translate(0.403503 0.526367)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      {searchpersondata != [] ? <h3>{msg}</h3> : <></>}
      <div className="peoples-styling">
        {searchpersondata.map(
          ({
            adult,
            gender,
            id,
            known_for,
            known_for_department,
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
                    src={`https://image.tmdb.org/t/p/original/${profile_path}`}
                    alt="popular people"
                  />
                  <div className="descriptions">
                    <p className="name">{name}</p>
                    <p>{gender === 2 ? "male" : "female"}</p>
                    <p> {known_for_department}</p>
                    <button
                      className="btn"
                      onClick={() =>
                        handlePopularPeopleDetails({
                          adult,
                          gender,
                          id,
                          known_for,
                          known_for_department,
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
      <h3>popular Peoples</h3>
      <div className="peoples-styling">
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
          popularPeople.map(
            ({
              adult,
              gender,
              id,
              known_for,
              known_for_department,
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
                      src={`https://image.tmdb.org/t/p/original/${profile_path}`}
                      alt="img"
                    />
                    <div className="descriptions">
                      <p className="name">{name}</p>
                      <p>{gender === 2 ? "male" : "female"}</p>
                      <p> {known_for_department}</p>
                      <button
                        className="btn"
                        onClick={() =>
                          handlePopularPeopleDetails({
                            adult,
                            gender,
                            id,
                            known_for,
                            known_for_department,
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

export default People;
