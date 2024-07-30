import { Link } from 'react-router-dom';
import './CircleButton.scss';

const CircleButton = ({logoSrc, link}) => {
    return (
        <div className="scroll">
            <svg className="circle" width="32px" height="32px" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="15"></circle>
            </svg>
            <svg className="circle_container" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="15"></circle>
            </svg>
            <Link to={link} className="logo">
                <img src={logoSrc} alt="Logo" width={30} height={30} />
            </Link>
        </div>
    );

};

export default CircleButton;