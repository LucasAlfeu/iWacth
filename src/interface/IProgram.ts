import { ApexOptions } from "apexcharts"
import { ReactNode } from "react"

export interface IProgram {
    backdrop: string,
    data: string,
    id: number,
    genre_ids: number[],
    genres: ReactNode,
    overview: string,
    poster_path: string,
    backdrop_path: string,
    release_date: string,
    title: string,
    vote_average: number
}