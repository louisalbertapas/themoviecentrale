import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  source: string;
  title: string;
  thumbType: string;
  id?: number;
};

const Thumbnail : React.FC<Props> = ({ source, title, id, thumbType }) => {
  return (
    <div className="p-2 min-w-max">
      <Link to={`/${thumbType}/${id}`} >
        <img className='h-50 w-32 sm:h-100 sm:w-64 shadow border-4 hover:scale-105 hover:border-slate-400 transition duration-300' src={source} alt={`image-${source}`} />
        <p className='pt-2 sm:pt-5 w-32 sm:w-64'>
          {title}
        </p>
      </Link>
    </div>
  );
}

export default Thumbnail;
