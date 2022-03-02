import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Movie } from '../../api/TmdbApi';
import { BACKDPROP_BASE_URL, IMAGE_BASE_URL } from '../../constants/TmdbApiConstants';
import useMoviesHomeFetch from '../../hooks/useMoviesHomeFetch';
import ErrorPage from '../ErrorPage';
import SearchBar from '../SearchBar';
import Thumbnail from '../Thumbnail';
import NoImage from '../../images/no-image-available.jpg';

const initialState = [] as Movie[];

const Movies: React.FC = () => {
  const { state, loading, error, setSearchText, setPageNumber } = useMoviesHomeFetch();
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    setPageCount(state.total_pages >= 100 ? 100 : state.total_pages);
  }, [state])

  useEffect(() => {
    // Fetch items from another resources.
    setPageNumber(page);
    console.log(`page: ${page}`);
  }, [page]);

  const handlePageClick = (event: any) => {
    const page = event.selected + 1;
    console.log(page); // 0-based
    setPage(page);
  };

  if (error) return (<ErrorPage />);

  return (
    <div>
      <>
        {
          !loading && state.results[0]
            ? <img className='mt-20 sm:h-[600px] sm:w-full' src={`${BACKDPROP_BASE_URL}${state.results[0].backdrop_path}`} />
            : <div className='mt-20 sm:h-[600px] sm:w-full'>Loading...</div>
        }
      </>
      <div className='px-5 sm:px-20 md:px-40 font-mono bg-slate-300 h-full'>
        <div className='mx-10 px-4'>
          <div className='text-center -mt-16'>
            <SearchBar setSearchText={setSearchText} />
          </div>
        </div>
        <div className='mt-5 flex flex-row flex-wrap justify-center'>
          {
            state.results.map(movie => (
              <Thumbnail
                key={movie.id}
                source={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : NoImage}
                title={movie.title}
                thumbType={`movies`}
                clickable={true}
                showDetails={true}
                id={movie.id}
              />
            ))
          }
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<"
          containerClassName="flex flex-wrap justify-center pb-10"
          pageClassName="h-auto px-5 text-indigo-600 transition-colors duration-150 focus:shadow-outline"
          nextClassName="h-auto px-5 text-indigo-600 transition-colors duration-150 focus:shadow-outline" 
          previousClassName='h-auto px-5 text-indigo-600 transition-colors duration-150 focus:shadow-outline'
          breakClassName='h-auto px-5 text-indigo-600 transition-colors duration-150 focus:shadow-outline'
          activeClassName='h-auto px-5 text-white border border-indigo-600 focus:shadow-outline' />
      </div>
    </div>
  );
}

export default Movies;
