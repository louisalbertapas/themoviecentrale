const API_URL: string = "https://tmdb-proxy-lapas.netlify.app/api/";

// dev endpoint
// const API_URL: string = "http://localhost:8888/api/";

const POPULAR_MOVIES_URL: string = `${API_URL}movie/popular`
const POPULAR_TVS_URL: string = `${API_URL}tv/popular`
const SEARCH_MOVIES_URL: string = `${API_URL}search/movie`;
const SEARCH_TV_SHOWS_URL: string = `${API_URL}search/tv`;

const IMAGE_BASE_URL: string = 'https://image.tmdb.org/t/p/w780';
const BACKDPROP_BASE_URL: string = 'https://image.tmdb.org/t/p/original'

export {
  API_URL,
  POPULAR_MOVIES_URL,
  POPULAR_TVS_URL,
  IMAGE_BASE_URL,
  BACKDPROP_BASE_URL,
  SEARCH_MOVIES_URL,
  SEARCH_TV_SHOWS_URL,
};
