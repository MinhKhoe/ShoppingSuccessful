import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState(
    localStorage.getItem("username")
      ? localStorage.getItem("username")
      : "Login"
  );
  const [show, setShow] = useState(
    localStorage.getItem("username") ? "block" : "none"
  );
  useEffect(() => {
    if (username === "Login")
      setUsername(
        localStorage.getItem("username")
          ? localStorage.getItem("username")
          : "Login"
      );
  }, [username]);

  useEffect(() => {
    console.log("username", username);
    if (username === "Login")
      setUsername(
        localStorage.getItem("username")
          ? localStorage.getItem("username")
          : "Login"
      );
  }, [username]);

  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("cart");
    setUsername("Login");
    window.location.href = "/login"
  };



  return (
    <header className="navbar">
      <div>
        <h1>
          <Link to="/" className="logo">
            Shoping Online
          </Link>
        </h1>
      </div>
      <ul className="nav-links">
        <Link to="/cart" className="cart">
          <i className="fas fa-shopping-cart" />
        </Link>
        <Link to="/signup" className="signup">
          <li>Sign Up</li>
        </Link>
        <div onClick={logout} className="login">
          <li>{username}</li>
        </div>
        <Link
          style={{ display: show }}
          to="/admin/productlist"
          className="admin"
        >
          <li>Admin</li>
        </Link>
      </ul>
    </header>
  );
};

export default Navbar;
