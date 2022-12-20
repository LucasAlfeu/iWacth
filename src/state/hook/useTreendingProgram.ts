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

    let whereWatch: string = ''

    if (location.pathname === '/') {
        whereWatch = 'movie'
    } else if (location.pathname === '/tv'){
        whereWatch = 'tv'
    } else {
        whereWatch = 'favorite'
    } 

    const treendingProgram = () => {
        axios.get(`https://api.themoviedb.org/3/trending/${whereWatch}/week?api_key=${env.API_KEY}&language=pt-BR`)
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