import axios from 'axios';
import Menu from 'components/Menu';
import React, { useEffect, useState } from 'react';
import env from 'react-dotenv';
import { useNavigate, useParams,  } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useDetailsState } from 'state/atom';
import styles from './Details.module.scss';
import { HiArrowLongLeft } from "react-icons/hi2";

export default function Details(){
    const { id } = useParams()
    const navigate = useNavigate()

    const setProgram = useSetRecoilState(useDetailsState)
    const program = useRecoilValue(useDetailsState)
    console.log(program)

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${env.API_KEY}&language=pt-BR`)
        .then((res) => {
            console.log(res)
            setProgram(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])
    console.log(window.location)
    return(
        <>
            <Menu />
            <img className={styles.backdrop} aria-hidden='true' src={`https://image.tmdb.org/t/p/original/${program.backdrop_path}`} />
            <button className={styles.back} onClick={() => navigate('/')}><HiArrowLongLeft className={styles.back__arrow}/> Voltar</button>
        </>
    )
}