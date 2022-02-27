import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';

import Header from './components/Header';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import Movies from './components/Movies';
import NotFound from './components/NotFound';
import TvShows from './components/TvShows';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies/:movieId' element={<MovieDetails />} />
          <Route path='/tvshows' element={<TvShows />} />
          <Route path='/about' element={<About />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
