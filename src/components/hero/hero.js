import React from "react";
import "./hero.styles.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-container">
      <h1 className="project-title-header">FULLSTACK WEB DEVELOPER </h1>
      <div className="project-introduction">
        <p>
          I am aspiring software engineering graduate that is passionate about
          technology. my current work flow is focused on developing fullstack
          wep applications and creating data models
        </p>
        <p>
          Thanks for visiting and please get intouch . i'm open for a fulltime,
          part time employement and internship opportunities
        </p>
        <button className="action-to-project-btn">
          {" "}
          <Link to="/projects">view my work</Link>{" "}
        </button>
      </div>
    </section>
  );
};

export default Hero;
