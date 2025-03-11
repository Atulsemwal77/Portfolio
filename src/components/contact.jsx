import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiMail, FiPhoneCall, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_p0s66y6", "template_8niilff", form.current, {
        publicKey: "bVWYdTGMx2ND0mNpp",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <h2 id="contact" className="text-4xl  font-bold text-center mt-5 ">
        <span className="text1"> Get in touch</span>
      </h2>
      <div className="text-white py-16 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}

        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-3xl font-bold ">
            Let's talk
          </h2>
          <p className="mt-4 text-gray-200 max-w-lg ">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="mt-6 space-y-3 text-gray-300">
            <p className="flex items-center space-x-2">
              <FiMail className="hover:text-blue-500 transition-colors duration-300 cursor-pointer"/>
              <a
                href=""
                className="hover:underline"
              >
                atulsemwal77@gmail.com
              </a>
            </p>
            <p className="flex items-center space-x-2">
              <FiPhoneCall className="hover:text-blue-600 transition-colors duration-300 cursor-pointer"/>
              <span >+91 9696779316</span>
            </p>
            <p className="flex items-center space-x-2">
              <FiMapPin className="hover:text-blue-600 transition-colors duration-300 cursor-pointer"/>
              <span>Dehradun, Uttarakhand</span>
            </p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="md:w-1/2 ">
          
          <form className="md:space-y-6 space-y-4" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Enter your name"
              name="form_name"
              required
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            <input
              type="email"
              placeholder="Enter your email"
              name="form_email"
              required
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            <textarea
              placeholder="Enter your message"
              name="message"
              rows="5"
              required
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>

            <button
              type="submit"
              className="md:w-1/2 w-full py-3  text-white font-bold rounded-lg hover:opacity-80 transition btn1"
              onClick={() => alert("Email sent successfully!")}
            >
              Submit now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

