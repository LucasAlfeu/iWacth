import axios from "axios";
import { IMovieList } from "interface/IMovieList";
import React, { useEffect, useState } from "react";
import env from "react-dotenv";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useMovieList } from "state/atom";
import styles from './TopMovie.module.scss'

export default function TopMovie() {
    const [movieList, setMovieList] = useState<IMovieList[]>([])
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${env.API_KEY}&language=pt-BR`)
            .then((res) => {
                setMovieList(res.data.results)
                // console.log((res.data.results).length)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <ul className={styles.lista}>
            {movieList.map(movie => 
                <li className={styles.lista__movie} key={movie.id}>
                    {/* <p className={styles.lista__title}>{movie.title}</p> */}
                    <img onClick={()=> console.log(movie.title)} className={styles.lista__poster} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                </li>
                )}
        </ul>
    )
}