import './styles.scss';


const buttonText = (props) => {
    const {headerText, icon} = props;

    return(
        <div className='buttonText'>
            <div class="scroll">  
                <svg class="circle" width="32px" height="32px" viewBox="0 0 32 32">
                    <circle cx="16" cy="16" r="15"></circle>
                </svg>
                <svg class="circle_container" width="32px" height="32px" viewBox="0 0 32 32">
                    <circle cx="16" cy="16" r="15"></circle>
                </svg>
                <svg class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16">

                </svg>
            </div>
        </div>
    );

};

export default buttonText;