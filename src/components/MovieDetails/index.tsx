import React from 'react'
import { useParams } from 'react-router-dom';
import { BACKDPROP_BASE_URL } from '../../constants/TmdbApiConstants';
import useMovieDetailFetch from '../../hooks/useMovieDetailFetch';
import ErrorPage from '../ErrorPage';
import Breadcrumb from '../Breadcrumb';
import ProductionDetails from '../ProductionDetails';
import CreditsDetails from '../CreditsDetails';

const MovieDetails: React.FC = () => {
  // get the movieId from the query params
  const { movieId } = useParams();

  const { state: movie, error, loading } = useMovieDetailFetch(Number(movieId));

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
        type='movies'
        label='Movies'
        id={movieId ? movieId : ""}
        title={movie.title}
        />
        {
          loading
            ? <div>Loading...</div>
            : (
              <div>
                <p className='text-xl sm:text-2xl'>{movie.title}</p>
                <img className='m-1 sm:h-[600px] sm:w-full shadow border-4 border-slate-400' src={`${BACKDPROP_BASE_URL}${movie.backdrop_path}`} />
                <div className='flex flex-wrap sm:flex-nowrap p-2 pt-5 sm:justify-center text-left'>
                  <div className='flex-col w-auto sm:w-1/2 px-2'>
                      <p><b>Original Title:</b> {movie.original_title}</p>
                      <p><b>Tagline:</b> {movie.tagline}</p>
                      <p><b>Overview:</b> {movie.overview}</p>
                  </div>
                  <div className='w-auto sm:w-1/2 px-2 text-left'>
                      <p><b>Status:</b> {movie.status}</p>
                      <p><b>Release Date:</b> {movie.release_date}</p>
                      <p><b>Runtime:</b> {movie.runtime} minutes</p>
                  </div>
                </div>
                <div className='text-xl sm:text-2xl text-left p-2 mt-8 text-indigo-600 font-bold'>
                  <p>CASTS</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
                  {
                    movie.casts && movie.casts.filter(movie => movie.profile_path !== null).map(cast => (
                      <CreditsDetails
                        key={cast.id}
                        containerClass='p-2 sm:p-4'
                        imageClass='border-2 border-indigo-400'
                        name={cast.name}
                        profile_path={cast.profile_path} />
                    ))
                  }
                </div>
                <div className='text-xl sm:text-2xl text-left p-2 mt-8 text-indigo-600 font-bold'>
                  <p>DIRECTORS</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
                  {
                    movie.directors && movie.directors.map(director => (
                      <CreditsDetails
                        key={director.id}
                        containerClass='p-2 sm:p-4'
                        imageClass='border-2 border-indigo-400'
                        name={director.name}
                        profile_path={director.profile_path} />
                    ))
                  }
                </div>
                <div className='text-xl sm:text-2xl text-left p-2 mt-8 text-indigo-600 font-bold'>
                  <p>PRODUCERS</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {
                    movie.production_companies && movie.production_companies.map(production_company => (
                      <ProductionDetails
                        key={production_company.name}
                        containerClass='p-4 sm:p-8'
                        imageClass='pb-4'
                        name={production_company.name}
                        logo_path={production_company.logo_path}/>
                    ))
                  }
                </div>
                
              </div>
            )
        }
      </>
    </div>
  )
}

export default MovieDetails;
