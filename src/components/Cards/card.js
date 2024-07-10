import { Card1, CardContainer, ImgProject } from "../styled-components";
import ProgressCircle from './../CircularProgress/index';

const Cards = () =>{
    return(
        <CardContainer>
            <div className="cards">
                <Card1>
                    <p>Project:</p>
                    <ImgProject src="/img/AutoDesk.png" alt="name project"/>
                    <ProgressCircle percentage={70}/>
                </Card1>
            </div>
        </CardContainer>
    )
}

export default Cards;