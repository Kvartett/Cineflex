import styled from "styled-components"

export default function CineMain() {
    function Films(){
        return (
            <MovieList>
                <li>Filme 1</li>
                <li>Filme 2</li>
                <li>Filme 3</li>
                <li>Filme 4</li>
                <li>Filme 5</li>
                <li>Filme 6</li>
                <li>Filme 7</li>
                <li>Filme 8</li>
            </MovieList>
        )
    }


    return (
        <>
            <Catalog>
                Selecione o filme
            </Catalog>
            <Films/>
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
    justify-content: space-around;
    flex-wrap: wrap;
    li {
        width: 129px;
        height: 193px;
        border: solid black 1px;
        margin-bottom: 11px;
    }
`