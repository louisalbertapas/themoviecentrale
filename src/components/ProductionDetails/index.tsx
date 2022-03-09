import React from 'react'
import { IMAGE_BASE_URL } from '../../constants/TmdbApiConstants';
import NoImage from '../../images/no-image-available.jpg';

type Props = {
  containerClass?: string;
  imageClass?: string;
  name: string;
  logo_path: string;
}

const ProductionDetails: React.FC<Props> = ({containerClass, imageClass, name, logo_path}) => {
  return (
    <div className={containerClass}>
      {name}
      <img className={imageClass} src={logo_path ? `${IMAGE_BASE_URL}${logo_path}` : NoImage} alt={name}/>
    </div>
  )
}

export default ProductionDetails;
