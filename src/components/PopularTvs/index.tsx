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
    <div className='mt-2 p-1'>
      <div>
        <h1 className='text-2xl sm:text-3xl text-left font-bold text-slate-800 underline'>Popular TV Shows</h1>
      </div>
      <>
        {
          !loading
            ? <div className='flex overflow-x-scroll scrollbar'>
              {state.results.map(tv => (
                <Thumbnail
                  key={tv.id}
                  source={`${IMAGE_BASE_URL}${tv.poster_path}`}
                  title={tv.name}
                  thumbType={`tvshows`}
                  clickable={true}
                  id={tv.id} />
              ))}
            </div>
            : <div>
              Loading...
            </div>
        }
      </>
    </div>
  );
}

export default PopularTvs;
