import React from 'react';

// Constants
import { IMAGE_BASE_URL } from '../../constants/TmdbApiConstants';

// Hooks
import usePopularMovieFetch from '../../hooks/usePopularMovieFetch';

// Components
import Thumbnail from '../Thumbnail';
import ErrorPage from '../ErrorPage';

const PopularMovies: React.FC = () => {
  const { state, loading, error } = usePopularMovieFetch();
  console.log(state);

  if (error) {
    return (
      <ErrorPage />
    )
  }

  return (
    <div className='my-2 p-1'>
      <div>
        <h1 className='text-2xl sm:text-3xl text-left font-bold text-slate-800 underline'>Popular Movies</h1>
      </div>
      <>
        {
          !loading
            ? <div className='flex flex-row overflow-x-scroll scrollbar'>
              {state.results.map(movie => (
                <Thumbnail
                  key={movie.id}
                  source={`${IMAGE_BASE_URL}${movie.poster_path}`}
                  title={movie.title} />
              ))
              }
            </div>
            : <div>Loading...</div>
        }
      </>
    </div>
  )
}

export default PopularMovies;