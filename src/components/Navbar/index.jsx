import React from "react";
import Tabs from "./tabs";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const currentURL = window.location.href 
  console.log(currentURL)
  return (
    <div className="navbar">
        <div className="navbar--container">
            <div className="navbar--container__text">
                JGx
            </div>
        </div>
      <div className="navbar--container">
        {Tabs.map((tab) => {
          return (
            <Link
              className="navbar--container__text navbar--tab"
              to={tab.url}
              key={tab.name}
            >
              {tab.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export const NewNav = () => {
  return(
    <div className="navigation">
    <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>

    <label for="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
    </label>

    <div className="navigation__background">&nbsp;</div>

    <nav className="navigation__nav">
        <ul className="navigation__list">
        {Tabs.map((tab) => {
          return (
            <Link
              className="navigation__item"
              to={tab.url}
              key={tab.name}
            >
              <a href="#" className="navigation__link"><span>{tab.name}</span></a>
            </Link>
          );
        })}
        </ul>
    </nav>
</div>
  )
}