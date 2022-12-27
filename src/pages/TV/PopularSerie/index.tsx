import CardProgram from 'components/CardProgram';
import React from 'react';
import env from 'react-dotenv';

export default function PopularSerie() {
    return(
        <CardProgram url={`https://api.themoviedb.org/3/tv/top_rated?api_key=${env.API_KEY}&language=pt-BR`} /> 
    )
}