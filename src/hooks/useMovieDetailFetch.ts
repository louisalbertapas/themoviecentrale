import { useEffect, useState } from 'react'
import API, { Movie } from '../api/TmdbApi';
import { isStatePersisted } from '../helpers/SessionState';

const useMovieDetailFetch = (movieId: number) => {
  const [state, setState] = useState<Movie>({} as Movie);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Fetch movie details
  const getMovieDetails = async () => {
    try {
      setError(false);
      setLoading(true);

      const movieDetails = await API.getMovieDetails(movieId);

      setState({
        ...movieDetails
      });

    } catch (error) {
      setError(true);
    }

    setLoading(false);
  }

  useEffect(() => {
    const sessionState = isStatePersisted(`movie${movieId}`);
    if (sessionState) {
      setState(sessionState);
      return;
    }
    getMovieDetails();
  }, [movieId])

  useEffect(() => {
    sessionStorage.setItem(`movie${movieId}`, JSON.stringify(state))
  }, [state])

  return { state, loading, error }

}

export default useMovieDetailFetch;
