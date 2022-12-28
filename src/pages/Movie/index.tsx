import React from 'react';
import ProgramSection from 'components/ProgramSection';
import env from 'react-dotenv';

export default function Movie() {
    return (
        <>
            <ProgramSection title='Destaques da Semana' urlApi={`https://api.themoviedb.org/3/trending/movie/week?api_key=${env.API_KEY}&language=pt-BR`} />
        </>
    )
}