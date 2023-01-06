import { IProgram } from "interface/IProgram"
import { useSetRecoilState, useRecoilValue } from "recoil"
import { useFavoriteProgram } from "state/atom"

const useFavoritar = () => {
    const setFavoriteProgram = useSetRecoilState(useFavoriteProgram)
    const favoriteProgram = useRecoilValue(useFavoriteProgram)

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
    return { favoritar }
}

export default useFavoritar