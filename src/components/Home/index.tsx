import React from 'react';

// Components
import PopularMovies from '../PopularMovies';
import PopularTvs from '../PopularTvs';

const Home: React.FC = () => {

  return (
    <div className='mt-10 py-10 sm:py-20 px-5 sm:px-20 md:px-40 font-mono bg-slate-300'>
      <PopularMovies />
      <PopularTvs />
    </div>
  );
}

export default Home;
