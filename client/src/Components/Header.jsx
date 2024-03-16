import React, { useState } from "react";
import { Links } from "../Utils/links";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { logout } from "../User/Login_auth";
const Header = () => {
  const [toggle, isToggle] = useState(false);
  const dispatch = useDispatch();
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
                  <NavLink exact to={data.link} activeclassname="active">
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
                <NavLink exact to={data.link} activeclassname="active">
                  {data.item}
                </NavLink>
              </li>
            );
          })}
          <NavLink
            to="/logout"
            className="log-out"
            onClick={() => dispatch(logout())}
          >
            Logout
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
