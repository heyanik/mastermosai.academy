import React from "react";
import Link from "@docusaurus/Link";
import "./style.css";
import Translate, { translate } from "@docusaurus/Translate";
const index = () => {
  return (
    <>
      <div className="lm-div"></div>

      <div className="programing-language-container">
        <Link className="language" to="/docs/Programming-Language/Python">
          <img src="img/python.png"></img>
          <h1>Python</h1>
        </Link>
        <Link className="language" to="/docs/Programming-Language/C++">
          <img src="img/c++.png"></img>
          <h1>C++</h1>
        </Link>
        <Link className="language" to="/docs/Programming-Language/Java">
          <img src="img/java.png"></img>
          <h1>Java</h1>
        </Link>
        <Link className="language" to="/docs/Programming-Language/JavaScript">
          <img src="img/javascript.png"></img>
          <h1>JavaScript</h1>
        </Link>
        <Link className="language" to="/docs/Programming-Language/JavaScript">
          <img src="img/javascript.png"></img>
          <h1>JavaScript</h1>
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
