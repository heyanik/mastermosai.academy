import React from "react";
import Link from "@docusaurus/Link";
import "./style.css";
import Translate, { translate } from "@docusaurus/Translate";
import { Icon } from "@iconify/react";
const index = () => {
  return (
    <>
      <div className="lm-div">
        <img src="img/a.jpeg" />
      </div>

      <div className="programing-language-container">
        <Link className="language" to="/docs/Programming-Language/Python">
          <Icon icon="fluent-emoji-flat:keycap-10" className="icon" />
          <h1>Standerd</h1>
        </Link>
        <Link className="language" to="/docs/Programming-Language/C++">
          <Icon icon="fluent-emoji-flat:keycap-9" className="icon" />
          <h1>Standerd</h1>
        </Link>
        <Link className="language" to="/docs/Programming-Language/Java">
          <Icon icon="fluent-emoji-flat:keycap-8" className="icon" />
          <h1>Standerd</h1>
        </Link>
        <Link className="language" to="/docs/Programming-Language/JavaScript">
          <Icon icon="fluent-emoji-flat:keycap-7" className="icon" />
          <h1>Standerd</h1>
        </Link>
        <Link className="language" to="/docs/Programming-Language/JavaScript">
          <Icon icon="fluent-emoji-flat:keycap-6" className="icon" />
          <h1>Standerd</h1>
        </Link>
        <Link className="language" to="/docs/Programming-Language/JavaScript">
          <Icon icon="fluent-emoji-flat:keycap-5" className="icon" />
          <h1>Standerd</h1>
        </Link>
        <Link className="language" to="/docs/Programming-Language/JavaScript">
          <Icon icon="fluent-emoji-flat:keycap-4" className="icon" />
          <h1>Standerd</h1>
        </Link>
        <Link className="language" to="/docs/Programming-Language/JavaScript">
          <Icon icon="fluent-emoji-flat:keycap-3" className="icon" />
          <h1>Standerd</h1>
        </Link>
        <Link className="language" to="/docs/Programming-Language/JavaScript">
          <Icon icon="fluent-emoji-flat:keycap-2" className="icon" />
          <h1>Standerd</h1>
        </Link>
        <Link className="language" to="/docs/Programming-Language/JavaScript">
          <Icon icon="fluent-emoji-flat:keycap-1" className="icon" />
          <h1>Standerd</h1>
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
