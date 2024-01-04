import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures/index.js";
import styles from "./index.module.css";
import Translate from "@docusaurus/Translate";
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("header-container", styles.heroBanner)}>
      <div className={styles.continer}>
        <img src="img/hero_icon.png"></img>
        <h1 className={styles.tagline}>
          <Translate>{siteConfig.tagline}</Translate>
        </h1>
        <p className={styles.hero_tagline}>
          <Translate>
            A free Open Source community where people can learn new things.
          </Translate>
        </p>
        {/* <div className={styles.buttons}>
          <Link className={styles.text} to="/docs/intro">
            {" "}
            Learn more
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Open source learning plateform in Bangladesh"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
