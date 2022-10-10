import styled from "styled-components"
import { useState } from "react"

export default function Seat(props) {
    const { selectedSeats, setSelectedSeats, id, number, isAvailable, color, seatNumber, setSeatNumber } = props
    const [selected, setSelected] = useState(false)

    function selectSeat() {
        if (isAvailable) {
            if (selected === false) {
                const newSelectedSeats = [...selectedSeats, id]
                const newSeatsNumbers = [...seatNumber, number]
                setSeatNumber(newSeatsNumbers)
                setSelectedSeats(newSelectedSeats)
                setSelected(true)
            } else {
                const newSelectedSeats = [...selectedSeats]
                const newSeatsNumbers = [...seatNumber]
                const removeSeat = newSelectedSeats.filter((e) => e !== id)
                const removeSeatNumber = newSeatsNumbers.filter((e) => e !== number)
                setSeatNumber(removeSeatNumber)
                setSelectedSeats(removeSeat)
                setSelected(false)
            }
        } else {
            alert("Esse assento não está disponível")
        }
    }

    return (
        <SeatStyle color={selected === false ? color : "#1AAE9E"}>
            <button onClick={(() => selectSeat())}>{number}</button>
        </SeatStyle>
    )
}

const SeatStyle = styled.div`
    button {
        width: 26px;
        height: 26px;
        border: 1px solid #000000;
        border-radius: 12px;
        box-sizing: border-box;
        background-color: ${props => props.color};
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