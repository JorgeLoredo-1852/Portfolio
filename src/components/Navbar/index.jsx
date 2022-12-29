import React, { useState } from "react";
import Tabs from "./tabs";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const currentURL = window.location.href 
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
  const [openNav, setOpenNav] = useState(false)

  const onCheckedNav = () => {
    setOpenNav(!openNav)
  }


  return(
    <div className="navigation">
    <input checked={openNav} onChange={onCheckedNav} type="checkbox" className="navigation__checkbox" id="navi-toggle"/>

    <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
    </label>

    <div className="navigation__background">&nbsp;</div>

    <nav className="navigation__nav">
        <ul className="navigation__list">
        {Tabs.map((tab) => {
          return (
            <li key={tab.name} className="navigation__item" onClick={onCheckedNav}>
            <NavLink
              className="navigation__link"
              to={tab.url}
            >
              <span>{tab.name}</span>
            </NavLink></li>
          );
        })}
        </ul>
    </nav>
</div>
  )
}