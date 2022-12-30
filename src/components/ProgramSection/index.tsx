import React from "react";
import ListProgram from "./ListProgram";
import styles from './ProgramSection.module.scss'

interface IProgramSectiion {
    title: string,
    urlApi: string
}

export default function ProgramSection({ title, urlApi }: IProgramSectiion) {
    return (
        <section className={styles.ProgramSection}>
            <h3 className={styles.ProgramSection__titleSection}>{title}</h3>
            <ListProgram title={title} url={urlApi} />
        </section>
    )
}