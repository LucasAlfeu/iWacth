import axios from "axios"
import { useEffect } from "react"
import env from "react-dotenv"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { useMovieList, useFavoriteProgram } from "state/atom"

const useTopMovie = () => {
    const setMovieList = useSetRecoilState(useMovieList)
    const setMovieId = useSetRecoilState(useFavoriteProgram)    
    const movieId = useRecoilValue(useFavoriteProgram)
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

    const favoritar = (id: number) => {
        if (movieId.findIndex(element => element === id) == -1) {
            setMovieId([...movieId, id])        
        } else {
            const IdMovieDeslike = movieId.findIndex(element => element === id)
            const favoriteMovies = [...movieId]
            favoriteMovies.splice(IdMovieDeslike, 1)
            setMovieId([...favoriteMovies])
        }
    }
    return {
        favoritar
    }

}
export default useTopMovie