import React from 'react';

// Constants
import { IMAGE_BASE_URL } from '../../constants/TmdbApiConstants';

// Hooks
import usePopularMovieFetch from '../../hooks/usePopularMovieFetch';

// Components
import Thumbnail from '../Thumbnail';
import ErrorPage from '../ErrorPage';

const PopularMovies : React.FC = () => {
  const { state, loading, error } = usePopularMovieFetch();
  console.log(state);

  if (error) {
    return (
      <ErrorPage />
    )
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