import React, { useState } from "react";
import "./Contact.css";
import Heading from "../heading";
import phoneIcon from "../../assets/phone-icon.png";
import mailIcon from "../../assets/mail-icon.png";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="contact bg-void-m min-h-dvh p-4 md:p-16">
      <div className="h-full flex flex-col md:grid md:grid-cols-2">
        <div className="h-full cols-span-1"></div>
        <div className="h-full cols-span-1 p-4">
          <div className="form md:p-16 md:px-20">
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <label htmlFor="message">What we can help you with?</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
