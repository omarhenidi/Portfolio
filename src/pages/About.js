import './assets/CSS/main.css'
import { Outlet, Link } from "react-router-dom";
const About = () => {

    return (
        <section class="about" id="about">
            <h1 class="heading"> <span>about</span> me </h1>
            <div class="row">
                <div class="content">
                    <h3>my name is <span>Omar Ali</span></h3>
                    <p>I’m A Developer With Over 3 Years Of Experience. I Have Worked On Both Small And Large Projects, As Well As In Teams And Independently. My Skills Include Programming In Multiple Languages, Databases, Code Versioning Tools, And More. I Am Always Eager To Learn New Technologies And Take On Challenging Tasks.</p>

                    <Link class="btnn" to="/Contact" target="blank">
                        contact me
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;