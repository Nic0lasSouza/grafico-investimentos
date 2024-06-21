import styled from "styled-components";

export const LogoBtn = styled.button`
    margin:10px;
    width: 105px;
    height: 90px;
    border-radius: 25px;
    background: #144884;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);


    h1{
        font-family: "Baloo 2", sans-serif;
        font-size: 30px;
        font-weight: 800 bold;
        color: #EBDBDB;
    }
`
export const SideBarContainer =styled.div`
    margin-top:20px;
    border-radius: 30px;
    position: fixed;
    display:flex;
    height: 1200px;
    width:150px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5),
                0 -5px 10px rgba(206, 219, 220, 0.2);
`

export const BotaoSide = styled.button`
    margin:20px;
    border-radius:25px;
    display:flex;
    font-size: 35px;
    width: 90px;
    height: 90px;
    align-items: center;
    justify-content: center;
    color: #CEDBDC;
    background-color:#2C2F33;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5),
                0 -10px 10px rgba(206, 219, 220, 0.2);
`
export const BotaoSideActive = styled.button``

export const BotaoSideExit = styled.button`
    margin:20px;
    border-radius:25px;
    display:flex;
    font-size: 35px;
    width: 90px;
    height: 90px;
    align-items: center;
    justify-content: center;
    color: #1A91FA;
    ${'' /* não esquecer de espaçar ele */}
    background-color:#2C2F33;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5),
                0 -10px 10px rgba(206, 219, 220, 0.2);
`