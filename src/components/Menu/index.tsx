import React from "react";
import styles from './Menu.module.scss'
import classNames from "classnames";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from 'react-router-dom'
import { useHideBtnMobileState } from "state/atom";
import { useRecoilValue } from "recoil";
import useMenuMobile from "state/hook/useMenuMobile";

export default function Menu() {
    const isOpen = useRecoilValue(useHideBtnMobileState)
    const { exists, toggleMenu } = useMenuMobile()
    
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