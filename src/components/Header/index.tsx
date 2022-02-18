import React from 'react';
import { Link } from "react-router-dom";

// Images
import MenuImg from '../../images/menu.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

const Header: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-900 top-0 fixed w-screen z-10">
      <div className="container md:flex md:items-center">
        <div className="flex justify-between items-center">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.themoviedb.org/"
            className="p-1 pl-2 sm:pl-16 md:pl-32 lg:pl-80"
            >
            <img
              className="h-16 max-w-full w-auto"
              src={TMDBLogo}
              alt='tmdb-logo' />
          </a>
          <h1
            className="px-1 md:px-2 text-lg md:text-2xl text-white font-mono">
              The Movie Centrale
          </h1>
          <button className="px-3 rounded opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle"
            onClick={() => {
              let collapse = document.querySelector('#navbar-collapse');
              collapse && collapse.classList.toggle('hidden');
              collapse && collapse.classList.toggle('flex');
            }}>
            <img className='h-8 w-8' src={MenuImg} alt='menu'/>
          </button>
        </div>
        <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
          <Link to='/'
            className="p-1 px-2 lg:px-4 md:mx-2 text-white rounded hover:underline hover:text-gray-300 transition-colors duration-300" >
            Home
          </Link>
          <Link to='/movies'
            className="p-1 px-2 lg:px-4 md:mx-2 text-white rounded hover:underline hover:text-gray-300 transition-colors duration-300" >
            Movies
          </Link>
          <Link to="/tvshows"
            className="p-1 px-2 lg:px-4 md:mx-2 text-white rounded hover:underline hover:text-gray-300 transition-colors duration-300" >
            TV Shows
          </Link>
          <Link to="/about"
            className="p-1 px-2 lg:px-4 md:mx-2 text-white rounded hover:underline hover:text-gray-300 transition-colors duration-300" >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
