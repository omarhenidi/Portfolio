import { Link } from "react-router-dom";

import logo from './assets/IMGS/game-g01fd82e27_640.jpg';
import logo1 from './assets/IMGS/home.png';
import logo2 from './assets/IMGS/plate1.png';
import logo4 from './assets/IMGS/logo.png';

import './assets/CSS/main.css'



const Portfolio = () => {
    return (
        <section class="portfolio" id="portfolio">
            <h1 class="heading"> my <span>portfolio</span> </h1>
            <div class="box-container">
                <div class="box">
                    <Link class="btn" to="/Game" target="blank">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <div class="box">
                    <a class="btn" href="https://bakery-websit.netlify.app/" target="blank">
                        <img src={logo4} alt="Logo" />
                    </a>
                </div>
                <div class="box">
                    <a class="btn" href="https://vocal-torrone-39f389.netlify.app/" target="blank">
                        <img src={logo1} alt="Logo" />
                    </a>
                </div>
                <div class="box">
                    <a class="btn" href="https://soft-kringle-304b33.netlify.app/" target="blank">
                        <img src={logo2} alt="Logo" />
                    </a>
                </div>



                <div class="box">
                    <img src="image/img-3.jpg" alt="" />
                    <div class="content">
                        <h3>project 05</h3>
                    </div>
                </div>

                <div class="box">
                    <img src="image/img-4.jpg" alt="" />
                    <div class="content">
                        <h3>project 06</h3>
                    </div>
                </div>
                <div class="box">
                    <img src="image/img-4.jpg" alt="" />
                    <div class="content">
                        <h3>project 07</h3>
                    </div>
                </div>
                <div class="box">
                    <img src="image/img-4.jpg" alt="" />
                    <div class="content">
                        <h3>project 08</h3>
                    </div>
                </div>



            </div>

        </section>

    );
};

export default Portfolio;

