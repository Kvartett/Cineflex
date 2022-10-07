import styled from "styled-components"

export default function Data() {
    return (
        <>
            <Info>
                <h2>Filme e sessão</h2>
                <p>Avatar</p>
                <p>24/06/2021 15:00</p>
            </Info>
            <Info>
                <h2>Ingresso(s)</h2>
                <p>Assento 15</p>
                <p>Assento 16</p>
            </Info>
            <Info>
                <h2>Comprador</h2>
                <p>Nome: João da Silva Sauro</p>
                <p>CPF: 123.456.789-10</p>
            </Info>
        </>
    )
}

const Info = styled.div`
    margin-top: 10px;
    padding-left: 25px;
    height: 110px;
    h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        color: #293845;
        margin-bottom: 8px;
    }
    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        color: #293845;
    }
`