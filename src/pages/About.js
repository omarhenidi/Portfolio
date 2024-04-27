import './assets/CSS/main.css'
import { Outlet, Link } from "react-router-dom";
const About = () => {

    return (
        <section class="about" id="about">
            <h1 class="heading"> <span>about</span> me </h1>
            <div class="row">
                <div class="content">
                    <h3>my name is <span>Omar Ali</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil hic eum magnam, ea nulla sit cumque explicabo dolorem illo itaque?</p>
                    <Link class="btn" to="/Contact" target="blank">

                        contact me
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;