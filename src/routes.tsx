import Header from 'components/Header'
import Favorite from 'pages/Favorite'
import Movie from 'pages/Movie'
import Tv from 'pages/TV'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function AppRoute(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Movie />} />
                <Route path='/tv' element={<Tv />} />
                <Route path='/favoritos' element={<Favorite />} />
            </Routes>
        </BrowserRouter>
    )
}