import { useState, useEffect } from 'react';

import API, { Movie } from '../api/TmdbApi';
import { isStatePersisted } from '../helpers/SessionState';

const initialState = {
  page: 0,
  results: [] as Movie[],
  total_results: 0,
  total_pages: 0,
};

const useMoviesHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const fetchMovies = async (page: number, searchTerm = "", includeAdult = false) => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.searchMovies(page, searchTerm, includeAdult);
      console.log(movies);

      setState(() => ({
        ...movies,
        results: [...movies.results]
      }));

    } catch (error) {
      setError(true);
    }

    setLoading(false);
  }

  // Initial load
  useEffect(() => {
    const sessionState = isStatePersisted(`moviesHomeState-${searchText}-${pageNumber}`);
    if (sessionState) {
      setState(sessionState)
      return;
    }

    fetchMovies(pageNumber, searchText);
  }, [pageNumber, searchText])

  // Save state to session storage
  useEffect(() => {
      sessionStorage.setItem(`moviesHomeState-${searchText}-${state.page}`, JSON.stringify(state));
  }, [searchText, state]);

  return { state, loading, error, setSearchText, setPageNumber };
}

export default useMoviesHomeFetch;
