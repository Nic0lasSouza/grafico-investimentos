import { BiCalendarStar } from "react-icons/bi";
import { BsFileBarGraph } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import { TbUsers } from "react-icons/tb";
import { SideBarContainer, BotaoSide, BotaoSideExit } from "../styled-components";


const SideBar = () =>{
    return(
        <SideBarContainer>
            <div>
                <BotaoSide><MdOutlineQrCodeScanner /></BotaoSide>
                <BotaoSide><BsFileBarGraph /></BotaoSide>
                <BotaoSide><TbUsers /></BotaoSide>
                <BotaoSide><BiCalendarStar /></BotaoSide>
                <BotaoSide><CiSettings /></BotaoSide>
                <BotaoSideExit><RxExit /></BotaoSideExit>
            </div>
        </SideBarContainer>
    )
}
export default SideBar