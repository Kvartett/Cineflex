import styled from "styled-components"
import Data from "./Data"

export default function Success() {
    return (
        <>
            <Header>
                Pedido feito com sucesso!
            </Header>
            <Data/>
            <Return>Voltar pra Home</Return>
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
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #247A6B;
    letter-spacing: 0.04em;
`

const Return = styled.button`
    background-color: #E8833A;
    width: 225px;
    height: 42px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.04em;
    border-radius: 3px;
    border: none;
    color: #FFFFFF;
    margin: 70px auto 0 auto;
`