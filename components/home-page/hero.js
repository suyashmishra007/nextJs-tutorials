import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";
const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/SuyashMishra.png"
          alt="Picture of the Suyash"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi , I am Suyash</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
        cupiditate.
      </p>
    </section>
  );
};

export default Hero;
