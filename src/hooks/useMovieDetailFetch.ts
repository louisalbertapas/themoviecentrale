import { useEffect, useState } from 'react'
import API, { Cast, Crew, Movie } from '../api/TmdbApi';
import { isStatePersisted } from '../helpers/SessionState';

type MovieState = Movie & {
  casts: Cast[];
  directors: Crew[];
}

const useMovieDetailFetch = (movieId: number) => {
  const [state, setState] = useState<MovieState>({} as MovieState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Fetch movie details
  const getMovieDetails = async () => {
    try {
      setError(false);
      setLoading(true);

      const movieDetails = await API.getMovieDetails(movieId);
      const movieCredits = await API.getMovieCredits(movieId);

      const directors = movieCredits.crew.filter(member => member.job === 'Director');

      setState({
        ...movieDetails,
        casts: movieCredits.cast,
        directors: directors
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
