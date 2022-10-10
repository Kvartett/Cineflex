import styled from "styled-components"

export default function Data(props) {
    const { seatNumber, name, cpf, title, date, hour } = props
    return (
        <>
            <Info>
                <h2>Filme e sessão</h2>
                <p>{title}</p>
                <p>{date} - {hour}</p>
            </Info>
            <Info>
                <h2>Ingresso(s)</h2>
                {seatNumber.map((s, i) => <p key={i}>Assento {s}</p>)}
            </Info>
            <Info>
                <h2>Comprador</h2>
                <p>Nome: {name}</p>
                <p>CPF: {cpf}</p>
            </Info>
        </>
    )
}

const Info = styled.div`
    margin: 20px auto;
    padding-left: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
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