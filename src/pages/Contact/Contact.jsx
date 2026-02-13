import { useState } from "react";
import "./Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: ""
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage =
`Hello Inovative Consultancy Services,

Name: ${formData.name}
Email: ${formData.email}
Mobile: ${formData.mobile}

Requirement:
${formData.message}`;

    const url =
      `https://wa.me/917338999554?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank");

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      mobile: "",
      message: ""
    });
  };

  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            Let’s discuss your project and build powerful digital solutions
            together. Our team is ready to support your business growth.
          </p>
        </div>
      </section>

      {/* CONTACT AREA */}
      <section className="container contact-wrapper">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h3>Why Choose ICS?</h3>

          <p>
            We provide reliable and scalable software solutions tailored
            to your business requirements.
          </p>

          <ul>
            <li>✔ Fast Response & Support</li>
            <li>✔ Business-Oriented Development</li>
            <li>✔ Modern Technology Stack</li>
            <li>✔ Long-Term Technical Support</li>
          </ul>

          <a
            href="https://wa.me/917338999554"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            Chat Directly on WhatsApp
          </a>
        </div>

        {/* RIGHT SIDE FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Requirement"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send via WhatsApp</button>

          {success && (
            <div className="success-box">
              ✅ Your message has been sent successfully!
            </div>
          )}

        </form>

      </section>

    </div>
  );
}

export default Contact;
