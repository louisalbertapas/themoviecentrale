import React from 'react';
import { IMAGE_BASE_URL } from '../../constants/TmdbApiConstants';
import useMoviesHomeFetch from '../../hooks/useMoviesHomeFetch';
import ErrorPage from '../ErrorPage';
import SearchBar from '../SearchBar';
import Thumbnail from '../Thumbnail';

const Movies: React.FC = () => {
  const { state, loading, error, setSearchText } = useMoviesHomeFetch();

  if (error) return (<ErrorPage />);

  return (
    <div className='mt-10 py-10 sm:py-20 px-5 sm:px-20 md:px-40 font-mono bg-slate-300 h-full'>
      <div className='m-10 p-4 border-4 border-slate-400'>
        <h1 className='text-2xl sm:text-3xl text-left font-bold'>All Movies</h1>
        <div className='text-center mt-5'>
          <SearchBar setSearchText={setSearchText} />
        </div>
      </div>
      <div className='mt-5 flex flex-row flex-wrap justify-center'>
        {
          state.results.map(movie => (
            <Thumbnail
              key={movie.id}
              source={`${IMAGE_BASE_URL}${movie.poster_path}`}
              title={movie.title}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Movies;
