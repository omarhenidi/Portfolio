import { Link } from "react-router-dom";
import './assets/CSS/main.css'

const Home = () => {
    return (
        <section class="home" id="home">
            <div class="content">
                <h3>Omar Ali</h3>
                <p>i am a Full-Stak developer</p>

                <Link class="btn" to={require("./docs/CV.pdf")} target="blank">
                    download CV
                </Link>

            </div>

            <div class="share">
                <a href="https://www.facebook.com/omarhenidi" class="fab fa-facebook-f" target="_blank"></a>
                <a href="https://twitter.com/omarhenidi" class="fab fa-twitter" target="_blank"></a>
                <a href="https://www.instagram.com/omarhenidi" class="fab fa-instagram" target="_blank"></a>
                <a href="https://www.linkedin.com/in/omarhenidi" class="fab fa-linkedin" target="_blank"></a>
                <a href="https://github.com/omarhenidi" class="fab fa-github" target="_blank"></a>
            </div>

        </section>
    );
};

export default Home;