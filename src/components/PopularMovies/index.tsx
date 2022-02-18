import React from 'react';

// Constants
import { IMAGE_BASE_URL } from '../../constants/TmdbApiConstants';

// Hooks
import usePopularMovieFetch from '../../hooks/usePopularMovieFetch';

// Components
import Thumbnail from '../Thumbnail';

const PopularMovies : React.FC = () => {
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
    <div className=''>
    <div>
      <h1 className='text-4xl sm:text-5xl text-left font-bold'>Popular Movies</h1>
    </div>
    <div className='flex overflow-x-scroll scrollbar'>
      {state.results.map(movie => (
        <Thumbnail
          key={movie.id}
          source={`${IMAGE_BASE_URL}${movie.poster_path}`} />
      ))
      }
    </div>
  </div>
  )
}

export default PopularMovies;