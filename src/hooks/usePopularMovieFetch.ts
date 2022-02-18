import { useState, useEffect } from 'react';

import API, {Movie} from '../api/TmdbApi';

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
    fetchPopularMovies();
  }, []);

  return { state, loading, error };
}

export default usePopularMovieFetch;
