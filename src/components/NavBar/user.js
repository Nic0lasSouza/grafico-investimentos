import { FaRegBell } from "react-icons/fa";
import { UserNav, BotaoNave, ImageUser } from './../styled-components';
import { useState } from "react";
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