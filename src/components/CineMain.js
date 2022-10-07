import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"


export default function CineMain() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")

        promise.then(response => {
            setMovies(response.data)
        })
        promise.catch(error => {
            console.log(error.response.data)
        })
    }, [])

    function Films({ img }){
        return (<img src={img.posterURL}/>)
    }


    return (
        <>
            <Catalog>
                Selecione o filme
            </Catalog>
            <MovieList>
                {movies.map((img, i) => <Films img={img} key={i} />)}
            </MovieList>
        </>
    )
}

const Catalog = styled.div`
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

const MovieList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    img {
        margin-bottom: 11px;
        width: 129px;
        height: 193px;
    }
`