import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import myPic from "../assets/myPic.png";
import { motion } from "framer-motion";
import SphereAnimation from "../components/SphereAnimation";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pn4jrxf', 'template_4vu743i', form.current, {
        publicKey: 'xObXUvyNAY2zgRWVL',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Your message has been sent successfully!");
          navigate('/');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Something went wrong, please try again.");
        },
      );
  };

  return (
    <div className="contact-container">
      {/* Top right hamburger menu icon */}
      {/* <div className="contact-hamburger-icon">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H20M4 12H20M4 18H20" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div> */}

      <div className="contact-content">
        <div className="contact-left">
          <h1 className="contact-heading">
            Let's start a<br />project together
          </h1>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            {/* Form Field 1 */}
            <div className="form-field">
              <span className="field-number">01</span>
              <div className="field-content">
                <label className="field-label" htmlFor="user_name">What's your name?</label>
                <input className="field-input" type="text" id="user_name" name="user_name" placeholder="John Doe *" required />
              </div>
            </div>
            <div className="field-divider"></div>

            {/* Form Field 2 */}
            <div className="form-field">
              <span className="field-number">02</span>
              <div className="field-content">
                <label className="field-label" htmlFor="user_email">What's your email?</label>
                <input className="field-input" type="email" id="user_email" name="user_email" placeholder="john@doe.com *" required />
              </div>
            </div>
            <div className="field-divider"></div>

            {/* Form Field 3 */}
            <div className="form-field">
              <span className="field-number">03</span>
              <div className="field-content">
                <label className="field-label" htmlFor="user_location">Where are you based?</label>
                <input className="field-input" type="text" id="user_location" name="user_location" placeholder="Your city, Country *" />
              </div>
            </div>
            <div className="field-divider"></div>

            {/* Form Field 4 */}
            <div className="form-field">
              <span className="field-number">04</span>
              <div className="field-content">
                <label className="field-label" htmlFor="user_services">What services are you looking for?</label>
                <input className="field-input" type="text" id="user_services" name="user_services" placeholder="Web Design, Web Development ..." />
              </div>
            </div>
            <div className="field-divider"></div>

            {/* Form Field 5 */}
            <div className="form-field">
              <span className="field-number">05</span>
              <div className="field-content">
                <label className="field-label" htmlFor="message">Your message</label>
                <textarea className="field-input textarea" id="message" name="message" rows="1" placeholder="Hello Apurv, can you help me with ... *" required />
              </div>
            </div>
            
            {/* The 'Send it!' button */}
            <div className="send-button-wrapper">
              <SphereAnimation 
                color="#455ce9"      
                hoverColor="#4a42ff" 
                size={160}           
                label="Send it!" 
              />
            </div>
          </form>
        </div>

        <div className="contact-right">
          <div className="contact-right-header">
            <img src={myPic} alt="Profile" className="contact-profile-pic" />
            <div className="arrow-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4V20M12 20L5 13M12 20L19 13" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <div className="contact-details">
            <div className="details-section">
              <span className="details-heading">CONTACT DETAILS</span>
              <a className="details-link">apurvchoudhary188@gmail.com</a>
              <a className="details-link">+91-6201641238</a>
            </div>

            {/* <div className="details-section">
              <span className="details-heading">BUSINESS DETAILS</span>
              <span className="details-text">Apurv Choudhary</span>
              <span className="details-text">coc: 92411711</span>
              <span className="details-text">VAT: NL866034080B01</span>
              <span className="details-text">Location: The Netherlands</span>
            </div> */}

            <div className="details-section">
              <span className="details-heading">SOCIALS</span>
              <a href="https://twitter.com/apurvChy" target="_blank" rel="noreferrer" className="details-link">Twitter</a>
              <a href="https://www.linkedin.com/in/apurv-choudhary-396baa17a/" target="_blank" rel="noreferrer" className="details-link">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;