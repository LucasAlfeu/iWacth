import React, { useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useFavoriteProgram, useMovieList, useUrlState } from "state/atom";
import styles from './TopMovie.module.scss'
import { MdBookmark, MdBookmarkBorder } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import useTopMovie from "state/hook/useTopMovie";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

interface Props {
    url: string
}

export default function CardProgram({ url }: Props) {

    const setUrlBase = useSetRecoilState(useUrlState)
    setUrlBase(url)

    const movieList = useRecoilValue(useMovieList)
    const favoriteProgram = useRecoilValue(useFavoriteProgram)
    const { favoritar } = useTopMovie()

    const carousel = useRef<HTMLUListElement>(null)

    const handleLeftClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        carousel.current!.scrollLeft -= carousel.current!.offsetWidth
    }
    const handleRigthClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        carousel.current!.scrollLeft += carousel.current!.offsetWidth
    }

    return (
        <>
            <span className={styles.handleClick}>
                <button aria-controls="carrosel" aria-label="move o carrosel de filmes para esquerda" className={styles.handleClick__button} onClick={(e) => handleLeftClick(e)}><AiOutlineLeft className={styles.handleClick__icon} /></button>
                <button aria-controls="carrosel" aria-label="move o carrosel de filmes para direita" className={styles.handleClick__button} onClick={(e) => handleRigthClick(e)}><AiOutlineRight className={styles.handleClick__icon} /></button>
            </span>
            <ul className={styles.lista} ref={carousel} id='carrosel'>
                {movieList.map(movie =>
                    <li className={styles.lista__movie} key={movie.id}>
                        <img className={styles.lista__poster} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                        <div className={styles.lista__container}>
                            <span className={styles.lista__span}><AiFillStar className={styles.lista__star} />{movie.vote_average.toFixed(1)}</span>
                            <button className={styles.lista__favorite} onClick={() => favoritar(movie)}>
                                {favoriteProgram.find(element => element === movie) ? <MdBookmark className={styles.lista__like} /> : <MdBookmarkBorder className={styles.lista__like} />}
                            </button>
                        </div>
                    </li>
                )}
            </ul>

        </>
    )
}