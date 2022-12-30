import React from 'react';
import ProgramSection from 'components/ProgramSection';
import env from 'react-dotenv';
import Header from 'components/Header';

export default function Movie() {
    return (
        <>
            <Header />
            <ProgramSection title='Destaques da Semana' urlApi={`https://api.themoviedb.org/3/trending/movie/week?api_key=${env.API_KEY}&language=pt-BR`} />
            <ProgramSection title='Lançamentos' urlApi={`https://api.themoviedb.org/3/movie/upcoming?api_key=${env.API_KEY}&language=pt-BR`} />
            <ProgramSection title='Mais Votados' urlApi={`https://api.themoviedb.org/3/movie/top_rated?api_key=${env.API_KEY}&language=pt-BR`} />
        </>
    )
}