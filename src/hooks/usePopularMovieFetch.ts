import { useState, useEffect } from 'react';

import API, { Movie } from '../api/TmdbApi';
// Helpers
import { isStatePersisted } from '../helpers/SessionState';

const initialState = {
  results: [] as Movie[],
};

export const usePopularMovieFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchPopularMovies = async () => {
    try {
      setError(false);
      setLoading(true);

      // fetch
      const popularMovies = await API.fetchPopularMovies();
      console.log(popularMovies);

      setState({
        results: popularMovies.results,
      });

    } catch (error) {
      setError(true);
    }

    setLoading(false);
  }

  // Initial load
  useEffect(() => {
    const sessionState = isStatePersisted('popularMoviesState');

    if (sessionState) {
      setState(sessionState);
      return;
    }

    fetchPopularMovies();
  }, []);

  useEffect(() => {
    sessionStorage.setItem('popularMoviesState', JSON.stringify(state));
  }, [state]);

  return { state, loading, error };
}

export default usePopularMovieFetch;
