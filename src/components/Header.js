import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid">
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "black" }}
      >
        <img src="https://i.postimg.cc/Dz0dMqMB/hotline-icon-png-and-vector-for-free-download-pngtree-hotline-png-512-512.png" alt="" style={{height:40}} />
        <NavLink to="/" className="btn ml-5" style={{ color: "white"}}>
          Home
        </NavLink>

        <NavLink to="/add" className="btn" style={{ color: "white" }}>
          Add
        </NavLink>
        <NavLink to="/about" className="btn" style={{ color: "white" }}>
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
