import axios from 'axios';
import Menu from 'components/Menu';
import React, { useEffect, useState } from 'react';
import env from 'react-dotenv';
import { useNavigate, useParams, } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useDetailsState } from 'state/atom';
import styles from './Details.module.scss';
import { HiArrowLongLeft } from "react-icons/hi2";

export default function Details() {
    const { id } = useParams()
    const navigate = useNavigate()

    const setProgram = useSetRecoilState(useDetailsState)
    const program = useRecoilValue(useDetailsState)
    console.log(program)

    const urlMovie = `https://api.themoviedb.org/3/movie/${id}?api_key=${env.API_KEY}&language=pt-BR`
    const urlTv = `https://api.themoviedb.org/3/tv/${id}?api_key=${env.API_KEY}&language=pt-BR`

    useEffect(() => {
        axios.get(urlTv)
            .then((res) => {
                // console.log(res)
                setProgram(res.data)
            })
            .catch((err) => {

            })
        axios.get(urlMovie)
            .then((res) => {
                // console.log(res)
                setProgram(res.data)
            })
            .catch((err) => {

            })
    }, [])
    // const dataFormat = (data: string) => {
    //     const arr = data.split('-')
    //     const ano = arr[0]
    //     const mes = arr[1]
    //     const dia = arr[2]

    //     return(`${dia}/${mes}/${ano}`)
    // }

    // const data = dataFormat(program.release_date)
    return (
        <>
            <Menu />
            <img className={styles.backdrop} aria-hidden='true' src={`https://image.tmdb.org/t/p/original/${program.backdrop_path || program.poster_path}`} />
            <button className={styles.back} onClick={() => navigate('/')}><HiArrowLongLeft className={styles.back__arrow} /> Voltar</button>
            <section className={styles.details}>
                <img className={styles.details__poster} src={`https://image.tmdb.org/t/p/original/${program.poster_path}`} alt={`Poster do filome ${program.title}`} />
                <h2 className={styles.details__title}>{program.title}</h2>
                <p className={styles.details__text}>{program.overview}</p>
                {/* <p className={styles.details__data}>Data de lançamento: {data}</p> */}
            </section>
        </>
    )
}