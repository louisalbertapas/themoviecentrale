const API_URL: string = "https://api.themoviedb.org/3/";
const API_KEY: string | undefined = process.env.REACT_APP_TMDB_API_KEY;

const POPULAR_MOVIES_URL: string = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`
const POPULAR_TVS_URL: string = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US`
const SEARCH_MOVIES_URL: string = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US`;
const SEARCH_TV_SHOWS_URL: string = `${API_URL}search/tv?api_key=${API_KEY}&language=en-US`;

const IMAGE_BASE_URL: string = 'https://image.tmdb.org/t/p/w780';
const BACKDPROP_BASE_URL: string = 'https://image.tmdb.org/t/p/original'

export {
  API_URL,
  API_KEY,
  POPULAR_MOVIES_URL,
  POPULAR_TVS_URL,
  IMAGE_BASE_URL,
  BACKDPROP_BASE_URL,
  SEARCH_MOVIES_URL,
  SEARCH_TV_SHOWS_URL,
};
