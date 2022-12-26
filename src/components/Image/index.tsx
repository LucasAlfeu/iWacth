import React from 'react';

interface image {
    urlImage : string,
    alt: string
}
export default function Image({props}: any ){
    return(
        <img src={`https://image.tmdb.org/t/p/original/${props.foto}`} alt={props.alt} />
    )
}