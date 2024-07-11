import styled from "styled-components"

export const LogoBtn = styled.button`
    margin:10px;
    width: 80px;
    height: 80px;
    border-radius: 25px;
    background: #144884;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5),
    0 -5px 10px rgba(206, 219, 220, 0.2);


    h1{
        font-family: "Baloo 2", sans-serif;
        font-size: 30px;
        font-weight: 800 bold;
        color: #EBDBDB;
    }
`

const Logo = () =>{
    return(
        <LogoBtn>
            <h1>DBM.</h1>
        </LogoBtn>
    )
}

export default Logo