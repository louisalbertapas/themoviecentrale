import React from 'react';

import TMDBLogo from '../../images/tmdb_logo.svg';

const About: React.FC = () => {
  return (
    <div className='mt-5 sm:mt-10'>
      <div className='py-10 sm:py-20 px-2 sm:px-8 md:px-16 xl:px-40 font-mono'>
        <div className='flex justify-center px-2 sm:px-8 md:px-16 xl:px-40 bottom'>
          <img className="h-16 max-w-full w-auto" src={TMDBLogo} />
          <p className="ml-5 p-2">This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
