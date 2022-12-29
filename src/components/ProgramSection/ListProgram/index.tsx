import React, { useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useShowArrowState, useUrlState } from "state/atom";
import styles from './ListProgram.module.scss'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import Card from "./Card";
import classNames from "classnames";

interface Props {
    url: string
    title: string
}

export default function ListProgram({ url, title }: Props) { 

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
 
    const showArrow = useRecoilValue(useShowArrowState)   

    return (
        <section className={styles.listProgram}>
            <Card title={title} reference={carousel} />
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
        </section>
    )
}