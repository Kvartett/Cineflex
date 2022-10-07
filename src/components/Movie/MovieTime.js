import styled from "styled-components"

export default function MovieTime({ days }) {
    const [weekday, date, showtimes] = days
    console.log(days)

    return (
        <>
            {days.map((d, i) => <MovieDay key={i}>
                <p>{d.weekday} - {d.date}</p>
                {d.showtimes.map((s, i) => <button key={i}>{s.name}</button>)}
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
    button {
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
    }
`