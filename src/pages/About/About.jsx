import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* ABOUT HEADER */}
      <section className="about-hero">
  <div className="container">
    <h1 className="section-title">About Us</h1>

    <div className="about-box">
      <p>
        Inovative Consultancy Services delivers intelligent and scalable
        software solutions for modern businesses. Our focus is to transform
        innovative ideas into impactful digital products using modern
        technologies, strategic planning, and strong technical expertise.
      </p>
    </div>

    <div className="about-box">
      <p>
        We specialize in web development, desktop applications, web
        applications, and IT consulting services that help businesses improve
        operational efficiency and build a strong digital presence. Our
        solutions are designed to be secure, scalable, and aligned with
        long-term business growth.
      </p>
    </div>

    <div className="about-box">
      <p>
        At ICS, we believe technology should simplify business processes,
        enhance productivity, and create new growth opportunities for
        organizations of all sizes.
      </p>
    </div>

  </div>
</section>

      {/* VISION & MISSION */}
      <section className="vision-mission">
        <div className="container vm-grid">

          <div className="vm-box">
            <h3>Our Vision</h3>
            <p>
              To become a trusted technology partner for businesses by
              delivering innovative, reliable, and scalable digital solutions
              that drive long-term success.
            </p>
          </div>

          <div className="vm-box">
            <h3>Our Mission</h3>
            <p>
              To empower businesses through technology by providing efficient,
              secure, and performance-driven software solutions tailored to
              their specific needs.
            </p>
          </div>

        </div>
      </section>


      {/* CORE VALUES */}
      <section className="core-values">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>

          <div className="values-grid">
            <div className="value-box">
              <h4>Innovation</h4>
              <p>We continuously explore new technologies to deliver modern solutions.</p>
            </div>

            <div className="value-box">
              <h4>Quality</h4>
              <p>Every project is built with strong attention to performance and reliability.</p>
            </div>

            <div className="value-box">
              <h4>Transparency</h4>
              <p>We maintain clear communication and honest collaboration with clients.</p>
            </div>

            <div className="value-box">
              <h4>Commitment</h4>
              <p>We focus on long-term relationships and continuous support.</p>
            </div>
          </div>
        </div>
      </section>


      {/* TECHNOLOGIES */}
      <section className="technologies">
        <div className="container">
          <h2 className="section-title">Technologies & Expertise</h2>

          <p className="about-text">
            Our team works with modern development technologies and frameworks
            to build scalable and future-ready applications.
          </p>

          <div className="tech-list">
            <span>React.js</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>JavaScript</span>
            <span>HTML & CSS</span>
            <span>Desktop Application Development</span>
            <span>API Integration</span>
            <span>Cloud Deployment</span>
          </div>
        </div>
      </section>


      {/* TEAM SECTION */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Leadership Team</h2>

          <div className="team">

            <div className="member">
              <h3>Mr.Tamilarasan N</h3>
              <p>Founder & CEO of ICS</p>
            </div>

            <div className="member">
              <h3>Mr.Sanjay Kumar S</h3>
              <p>Co-Founder & Software Developer of ICS</p>
            </div>

            <div className="member">
              <h3>Mr.Selvaganesan A</h3>
              <p>Co-Founder & Software Developer of ICS</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
