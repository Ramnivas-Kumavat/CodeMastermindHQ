import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/into.svg").default,
    description: (
      <>
        Our website's user interface is easy to understand and use, making your
        learning experience a breeze.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/focus-2.svg").default,
    description: (
      <>
        With our platform, you can focus on what truly matters - learning and
        mastering technical skills.
      </>
    ),
  },
  {
    title: "Powered by React",
    Svg: require("@site/static/img/react.svg").default,
    description: (
      <>
        React technology is at the core of our website, providing cutting-edge
        functionality and performance.
      </>
    ),
  },
  {
    title: "Daily Coding",
    Svg: require("@site/static/img/focus-3.svg").default,
    description: (
      <>
        Daily Coding is at the core of our website, providing cutting-edge
        functionality and performance.
      </>
    ),
  },
  {
    title: "Developers",
    Svg: require("@site/static/img/devloper.svg").default,
    description: (
      <>
        Developers is at the core of our website, providing codes
        functionality and performance.
      </>
    ),
  },
  {
    title: "Learning",
    Svg: require("@site/static/img/learning.svg").default,
    description: (
      <>
        Learning is at the core of our life, providing skills
        for better knowledge.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
