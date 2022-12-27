import axios from "axios"
import { IProgram } from "interface/IProgram"
import { useEffect } from "react"
import env from "react-dotenv"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { useMovieList, useFavoriteProgram } from "state/atom"

const useTopMovie = () => {
    const setMovieList = useSetRecoilState(useMovieList)
    const setFavoriProgram = useSetRecoilState(useFavoriteProgram)    
    const favoriteProgram = useRecoilValue(useFavoriteProgram)
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${env.API_KEY}&language=pt-BR`)
            .then((res) => {
                const listaApi = res.data.results             
                setMovieList(listaApi)
            })
            .catch((err) => {
                console.log(err)
            })
        }, [])

    const favoritar = (movie: IProgram) => {
        if (favoriteProgram.findIndex(element => element === movie) == -1) {
            setFavoriProgram([...favoriteProgram, movie])        
        } else {
            const IdMovieDeslike = favoriteProgram.findIndex(element => element === movie)
            const favoriteMovies = [...favoriteProgram]
            favoriteMovies.splice(IdMovieDeslike, 1)
            setFavoriProgram([...favoriteMovies])
        }
    }
    return {
        favoritar
    }

}
export default useTopMovie