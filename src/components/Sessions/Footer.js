import styled from "styled-components"

export default function Footer(props) {
    const { poster, title, weekday, hour } = props
    return (
        <FooterContainer>
            <img src={poster} />
            <div>
                <h1>{title}</h1>
                <p>{weekday} - {hour}</p>
            </div>

        </FooterContainer>
    )
}

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
    h1 {
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 26px;
        line-height: 25px;
        color: #293845;
    }
    p {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 26px;
        line-height: 25px;
        color: #293845;
    }
`