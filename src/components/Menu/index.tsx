import React, { useState } from "react";
import styles from './Menu.module.scss'
import classNames from "classnames";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from 'react-router-dom'

export default function Menu() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const btn = document.getElementById('button') as HTMLElement
    const exists = document.body.contains(btn)

    const toggleMenu = (e: React.TouchEvent<HTMLButtonElement>) => {
        setIsOpen(!isOpen)
        !isOpen ? e.currentTarget.setAttribute('aria-expanded', 'true') : e.currentTarget.setAttribute('aria-expanded', 'false')
    }
    return (
        <header className={styles.header} >
            <h1 className={styles.header__title}>iWatch</h1>
            <nav className={styles.header__nav} id='nav'>
                <button
                id="button"
                    className={styles.header__btnMobile}
                    area-label={!isOpen ? "Abrir Menu" : "Fechar Menu"}
                    onTouchStart={(e) => toggleMenu(e)}
                    aria-expanded='false'
                    aria-controls="menu"
                    aria-haspopup='true'
                >{!isOpen ? <AiOutlineMenu /> : <AiOutlineCloseCircle />}</button>
                <ul id="menu" role='menu' className={classNames({
                    [styles.disable]: isOpen === false,
                    [styles.active]: isOpen === true,
                    [styles.menu]: !exists
                })}>
                    <li className={styles.header__item}><Link className={styles.header__link} to={"/"}>Filmes</Link></li>
                    <li className={styles.header__item}><Link className={styles.header__link} to={"/tv"}>Séries</Link></li>
                    <li className={styles.header__item}><Link className={styles.header__link} to={"/favoritos"}>Favoritos</Link></li>
                </ul>
            </nav>
        </header>
    )
}