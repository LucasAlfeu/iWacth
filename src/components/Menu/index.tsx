import React, { useState } from "react";
import styles from './Menu.module.scss'
import classNames from "classnames";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";

export default function Menu() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleMenu =() => {
        setIsOpen(!isOpen)
    }
    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>iWatch</h1>
            <nav className={styles.header__nav} id='nav'>
                <button className={styles.header__btnMobile} onClick={() => toggleMenu()}>{!isOpen ? <AiOutlineMenu /> : <AiOutlineCloseCircle />}</button>
                <ul className={classNames({
                    [styles.disable]: isOpen === false,
                    [styles.active]: isOpen === true
                })}>
                    <li className={styles.header__item}>Filmes</li>
                    <li className={styles.header__item}>Séries</li>
                    <li className={styles.header__item}>Favoritos</li>
                </ul>
            </nav>
        </header>
    )
}