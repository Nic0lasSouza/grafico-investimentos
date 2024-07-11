import { FaRegBell } from "react-icons/fa";
import styled from "styled-components";
import { useState } from "react";
import { BotaoNave } from "./Navbar";

export const UserNav = styled.div`
    display: flex;
    position:relative;
    margin-top:-120px;
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
export const ImageUser =styled.img`
    width:60px;
    height:60px;
    border-radius:50%;
    margin-top: 25px;

`
const User = () => {
    const [isActive, setIsActive] = useState(null)
    return(
        <UserNav>
                <BotaoNave active={isActive === 4} onClick={() => setIsActive(4)}><FaRegBell/></BotaoNave>
                <ImageUser src="/img/user01.jpg" alt="foto usuario"/>
                <BotaoNave active={isActive === 5} onClick={() => setIsActive(5)}>Jéssica Holmes</BotaoNave>
        </UserNav>
    )
}

export default User;