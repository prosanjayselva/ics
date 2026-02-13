import "./services.css";
import Web from "../../assets/web-img.jpg"
import appli from "../../assets/web-app-img.jpg"
import desk from "../../assets/desk-img.jpg"
import it from "../../assets/it=support-img.jpeg"



function Services() {

  const servicesData = [
    {
      title: "Web Development",
      image: Web,
      description:
        "Responsive, fast and SEO-friendly websites built with modern technologies to improve your business visibility online."
    },
    {
      title: "Web Applications",
      image: appli,
      description:
        "Custom web applications and business automation platforms designed for performance, scalability and security."
    },
    {
      title: "Desktop Applications",
      image: desk,
      description:
        "High-performance desktop applications developed for business productivity, automation and secure offline operations."
    },
    {
      title: "IT Service & Support",
      image: it,
      description:
        "Complete IT infrastructure support, maintenance and technical assistance for smooth business operations."
    }
  ];

  const processData = [
    {
      title: "01. Requirement Analysis",
      description: "Understanding business needs and defining project goals."
    },
    {
      title: "02. Design & Development",
      description: "Creating modern UI and developing scalable solutions."
    },
    {
      title: "03. Testing & Deployment",
      description: "Ensuring quality performance before final delivery."
    },
    {
      title: "04. Support & Maintenance",
      description: "Continuous support for long-term success."
    }
  ];

  return (
    <div className="services-page">

      {/* HEADER */}
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>
            We provide complete digital solutions designed to help businesses
            grow, automate operations, and build a strong online presence.
          </p>
        </div>
      </section>


      {/* SERVICES GRID */}
      <section className="container services">
        <div className="service-grid">

          {servicesData.map((service, index) => (
            <div className="card" key={index}>

              <img
                src={service.image}
                alt={service.title}
                className="service-img"
              />

              <div className="card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

            </div>
          ))}

        </div>
      </section>


      {/* WORK PROCESS */}
      <section className="process">
        <div className="container">
          <h2 className="section-title">Our Work Process</h2>

          <div className="process-grid">
            {processData.map((step, index) => (
              <div className="process-box" key={index}>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Services;
