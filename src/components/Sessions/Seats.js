import { useState } from "react"
import styled from "styled-components"
import Seat from "./Seats/Seat"
import colors from "../helpers/colors"

export default function Seats(props) {
    const { seats, selectedSeats, setSelectedSeats } = props
    const { GREEN, GRAY, YELLOW } = colors
    const [allSeats, setAllSeats] = useState(seats)

    function whichColor(isAvailable) {
        if (isAvailable === false) {
            return YELLOW;
        } else {
            return GRAY;
        }
    }

    return (
        <>
            <SeatsContainer>
                {allSeats.map(({ id, name, isAvailable }, i) => <Seat selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} color={whichColor(isAvailable)} id={id} number={name} isAvailable={isAvailable} key={i} />)}
            </SeatsContainer>
            <LegendContainer>
                <Legend color={GREEN}>
                    <button />
                    <p>Selecionado</p>
                </Legend>
                <Legend color={GRAY}>
                    <button />
                    <p>Disponível</p>
                </Legend>
                <Legend color={YELLOW}>
                    <button />
                    <p>Indisponível</p>
                </Legend>
            </LegendContainer>
        </>
    )
}

const SeatsContainer = styled.ul`
    padding: 0 23px;
    display: flex;
    flex-wrap: wrap;
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
        background-color: ${props => props.color};
        width: 26px;
        height: 26px;
        border: 1px solid #000000;
        border-radius: 12px;
        box-sizing: border-box;
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