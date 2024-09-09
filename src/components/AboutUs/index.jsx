import React from "react";
import Button from "../Button";
import People from "../../assets/people.png";
import "./style.scss";

const AboutUs = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__content">
          <h4 className="about__title">About Us</h4>
          <h2 className="about__text">Our Teammate </h2>
          <div className="about__row">
            <div className="about__column">
              <img className="about__img" src={People} />
            </div>
            <div className="about__column about__col">
              <p className="about__desc">
                We move with make a Creative Strategy for help your business
                goal, we help to improve your income by a services we have. make
                your content look interesting and make people look for your
                business
              </p>
              <p className="about__desc">
                We move with make a Creative Strategy for help your business
                goal, we help to improve your income by a services we have. make
                your content look interesting and make people look for your
                business
              </p>
              <Button>About Us</Button>
              <Button className="outline">Our Story</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
