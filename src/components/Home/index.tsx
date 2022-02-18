import React from 'react';

// Components
import PopularMovies from '../PopularMovies';
import PopularTvs from '../PopularTvs';

const Home: React.FC = () => {

  return (
    <div className='mt-10 py-10 sm:py-20 px-4 sm:px-16 md:px-32 lg:px-80 font-mono bg-slate-300'>
      <PopularMovies />
      <PopularTvs />
    </div>
  );
}

export default Home;
