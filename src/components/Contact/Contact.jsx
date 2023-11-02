import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const [success, setSuccess] = useState(null);

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d2xkg2q",
        "template_7vqwkoo",
        form.current,
        "BpIlfKvff6wl7G0Qe"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      )
      e.target.reset()
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to Me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                jeroalbusto00@gmail.com
              </span>

              <a href="mailto:jeroalbusto00@gmail.com" className="contact__button">
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">11 3332 7005</span>

              <a href="https://api.whatsapp.com/send?phone=1133327005" className="contact__button">
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-linkedin contact__card-icon"></i>

              <h3 className="contact__card-title">Linkedin</h3>
              <span className="contact__card-data">Jerónimo Albusto</span>

              <a href="https://www.linkedin.com/in/jerónimo-albusto/?messaging" target="_blank" className="contact__button">
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form__div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form__input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form__div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__form__input"
                placeholder="Insert your email"
              />
            </div>

            <div className="contact__form__div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                className="contact__form__input"
                name="project"
                cols=""
                rows=""
                placeholder="Write your project"
              ></textarea>
            </div>

            <button className="button button--flex">
              Send Message
              <svg
                width="30px"
                height="30px"
                viewBox="-0.5 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.33045 8.38999C0.250452 11.82 9.42048 14.9 9.42048 14.9C9.42048 14.9 12.5005 24.07 15.9305 21.99C19.5705 19.77 23.9305 6.13 21.0505 3.27C18.1705 0.409998 4.55045 4.74999 2.33045 8.38999Z"
                  stroke="#FBFCFC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.1999 9.12L9.41992 14.9"
                  stroke="#FBFCFC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </form>
            {success && "Your message has been received !!!"}
        </div>
      </div>
    </section>
  );
};

export default Contact;
