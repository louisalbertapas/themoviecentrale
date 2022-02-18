import {
  API_URL,
  API_KEY,
  POPULAR_MOVIES_URL,
} from '../constants/TmdbApiConstants';

export type Movie = {
  id: number;
  original_title: string;
  poster_path: string;
  title: string;
};

export type Movies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

const API = {
  fetchPopularMovies: async () : Promise<Movies> => {
    const endpoint: string = `${POPULAR_MOVIES_URL}`;
    return await (await fetch(endpoint)).json();
  }
}

export default API;
