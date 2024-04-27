import { Link } from "react-router-dom";

import logo from './assets/IMGS/game-g01fd82e27_640.jpg';
import logo1 from './assets/IMGS/home.png';
import logo2 from './assets/IMGS/plate1.png';
import DentalClinicLogo from './assets/IMGS/process-1.png';
import OrderLogo from './assets/IMGS/OrderLogo.png';

import './assets/CSS/main.css'

const Portfolio = () => {
    return (

        <section class="portfolio" id="portfolio">

            <h1 class="heading"> my <span>portfolio</span> </h1>
            <div class="box-container">

                <div class="box">

                    <a href="https://order-fs.online/" target="blank">
                        <img src={OrderLogo} alt="" />

                        <div class="content" style={{ opacity: "0.5" }}>
                            <h3 className="text-black fw-bold">Order Websit</h3>
                        </div>
                    </a>

                </div>
                <div class="box">
                    <a href="http://dental-clinic.000.pe/" target="blank">
                        <img src={DentalClinicLogo} alt="" />
                        <div class="content" style={{ opacity: "0.5" }}>
                            <h3 className="text-black fw-bold">Dental Clinic Websit</h3>
                        </div>
                    </a>
                </div>
                <div class="box">

                    <a href="http://tic-tac-toe-game.000.pe/" target="blank">
                        <img src={logo} alt="" />

                        <div class="content" style={{ opacity: "0.5" }}>
                            <h3 className="text-black fw-bold">Tic Tac Toe Game</h3>
                        </div>
                    </a>

                </div>

                <div class="box">

                    <a href="https://vocal-torrone-39f389.netlify.app/" target="blank">
                        <img src={logo1} alt="" />
                        <div class="content" style={{ opacity: "0.5" }}>
                            <h3 className="text-black fw-bold">Watchs Websit</h3>
                        </div>
                    </a>
                </div>
                <div class="box">

                    <a href="https://restaurantom.netlify.app/" target="blank">
                        <img src={logo2} alt="" />
                        <div class="content" style={{ opacity: "0.5" }}>
                            <h3 className="text-black fw-bold">Foods Websit</h3>
                        </div>
                    </a>
                </div>

            </div>

        </section>

    );
};

export default Portfolio;

