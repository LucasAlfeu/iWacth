import axios from "axios"
import env from "react-dotenv"
import { useSetRecoilState } from "recoil"
import { useTitleState, useOverviewState, useBackdropState, useVoteAverageState } from "state/atom"

const useTreendingMovie = () => {
    const setTitleTreendingMovie = useSetRecoilState(useTitleState)
    const setOverviewTreendingMovie = useSetRecoilState(useOverviewState)
    const setBackdropTreendingMovie = useSetRecoilState(useBackdropState)
    const setVoteAverageTreendingMovie = useSetRecoilState(useVoteAverageState)

    
    const numero = (Math.random() * 10).toFixed(0)

    const treendingMovie = () => {
        // axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${env.API_KEY}&language=pt-BR`)
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${env.API_KEY}&language=pt-BR`)
            .then((res) => {
                const treendingMovie = res.data.results[numero]
                setTitleTreendingMovie(treendingMovie.title)
                setOverviewTreendingMovie(treendingMovie.overview)
                setBackdropTreendingMovie(treendingMovie.backdrop_path)
                setVoteAverageTreendingMovie(treendingMovie.vote_average)
                console.log(treendingMovie)
            })
            .catch((erro) => {
                console.log(erro)
            })
    }

    return {
        treendingMovie
    }
}

export default useTreendingMovie