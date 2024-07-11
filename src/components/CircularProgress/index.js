import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';

export const CirculoProgress = styled.div`
    width: 135px;
    height: 135px;
    background:#2C2F33;
    border-radius:50% ;
    overflow: 'hidden';
    font-weight: bold;
`
const ProgressCircle = ({ percentage }) => {
    return (
      <div>
        <CirculoProgress>
            <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
            // Estilos personalizados
            pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
            textColor: '#fff',
            trailColor: '#2b2b2b',
            backgroundColor: '#3e98c7',
            // Largura da linha
            strokeLinecap: 'round',
            pathTransitionDuration: 1.5,
            // Ajustes no texto
            textSize: '20px'})}
            />
        </CirculoProgress>
      </div>
    );
};

export default ProgressCircle