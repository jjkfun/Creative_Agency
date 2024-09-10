import React from "react";
import Humans from "../../assets/humans.png";
import "./style.scss";

const Collaboration = () => {
  return (
    <section className="collaboration">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2 className="collaboration__title">
              Interesting Collaboration With Us?
            </h2>
            <h5 className="collaboration__subtitle">
              Help you to reach your business goal
            </h5>
            <Button>Get Started</Button>
          </div>
          <img src="Human" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
