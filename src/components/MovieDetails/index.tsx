import React from 'react'
import { useParams } from 'react-router-dom';
import useMovieDetailFetch from '../../hooks/useMovieDetailFetch';
import ErrorPage from '../ErrorPage';

const MovieDetails: React.FC = () => {
  // get the movieId from the query params
  const { movieId } = useParams();

  const { state: movie, error, loading } = useMovieDetailFetch(Number(movieId));

  if (error) return (<ErrorPage />);

  return (
    <div className='mt-32 text-black'>
      <>
        {
          loading
            ? <div>Loading...</div>
            : <div>
              {movie.title}
            </div>
        }
      </>
    </div>
  )
}

export default MovieDetails;
