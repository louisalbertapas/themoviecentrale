import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Movie } from '../../api/TmdbApi';
import { BACKDPROP_BASE_URL, IMAGE_BASE_URL } from '../../constants/TmdbApiConstants';
import useMoviesHomeFetch from '../../hooks/useMoviesHomeFetch';
import ErrorPage from '../ErrorPage';
import SearchBar from '../SearchBar';
import Thumbnail from '../Thumbnail';

const initialState = [] as Movie[];

const Movies: React.FC = () => {
  const { state, loading, error, setSearchText, setPageNumber } = useMoviesHomeFetch();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    setPageCount(state.total_pages);
  }, [state]);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + 20;
    setPageNumber(endOffset / 20 );
    console.log(`page: ${endOffset / 20}`);
  }, [itemOffset]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 20);
    console.log(`page number ${event.selected}`);
    console.log(`offset ${newOffset}`);
    setItemOffset(newOffset);
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
            state.results.slice(itemOffset, itemOffset + 20).map(movie => (
              <Thumbnail
                key={movie.id}
                source={`${IMAGE_BASE_URL}${movie.poster_path}`}
                title={movie.title}
              />
            ))
          }
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous" />
      </div>
    </div>
  );
}

export default Movies;
