import React, { useEffect } from 'react'
import FavoriteButton from "components/FavoriteButton";
import { AiFillStar } from "react-icons/ai";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useSimilarMoviesList } from "state/atom";
import useNavigateDetails from "state/hook/useNavigateDetails";
import styles from './SimilarMovies.module.scss';
import axios from 'axios';
import env from 'react-dotenv';

interface ISimilarMovie {
    idMovie: string | undefined
}

export default function SimilarMovies({ idMovie }: ISimilarMovie) {

    const { goDetails } = useNavigateDetails()
    const similarMovies = useRecoilValue(useSimilarMoviesList)
    const setSimilarMovies = useSetRecoilState(useSimilarMoviesList)

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${idMovie}/recommendations?api_key=${env.API_KEY}&language=pt-BR&page=1`)
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
                <li className={styles.similarMovies__movie} key={movie.id}>
                    <img className={styles.similarMovies__poster} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                    <div className={styles.similarMovies__box}>
                        <p className={styles.similarMovies__vote}><AiFillStar className={styles.similarMovies__star} />{movie.vote_average.toFixed(1)}</p>
                        <FavoriteButton program={movie} />
                    </div>
                </li>)}
            </ul>

        </section>
    )
}