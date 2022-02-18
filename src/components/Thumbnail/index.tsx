import React from 'react';

type Props = {
  source: string;
};

const Thumbnail : React.FC<Props> = ({ source }) => {
  return (
    <img className='h-80 md:h-100 mx-8 my-5 shadow border-4 hover:scale-105 hover:border-slate-400 transition duration-300' src={source} />
  );
}

export default Thumbnail;
