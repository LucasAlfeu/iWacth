import axios from "axios"
import { useEffect } from "react"
import env from "react-dotenv"
import { useNavigate, useParams } from "react-router-dom"
import { useSetRecoilState } from "recoil"
import { useDetailsState } from "state/atom"


const useDetails = () => {
    
    const { id } = useParams()
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${env.API_KEY}&language=pt-BR`)
            .then((res) => {
                setProgram(res.data)
            })
            .catch((err) => {

            })
    }, [])
    
    const setProgram = useSetRecoilState(useDetailsState)    
    const navigate = useNavigate()
    
    const dataFormat = (data: string) => {
        const arr = data.split('-')
        const ano = arr[0]
        const mes = arr[1]
        const dia = arr[2]
        return (`${dia}/${mes}/${ano}`)
    }
    return {
        dataFormat,
        navigate
    }
}

export default useDetails