import React, {useEffect} from "react";
import env from "react-dotenv";
import axios from "axios";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useBackdropState, useOverviewState, useTitleState, useVoteAverageState } from "../../state/atom";
import styles from './Banner.module.scss'

interface IMovies {
    title: string,
    overview?: string,
    backdrop: string,
    poster?: string,
    voteAverage?: number
    data?: string
}

export default function Banner (){
    const setTitleTreendingMovie = useSetRecoilState(useTitleState)
    const setOverviewTreendingMovie = useSetRecoilState(useOverviewState)
    const setBackdropTreendingMovie = useSetRecoilState(useBackdropState)
    const setVoteAverageTreendingMovie = useVoteAverageState

    const TitleTreendingMovie = useRecoilState(useTitleState)
    const overviewTreendingMovie = useRecoilState(useOverviewState)
    const backdropTreendingMovie = useRecoilState(useBackdropState)

    const backdrop = `https://image.tmdb.org/t/p/original/${backdropTreendingMovie[0]}`
    const numero = (Math.random() * 10).toFixed(0)
    console.log(numero)

    const treendingMovie = () => {
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${env.API_KEY}&language=pt-BR`)
        .then((res) => {
            const treendingMovie = res.data.results[numero]
            setTitleTreendingMovie(treendingMovie.title)
            setOverviewTreendingMovie(treendingMovie.overview)
            setBackdropTreendingMovie(treendingMovie.backdrop_path)
            console.log(treendingMovie)
        })
        .catch((erro) => {
            console.log(erro)
        })
    }

    useEffect(()=> {
        treendingMovie()
    }, [])
    console.log(backdropTreendingMovie[0])

    return(
        <div className={styles.banner}>
            <h2 className={styles.banner__title}>{TitleTreendingMovie[0]}</h2>
            <p className={styles.banner__overview}>{overviewTreendingMovie[0]}</p>
            <img className={styles.banner__img} src={backdrop} alt="Poster do filme" />
        </div>
    )
}