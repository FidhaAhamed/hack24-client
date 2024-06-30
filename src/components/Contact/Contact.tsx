import React, { useState } from "react";
import Heading from "../heading";

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
    <div className="contact w-dvw bg-void-m min-h-dvh lg:h-dvh p-4 md:p-16">
      <div className="h-full flex flex-col md:grid md:grid-cols-2">
        <div className="h-full cols-span-1 p-4 md:p-16">
          <Heading
            heading={"Contact"}
            subheading={"Get In Touch With Us"}
          ></Heading>
          <div className="text-base text-center text-slate-300">
            Have more queries? Need to get in touch with us? Either fill the
            form with your enquiry or try contacting us with one of the options
            below.
          </div>
          <div className="flex flex-col mt-8 gap-y-4">
            <div className="bg-black  flex flex-col">
              <div className="flex px-4 p-2">
                <img className="w-14" src="/images/mail-icon.png" alt="" />
                <div className="p-4 pb-0 text-snow text-xl">Email us at :</div>
              </div>
              <div className="flex pb-6">
                <p className=" w-full text-lg text-slate-300 hover:text-orange-500 text-center">
                  <a href="mailto:someone@example.com">mail@mail.com</a>
                </p>
              </div>
            </div>
            <div className="bg-black  flex flex-col">
              <div className="flex px-4 p-2">
                <img className="w-14" src="/images/phone-icon.png" alt="" />
                <div className="p-4 pb-0 text-snow text-xl">
                  Connect with us at :
                </div>
              </div>
              <div className="flex flex-col pb-6">
                <p className=" w-full text-lg text-slate-100 text-center">
                  Name :{" "}
                  <a
                    className=" text-slate-300 hover:text-orange-500"
                    href="tel:+4733378901"
                  >
                    +47 333 78 901
                  </a>
                </p>
                <p className=" w-full text-lg text-slate-100 text-center">
                  Name :{" "}
                  <a
                    className=" text-slate-300 hover:text-orange-500"
                    href="tel:+4733378901"
                  >
                    +47 333 78 901
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-black flex flex-col"></div>
        </div>
        <div className="h-full cols-span-1 p-4">
          <div className=" p-4 md:p-12 rounded-lg  min-w-[240px] sm:min-w-[360px] md:max-w-[480px] h-full bg-black-m  border-lava  ">
            <form
              className="flex flex-col text-base gap-y-6 h-full place-items-center text-white"
              onSubmit={handleSubmit}
            >
              <div className="flex  flex-col gap-y-2 w-full">
                <label htmlFor="name">Name</label>
                <input
                  className="bg-void-m rounded-md h-10 border border-slate-700"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-y-2 w-full">
                <label htmlFor="email">Email</label>
                <input
                  className="bg-void-m rounded-md h-10 border border-slate-700"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-y-2 w-full">
                <label htmlFor="subject">Subject</label>
                <input
                  className="bg-void-m rounded-md h-10 border border-slate-700"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-y-2 w-full">
                <label htmlFor="message">What we can help you with?</label>
                <textarea
                  className="bg-void-m rounded-md border border-slate-700"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                ></textarea>
              </div>
              <button
                className="w-2/5 bg-lava-btn py-2 rounded hover:bg-orange-800 duration-300"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
