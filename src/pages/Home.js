import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './assets/CSS/main.css'

export const Home = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section class="home" id="home">

            <div class="content">
                <h3>Omar Ali</h3>
                <p>i am a Full-Stak developer</p>

                <Link class="btnn" to={require("./docs/CV.pdf")} target="blank">
                    download CV
                </Link>

            </div>

            <div class="share">
                <a href="https://www.facebook.com/profile.php?id=100010820747904" class="fab fa-facebook-f"></a>
                <a href="https://twitter.com/omarhenedi" class="fab fa-twitter"></a>
                <a href="https://www.instagram.com/omarhenidi/" class="fab fa-instagram"></a>
                <a href="https://www.linkedin.com/in/omar-ali-290170209/" class="fab fa-linkedin"></a>
                <a href="https://github.com/omarhenedi" class="fab fa-github"></a>
            </div>

        </section>
    )
}
export default Home;
