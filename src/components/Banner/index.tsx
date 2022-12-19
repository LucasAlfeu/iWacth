import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useBackdropState, useOverviewState, useTitleState, useVoteAverageState } from "../../state/atom";
import styles from './Banner.module.scss'
import useTreendingMovie from "state/hook/useTreendingMovie";

interface IMovies {
    title: string,
    overview?: string,
    backdrop: string,
    poster?: string,
    voteAverage?: number
    data?: string
}

export default function Banner() {

    const { treendingMovie } = useTreendingMovie()

    const TitleTreending = useRecoilState(useTitleState)
    const overviewTreending = useRecoilState(useOverviewState)
    const backdropTreending = useRecoilState(useBackdropState)
    const voteAverageTreending = useRecoilState(useVoteAverageState)

    const backdrop = `https://image.tmdb.org/t/p/original/${backdropTreending[0]}`

    useEffect(() => {
        treendingMovie()
    }, [])

    return (
        <section className={styles.banner}>
            <div className={styles.banner__container}>
                <div>                
                    <h2 className={styles.banner__title}>{TitleTreending[0]}</h2>
                    <p className={styles.banner__overview}>{overviewTreending[0]}</p>
                    <button className={styles.banner__moreInformation}>Saiba Mais</button>
                </div>
                <span className={styles.banner__span}><a href="#" className={styles.banner__link}>Destaques</a></span>
            </div>
            <img className={styles.banner__img} src={backdrop} alt="Poster do filme" />
        </section>
    )
}