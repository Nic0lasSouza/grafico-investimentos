import { BiCalendarStar } from "react-icons/bi";
import { BsFileBarGraph } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import { TbUsers } from "react-icons/tb";
import { SideBarContainer, BotaoSide, BotaoSideExit} from "../styled-components";
import { useState } from "react";


const SideBar = () =>{
    const [isActive, setIsActive] = useState(null)
    return(
        <SideBarContainer>
            <div>
                <BotaoSide hasShadow active={isActive === 1} onClick={() => setIsActive(1)}><MdOutlineQrCodeScanner /></BotaoSide>
                <BotaoSide active={isActive === 2} onClick={() => setIsActive(2)} ><BsFileBarGraph /></BotaoSide>
                <BotaoSide active={isActive === 3} onClick={() => setIsActive(3)}><TbUsers /></BotaoSide>
                <BotaoSide active={isActive === 4} onClick={() => setIsActive(4)}><BiCalendarStar /></BotaoSide>
                <BotaoSide active={isActive === 5} onClick={() => setIsActive(5)}><CiSettings /></BotaoSide>
                <BotaoSideExit active={isActive === 6} onClick={() => setIsActive(6)}><RxExit /></BotaoSideExit>
            </div>
        </SideBarContainer>
    )
}
export default SideBar