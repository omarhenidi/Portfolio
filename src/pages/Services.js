import './assets/CSS/main.css'

const Services = () => {
    return (
        <section class="services" id="services">
            <h1 class="heading"> my <span>services</span> </h1>

            <div class="box-container">

                <div class="box">
                    <i class="fas fa-code"></i>
                    <h3>Web Application</h3>
                    <p>Our Web Application service combines React.js or Vue.js with RESTful APIs to deliver dynamic and engaging user experiences. With expertise in these frameworks, we create scalable, visually stunning applications that integrate seamlessly with external systems. From e-commerce platforms to enterprise solutions, our service ensures modern and user-friendly experiences.</p>
                </div>
                <div class="box">
                    <i class="fas fa-mobile"></i>
                    <h3>Responsive Design</h3>
                    <p>Our Responsive Design service utilizes React.js or Vue.js to create visually stunning websites that seamlessly adapt to any screen size. We ensure consistent and optimal user experiences across devices, with automatic layout adjustments and intuitive interfaces. Enhance your online presence and drive business growth with our accessible and engaging responsive design approach.</p>
                </div>

                <div class="box">
                    <i class="fas fa-code"></i>
                    <h3>Api For Mobile App</h3>
                    <p>Our API for mobile apps service, powered by Laravel, enables seamless integration of mobile applications with a scalable backend infrastructure. Leveraging Laravel's robust framework, we develop efficient and feature-rich APIs tailored to the needs of mobile app ecosystems. Our secure and high-performance APIs optimize app performance, enhance user experience, and drive business growth.</p>
                </div>
                <div class="box">
                    <i class="fas fa-code"></i>
                    <h3>Desktop Application</h3>
                    <p>Our Desktop Application service provides efficient and user-friendly software development using Python and Tkinter for UI. We create custom applications tailored to your needs, leveraging Python's capabilities and Tkinter's intuitive interface toolkit. Our skilled team ensures seamless integration, enhancing productivity and streamlining operations.</p>
                </div>
            </div>

        </section>
    )
};


export default Services;