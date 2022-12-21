import { ApexOptions } from "apexcharts"

export interface IMovieList {
    backdrop?: string,
    data?: string,
    id?: number,
    genre_ids?: number[]
    overview?: string,
    poster_path?: string,
    title?: string,
    vote_average?: number
}