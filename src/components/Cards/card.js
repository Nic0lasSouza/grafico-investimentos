import styled from "styled-components";
import ProgressCircle from './../CircularProgress/index';
import ImageDisplay from "./Imgcard";
import Members from "./Members";

export const CardContainer = styled.div`
    margin-left:180px;
    margin-top: 10px;
`
export const Card1 = styled.div`
    position:relative;
    width: 200px;
    height:200px;
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
const Cards = (props) =>{
    return(
        <CardContainer>
            <div className="cards">
                <Card1>
                    <p>{props.nome}</p>
                    {/* <ImgProject src="/img/AutoDesk.png" alt="name project"/> */}
                    <ImageDisplay src={props.img} alt={props.alt} style={props.style}/>
                    <p>Team Members</p>
                    <Members/>
                    <ProgressCircle percentage={70}/>
                </Card1>
            </div>
        </CardContainer>
    )
}
export default Cards;