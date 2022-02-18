import { useState, useEffect } from 'react';

import API, { Tv } from '../api/TmdbApi';

const initialState = {
  results: [] as Tv[],
};

const usePopularTvFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchPopularTvs = async () => {
    try {
      setError(false);
      setLoading(true);

      const tvs = await API.fetchPopularTvs();
      console.log(tvs);

      setState({
        results: tvs.results
      });

    } catch (error) {
      setError(true);
    }

    setLoading(false);
  }

  // Initial load
  useEffect(() => {
    fetchPopularTvs();
  }, [])

  return { state, loading, error };
}

export default usePopularTvFetch;
