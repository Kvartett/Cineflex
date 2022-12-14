import styled from "styled-components"

export default function Footer({ poster, title }) {
    return (
        <FooterContainer>
            <img src={poster} />
            <p>{title}</p>
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
    p {
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 26px;
        line-height: 25px;
        color: #293845;
    }
`