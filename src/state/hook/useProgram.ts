import axios from "axios"
import { IProgram } from "interface/IProgram"
import { useEffect } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { useMovieList, useFavoriteProgram, useUrlState, useLatestList, useOnTheArirtList, useTopRatedList, usePlayingNowList } from "state/atom"

interface IUseProgram {
    title: string
}

const useProgram = ({ title }: IUseProgram) => {


    const setProgramList = useSetRecoilState(useMovieList)
    const setLatestList = useSetRecoilState(useLatestList)
    const setOnTheAirListSeries = useSetRecoilState(useOnTheArirtList)
    const setTopRatedList = useSetRecoilState(useTopRatedList)
    const setPlayingNow = useSetRecoilState(usePlayingNowList)

    let listaDeProgramas = setProgramList
    if (title === 'Lançamentos') {
        listaDeProgramas = setLatestList
    }
    if (title === 'No Ar') {
        listaDeProgramas = setOnTheAirListSeries
    }
    if (title === 'Mais Votados') {
        listaDeProgramas = setTopRatedList
    }
    if (title === 'No Cinema') {
        listaDeProgramas = setPlayingNow
    }

    const urlBase = useRecoilValue(useUrlState)
    useEffect(() => {
        axios.get(urlBase)
            .then((res) => {
                const listaApi = res.data.results
                listaDeProgramas(listaApi)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return {
    }

}
export default useProgram