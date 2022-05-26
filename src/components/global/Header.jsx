import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  let user = "anuj";

  const navLinks = [
    { label: "Feed", path: "/" },
    { label: "Users", path: "/users" },
    { label: "Profile", path: "/profile" },
  ];

  const isActive = (pn) => {
    if (pn === pathname) return "nav_active";
  };

  return (
    <header>
      <h1>TweetX</h1>
      {user && (
        <ul>
          {navLinks.map((link, index) => (
            <Link to={`${link.path}`} key={index}>
              <li className={`header__links ${isActive(link.path)}`}>
                {link.label}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
