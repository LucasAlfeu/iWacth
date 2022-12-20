import React from "react";
import TopMovie from "./TopMovie";
import styles from './TopRated.module.scss'

export default function TopRated(){
    return(
        <section className={styles.topRated}>
            <h3 className={styles.topRated__titleSection}>Mais Votados</h3>
            <TopMovie />
        </section>
    )
}