import styled from "styled-components"
import { Link } from "react-router-dom"

export default function MovieTime({ days }) {
    const [weekday, date, showtimes] = days

    function Time(props) {
        const { name, sessionId } = props

        return (
            <Link to={`/sessao/${sessionId}`}>
                <TimeButton>{name}</TimeButton>
            </Link>
        )
    }

    return (
        <>
            {days.map((d, i) => <MovieDay key={i}>
                <p>{d.weekday} - {d.date}</p>
                {d.showtimes.map((s, i) => <Time name={s.name} sessionId={s.id} key={i} />)}
            </MovieDay>)}
        </>
    )
}

const MovieDay = styled.div`
    padding-left: 25px;
    p {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        margin-bottom: 20px
    }
`

const TimeButton = styled.button`
    width: 82px;
    height: 43px;
    background-color:#E8833A;
    border: none;
    border-radius: 3px;
    margin: 0 10px 23px 0;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    color: #ffffff;
`