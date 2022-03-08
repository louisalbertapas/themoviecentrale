import { useState, useEffect } from 'react';

import API, { Tv } from '../api/TmdbApi';
import { isStatePersisted } from '../helpers/SessionState';

const initialState = {
  page: 0,
  results: [] as Tv[],
  total_pages: 0,
  total_results: 0,
}

const useTvShowsHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const fetchTvShows = async (page: number, searchText = "", includeAdult = false) => {
    try {
      setError(false);
      setLoading(true);

      const tvshows = await API.searchTvShows(page, searchText, includeAdult);

      // setState(prev => ({
      //   ...tvshows,
      //   results: page > 1
      //   ? [...prev.results, ...tvshows.results]
      //   : [...tvshows.results]
      // }));
      setState(() => ({
        ...tvshows,
        results: [...tvshows.results]
      }));

    } catch (error) {
      setError(true);
    }

    setLoading(false);
  }

  // Initial load
  useEffect(() => {
    const sessionState = isStatePersisted(`tvShowsHomeState-${searchText}-${pageNumber}`);
    if (sessionState) {
      setState(sessionState);
      return;
    }

    fetchTvShows(pageNumber, searchText);
  }, [pageNumber, searchText])

  // Save state to session storage
  useEffect(() => {
    sessionStorage.setItem(`tvShowsHomeState-${searchText}-${pageNumber}`, JSON.stringify(state));
  }, [searchText, state])

  return { state, loading, error, setSearchText, setPageNumber };
}

export default useTvShowsHomeFetch;
