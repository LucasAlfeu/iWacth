import axios from "axios";
import FavoriteButton from "components/FavoriteButton";
import { IProgram } from "interface/IProgram";
import React, { useEffect } from "react";
import env from "react-dotenv";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useSimilarMoviesList } from "state/atom";
import useNavigateDetails from "state/hook/useNavigateDetails";
import styles from './SimilarMovies.module.scss';

interface ISimilarMovie {
    idMovie: string | undefined
}

export default function SimilarMovies({ idMovie }: ISimilarMovie) {

    const setSimilarMovies = useSetRecoilState(useSimilarMoviesList)
    const similarMovies = useRecoilValue(useSimilarMoviesList)

    const { goDetails } = useNavigateDetails()

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${idMovie}/recommendations?api_key=${env.API_KEY}&language=pt-BR`)
            .then(res => {
                setSimilarMovies(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <section className={styles.similarMovies}>
            <h3 className={styles.similarMovies__title}>Filmes Similares</h3>
            <ul className={styles.similarMovies__list}>{similarMovies.map(movie =>
                <li className={styles.similarMovies__movie}>
                    <img className={styles.similarMovies__poster} onClick={() => goDetails(movie)} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                    <div className={styles.similarMovies__box}>
                        <p className={styles.similarMovies__movieTitle}>{movie.title}</p>
                        <FavoriteButton program={movie} />
                    </div>
                </li>)}</ul>
        </section>
    )
}