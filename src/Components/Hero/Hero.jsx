// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Hero.css";
import profile_img from "../../assets/my p.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img}></img>
      <h1>
        <span>Iam Muhammed Ramshal,</span>MERN Stack Developer Based In India
      </h1>
      <p>I am MERN Stack Developer From Kerala,India With 3 Year Experience</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
