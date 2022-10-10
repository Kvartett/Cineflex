import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"

export default function Session() {
    const [seats, setSeats] = useState({})
    const { sessionId } = useParams()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`)

        promise.then((res) => {
            setSeats(res.data)
            console.log(seats)
        })

        promise.catch((error) => {
            console.log(error.response.data)
        })
    }, [])

    function Seats() {
        return (
            <>
                <SeatsContainer>
                    <button>01</button>
                    <button>02</button>
                    <button>03</button>
                </SeatsContainer>
                <LegendContainer>
                    <Legend>
                        <button />
                        <p>Selecionado</p>
                    </Legend>
                    <Legend>
                        <button />
                        <p>Disponível</p>
                    </Legend>
                    <Legend>
                        <button />
                        <p>Indisponível</p>
                    </Legend>
                </LegendContainer>
            </>
        )
    }

    function CustomerInfo() {
        return (
            <>
                <CustomerInfoContainer>
                    <label for="namePlace">Nome do comprador:</label>
                    <input id="namePlace" placeholder="Digite seu nome..."></input>
                    <label for="CpfPlace">CPF do comprador:</label>
                    <input id="CpfPlace" placeholder="Digite seu CPF..."></input>
                    <button>Reservar assento(s)</button>
                </CustomerInfoContainer>
            </>
        )
    }

    function Footer() {
        return (
            <FooterContainer>
                <img src="https://ovicio.com.br/wp-content/uploads/2022/08/20220823-image-2-691x1024.png" />
                <p>Avatar</p>
            </FooterContainer>
        )
    }

    return (
        <>
            <Header>
                Selecione o(s) assento(s)
            </Header>
            <Seats />
            <CustomerInfo />
            <Footer />
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

const SeatsContainer = styled.ul`
    padding: 0 23px;
    button {
        width: 26px;
        height: 26px;
        border: 1px solid #808F9D;
        border-radius: 12px;
        margin: 0 7px 18px 0;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 12px;
        text-align: center;
        color: #000000;
    }
`

const LegendContainer = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const Legend = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
        width: 26px;
        height: 26px;
        border: 1px solid #808F9D;
        border-radius: 12px;
        margin-bottom: 6px;
    }
    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
    }
`

const CustomerInfoContainer = styled.form`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 150px;
    label {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        margin-bottom: 5px;
    }
    input {
        width: 327px;
        height: 51px;
        background-color: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        margin-bottom: 10px;
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        color: #AFAFAF;
        padding-left: 18px;
        box-sizing: border-box;
    }
    button {
        background-color: #E8833A;
        width: 225px;
        height: 42px;
        border-radius: 3px;
        border: none;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFFFFF;
        margin-top: 20px;
    }
`
const FooterContainer = styled.div`
    width: 100%;
    height: 117px;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    img {
        width: 60px;
        height: 80px;
        border: solid white 6px;
        border-radius: 2px;
        margin: 0 15px 0 10px;
    }
    p {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 26px;
        line-height: 25px;
        color: #293845;
    }
`