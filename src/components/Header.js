import styled from "styled-components"

export default function Header() {
    return (
        <HeaderContainer>
            <p>CINEFLEX</p>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    background-color: #C3CFD9;
    width: 100%;
    height: 67px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        color: #E8833A;
    }
`