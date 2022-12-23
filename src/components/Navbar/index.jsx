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