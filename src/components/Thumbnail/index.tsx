import React from 'react';

type Props = {
  source: string;
  title: string;
};

const Thumbnail : React.FC<Props> = ({ source, title }) => {
  return (
    <div className="p-2 min-w-max">
      <img className='h-100 w-64 shadow border-4 hover:scale-105 hover:border-slate-400 transition duration-300' src={source} alt={`image-${source}`} />
      <p className='pt-5 w-64'>
        {title}
      </p>
    </div>
  );
}

export default Thumbnail;
