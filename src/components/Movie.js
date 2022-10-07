import styled from "styled-components"


export default function Movie() {

    function MovieTime(){
        return (
        <>
            <MovieDay>
                <p>Quinta-feira - 24/06/2021</p>
                <button>15:00</button>
                <button>19:00</button>
            </MovieDay>
            <MovieDay>
                <p>Sexta-feira - 25/06/2021</p>
                <button>15:00</button>
                <button>19:00</button>
            </MovieDay>
        </>
        )
    }

    function Footer(){
        return (
            <FooterContainer>
                <img src="https://ovicio.com.br/wp-content/uploads/2022/08/20220823-image-2-691x1024.png"/>
                <p>Avatar</p>
            </FooterContainer>
        )
    }

    return (
        <>
            <Header>
                Selecione o horário
            </Header>
            <MovieTime />
            <Footer/>
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

const FooterContainer = styled.div`
    width: 100%;
    height: 117px;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    img {
        width: 60px;
        height: 80px;
        border: solid white 6px;
        border-radius: 2px;
        margin: 0 15px 0 10px;
    }
    p {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 26px;
        line-height: 25px;
        color: #293845;
    }
`