import React, { useEffect, useState } from 'react';
import { BACKDPROP_BASE_URL, IMAGE_BASE_URL } from '../../constants/TmdbApiConstants';
import useMoviesHomeFetch from '../../hooks/useMoviesHomeFetch';
import ErrorPage from '../ErrorPage';
import SearchBar from '../SearchBar';
import Thumbnail from '../Thumbnail';

const Movies: React.FC = () => {
  const { state, loading, error, setSearchText } = useMoviesHomeFetch();

  if (error) return (<ErrorPage />);

  return (
    <div>
      <>
        {
          !loading && state.results[0]
            ? <img className='mt-20 sm:h-[600px] sm:w-full' src={`${BACKDPROP_BASE_URL}${state.results[0].backdrop_path}`} />
            : <div className='mt-20 sm:h-[600px] sm:w-full'>Loading...</div>
        }
      </>
      <div className='px-5 sm:px-20 md:px-40 font-mono bg-slate-300 h-full'>
        <div className='mx-10 px-4'>
          <div className='text-center -mt-16'>
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
    </div>
  );
}

export default Movies;
