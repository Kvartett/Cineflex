import styled from "styled-components"

export default function CustomerInfo(props) {
    const { sendRequest, customerName, setCustomerName, cpf, setCpf } = props

    return (
        <>
            <CustomerInfoContainer>
                <label for="namePlace">Nome do comprador:</label>
                <input id="namePlace" placeholder="Digite seu nome..." value={customerName} onChange={e => setCustomerName(e.target.value)} type="text" required></input>
                <label for="CpfPlace">CPF do comprador:</label>
                <input id="CpfPlace" placeholder="Digite seu CPF..." value={cpf} onChange={e => setCpf(e.target.value)} type="text" required></input>
                <button onClick={sendRequest}>Reservar assento(s)</button>
            </CustomerInfoContainer>
        </>
    )
}

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