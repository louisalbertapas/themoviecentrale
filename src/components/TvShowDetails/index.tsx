import React from 'react';
import { useParams } from 'react-router-dom';

const TvShowDetails: React.FC = () => {
  const { tvShowId } = useParams();

  return (
    <div className='mt-32 text-black'>TV show details of {tvShowId}</div>
  )
}

export default TvShowDetails;
