import React from 'react'
import { useParams } from 'react-router-dom';

const MovieDetails: React.FC = () => {
  // get the movieId from the query params
  const { movieId } = useParams();

  return (
    <div className='mt-32 text-black'>Movie Details of {movieId}</div>
  )
}

export default MovieDetails;
