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
};

export type Tvs = {
  page: number;
  results: Tv[];
  total_pages: number;
  total_results: number;
};

const API = {
  fetchPopularMovies: async (page = 1) : Promise<Movies> => {
    const endpoint: string = `${POPULAR_MOVIES_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchPopularTvs: async () : Promise<Tvs> => {
    const endpoint: string = `${POPULAR_TVS_URL}`;
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
      return await API.fetchPopularTvs();
    } else {
      const endpoint: string = `${SEARCH_TV_SHOWS_URL}&query=${searchText}&page=${page}&include_adult=${includeAdult}`;
      return await (await fetch(endpoint)).json();
    }
  }
}

export default API;
