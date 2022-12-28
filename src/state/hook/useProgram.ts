import axios from "axios"
import { IProgram } from "interface/IProgram"
import { useEffect } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { useMovieList, useFavoriteProgram, useUrlState } from "state/atom"

const useProgram = () => {
    const setProgramList = useSetRecoilState(useMovieList)
    const setFavoriteProgram = useSetRecoilState(useFavoriteProgram)    
    const favoriteProgram = useRecoilValue(useFavoriteProgram)

    const urlBase = useRecoilValue(useUrlState)
    useEffect(() => {
        axios.get(urlBase)
            .then((res) => {
                const listaApi = res.data.results             
                setProgramList(listaApi)
            })
            .catch((err) => {
                console.log(err)
            })
        }, [])

    const favoritar = (movie: IProgram) => {
        if (favoriteProgram.findIndex(element => element === movie) === -1) {
            setFavoriteProgram([...favoriteProgram, movie])        
        } else {
            const IdMovieDeslike = favoriteProgram.findIndex(element => element === movie)
            const favoriteMovies = [...favoriteProgram]
            favoriteMovies.splice(IdMovieDeslike, 1)
            setFavoriteProgram([...favoriteMovies])
        }
    }
    return {
        favoritar
    }

}
export default useProgram