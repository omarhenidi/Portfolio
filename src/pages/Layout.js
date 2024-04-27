import { Outlet, Link } from "react-router-dom";

import logo from './assets/IMGS/Capture2.JPG';

import './assets/CSS/main.css'
import React, { useState } from 'react';

const Layout = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  return (
    <>

      <header class="header">

        <div class="user">
          <img src={logo} alt="Logo" />
          <h3>Omar Aly</h3>
          <p>Full-Stck developer</p>
        </div>

        <nav class="navbar">
          <ul>
            <li><Link class="nava" to="/">Home</Link></li>
            <li><Link class="nava" to="/about">About</Link></li>
            <li><Link class="nava" to="/services">Services</Link></li>
            <li><Link class="nava" to="/portfolio">Portfolio</Link></li>
            <li><Link class="nava" to="/contact">Contact</Link></li>
          </ul>
        </nav>

      </header>

      <nav className="navbar navbar-expand-lg bg-light" id="menu">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            aria-controls="navbarNav"
            aria-expanded={isNavbarOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
            onClick={handleNavbarToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav">
              <li>
                <Link className="nav-link" to="/" onClick={handleNavbarToggle}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/about" onClick={handleNavbarToggle}>
                  About
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/services" onClick={handleNavbarToggle}>
                  Services
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/portfolio" onClick={handleNavbarToggle}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/contact" onClick={handleNavbarToggle}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
};


export default Layout;
