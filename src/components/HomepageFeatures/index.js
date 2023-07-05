import React from "react";
import Link from "@docusaurus/Link";
import "./style.css";
import Translate, { translate } from "@docusaurus/Translate";
const index = () => {
  return (
    <>
      <div className="style-programing-language">
        <span className="line1"></span>
        <p>Programing Languages</p>
        <span className="line2"></span>
      </div>
      <div className="programing-language-container">
        <Link
          className="language"
          to="/docs/Frontend-developer/Getting-started"
        >
          <img src="img/python.png"></img>
          <h1>Python</h1>
        </Link>
        <Link
          className="language"
          to="/docs/Frontend-developer/Getting-started"
        >
          <img src="img/c++.png"></img>
          <h1>C++</h1>
        </Link>
        <Link
          className="language"
          to="/docs/Frontend-developer/Getting-started"
        >
          <img src="img/java.png"></img>
          <h1>Java</h1>
        </Link>
        <Link
          className="language"
          to="/docs/Frontend-developer/Getting-started"
        >
          <img src="img/javascript.png"></img>
          <h1>JavaScript</h1>
        </Link>
      </div>
      <div className="style-skills">
        <span className="line1-skill"></span>
        <p>Skills</p>
        <span className="line2-skill"></span>
      </div>
      <div className="style-skills-container">
        <Link className="skill" to="/docs/Frontend-developer/Getting-started">
          <h1>Frontend</h1>
        </Link>
        <Link className="skill" to="/docs/Backend-developer/Getting-started">
          <h1>Backend</h1>
        </Link>
        <Link className="skill" to="/docs/Frontend-developer/Getting-started">
          <h1>Full Stack</h1>
        </Link>
        <Link className="skill" to="/docs/Backend-developer/Getting-started">
          <h1>UI/UX Design</h1>
        </Link>
      </div>
      <div className="style-community-tab">
        <h1>Community</h1>
        <p>
          Join our awesome community,
          <br /> where people learn together.
        </p>
        <div className="style-community-tab-button">
          <Link className="button">
            <img src="img/discord.png"></img>
            <p>Discord</p>
          </Link>
          <Link className="button">
            <img src="img/facebok.png"></img>
            <p>Facebook</p>
          </Link>
        </div>
      </div>
      <div className="style-footer">
        Copyright © ${new Date().getFullYear()} Mastermosai, Academy. Built with
        ♥️.
      </div>
    </>
  );
};

export default index;
