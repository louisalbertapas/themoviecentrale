import React from 'react';
import useMoviesHomeFetch from '../../hooks/useMoviesHomeFetch';
import ErrorPage from '../ErrorPage';
import SearchBar from '../SearchBar';

const Movies: React.FC = () => {
  const { state, loading, error, setSearchText } = useMoviesHomeFetch();

  if (error) return (<ErrorPage />);

  return (
    <div className='mt-10 py-10 sm:py-20 px-5 sm:px-20 md:px-40 font-mono bg-slate-300 h-screen'>
      <h1 className='text-4xl sm:text-5xl text-left font-bold'>Movies</h1>
      <div className='text-left mt-5'>
        <SearchBar setSearchText={setSearchText} />
      </div>
    </div>
  );
}

export default Movies;
