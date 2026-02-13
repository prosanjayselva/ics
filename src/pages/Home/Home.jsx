import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const Ourser = () =>{
        Navi("/services")
    }
    const Navi = useNavigate();
    const MoveCont = ()=>{
       Navi("/Contact")
    }
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content" data-aos="fade-up">
          <h1>Building Smart Digital Solutions</h1>
          <p>
            We design modern websites, scalable web applications and powerful
            mobile applications for growing businesses.
          </p>

          <div className="hero-buttons">
            <button onClick={()=>Navi("/About")} className="primary-btn">About Us</button>
            <button onClick={Ourser} className="secondary-btn">Our Services</button>
          </div>
        </div>
      </section>


      {/* SERVICES */}
      <section className="home-services container">
        <h2 className="section-title" data-aos="fade-up" >
          Our Expertise
        </h2>

        <div className="service-boxes">
          <div className="service-card" data-aos="fade-up">
            <h3>Web Development</h3>
            <p>Fast, SEO optimized and scalable business websites.</p>
          </div>

          <div className="service-card" data-aos="fade-up" data-aos-delay="150">
            <h3>Web Applications</h3>
            <p>Custom platforms and automation systems for businesses.</p>
          </div>

          <div className="service-card" data-aos="fade-up" data-aos-delay="300">
            <h3>Mobile Applications</h3>
            <p>Android & iOS apps built for performance and engagement.</p>
          </div>
        </div>
      </section>


      {/* WHY CHOOSE */}
      <section className="why-choose">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">
            Why Choose ICS?
          </h2>

          <div className="why-grid">
            <div data-aos="fade-right">
              <h4>Modern Technologies</h4>
              <p>We use latest frameworks and scalable architecture.</p>
            </div>

            <div data-aos="fade-right" data-aos-delay="150">
              <h4>Business Focused</h4>
              <p>Solutions built to improve business performance.</p>
            </div>

            <div data-aos="fade-left">
              <h4>Reliable Support</h4>
              <p>Continuous technical support and maintenance.</p>
            </div>

            <div data-aos="fade-left" data-aos-delay="150">
              <h4>Custom Solutions</h4>
              <p>Every project tailored to your business needs.</p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="cta" data-aos="zoom-in">
        <h2>Let’s Build Your Next Digital Product</h2>
        <p>Partner with us to transform ideas into digital success.</p>
        <button className="primary-btn" onClick={MoveCont}>Get Started</button>
      </section>

    </div>
  );
}

export default Home;
