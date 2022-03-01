import React, { useState, useEffect } from 'react';
import API, { Tv } from '../api/TmdbApi';

const useTvShowDetailFetch = (tvId: number) => {
  const [ state, setState ] = useState<Tv>({} as Tv);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);

  // Fetch TV details
  const getTvDetails = async () => {
    try {
      setError(false);
      setLoading(true);

      // API call
      const tvShowDetail = await API.getTvShowDetails(tvId);

      setState({
        ...tvShowDetail
      });

    } catch (error) {
      setError(true);
    }

    setLoading(false);
  }

  useEffect(() => {
    getTvDetails();
  }, [tvId])

  return { state, loading, error };
}

export default useTvShowDetailFetch;
