import { BiCalendarStar } from "react-icons/bi";
import { BsFileBarGraph } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import { TbUsers } from "react-icons/tb";
import { useState } from "react";
import styled from "styled-components";

export const SideBarContainer = styled.div`
    margin-top:-460px;
    border-radius: 30px;
    display:flex;
    height: 480px;
    width:100px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5),
                0 -5px 10px rgba(206, 219, 220, 0.2);
`
export const BotaoSide = styled.button`
    margin:20px;
    border-radius:10px;
    display:flex;
    font-size: 25px;
    width: 50px;
    height: 50px;
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
    border-radius:10px;
    display:flex;
    font-size: 25px;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    color: #1A91FA;
    margin-top:70px;
    background-color:#2C2F33;
    box-shadow: ${props => (props.active ? '0 50px -40px rgba(0, 0, 0, 0.5)' : '10px 10px 20px rgba(0, 0, 0, 0.5)')};
    &:hover{
        box-shadow: 10px -10px 20px rgba(0, 0, 0, 0.5),
         0 10px 10px rgba(206, 219, 220, 0.2);
    }
`

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