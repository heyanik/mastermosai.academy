import React from "react";
import Link from "@docusaurus/Link";
import "./style.css";
import Translate, { translate } from "@docusaurus/Translate";
const index = () => {
  return (
    <>
      <div className="skills-container">
        <Link className="skill" to="/docs/Frontend-developer/Getting-started">
          <h1>Frontend Developer</h1>
          <p>
            <Translate>
              Step by step guide to become a frontend developer
            </Translate>
          </p>
        </Link>
        <Link className="skill" to="/docs/Backend-developer/Getting-started">
          <h1>Backend Developer</h1>
          <p>
            <Translate>
              Step by step guide to become a backend developer
            </Translate>
          </p>
        </Link>
      </div>
    </>
  );
};

export default index;
