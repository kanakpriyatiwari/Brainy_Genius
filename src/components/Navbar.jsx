import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">BrainyGenius</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/Gate">GATE</Link>
              </li>
              
             
             
              <li className="nav-item">
                <Link className="nav-link" to="/ContactUs">CONTACT US</Link>
              </li>
              <li className="nav-item">
                <Link id='btn-login-register' className="btn btn-info1 nav-link" to="/Register_Login">Register/Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;