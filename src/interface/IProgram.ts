import { ApexOptions } from "apexcharts"
import { ReactNode } from "react"

export interface IProgram {
    backdrop: string,
    data: string,
    id: number,
    genre_ids: number[],
    genres: [{
        id: number,
        name: string
    }],
    overview: string,
    poster_path: string,
    backdrop_path: string,
    release_date: string,
    title: string,
    vote_average: number,
    runtime: number,
    budget: number,
    revenue: number

}