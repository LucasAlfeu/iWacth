import React from "react";
import styles from './Menu.module.scss'

export default function Menu() {

    const toggleMenu =() => {
        const nav = document.getElementById('nav')
        nav?.classList.toggle('active')
    }
    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>iWatch</h1>
            <nav className={styles.header__nav} id='nav'>
                <button className={styles.header__btnMobile} onClick={() => toggleMenu()}>Menu</button>
                <ul className={styles.header__menu}>
                    <li className={styles.header__item}>Filmes</li>
                    <li className={styles.header__item}>Séries</li>
                    <li className={styles.header__item}>Minha Lista</li>
                </ul>
            </nav>
        </header>
    )
}