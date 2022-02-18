import React from 'react';

// Constants
import { IMAGE_BASE_URL } from '../../constants/TmdbApiConstants';

// Hooks
import usePopularTvFetch from '../../hooks/usePopularTvFetch';

// Components
import Thumbnail from '../Thumbnail';

const PopularTvs: React.FC = () => {
  const { state, loading, error } = usePopularTvFetch();
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
