import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLatestMovies = createAsyncThunk("LatestMovies", async () => {
  const latestMovies = await axios.get(
    "https://api.themoviedb.org/3/movie/now_playing",
    {
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWU4YjgxZTIwNmM2YmYzMjE2MzMzZDQ0Y2M3NjFkMSIsInN1YiI6IjY1ZTA0NzE3OWRlZTU4MDE2MzdiODQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vPF-246euc-mBIsoE37JF5OSxjzL2YyHKhn5x_AF2ag",
      },
    }
  );

  return latestMovies.data.results;
});

export const fecthPopularMovies = createAsyncThunk(
  "fecthPopularMovies",
  async () => {
    const populaMovies = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated",
      {
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWU4YjgxZTIwNmM2YmYzMjE2MzMzZDQ0Y2M3NjFkMSIsInN1YiI6IjY1ZTA0NzE3OWRlZTU4MDE2MzdiODQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vPF-246euc-mBIsoE37JF5OSxjzL2YyHKhn5x_AF2ag",
        },
      }
    );
    return populaMovies.data.results;
  }
);
export const fecthTopRatedMovies = createAsyncThunk(
  "fecthTopRatedMovies",
  async () => {
    const topRatedMovies = await axios.get(
      "https://api.themoviedb.org/3/movie/popular",
      {
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWU4YjgxZTIwNmM2YmYzMjE2MzMzZDQ0Y2M3NjFkMSIsInN1YiI6IjY1ZTA0NzE3OWRlZTU4MDE2MzdiODQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vPF-246euc-mBIsoE37JF5OSxjzL2YyHKhn5x_AF2ag",
        },
      }
    );
    return topRatedMovies.data.results;
  }
);

export const fetchUpComingMovies = createAsyncThunk(
  "fetchUpComingMovies",
  async () => {
    const upComingMovies = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming",
      {
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWU4YjgxZTIwNmM2YmYzMjE2MzMzZDQ0Y2M3NjFkMSIsInN1YiI6IjY1ZTA0NzE3OWRlZTU4MDE2MzdiODQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vPF-246euc-mBIsoE37JF5OSxjzL2YyHKhn5x_AF2ag",
        },
      }
    );
    return upComingMovies.data.results;
  }
);

// tv series
export const fetchTvAiringShows = createAsyncThunk(
  "fetchTvArrivingToday",
  async () => {
    const airingToday = await axios.get(
      "https://api.themoviedb.org/3/tv/airing_today",
      {
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWU4YjgxZTIwNmM2YmYzMjE2MzMzZDQ0Y2M3NjFkMSIsInN1YiI6IjY1ZTA0NzE3OWRlZTU4MDE2MzdiODQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vPF-246euc-mBIsoE37JF5OSxjzL2YyHKhn5x_AF2ag",
        },
      }
    );
    return airingToday.data.results;
  }
);

export const fetchPopularTvShows = createAsyncThunk(
  "fetchPopularTvShows",
  async () => {
    const populartv = await axios.get(
      "https://api.themoviedb.org/3/tv/popular",
      {
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWU4YjgxZTIwNmM2YmYzMjE2MzMzZDQ0Y2M3NjFkMSIsInN1YiI6IjY1ZTA0NzE3OWRlZTU4MDE2MzdiODQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vPF-246euc-mBIsoE37JF5OSxjzL2YyHKhn5x_AF2ag",
        },
      }
    );
    return populartv.data.results;
  }
);

export const fetchPastWeekTopShows = createAsyncThunk(
  "fetchPastWeekTopShows",
  async () => {
    const pastWeekTopShows = await axios.get(
      "https://api.themoviedb.org/3/tv/on_the_air",
      {
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWU4YjgxZTIwNmM2YmYzMjE2MzMzZDQ0Y2M3NjFkMSIsInN1YiI6IjY1ZTA0NzE3OWRlZTU4MDE2MzdiODQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vPF-246euc-mBIsoE37JF5OSxjzL2YyHKhn5x_AF2ag",
        },
      }
    );
    return pastWeekTopShows.data.results;
  }
);

export const fetchTopRatedTvShows = createAsyncThunk(
  "fetchTopRatedTvShows",
  async () => {
    const TopRatedTvShows = await axios.get(
      "https://api.themoviedb.org/3/tv/top_rated",
      {
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWU4YjgxZTIwNmM2YmYzMjE2MzMzZDQ0Y2M3NjFkMSIsInN1YiI6IjY1ZTA0NzE3OWRlZTU4MDE2MzdiODQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vPF-246euc-mBIsoE37JF5OSxjzL2YyHKhn5x_AF2ag",
        },
      }
    );
    return TopRatedTvShows.data.results;
  }
);

/// trending page
export const fetchTrendingAll = createAsyncThunk(
  "fetchTrendingAll",
  async () => {
    const TrendingAll = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day",
      {
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWU4YjgxZTIwNmM2YmYzMjE2MzMzZDQ0Y2M3NjFkMSIsInN1YiI6IjY1ZTA0NzE3OWRlZTU4MDE2MzdiODQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vPF-246euc-mBIsoE37JF5OSxjzL2YyHKhn5x_AF2ag",
        },
      }
    );
    return TrendingAll.data.results;
  }
);

export const fetchTrendingMovies = createAsyncThunk(
  "fetchTrendingMovies",
  async () => {
    const TrendingMovies = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day",
      {
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWU4YjgxZTIwNmM2YmYzMjE2MzMzZDQ0Y2M3NjFkMSIsInN1YiI6IjY1ZTA0NzE3OWRlZTU4MDE2MzdiODQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vPF-246euc-mBIsoE37JF5OSxjzL2YyHKhn5x_AF2ag",
        },
      }
    );
    return TrendingMovies.data.results;
  }
);

export const fetchTrendingTvShows = createAsyncThunk(
  "fetchTrendingTvShows",
  async () => {
    const TrendingTvShows = await axios.get(
      "https://api.themoviedb.org/3/trending/tv/day",
      {
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWU4YjgxZTIwNmM2YmYzMjE2MzMzZDQ0Y2M3NjFkMSIsInN1YiI6IjY1ZTA0NzE3OWRlZTU4MDE2MzdiODQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vPF-246euc-mBIsoE37JF5OSxjzL2YyHKhn5x_AF2ag",
        },
      }
    );
    return TrendingTvShows.data.results;
  }
);
export const fetchTrendingPeoples = createAsyncThunk(
  "fetchTrendingPeoples",
  async () => {
    const TrendingPeoples = await axios.get(
      "https://api.themoviedb.org/3/trending/person/day",
      {
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWU4YjgxZTIwNmM2YmYzMjE2MzMzZDQ0Y2M3NjFkMSIsInN1YiI6IjY1ZTA0NzE3OWRlZTU4MDE2MzdiODQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vPF-246euc-mBIsoE37JF5OSxjzL2YyHKhn5x_AF2ag",
        },
      }
    );
    return TrendingPeoples.data.results;
  }
);

/// people page
export const fetchPopularPeople = createAsyncThunk(
  "fetchPopularPeople",
  async () => {
    const popularPeople = await axios.get(
      "https://api.themoviedb.org/3/trending/person/day",
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWU4YjgxZTIwNmM2YmYzMjE2MzMzZDQ0Y2M3NjFkMSIsInN1YiI6IjY1ZTA0NzE3OWRlZTU4MDE2MzdiODQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vPF-246euc-mBIsoE37JF5OSxjzL2YyHKhn5x_AF2ag",
        },
      }
    );
    return popularPeople.data.results;
  }
);

/// watchlist 
export const fetchWatchListMovies=createAsyncThunk('fetchWatchListMovies',async()=>{
  const watchListMovies=await axios.get('https://cinezenith-json-server.onrender.com/watchListMovies')
  return watchListMovies.data;
})

export const fetchWatchlistTvShows=createAsyncThunk('fetchWatchlistTvShows',async()=>{
  const watchListTvshows=await axios.get('https://cinezenith-json-server.onrender.com/watchListTvShows')
  return watchListTvshows.data;
})

// favourites
export const fetchFavouritesMovies=createAsyncThunk('fetchFavouritesMovies',async()=>{
  const favouriteMovies=await axios.get('https://cinezenith-json-server.onrender.com/FavouriteMovies')
  return favouriteMovies.data;
})

export const fetchFavouritesTVshows=createAsyncThunk('fetchFavouritesTVshows',async()=>{
  const favouriteTVshows=await axios.get('https://cinezenith-json-server.onrender.com/FavouriteTvShows')
  return favouriteTVshows.data;
})


const cineZenithSlice = createSlice({
  name: "cineZenith",
  initialState: {
    isAuth: false,
    latestMovies: [],
    latestMoviesCounter: 1,
    popularMovies: [],
    topRatedMovies: [],
    upComingMovies: [],
    airingToday: [],
    populartv: [],
    pastWeekTopShows: [],
    TopRatedTvShows: [],
    TrendingAll: [],
    TrendingMovies: [],
    TrendingTvShows: [],
    TrendingPeoples: [],
    popularPeople: [],
    watchListMovies:[],
    watchListTvshows:[],
    favouriteMovies:[],
    favouriteTVshows:[],
    error: null,
    loading: false,
  },
  reducers: {
    success: (state) => {
      state.isAuth = true;
    },
    failure: (state) => {
      state.isAuth = false;
    },
  },
  extraReducers: (builders) => {
    builders
      .addCase(fetchLatestMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.latestMovies = [];
      })
      .addCase(fetchLatestMovies.fulfilled, (state, action) => {
        state.latestMovies = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchLatestMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.latestMovies = [];
      })
      .addCase(fecthPopularMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.popularMovies = [];
      })
      .addCase(fecthPopularMovies.fulfilled, (state, action) => {
        state.popularMovies = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fecthPopularMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.popularMovies = [];
      })
      .addCase(fecthTopRatedMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.topRatedMovies = [];
      })
      .addCase(fecthTopRatedMovies.fulfilled, (state, action) => {
        state.topRatedMovies = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fecthTopRatedMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.topRatedMovies = [];
      })
      .addCase(fetchUpComingMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.upComingMovies = [];
      })
      .addCase(fetchUpComingMovies.fulfilled, (state, action) => {
        state.upComingMovies = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUpComingMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.upComingMovies = [];
      })
      .addCase(fetchTvAiringShows.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.airingToday = [];
      })
      .addCase(fetchTvAiringShows.fulfilled, (state, action) => {
        state.airingToday = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchTvAiringShows.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.airingToday = [];
      })
      .addCase(fetchPopularTvShows.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.populartv = [];
      })
      .addCase(fetchPopularTvShows.fulfilled, (state, action) => {
        state.populartv = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchPopularTvShows.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.populartv = [];
      })
      .addCase(fetchPastWeekTopShows.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.pastWeekTopShows = [];
      })
      .addCase(fetchPastWeekTopShows.fulfilled, (state, action) => {
        state.pastWeekTopShows = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchPastWeekTopShows.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.pastWeekTopShows = [];
      })
      .addCase(fetchTopRatedTvShows.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.TopRatedTvShows = [];
      })
      .addCase(fetchTopRatedTvShows.fulfilled, (state, action) => {
        state.TopRatedTvShows = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchTopRatedTvShows.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.TopRatedTvShows = [];
      })
      .addCase(fetchTrendingAll.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.TrendingAll = [];
      })
      .addCase(fetchTrendingAll.fulfilled, (state, action) => {
        state.TrendingAll = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchTrendingAll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.TrendingAll = [];
      })
      .addCase(fetchTrendingMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.TrendingMovies = [];
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.TrendingMovies = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchTrendingMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.TrendingMovies = [];
      })
      .addCase(fetchTrendingTvShows.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.TrendingTvShows = [];
      })
      .addCase(fetchTrendingTvShows.fulfilled, (state, action) => {
        state.TrendingTvShows = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchTrendingTvShows.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.TrendingTvShows = [];
      })
      .addCase(fetchTrendingPeoples.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.TrendingPeoples = [];
      })
      .addCase(fetchTrendingPeoples.fulfilled, (state, action) => {
        state.TrendingPeoples = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchTrendingPeoples.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.TrendingPeoples = [];
      })
      .addCase(fetchPopularPeople.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.popularPeople = [];
      })
      .addCase(fetchPopularPeople.fulfilled, (state, action) => {
        state.popularPeople = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchPopularPeople.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.popularPeople = [];
      })
      .addCase(fetchWatchListMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.watchListMovies = [];
      })
      .addCase(fetchWatchListMovies.fulfilled, (state, action) => {
        state.watchListMovies = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchWatchListMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.watchListMovies = [];
      })
      .addCase(fetchWatchlistTvShows.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.watchListTvshows = [];
      })
      .addCase(fetchWatchlistTvShows.fulfilled, (state, action) => {
        state.watchListTvshows = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchWatchlistTvShows.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.watchListTvshows = [];
      })
      .addCase(fetchFavouritesMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.favouriteMovies = [];
      })
      .addCase(fetchFavouritesMovies.fulfilled, (state, action) => {
        state.favouriteMovies = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchFavouritesMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.favouriteMovies = [];
      })
      .addCase(fetchFavouritesTVshows.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.favouriteTVshows = [];
      })
      .addCase(fetchFavouritesTVshows.fulfilled, (state, action) => {
        state.favouriteTVshows = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchFavouritesTVshows.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.favouriteTVshows = [];
      })
     
  },
});

export const { success, failure } = cineZenithSlice.actions;
export default cineZenithSlice.reducer;
