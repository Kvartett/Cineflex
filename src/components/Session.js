import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import Seats from "./Sessions/Seats"
import CustomerInfo from "./Sessions/CustomerInfo"
import Footer from "./Sessions/Footer"

export default function Session() {
    const [sessionStatus, setSessionStatus] = useState({})
    const [selectedSeats, setSelectedSeats] = useState([])
    const { sessionId } = useParams()
    const [customerName, setCustomerName] = useState("")
    const [cpf, setCpf] = useState("")
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [showtime, setShowtime] = useState("")
    const navigate = useNavigate()
    let usersInfo = { title, date, showtime, seats: selectedSeats, name: customerName, cpf }

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`)

        promise.then((res) => {
            setSessionStatus(res.data)
        })

        promise.catch((error) => {
            console.log(error.response.data)
        })
    }, [])

    function sendRequest(e) {
        e.preventDefault()
        if (customerName !== "" && cpf !== "" && selectedSeats.length !== 0) {
            const body = { ids: selectedSeats, name: customerName, cpf }
            const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", body)
            setTitle(sessionStatus.movie.title)
            setDate(sessionStatus.day.date)
            setShowtime(sessionStatus.name)

            promise.then(() => {
                alert("Lugares reservados!")
                navigate("/sucesso", { state: usersInfo })
            })

            promise.catch((error) => {
                alert(error.response.data)
            })
        }
    }

    if (sessionStatus.movie === undefined) {
        return <div>CARREGANDO</div>
    }

    return (
        <>
            <Header>
                Selecione o(s) assento(s)
            </Header>
            <Seats selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} seats={sessionStatus.seats} />
            <CustomerInfo sendRequest={sendRequest} customerName={customerName} setCustomerName={setCustomerName} cpf={cpf} setCpf={setCpf} />
            <Footer poster={sessionStatus.movie.posterURL} title={sessionStatus.movie.title} weekday={sessionStatus.day.weekday} hour={sessionStatus.name} />
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