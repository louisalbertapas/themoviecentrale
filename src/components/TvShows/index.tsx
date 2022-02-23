import React from 'react';
import { BACKDPROP_BASE_URL, IMAGE_BASE_URL } from '../../constants/TmdbApiConstants';
import useTvShowsHomeFetch from '../../hooks/useTvShowsHomeFetch';
import ErrorPage from '../ErrorPage';
import SearchBar from '../SearchBar';
import Thumbnail from '../Thumbnail';

const TvShows: React.FC = () => {
  const { state, loading, error, setSearchText } = useTvShowsHomeFetch();

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
            state.results.map(tv => (
              <Thumbnail
                key={tv.id}
                source={`${IMAGE_BASE_URL}${tv.poster_path}`}
                title={tv.name}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default TvShows;
