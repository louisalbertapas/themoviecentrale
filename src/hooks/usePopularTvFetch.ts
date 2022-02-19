import { useState, useEffect } from 'react';

import API, { Tv } from '../api/TmdbApi';
// Helpers
import { isStatePersisted } from '../helpers/SessionState';

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
    const sessionState = isStatePersisted("popularTvShowsState");
    if (sessionState) {
      setState(sessionState);
      return;
    }

    fetchPopularTvs();
  }, [])

  useEffect(() => {
    sessionStorage.setItem("popularTvShowsState", JSON.stringify(state));
  }, [state])


  return { state, loading, error };
}

export default usePopularTvFetch;
