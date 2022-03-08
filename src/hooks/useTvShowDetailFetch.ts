import { useState, useEffect } from 'react';
import API, { Tv } from '../api/TmdbApi';
import { isStatePersisted } from '../helpers/SessionState';

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
    const sessionState = isStatePersisted(`tvshow${tvId}`);
    if (sessionState) {
      setState(sessionState);
      return;
    }

    getTvDetails();
  }, [tvId])

  useEffect(() => {
    sessionStorage.setItem(`tvshow${tvId}`, JSON.stringify(state));
  }, [state])

  return { state, loading, error };
}

export default useTvShowDetailFetch;
