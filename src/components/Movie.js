import { useEffect, useState } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import axios from "axios"
import MovieTime from "./Movie/MovieTime"
import Footer from "./Footer"


export default function Movie() {
    const [movie, setMovie] = useState({})
    const { movieId } = useParams()
    console.log(movieId)

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`)

        promise.then((res) => {
            setMovie(res.data)
            console.log(res.data)
        })

        promise.catch((error) => {
            console.log(error.response.data)
        })
    }, [])

    return (
        <>
            <Header>
                Selecione o horário
            </Header>
            <MovieTime days={movie.days || []} />
            <Footer poster={movie.posterURL} title={movie.title} />
        </>
    )
}

const Header = styled.div`
    width: 100%;
    height: 110px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
`