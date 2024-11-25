// eslint-disable-next-line no-unused-vars
import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/my p.jpg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt=""></img>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt=""></img>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Iam an experienced MERN Stack Developer with over a decade of
              professional expertise in the field.Throughout my career, I have
              had the privilege of collaborating with prestigious organization
              to their success and growth.
            </p>
            <p>
              My passion for MERN Stack Development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication i
              bring to each project
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "90%" }}></hr>
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }}></hr>
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "80%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: "40%" }}></hr>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>50+</h1>
          <p>PROJECT COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
