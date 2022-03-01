import React from 'react';
import { useParams } from 'react-router-dom';
import useTvShowDetailFetch from '../../hooks/useTvShowDetailFetch';
import ErrorPage from '../ErrorPage';

const TvShowDetails: React.FC = () => {
  const { tvShowId } = useParams();

  const { state: tvShow, loading, error } = useTvShowDetailFetch(Number(tvShowId));

  if (error) return (<ErrorPage />);

  return (
    <div className='mt-32 text-black'>
      <>
      {
        loading
          ? <div>Loading...</div>
          : <div>
            {tvShow.name}
          </div>
      }
      </>
    </div>
  )
}

export default TvShowDetails;
