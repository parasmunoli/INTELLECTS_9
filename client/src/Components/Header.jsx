import React, { useState } from "react";
import { Links } from "../Utils/links";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const [toggle, isToggle] = useState(false);
  return (
    <div className="navlink">
      <div className="logo">
        <h2>Jobs Search</h2>
      </div>
      <div
        className="header--small-info"
        onClick={() => {
          isToggle(!toggle);
        }}
      >
        {toggle ? <RxCross2 /> : <GiHamburgerMenu></GiHamburgerMenu>}
        <div className={toggle ? "navbar" : "navbar none"}>
          <ul>
            {Links.map((data, index) => {
              return (
                <li key={index} className="nav-items">
                  <NavLink exact to={data.link} activeClassName="active">
                    {data.item}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="navlinks__info">
        <ul>
          {Links.map((data, index) => {
            return (
              <li key={index} className="nav-items">
                <NavLink exact to={data.link} activeClassName="active">
                  {data.item}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
