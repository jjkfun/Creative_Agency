import React from "react";
import Button from "../Button";
import Portfolioscreen from "../../assets/portfolio.png";
import "./style.scss";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="container">
        <div className="portfolio__content">
          <h5 className="portfolio__subtitle">Our Portfolio</h5>
          <h2 className="portfolio__title">What do we do</h2>
          <p className="portfolio__description">
            all projects that we have already done , proven can help to use more
            comfortable, then can used by client from our business
          </p>
          <div className="portfolio__image">
            <img src={Portfolioscreen} alt="List of our Portfolio" />
          </div>
          <Button className="outline">See All Portfolio</Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
