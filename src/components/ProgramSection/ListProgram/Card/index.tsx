import { IProgram } from "interface/IProgram";
import React, { RefObject } from "react";
import { AiFillStar } from "react-icons/ai";
import { MdBookmark, MdBookmarkBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useMovieList, useFavoriteProgram, useLatestList, useOnTheArirtList, useTopRatedList, usePlayingNowList } from "state/atom";
import useTopMovie from "state/hook/useProgram";
import styles from "./Card.module.scss"

interface ICard {
    reference: RefObject<HTMLUListElement>
    title: string
}

export default function Card({ reference, title}: ICard) {
    
    const movieList = useRecoilValue(useMovieList)
    const latestList = useRecoilValue(useLatestList)
    const onTheAirListSeries = useRecoilValue(useOnTheArirtList)
    const topRatedList = useRecoilValue(useTopRatedList)
    const playingNow = useRecoilValue(usePlayingNowList)
    
    let listaDeProgramas = movieList
    if (title == 'Lançamentos'){
        listaDeProgramas = latestList
    }
    if (title == 'No Ar'){
        listaDeProgramas = onTheAirListSeries
    }
    if (title == 'Mais Votados'){
        listaDeProgramas = topRatedList
    }
    if (title == 'No Cinema'){
        listaDeProgramas = playingNow
    }
    const favoriteProgram = useRecoilValue(useFavoriteProgram)
    const { favoritar } = useTopMovie({title})

    const navigate = useNavigate()
    const goDetails = (program: IProgram) => {
        navigate(`/details/${program.id}`, { state: { program }, replace: true });
    }

    return (
        <>
            <ul className={styles.lista} ref={reference}>
                {listaDeProgramas?.map(program =>
                    <li className={styles.lista__movie} key={program.id}>
                        <img onClick={() => goDetails(program)} className={styles.lista__poster} src={`https://image.tmdb.org/t/p/original/${program.poster_path}`} alt={program.title} />
                        <div className={styles.lista__container}>
                            <span className={styles.lista__span}><AiFillStar className={styles.lista__star} />{program.vote_average.toFixed(1)}</span>
                            <button className={styles.lista__favorite} onClick={() => favoritar(program)}>
                                {favoriteProgram.find(element => element === program) ? <MdBookmark className={styles.lista__like} /> : <MdBookmarkBorder className={styles.lista__like} />}
                            </button>
                        </div>
                    </li>
                )}
            </ul>
        </>
    )
}