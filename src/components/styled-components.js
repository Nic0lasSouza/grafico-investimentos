import styled from "styled-components";

export const LogoBtn = styled.button`
    margin:10px;
    width: 105px;
    height: 90px;
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
    color: ${props => (props.active ? '#1A91FA' : '#CEDBDC')};
    background-color:#2C2F33;
    box-shadow: ${props => (props.active ? '0 50px -40px rgba(0, 0, 0, 0.5)' : '10px 10px 20px rgba(0, 0, 0, 0.5)')};
    cursor:pointer;
`
export const BotaoSideActive = styled.button`
    border: 2px solid #000000;
`

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
    margin-top:90px;
    background-color:#2C2F33;
    box-shadow: ${props => (props.active ? '0 50px -40px rgba(0, 0, 0, 0.5)' : '10px 10px 20px rgba(0, 0, 0, 0.5)')};
    &:hover{
        box-shadow: 10px -10px 20px rgba(0, 0, 0, 0.5),
         0 10px 10px rgba(206, 219, 220, 0.2);
    }
`
export const ImageUser =styled.img`
    width:64px;
    height:64px;
    border-radius:50%;
    margin-top: 40px;
    margin-left:70px;

`
export const BotaoNave = styled.button`
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 16px;
    width:230px;
    height:60px;
    margin:20px;
    margin-top: 40px;
    margin-left:50px;
    border-radius: 10px;
    display:flex;
    font-size: 35px;
    align-items: center;
    justify-content: center;
    color: ${props => (props.active ? '#1A91FA' : '#CEDBDC')};
    background-color:#2C2F33;
    box-shadow: ${props => (props.active ? '0 50px -40px rgba(0, 0, 0, 0.5)' : '10px 10px 20px rgba(0, 0, 0, 0.5)')};
    cursor:pointer;
`
export const NavContainer = styled.div`
    display: flex;
    position: absolute;
    top: -20px;
    left: 185px;
    width: 1770px;
    height: 140px;
    border-radius: 30px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5),
                0 -5px 10px rgba(206, 219, 220, 0.2);
`