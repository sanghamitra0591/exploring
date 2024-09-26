import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home';
import Movies from '../Pages/Movies';
import TvShows from '../Pages/TvShows';
import SingleMedia from '../Pages/SingleMedia';

const MainRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/movies' element={<Movies />}></Route>
            <Route path='/tvshows' element={<TvShows />}></Route>
            <Route path='/:id' element={<SingleMedia />}></Route>
        </Routes >
    )
}

export default MainRoute;
