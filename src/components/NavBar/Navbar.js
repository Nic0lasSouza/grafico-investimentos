import { FaRegBell } from "react-icons/fa";
import { BotaoNave, ImageUser, NavContainer } from "../styled-components";
import { useState } from "react";

const NavBar = () =>{
    const [isActive, setIsActive] = useState(null)
    return(
        <NavContainer>
            <BotaoNave active={isActive === 1} onClick={() => setIsActive(1)}>Dashboard</BotaoNave>
            <BotaoNave active={isActive === 2} onClick={() => setIsActive(2)}>Message</BotaoNave>
            <BotaoNave active={isActive === 3} onClick={() => setIsActive(3)}>Help</BotaoNave>
            <BotaoNave active={isActive === 4} onClick={() => setIsActive(4)}><FaRegBell/></BotaoNave>
            <ImageUser src="/img/user01.jpg" alt="foto usuario"/>
            <BotaoNave active={isActive === 5} onClick={() => setIsActive(5)}></BotaoNave>
        </NavContainer>
    )
}

export default NavBar