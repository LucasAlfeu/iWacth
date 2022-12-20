import axios from "axios"
import env from "react-dotenv"
import { useLocation } from "react-router-dom"
import { useSetRecoilState } from "recoil"
import { useTitleState, useOverviewState, useBackdropState, useVoteAverageState } from "state/atom"

const useTreendingProgram = () => {
    const setTitleTreendingProgram = useSetRecoilState(useTitleState)
    const setOverviewTreendingProgram = useSetRecoilState(useOverviewState)
    const setBackdropTreendingProgram = useSetRecoilState(useBackdropState)
    const setVoteAverageTreendingProgram = useSetRecoilState(useVoteAverageState)

    const location = useLocation()
    
    const numero = (min: number, max: number): number => {
        const numeroAleatorio = Math.random() * (max - min) + min
        return Number(numeroAleatorio.toFixed(0));
    }

    console.log(numero(0,20))

    let baseUrl: string = ''

    if (location.pathname === '/') {
        baseUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${env.API_KEY}&language=pt-BR`
    } else if (location.pathname === '/tv'){
        baseUrl = `https://api.themoviedb.org/3/tv/top_rated?api_key=${env.API_KEY}&language=pt-BR`
    } else {
        baseUrl = 'favorite'
    } 

    const treendingProgram = () => {
        axios.get(baseUrl)
            .then((res) => {
                const treendingProgram = res.data.results[numero(0,20)]
                setTitleTreendingProgram(treendingProgram.title || treendingProgram.name)
                setOverviewTreendingProgram(treendingProgram.overview)
                setBackdropTreendingProgram(treendingProgram.backdrop_path)
                setVoteAverageTreendingProgram(treendingProgram.vote_average)
                console.log(res.data.results)
            })
            .catch((erro) => {
                console.log(erro)
            })
    }

    return {
        treendingProgram,
        location
    }
}

export default useTreendingProgram