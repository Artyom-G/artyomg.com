import './styles.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "./artyomg-logo.svg";

const LogoButton = ({logoSrc, onClick}) => {
    return (
        <div className="scroll">
            <svg className="circle" width="32px" height="32px" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="15"></circle>
            </svg>
            <svg className="circle_container" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="15"></circle>
            </svg>
                <Link to={'/'} className="logo">
                    <Logo width={30} height={30} />
                </Link>
        </div>
    );

};

export default LogoButton;