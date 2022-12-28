import React from "react";
import env from "react-dotenv";
import CardProgram from "../ListProgram";
import styles from './TopRated.module.scss'

export default function TopRated(){
    return(
        <section className={styles.topRated}>
            <h3 className={styles.topRated__titleSection}>Mais Votados</h3>
            <CardProgram url={`https://api.themoviedb.org/3/trending/movie/week?api_key=${env.API_KEY}&language=pt-BR`} />
        </section>
    )
}