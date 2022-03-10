import {
  API_URL,
  API_KEY,
  POPULAR_MOVIES_URL,
  POPULAR_TVS_URL,
  SEARCH_MOVIES_URL,
  SEARCH_TV_SHOWS_URL,
} from '../constants/TmdbApiConstants';

export type Movie = {
  id: number;
  original_title: string;
  poster_path: string;
  title: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  runtime: number;
  tagline: string;
  status: string;
  production_companies: ProductionCompany[];
};

export type Movies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Tv = {
  id: number;
  original_name: string;
  poster_path: string;
  name: string;
  backdrop_path: string;
  overview: string;
  first_air_date: string;
  last_air_date: string;
  tagline: string;
  status:string;
  production_companies: ProductionCompany[];
};

export type Tvs = {
  page: number;
  results: Tv[];
  total_pages: number;
  total_results: number;
};

export type ProductionCompany = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type Cast = {
  id: number;
  cast_id: number;
  credit_id: string;
  name: string;
  profile_path: string;
  character: string;
  order: number;
};

export type Crew = {
  id: number;
  credit_id: string;
  name: string;
  profile_path: string;
  department: string;
  job: string;
};

export type Credit = {
  id: number;
  cast: Cast[];
  crew: Crew[];
};

const API = {
  fetchPopularMovies: async (page = 1) : Promise<Movies> => {
    const endpoint: string = `${POPULAR_MOVIES_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchPopularTvs: async (page = 1) : Promise<Tvs> => {
    const endpoint: string = `${POPULAR_TVS_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  searchMovies: async (page: number, searchText: string, includeAdult: boolean) : Promise<Movies> => {
    if (searchText === '') {
      return await API.fetchPopularMovies(page);
    } else {
      const endpoint: string = `${SEARCH_MOVIES_URL}&query=${searchText}&page=${page}&include_adult=${includeAdult}`;
      return await (await fetch(endpoint)).json();
    }
  },
  searchTvShows: async (page: number, searchText: string, includeAdult: boolean) : Promise<Tvs> => {
    if (searchText === '') {
      return await API.fetchPopularTvs(page);
    } else {
      const endpoint: string = `${SEARCH_TV_SHOWS_URL}&query=${searchText}&page=${page}&include_adult=${includeAdult}`;
      return await (await fetch(endpoint)).json();
    }
  },
  getMovieDetails: async (movieId: number) : Promise<Movie> => {
    const endpoint: string = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
    return await (await fetch(endpoint)).json();
  },
  getTvShowDetails: async (tvId: number) : Promise<Tv> => {
    const endpoint: string = `${API_URL}tv/${tvId}?api_key=${API_KEY}&language=en-US`;
    return await (await fetch(endpoint)).json();
  }
}

export default API;
