/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm LowK</h1>
        <p className={styles.description}>
          I'm a backend developer with 2 years of experience .NET, Javascript.
          .NET out if you'd like to learn more!
        </p>
        <a href="mailto:ddkhanh280200@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Khanh avatar"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
