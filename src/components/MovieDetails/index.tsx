import React from 'react'
import { useParams } from 'react-router-dom';
import { BACKDPROP_BASE_URL, IMAGE_BASE_URL } from '../../constants/TmdbApiConstants';
import useMovieDetailFetch from '../../hooks/useMovieDetailFetch';
import ErrorPage from '../ErrorPage';
import Thumbnail from '../Thumbnail';
import NoImage from '../../images/no-image-available.jpg';
import Breadcrumb from '../Breadcrumb';

const MovieDetails: React.FC = () => {
  // get the movieId from the query params
  const { movieId } = useParams();

  const { state: movie, error, loading } = useMovieDetailFetch(Number(movieId));

  if (error) return (<ErrorPage />);

  return (
    <div className='pt-32 px-5 sm:px-20 md:px-40 font-mono bg-slate-300 h-full'>
      <>
      <Breadcrumb />
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
              </div>
            )
        }
      </>
    </div>
  )
}

export default MovieDetails;
