import React, { useEffect, useState } from 'react'
import API, { Movie } from '../api/TmdbApi';

const useMoviesHomeFetch = async (movieId: number) => {
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
    getMovieDetails();
  }, [movieId])

  return { state, loading, error }

}

export default useMoviesHomeFetch;
