import React, { useState } from "react";
import Tabs from "./tabs";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

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

export const NewNav = ({inView3D}) => {
  const [openNav, setOpenNav] = useState(false)
  const themeM = useTheme();
  const downLg = useMediaQuery(themeM.breakpoints.down('lg'));
  const downXl = useMediaQuery(themeM.breakpoints.down('xl'));
  const downSm = useMediaQuery(themeM.breakpoints.down('sm'));

  const onCheckedNav = () => {
    setOpenNav(!openNav)
  }

  const classNameNav = () => {
    const pathname = window.location.pathname
    if(pathname == "/projects"){
      return inView3D ? "navigation__button" : "navigation__button nav--bottom"
    } else {
      return "navigation__button"
    }
  }

  const classNameBG = () => {
    const pathname = window.location.pathname
    if(pathname == "/projects"){
      return inView3D ? "navigation__background" : "navigation__background nav--bottomBG"
    } else {
      return "navigation__background"
    }
  }
  
  classNameNav()

  return(
    <div className="navigation">
    <input checked={openNav} onChange={onCheckedNav} type="checkbox" className="navigation__checkbox" id="navi-toggle"/>

    <label htmlFor="navi-toggle" className={classNameNav()} style={{cursor:downSm ? "unset" : "pointer"}}>
        <span className="navigation__icon" >&nbsp;</span>
    </label>
 
    <div className={classNameBG()}>&nbsp;</div>

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