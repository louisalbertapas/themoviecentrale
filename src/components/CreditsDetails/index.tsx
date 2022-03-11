import React from 'react';
import { IMAGE_BASE_URL } from '../../constants/TmdbApiConstants';
import NoImage from '../../images/no-image-available.jpg';

type Props = {
  containerClass?: string;
  imageClass?: string;
  name: string;
  profile_path: string;
};

const CreditsDetails: React.FC<Props> = ({containerClass, imageClass, name, profile_path}) => {
  return (
    <div className={containerClass}>
      <img className={imageClass} src={profile_path ? `${IMAGE_BASE_URL}${profile_path}` : NoImage} alt={name}/>
      {name}
    </div>
  )
}

export default CreditsDetails;
