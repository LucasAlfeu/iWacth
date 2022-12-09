import React, {useEffect} from "react";
import env from "react-dotenv";
import axios from "axios";

export default function Banner (){
    useEffect(()=> {
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${env.API_KEY}&language=pt-BR`)
        .then((res) => {
            console.log(res.data.results[0])
        })
        .catch((erro) => {
            console.log(erro)
        })
    }, [])

    return(
        <div></div>
    )
}