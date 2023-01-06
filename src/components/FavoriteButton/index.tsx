import { IProgram } from "interface/IProgram";
import React from "react";
import { MdBookmark, MdBookmarkBorder } from "react-icons/md";
import { useRecoilValue } from "recoil";
import { useFavoriteProgram } from "state/atom";
import useFavoritar from "state/hook/useFavoritar";
import styles from './FavoriteButton.module.scss'

interface IFavoriteButton {
    program: IProgram
}

export default function FavoriteButton({program}: IFavoriteButton) {

    const favoriteProgram = useRecoilValue(useFavoriteProgram)
    
    const {favoritar } = useFavoritar()
    return (
        <button className={styles.favorite} onClick={() => favoritar(program)}>
            {favoriteProgram.find(element => element === program) ? <MdBookmark className={styles.like} /> : <MdBookmarkBorder className={styles.like} />}
        </button>
    )
}