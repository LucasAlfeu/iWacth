import React, { useEffect, useState } from "react";
import axios from "axios";
import env from "react-dotenv";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useMovieList } from "state/atom";
import ApexCharts from "react-apexcharts"; 
import styles from './TopMovie.module.scss'
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export default function TopMovie() {
    const movieList = useRecoilValue(useMovieList)
    const setMovieList = useSetRecoilState(useMovieList)

    const [favorito, setFavorito] = useState(false)

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${env.API_KEY}&language=pt-BR`)
            .then((res) => {
                const listaApi = res.data.results             
                setMovieList(listaApi)
            })
            .catch((err) => {
                console.log(err)
            })
        }, [])
    var options: any = {
        chart: {
            height: 350,
            type: 'radialBar',
        }
      }

    const favoritar = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const botao = document.getElementById('botao') as HTMLElement
        botao.innerHTML = "<div><AiFillStar /></div>"
    }
      
    return (
        <ul className={styles.lista}>
            {movieList.map(movie => 
                <li className={styles.lista__movie} key={movie.id}>
                    <img onClick={()=> console.log(movie.title)} className={styles.lista__poster} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                    {/* <ApexCharts options={options.chart} series={movie.vote_average} className={styles.lista__grafico} /> */}
                    <button id="botao" onClick={(e) => favoritar(e)}><AiOutlineStar /> oi</button>
                </li>
                )}
        </ul>
    )
}