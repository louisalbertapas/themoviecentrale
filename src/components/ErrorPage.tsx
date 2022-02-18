import React from 'react';

const ErrorPage : React.FC = () => {
  return (
    <div className='mt-5 sm:mt-10 bg-slate-600'>
      <div className='py-10 sm:py-20 px-2 sm:px-8 md:px-16 xl:px-40 font-mono'>
        <div className='px-2 sm:px-8 md:px-16 xl:px-40'>
          <h1 className='text-4xl sm:text-5xl font-bold text-white'>Something went wrong...</h1>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
