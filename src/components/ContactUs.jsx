import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.scss';

const ContactUs = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      })
      .then(
        (result) => {
          console.log('Message Sent! ', result.text);
          setIsSent(true);
          setIsSuccessful(true);
        },
        (error) => {
          console.log('Message Failed to Send...', error.text);
          setIsSent(true);
          setIsSuccessful(true);
        },
      );
  };

  return (
    <>
      {!isSent ? 
        <div className='contact-form'>
          <form ref={form} onSubmit={sendEmail} className='contact-form__form'>
            <label><p>Name</p></label>
            <input type="text" name="user_name" />
            <label><p>Email</p></label>
            <input type="email" name="user_email" />
            <label><p>Message</p></label>
            <textarea name="message" />
            <button>
              <span className="contact-button">
                Send
              </span>
            </button>
          </form>
        </div>
      :
        <div className='message-sent'>
          {isSuccessful ? <h1>Message has been sent!</h1> : <h1>Message failed to send</h1>}
        </div>
      }
    </>
  );
};

export default ContactUs;