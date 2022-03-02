import React from 'react'
import { useParams } from 'react-router-dom';
import { IMAGE_BASE_URL } from '../../constants/TmdbApiConstants';
import useMovieDetailFetch from '../../hooks/useMovieDetailFetch';
import ErrorPage from '../ErrorPage';
import Thumbnail from '../Thumbnail';
import NoImage from '../../images/no-image-available.jpg';

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
            : (
              <div>
                <p className='text-xl sm:text-2xl'>{movie.title}</p>
                <div className='flex flex-wrap sm:flex-nowrap justify-center'>
                  <div className='flex w-auto m-2 p-2 justify-center'>
                    <Thumbnail
                      key={movie.id}
                      source={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : NoImage}
                      title={movie.title}
                      thumbType={`movies`}
                      clickable={false}
                      showDetails={false}
                      id={movie.id}
                    />
                  </div>
                  <div className='flex w-auto m-2 p-2 pt-5 justify-center'>
                    <div className='flex flex-col'>
                      <div>
                        Movie Details 1!
                      </div>
                      <div>
                        Movie Details 2!
                      </div>
                      <div>
                        Movie Details 3!
                      </div>
                    </div>
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
