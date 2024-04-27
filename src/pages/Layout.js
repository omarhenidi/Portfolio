import { Outlet, Link } from "react-router-dom";

import logo from './assets/IMGS/Capture2.JPG';

import './assets/CSS/main.css'

const Layout = () => {
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

      <nav class="navbar navbar-expand-lg bg-light" id="menu">
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="#">Navbar</a> */}
          <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span color="black" class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">

            <nav class="navbar">
              <ul>

                <li><Link class="nava" to="/">Home</Link></li>
                <li><Link class="nava" to="/about">About</Link></li>
                <li><Link class="nava" to="/services">Services</Link></li>
                <li><Link class="nava" to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </nav>




      <Outlet />
    </>
  )
};


export default Layout;
