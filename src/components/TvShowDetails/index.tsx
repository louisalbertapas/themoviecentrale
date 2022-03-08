import React from 'react';
import { useParams } from 'react-router-dom';
import { BACKDPROP_BASE_URL } from '../../constants/TmdbApiConstants';
import useTvShowDetailFetch from '../../hooks/useTvShowDetailFetch';
import Breadcrumb from '../Breadcrumb';
import ErrorPage from '../ErrorPage';

const TvShowDetails: React.FC = () => {
  const { tvShowId } = useParams();

  const { state: tvShow, loading, error } = useTvShowDetailFetch(Number(tvShowId));

  if (error) return (<ErrorPage />);

  return (
    <div className='pt-32 px-5 sm:px-20 md:px-40 font-mono bg-slate-300 h-full'>
      <>
        <Breadcrumb
          containerClass='text-left'
          activeClass='text-indigo-600 font-bold'
          inactiveClass='text-indigo-500'
          breadcrumbClass='p-1'
          separatorClass='text-indigo-500'
          separator='>>'
          type='tvshows'
          label='TV Shows'
          id={tvShowId ? tvShowId : ""}
          title={tvShow.name} />
        {
          loading
            ? <div>Loading...</div>
            : (
              <div>
                <p className='text-xl sm:text-2xl'>{tvShow.name}</p>
                <img className='m-1 sm:h-[600px] sm:w-full shadow border-4 border-slate-400' src={`${BACKDPROP_BASE_URL}${tvShow.backdrop_path}`} />
                <div className='flex flex-wrap sm:flex-nowrap p-2 pt-5 sm:justify-center text-left'>
                  <div className='flex-col w-auto sm:w-1/2 px-2'>
                      <p><b>Original Title:</b> {tvShow.original_name}</p>
                      <p><b>Tagline:</b> {tvShow.tagline}</p>
                      <p><b>Overview:</b> {tvShow.overview}</p>
                  </div>
                  <div className='w-auto sm:w-1/2 px-2 text-left'>
                      <p><b>Status:</b> {tvShow.status}</p>
                      <p><b>First Air Date:</b> {tvShow.first_air_date}</p>
                      <p><b>Last Air Date:</b> {tvShow.last_air_date}</p>
                  </div>
                </div>
              </div>
            )
        }
      </>
    </div>
  )
}

export default TvShowDetails;
