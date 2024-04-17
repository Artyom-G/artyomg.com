import './styles.scss';


const PageHeaderContent = (props) => {
    const {headerText, icon} = props;

    return(
        <div className='banner'>
            <div>
                {headerText}
            </div>
        </div>
    );

};

export default PageHeaderContent;