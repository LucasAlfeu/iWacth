import React, { useEffect, useState } from "react";
import axios from "axios";
import env from "react-dotenv";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useFavoriteProgram, useMovieList } from "state/atom";
import styles from './TopMovie.module.scss'
import { MdBookmark, MdBookmarkBorder } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import useTopMovie from "state/hook/useTopMovie";



export default function TopMovie() {
    const movieList = useRecoilValue(useMovieList)
    const movieId = useRecoilValue(useFavoriteProgram)
    const { favoritar} = useTopMovie()

    return (
        <ul className={styles.lista}>
            {movieList.map(movie => 
                <li className={styles.lista__movie} key={movie.id}>
                    <img className={styles.lista__poster} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                    <div className={styles.lista__container}>
                        <span className={styles.lista__span}><AiFillStar className={styles.lista__star} />{movie.vote_average.toFixed(1)}</span>
                        <button className={styles.lista__favorite} onClick={() => favoritar(movie.id)}>
                            {movieId.find(element => element === movie.id) ? <MdBookmark className={styles.lista__like} /> : <MdBookmarkBorder className={styles.lista__like} />}
                        </button>
                    </div>
                </li>
                )}
        </ul>
    )    
}