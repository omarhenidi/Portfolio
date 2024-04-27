import { Link } from "react-router-dom";
import logo from './assets/IMGS/Capture1.png';
import './assets/CSS/main.css'

const Home = () => {
    return (
        <>
            <header class="header">
                <div class="user">
                    <img src={logo} alt="Logo" />
                    <h3>Omar Aly</h3>
                    <p>Full-Stack developer</p>
                </div>

                <nav class="navbar">
                    <a href="#home">home</a>
                    <a href="#about">about</a>
                    <a href="#services">services</a>
                    <a href="#portfolio">portfolio</a>
                    <a href="#contact">contact</a>
                </nav>
            </header>

            <nav class="navbar bg-transparent navbar-expand-sm">
                <img src="logo5.png" alt="Logo" class="navbar-brand mr-auto" />
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon mr-auto"><i class="fas fa-bars"></i></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link " href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">about</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ">portfolio</a>
                        </li>
                    </ul>
                </div>
            </nav>


            <nav class="navbar navbar-inverse navbar-static-top" role="navigation">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>

                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">
                            <li><a href="index.php">Home</a></li>
                            <li><a href="about.php">About</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="contact.php">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section class="home" id="home">
                <div class="content">
                    <h3>shaikh anas</h3>
                    <p>i am a front-end developer</p>
                    <a href="#" class="btn">download CV</a>
                </div>

                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                    <a href="#" class="fab fa-pinterest"></a>
                </div>

            </section>


            <section class="about" id="about">

                <h1 class="heading"> <span>about</span> me </h1>

                <div class="row">

                    <div class="box-container">
                        <div class="box">
                            <h3>2+</h3>
                            <p>years of experience</p>
                        </div>
                        <div class="box">
                            <h3>450+</h3>
                            <p>satisfied clients</p>
                        </div>
                        <div class="box">
                            <h3>190+</h3>
                            <p>working hours</p>
                        </div>
                        <div class="box">
                            <h3>10+</h3>
                            <p>awards won</p>
                        </div>
                    </div>

                    <div class="content">
                        <h3>my name is <span>shaikh anas</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil hic eum magnam, ea nulla sit cumque explicabo dolorem illo itaque?</p>
                        <a href="#" class="btn">contact me</a>
                    </div>

                </div>

                <div class="row">

                    <div class="progress">
                        <h3> web design <span>90%</span> </h3>
                        <div class="bar bar-1-1"><span></span></div>
                        <h3> graphic design <span>75%</span> </h3>
                        <div class="bar bar-1-2"><span></span></div>
                        <h3> UI/UX design <span>80%</span> </h3>
                        <div class="bar bar-1-3"><span></span></div>
                    </div>

                    <div class="progress">
                        <h3> HTML <span>95%</span> </h3>
                        <div class="bar bar-2-1"><span></span></div>
                        <h3> CSS <span>80%</span> </h3>
                        <div class="bar bar-2-2"><span></span></div>
                        <h3> javascript <span>65%</span> </h3>
                        <div class="bar bar-2-3"><span></span></div>
                    </div>

                </div>

            </section>



            <section class="services" id="services">

                <h1 class="heading"> my <span>services</span> </h1>

                <div class="box-container">

                    <div class="box">
                        <i class="fas fa-code"></i>
                        <h3>web design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quas delectus, laboriosam nulla dolore in.</p>
                    </div>

                    <div class="box">
                        <i class="fas fa-paint-brush"></i>
                        <h3>graphic design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quas delectus, laboriosam nulla dolore in.</p>
                    </div>

                    <div class="box">
                        <i class="fas fa-mobile"></i>
                        <h3>responsive design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quas delectus, laboriosam nulla dolore in.</p>
                    </div>

                    <div class="box">
                        <i class="fas fa-bullhorn"></i>
                        <h3>digital marketing</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quas delectus, laboriosam nulla dolore in.</p>
                    </div>

                    <div class="box">
                        <i class="fas fa-search-dollar"></i>
                        <h3>SEO marketing</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quas delectus, laboriosam nulla dolore in.</p>
                    </div>

                    <div class="box">
                        <i class="fab fa-wordpress"></i>
                        <h3>wordpress</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quas delectus, laboriosam nulla dolore in.</p>
                    </div>

                </div>

            </section>


            <section class="portfolio" id="portfolio">

                <h1 class="heading"> my <span>portfolio</span> </h1>

                <div class="box-container">

                    <div class="box">
                        <img src="image/img-1.jpg" alt="" />
                        <div class="content">
                            <h3>project 01</h3>
                        </div>
                    </div>

                    <div class="box">
                        <img src="image/img-2.jpg" alt="" />
                        <div class="content">
                            <h3>project 02</h3>
                        </div>
                    </div>

                    <div class="box">
                        <img src="image/img-3.jpg" alt="" />
                        <div class="content">
                            <h3>project 03</h3>
                        </div>
                    </div>

                    <div class="box">
                        <img src="image/img-4.jpg" alt="" />
                        <div class="content">
                            <h3>project 04</h3>
                        </div>
                    </div>


                </div>

            </section>



            <section class="contact" id="contact">

                <h1 class="heading"> <span>contact</span> me </h1>

                <form action="">
                    <input type="text" placeholder="your name" class="box" />
                    <input type="email" placeholder="your email" class="box" />
                    <input type="text" placeholder="subject" class="box" />
                    <textarea name="" class="box" placeholder="your message" id="" cols="30" rows="10"></textarea>
                    <input type="submit" value="send message" class="btn" />
                </form>

            </section>

            <div class="credits"> created by <span>mr. web designer</span> | all rights reserved </div>
        </>
    );

};




export default Home;

