import React, { useRef, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useShowArrowState, useUrlState } from "state/atom";
import styles from './ListProgram.module.scss'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import Card from "./Card";
import classNames from "classnames";
import useListProgram from "state/hook/useListProgram";

interface Props {
    url: string
}

export default function ListProgram({ url }: Props) { 
    const { hideArrows, showArrows } = useListProgram()  

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

    const arrows = useRef(null) 
    const showArrow = useRecoilValue(useShowArrowState)   

    return (
        <section className={styles.listProgram} onMouseEnter={(e) => showArrows(e)} onMouseLeave={(e) => hideArrows(e)}>
            <Card reference={carousel} />
            <span ref={arrows}  className={classNames({
                [styles.handleClick]: showArrow == true,
                [styles.disable]: showArrow == false
            })}>
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