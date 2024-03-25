import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Movies from "./components/Movies";
import TV from "./components/TV";
import People from "./components/People";
import Details from "./components/Details";
import Favourites from "./components/Favourites";
import Footer from "./components/Footer";
import PopularPeopleDetails from "./components/PopularPeopleDetails";
import Trending from "./components/Trending";
import TrendingAllAndMovies from "./components/TrendingAllAndMovies";
import TrendingTvshowDetails from "./components/TrendingTvshowDetails";
import TrendingPeopledetails from "./components/TrendingPeopledetails";
import WatchList from "./components/WatchList";
import Tvdetails from "./components/Tvdetails";
import Nopage from "./components/Nopage";
import Login from "./components/Login";
import { useSelector } from "react-redux";

const App = () => {
  const isAuth = useSelector((state) => state.cineZenithSlice.isAuth);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {isAuth && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv" element={<TV />} />
            <Route
              path="/TrendingAllAndMovies/:id"
              element={<TrendingAllAndMovies />}
            />
            <Route path="/trending" element={<Trending />} />
            <Route
              path="/TrendingAllAndMovies/:id"
              element={<TrendingAllAndMovies />}
            />
            <Route
              path="/TrendingTvshowDetails/:id"
              element={<TrendingTvshowDetails />}
            />
            <Route
              path="/TrendingPeopledetails/:id"
              element={<TrendingPeopledetails />}
            />
            <Route path="/people" element={<People />} />
            <Route path="/details" element={<Details />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/watchList" element={<WatchList />} />

            <Route
              path="/PopularPeopleDetails/:id"
              element={<PopularPeopleDetails />}
            />
            <Route path="/tvdetails/:id" element={<Tvdetails />} />
            <Route path="*" element={<Nopage />} />
          </>
        )}
        {!isAuth && (
          <Route path={isAuth === false ? "/" : "/login"} element={<Login />} />
        )}
      </Routes>
      {isAuth && <Footer />}
    </BrowserRouter>
  );
};

export default App;
