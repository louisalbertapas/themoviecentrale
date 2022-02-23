import { useState, useEffect } from 'react';

import API, { Movie } from '../api/TmdbApi';
import { isStatePersisted } from '../helpers/SessionState';

const initialState = {
  page: 0,
  results: [] as Movie[],
  total_results: 0,
  total_pages: 0,
};

const useMoviesHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchText, setSearchText] = useState("");

  const fetchMovies = async (page: number, searchTerm = "", includeAdult = false) => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.searchMovies(page, searchTerm, includeAdult);
      console.log(movies);

      setState(prev => ({
        ...movies,
        results: page > 1
          ? [...prev.results, ...movies.results]
          : [...movies.results]
      }));

    } catch (error) {
      setError(true);
    }

    setLoading(false);
  }

  // Initial load
  useEffect(() => {
    if (!searchText) {
      const sessionState = isStatePersisted('moviesHomeState');
      if (sessionState) {
        setState(sessionState)
        return;
      }
    }

    fetchMovies(1, searchText);
  }, [searchText])

  // Save state to session storage
  useEffect(() => {
    if (!searchText) {
      sessionStorage.setItem('moviesHomeState', JSON.stringify(state));
    }
  }, [searchText, state]);

  return { state, loading, error, setSearchText };
}

export default useMoviesHomeFetch;
