import { BotaoNave, NavContainer, Container} from "../styled-components";
import { useState } from "react";
import User from "./user";

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