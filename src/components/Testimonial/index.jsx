import React from "react";
import Model from "../../assets/woman.png";
import "./style.scss";

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="container">
        <div className="testimonial__content">
          <h5 className="portfolio__subtitle">Testimonial</h5>
          <h2 className="testimonial__title">People Talk about us</h2>
        </div>
        <div className="col-6 row">
          <div className="col-6 testimonial__item">
            <div className="testimonial__icon ">
              <img src={Model} alt="pc" />
              <div className="testimonial__character">
                <h3 className="testimonial__ctitle">Angel Rose</h3>
                <h4 className="testimonial__csubtitle">Creative Manager</h4>
              </div>
            </div>
            <h4 className="testimonial__item-description">
              There are many variations passages of Lorem Ipsum majority some by
              words which don't look .
            </h4>
          </div>
          <div className="col-6 testimonial__item">
            <div className="testimonial__icon ">
              <img src={Model} alt="pc" />
              <div className="testimonial__character">
                <h3 className="testimonial__ctitle">Angel Rose</h3>
                <h4 className="testimonial__csubtitle">Creative Manager</h4>
              </div>
            </div>
            <h4 className="testimonial__item-description">
              There are many variations passages of Lorem Ipsum majority some by
              words which don't look .
            </h4>
          </div>
          <div className="col-6 testimonial__item">
            <div className="testimonial__icon ">
              <img src={Model} alt="pc" />
              <div className="testimonial__character">
                <h3 className="testimonial__ctitle">Angel Rose</h3>
                <h4 className="testimonial__csubtitle">Creative Manager</h4>
              </div>
            </div>
            <h4 className="testimonial__item-description">
              There are many variations passages of Lorem Ipsum majority some by
              words which don't look .
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
