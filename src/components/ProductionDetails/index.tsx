import React from 'react'
import { IMAGE_BASE_URL } from '../../constants/TmdbApiConstants';

type Props = {
  containerClass?: string
  name: string;
  logo_path: string;
}

const ProductionDetails: React.FC<Props> = ({containerClass, name, logo_path}) => {
  return (
    <div className={containerClass}>
      <img src={`${IMAGE_BASE_URL}${logo_path}`} alt={name}/>
    </div>
  )
}

export default ProductionDetails;
