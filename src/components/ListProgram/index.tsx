import React, { useRef } from "react";
import { useSetRecoilState } from "recoil";
import { useUrlState } from "state/atom";
import styles from './ListProgram.module.scss'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import Card from "./Card";

interface Props {
    url: string
}

export default function ListProgram({ url }: Props) {

    const setUrlBase = useSetRecoilState(useUrlState)
    setUrlBase(url)

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
                <button
                    aria-controls="carrosel"
                    aria-label="move o carrosel de filmes para esquerda"
                    className={styles.handleClick__button}
                    onClick={(e) => handleLeftClick(e)}>
                        <AiOutlineLeft className={styles.handleClick__icon} />
                </button>
                <button
                    aria-controls="carrosel"
                    aria-label="move o carrosel de filmes para direita"
                    className={styles.handleClick__button}
                    onClick={(e) => handleRigthClick(e)}>
                        <AiOutlineRight className={styles.handleClick__icon} />
                </button>
            </span>
            <Card reference={carousel} />

        </>
    )
}