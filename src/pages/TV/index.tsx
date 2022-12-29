import React from 'react';
import ProgramSection from 'components/ProgramSection';
import env from 'react-dotenv';

export default function Tv() {
    return (
        <>
            <ProgramSection title='Destaques da Semana' urlApi={`https://api.themoviedb.org/3/trending/tv/week?api_key=${env.API_KEY}&language=pt-BR`} />
            {/* <ProgramSection title='Lançamentos' urlApi={`https://api.themoviedb.org/3/tv/latest?api_key=${env.API_KEY}&language=pt-BR`} /> */}
        </>
    )
}