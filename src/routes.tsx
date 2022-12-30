import Header from 'components/Header'
import Details from 'pages/Details'
import Favorite from 'pages/Favorite'
import Movie from 'pages/Movie'
import Tv from 'pages/TV'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function AppRoute(){
    return(
        <BrowserRouter>                
            <Routes>
                <Route path='/' element={<Movie />} />
                <Route path='/tv' element={<Tv />} />
                <Route path='/favoritos' element={<Favorite />} />
                <Route path='/details/:id' element={<Details />} />
            </Routes>
        </BrowserRouter>
    )
}