import axios from "axios";
import FavoriteButton from "components/FavoriteButton";
import { IProgram } from "interface/IProgram";
import React, { useEffect, useState } from "react";
import env from "react-dotenv";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useSimilarMoviesList } from "state/atom";
import useNavigateDetails from "state/hook/useNavigateDetails";
import styles from './SimilarMovies.module.scss';

interface ISimilarMovie {
    idMovie: string | undefined
}

export default function SimilarMovies({ idMovie }: ISimilarMovie) {

    // const [page, setPage] = useState<number[]>([])
    // const [pageList, setPageList] = useState<number>(0)

    const setSimilarMovies = useSetRecoilState(useSimilarMoviesList)
    const similarMovies = useRecoilValue(useSimilarMoviesList)

    const { goDetails } = useNavigateDetails()

    const pageNumber:number = 1
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${idMovie}/recommendations?api_key=${env.API_KEY}&language=pt-BR&page=1`)
            .then(res => {
                setSimilarMovies(res.data.results)
                // setPageList(res.data.total_pages)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // for (let i = 1; i < pageList ; i++){
    //     setPage([...page, i])
    // }

    // console.log(pageList)
    return (
        <section className={styles.similarMovies}>
            <h3 className={styles.similarMovies__title}>Filmes Similares</h3>
            <ul className={styles.similarMovies__list}>{similarMovies.map(movie =>
                <li className={styles.similarMovies__movie}>
                    <img className={styles.similarMovies__poster} onClick={() => goDetails(movie)} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                    <div className={styles.similarMovies__box}>
                        <p className={styles.similarMovies__vote}><AiFillStar className={styles.similarMovies__star} />{movie.vote_average.toFixed(1)}</p>
                        <FavoriteButton program={movie} />
                    </div>
                </li>)}
            </ul>
            {/* <ul>{page.map(number => 
                <li>{number}</li>)}
            </ul> */}
        </section>
    )
}