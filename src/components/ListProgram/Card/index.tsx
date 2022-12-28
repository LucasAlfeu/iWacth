import React, { RefObject } from "react";
import { AiFillStar } from "react-icons/ai";
import { MdBookmark, MdBookmarkBorder } from "react-icons/md";
import { useRecoilValue } from "recoil";
import { useMovieList, useFavoriteProgram } from "state/atom";
import useTopMovie from "state/hook/useProgram";
import styles from "./Card.module.scss"

interface ICard {
    reference: RefObject<HTMLUListElement>
}

export default function Card({ reference }: ICard) {

    const movieList = useRecoilValue(useMovieList)
    const favoriteProgram = useRecoilValue(useFavoriteProgram)
    const { favoritar } = useTopMovie()

    return (
        <section className={styles.lista} ref={reference} id='carrosel'>
            {movieList.map(movie =>
                <div className={styles.lista__movie} key={movie.id}>
                    <img className={styles.lista__poster} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                    <div className={styles.lista__container}>
                        <span className={styles.lista__span}><AiFillStar className={styles.lista__star} />{movie.vote_average.toFixed(1)}</span>
                        <button className={styles.lista__favorite} onClick={() => favoritar(movie)}>
                            {favoriteProgram.find(element => element === movie) ? <MdBookmark className={styles.lista__like} /> : <MdBookmarkBorder className={styles.lista__like} />}
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}