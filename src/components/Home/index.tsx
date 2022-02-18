import React from 'react';

import { IMAGE_BASE_URL } from '../../constants/TmdbApiConstants';

import usePopularMovieFetch from '../../hooks/usePopularMovieFetch';
import Thumbnail from '../Thumbnail';

const Home: React.FC = () => {

  const { state, loading, error } = usePopularMovieFetch();
  console.log(state);

  if (error) {
    return (
      <div className='mt-5 sm:mt-10'>
        <div className='py-10 sm:py-20 px-2 sm:px-8 md:px-16 xl:px-40 font-mono'>
          <div className='px-2 sm:px-8 md:px-16 xl:px-40'>
            <h1 className='text-4xl sm:text-5xl text-left font-bold'>Something went wrong...</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='mt-10 py-10 sm:py-20 px-4 sm:px-16 md:px-32 xl:px-80 font-mono'>
      <div className=''>
        <div>
          <h1 className='text-4xl sm:text-5xl text-left font-bold'>Popular Movies</h1>
        </div>
        <div className='flex overflow-x-auto'>
          {state.results.map(movie => (
            <Thumbnail
              key={movie.id}
              source={`${IMAGE_BASE_URL}${movie.poster_path}`} />
          ))
          }
        </div>
      </div>
      <div className='mt-5'>
        <div>
          <h1 className='text-4xl sm:text-5xl text-left font-bold'>Popular TV Shows</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
