import axios from "axios";
import React, { useEffect } from "react";
import env from "react-dotenv";


export default function Inicio() {
    
    useEffect(() => {
        // const baseUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${env.API_KEY}&language=pt-BR`
        // const baseUrl = `https://api.themoviedb.org/3/find/{external_id}?api_key=${env.API_KEY}&language=pt-BR&external_source=tt0137523`
        const baseUrl = `https://api.themoviedb.org/3/search/company?api_key=${env.API_KEY}&language=pt-BR&page=1`
        axios.get(baseUrl)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })


    }, [])

    return (
        <h2>olá</h2>
    )
}