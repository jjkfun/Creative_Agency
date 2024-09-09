import React from "react";
import logo from "../../assets/logo.svg";
import "./style.scss";
import Button from "../Button";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <a href="/">
              <img src={logo} alt="Agency Creative" />
            </a>
          </div>
          <nav className="header__nav nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a
                  className="nav__link
              "
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a
                  className="nav__link
              "
                  href="/"
                >
                  About
                </a>
              </li>
              <li className="nav__item">
                <a
                  className="nav__link
              "
                  href="/"
                >
                  Services
                </a>
              </li>
              <li className="nav__item">
                <a
                  className="nav__link
              "
                  href="/"
                >
                  Projects
                </a>
              </li>
            </ul>
          </nav>
          <Button className="outline">Contact Us</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
