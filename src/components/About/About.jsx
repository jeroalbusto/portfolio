import React from "react";
import "./about.css";
import AboutImg from "../../../public/coding2.png";
import CV from "../../../public/cv-tecno.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis
            quo nesciunt modi ex aut cupiditate cumque quaerat minima vitae
            itaque sunt reiciendis, recusandae quasi magni expedita eius porro
            quis.
          </p>

          <a download="" href={CV} className="button button--flex">
            Download CV
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 76 76"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              baseProfile="full"
              enable-background="new 0 0 76.00 76.00"
              xml:space="preserve"
            >
              <path
                fill="var(--container-color)"
                fill-opacity="1"
                stroke-width="0.2"
                stroke-linejoin="round"
                d="M 35,48L 50,48L 50,34L 38,34L 38,21L 23,21L 23,55L 32,55L 32,51C 32,49.3432 33.3431,48 35,48 Z M 31.9999,59L 19,59L 19,17L 41.25,17L 54,29.75L 53.9999,48C 55.6568,48 56.9999,49.3432 56.9999,51L 56.9999,59C 56.9999,60.6569 55.6568,62 53.9999,62L 34.9999,62C 33.3431,62 31.9999,60.6569 31.9999,59 Z M 41,22.25L 41,30L 48.75,30L 41,22.25 Z M 35,59L 37,59L 37,56L 38,56C 39.6569,56 41,55.1569 41,53.5C 41,51.8431 39.6569,51 38,51L 35,51L 35,59 Z M 38,54L 37,54L 37,53L 38,53C 38.5523,53 39,52.9477 39,53.5C 39,54.0523 38.5523,54 38,54 Z M 49,59L 51,59L 51,56L 53,56L 53,54L 51,54L 51,53L 54,53L 54,51L 49,51L 49,59 Z M 42,51L 42,59L 45,59C 46.6569,59 48,57.6568 48,56L 48,54C 48,52.3431 46.6569,51 45,51L 42,51 Z M 46,56C 46,56.5523 45.5523,57 45,57L 44,57L 44,53L 45,53C 45.5523,53 46,53.4477 46,54L 46,56 Z "
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};


export default About;