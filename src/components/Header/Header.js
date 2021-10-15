import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import header from "../../images/header.png";
import logo from "../../images/icons/logo.png";

import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const { logOut, user } = useAuth();
  console.log(user);
  return (
    <div
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})`,
      }}
      className="header"
    >
      <nav className="nav">
        <ul>
          <li>
            <img className="logo" src={logo} alt="" />
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link className="btn-book" to="/book">
              Book
            </Link>
          </li>

          {user.email && (
            <li>
              <Link onClick={logOut} className="btn-book" to="/home">
                Log out
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <div className="title-container">
        {user.email ? (
          <p>
            <p>Welcome </p>
            {user.displayName}
            <br />
            Burj Al Arab
          </p>
        ) : (
          <p>Burj Al Arab</p>
        )}

        <h2>A global icon of Arabian luxury</h2>
      </div>
    </div>
  );
};

export default Header;
