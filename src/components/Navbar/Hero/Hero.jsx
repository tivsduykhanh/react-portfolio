/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { getImageUrl } from "../../../utils";

export const Hero = () => {
  return (
    <section>
      <div>
        <h1>Hi, I'm Khanh</h1>
        <p>
          I'm a backend developer with 2 years of experience .NET, Javascript.
          .NET out if you'd like to learn more!
        </p>
        <a href="mailto:ddkhanh280200@gmail.com">Contact Me</a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Khanh avatar" />
    </section>
  );
};
