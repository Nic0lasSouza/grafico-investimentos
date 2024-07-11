import styled from "styled-components";
import { useState } from "react";
import User from "./user";

export const Container = styled.div`
    display:flex;
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
const NavBar = () =>{
    const [isActive, setIsActive] = useState(null)
    return(
        <Container>
            <NavContainer>
                <BotaoNave active={isActive === 1} onClick={() => setIsActive(1)}>Dashboard</BotaoNave>
                <BotaoNave active={isActive === 2} onClick={() => setIsActive(2)}>Message</BotaoNave>
                <BotaoNave active={isActive === 3} onClick={() => setIsActive(3)}>Help</BotaoNave>
            </NavContainer>
            <User/>
        </Container>
    )
}

export default NavBar