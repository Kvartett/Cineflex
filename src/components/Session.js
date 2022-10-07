import styled from "styled-components"

export default function Session() {
    
    function Seats(){
        return (
            <>
                <SeatsContainer>
                    <button>01</button>
                    <button>02</button>
                    <button>03</button>
                    <button>04</button>
                </SeatsContainer>
                <LegendContainer>
                    <Legend>
                        <button/>
                        <p>Selecionado</p>
                    </Legend>
                    <Legend>
                        <button/>
                        <p>Disponível</p>
                    </Legend>
                    <Legend>
                        <button/>
                        <p>Indisponível</p>
                    </Legend>
                </LegendContainer>
            </>
        )
    }

    return (
        <>
            <Header>
                Selecione o(s) assento(s)
            </Header>
            <Seats/>
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
    padding: 0 22px;
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