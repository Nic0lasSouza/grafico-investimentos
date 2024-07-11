import { Card1, CardContainer} from "../styled-components";
import ProgressCircle from './../CircularProgress/index';
import ImageDisplay from "./Imgcard";
import Members from "./Members";

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