import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* COMPANY INFO */}
        <div className="footer-col">
          <h3>Inovative Consultancy Services</h3>
          <p>
            We provide modern web development, mobile application development
            and IT consulting services that help businesses grow in the digital era.
            Our solutions are scalable, secure and business-focused.
          </p>
        </div>


        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>


        {/* SERVICES */}
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li>Web Development</li>
            <li>Web Application Development</li>
            <li>Mobile App Development</li>
            <li>IT Service & Support</li>
          </ul>
        </div>


        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact Info</h4>

          <p>
            Email:{" "}
            <a href="mailto:techinnovativeconsult@gmail.com">
              techinnovativeconsult@gmail.com
            </a>
          </p>

          <p>
            Phone:{" "}
            <a href="tel:+917338999554">
              +91 7338999554
            </a>
          </p>

          <p>
            <a
              href="https://www.google.com/maps?q=Velachery+Tansi+Nagar+Chennai"
              target="_blank"
              rel="noopener noreferrer">
            </a>
          </p>
          <p>Velachery, Tansi Nagar,Chennai, Tamil Nadu, India</p>
        </div>

      </div>

      <p className="copyright">
        © 2026 Inovative Consultancy Services. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;
