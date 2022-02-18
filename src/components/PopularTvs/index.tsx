import React from 'react';

// Constants
import { IMAGE_BASE_URL } from '../../constants/TmdbApiConstants';
// Hooks
import usePopularTvFetch from '../../hooks/usePopularTvFetch';
// Components
import Thumbnail from '../Thumbnail';
import ErrorPage from '../ErrorPage';

const PopularTvs: React.FC = () => {
  const { state, loading, error } = usePopularTvFetch();
  console.log(state);

  if (error) {
    return (
      <ErrorPage />
    )
  }

  return (
    <div className='mt-5'>
      <div>
        <h1 className='text-4xl sm:text-5xl text-left font-bold'>Popular TV Shows</h1>
      </div>
      <div className='flex overflow-x-scroll scrollbar'>
        {state.results.map(tv => (
          <Thumbnail
            key={tv.id}
            source={`${IMAGE_BASE_URL}${tv.poster_path}`} />
        ))}
      </div>
    </div>
  );
}

export default PopularTvs;
