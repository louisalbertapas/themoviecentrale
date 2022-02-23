import React, { useState, useEffect } from 'react';

import API, { Tv } from '../api/TmdbApi';
import { isStatePersisted } from '../helpers/SessionState';

const initialState = {
  page: 0,
  results: [] as Tv[],
  total_pages: 0,
  total_results: 0,
}

const useTvShowsHomeFetch = () => {
  const [ state, setState ] = useState(initialState);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);
  const [ searchText, setSearchText ] = useState("");

  const fetchTvShows = async (page: number, searchText = "", includeAdult = false) => {
    try {
      setError(false);
      setLoading(true);

      const tvshows = await API.searchTvShows(page, searchText, includeAdult);

      setState(prev => ({
        ...tvshows,
        results: page > 1
        ? [...prev.results, ...tvshows.results]
        : [...tvshows.results]
      }));

    } catch (error) {
      setError(true);
    }

    setLoading(false);
  }

  // Initial load
  useEffect(() => {
    if (!searchText) {
      const sessionState = isStatePersisted('tvShowsHomeState');
      if (sessionState) {
        setState(sessionState);
        return;
      }
    }

    fetchTvShows(1, searchText);
  }, [searchText])

  // Save state to session storage
  useEffect(() => {
    if (!searchText) {
      sessionStorage.setItem('tvShowsHomeState', JSON.stringify(state));
    }
  }, [searchText, state])

  return { state, loading, error, setSearchText };
}

export default useTvShowsHomeFetch;
