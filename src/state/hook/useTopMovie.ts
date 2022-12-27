import axios from "axios"
import { IProgram } from "interface/IProgram"
import { useEffect } from "react"
import env from "react-dotenv"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { useMovieList, useFavoriteProgram, useUrlState } from "state/atom"

const useTopMovie = () => {
    const setMovieList = useSetRecoilState(useMovieList)
    const setFavoriProgram = useSetRecoilState(useFavoriteProgram)    
    const favoriteProgram = useRecoilValue(useFavoriteProgram)

    const urlBase = useRecoilValue(useUrlState)
    useEffect(() => {
        axios.get(urlBase)
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