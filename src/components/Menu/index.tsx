import React from "react";
import styles from './Menu.module.scss'

export default function Menu() {
    const menu = document.getElementById('menu') as HTMLElement

    const toggleMenu =() => {
        if(menu.style.display == 'none'){
            menu.style.display = 'block'
        } else {
            menu.style.display = 'none'
        }
    }
    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>iWatch</h1>
            <nav className={styles.header__nav} id='nav'>
                <button className={styles.header__btnMobile} onClick={() => toggleMenu()}>Menu</button>
                <ul className={styles.header__menu} id='menu'>
                    <li className={styles.header__item}>Filmes</li>
                    <li className={styles.header__item}>Séries</li>
                    <li className={styles.header__item}>Minha Lista</li>
                </ul>
            </nav>
        </header>
    )
}