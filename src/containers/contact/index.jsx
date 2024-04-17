import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import ContactUs from "../../components/contactUs";
import './styles.scss';

const Contact=()=>{
    return(
        <div id="contact" className="contact">
            <ContactUs/>
        </div>
    )
}
export default Contact;