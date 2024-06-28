import React, { useState } from 'react';
import "./Contact.css"
import Heading from "../heading";
import phoneIcon from "../../assets/phone-icon.png"
import mailIcon from "../../assets/mail-icon.png"

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="contact">
      <div className="contact-descrptn">
        <Heading heading="Contact" subheading="Get in touch with us"></Heading>
        <p className='descrptn'>Have more queries? Need to get in touch with us? Either fill the form with your enquiry or try contacting us with one of the
         options below.</p>
         <div className="contact-block">
          <div className="contact-details">
            <img src={mailIcon} alt="mail" />
            <div className='contact-Info'>
              <p>Email us at:</p>
              <div className='contact-info'>
              <p>hack24@mail.com</p>
              </div>
            </div>
          </div>
          <div className="contact-details">
            <img src={phoneIcon} alt="phone" />
            <div className='contact-Info'>
              <p>Contact us at:</p>
              <div className='contact-info'>
              <p>Name: +91xxxxxxxxxx</p>
              <p>Name: +91xxxxxxxxxx</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form">
      <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
          <label htmlFor="message">What we can help you with?</label>
          <textarea name="message" value={formData.message} onChange={handleChange} rows={6}></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
