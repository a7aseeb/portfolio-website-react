import "./contact.css"
import { AiOutlineMail, AiOutlineWhatsApp, AiOutlineInstagram } from 'react-icons/ai'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xwz13mh', 'template_6b39qev', form.current, 'U7gX0XC1Bc_ZIiSWI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
      
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>work.ahaseeb@gmail.com</h5>
            <a href="mailto:work.ahaseeb@gmail.com" target="_blank"> Send me an email</a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <a href="https://api.whatsapp.com/send?phone=00919704340594" target="_blank">Send me an email</a>
          </article>
          <article className="contact__option">
            <AiOutlineInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>work.ahaseeb@gmail.com</h5>
            <a href="mailto:work.ahaseeb@gmail.com" target="_blank">Send me an email</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form}  onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact