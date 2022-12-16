import React from "react";
import styles from './Menu.module.scss'

export default function Menu() {
    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>iWatch</h1>
            <nav className={styles.header__nav}>
                <ul className={styles.header__menu}>
                    <li className={styles.header__item}>Filmes</li>
                    <li className={styles.header__item}>Séries</li>
                    <li className={styles.header__item}>Minha Lista</li>
                </ul>
            </nav>
        </header>
    )
}