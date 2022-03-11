import { useState, useEffect } from 'react';
import API, { Cast, Crew, Tv } from '../api/TmdbApi';
import { isStatePersisted } from '../helpers/SessionState';

type TvState = Tv & {
  casts: Cast[],
  directors: Crew[],
};

const useTvShowDetailFetch = (tvId: number) => {
  const [ state, setState ] = useState<TvState>({} as TvState);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);

  // Fetch TV details
  const getTvDetails = async () => {
    try {
      setError(false);
      setLoading(true);

      // API call
      const tvShowDetail = await API.getTvShowDetails(tvId);
      const tvShowCredits = await API.getTvShowCredits(tvId);

      // Get directors
      const directors = tvShowCredits.crew.filter(member => member.job === 'Director');

      setState({
        ...tvShowDetail,
        casts: tvShowCredits.cast,
        directors: directors
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
