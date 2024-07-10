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
    margin-top:-465px;
    border-radius: 30px;
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
    width:60px;
    height:60px;
    border-radius:50%;
    margin-top: 25px;

`
export const BotaoNave = styled.button`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 15px;
    width:150px;
    height:40px;
    margin:20px;
    margin-right:50px;
    margin-top: 30px;
    margin-left:10px;
    padding:20px;
    border-radius: 10px;
    display:flex;
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
    left: 200px;
    width: 1000px;
    height: 90px;
    border-radius: 30px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5),
                0 -5px 10px rgba(206, 219, 220, 0.2);
`
export const Container = styled.div`
    display:flex;
`
export const UserNav = styled.div`
    display: flex;
    position:relative;
    margin-top:-130px;
    margin-left:900px;
    font-size: 15px;
    width:150px;

    button{
        width:auto;
    }
    p{
        display:flex;
    }
`
export const Card1 = styled.div`
    width: 400px;
    height:400px;
    background: linear-gradient(45deg, #1D5BA9, #0A325A);
    border-radius: 20px;
    margin: 20px;
    padding: 20px;

    p{
        font-size:25px;
        color:#F2F5F8;
        font-weight: bold;
    }

`
export const CardContainer = styled.div`
    margin-left:180px;
    margin-top: 60px;
`
export const ImgProject = styled.img`
    width: 250px;
    height: 50px;
    margin-left:100px;
`
export const CirculoProgress = styled.div`
    width: 135px;
    height: 135px;
    background:#2C2F33;
    border-radius:50% ;
    overflow: 'hidden';
    font-weight: bold;
`