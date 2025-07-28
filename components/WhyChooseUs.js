"use client";

import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";

const WhyChooseUs = () => {
  return (
    <section className="tab-area" id="why-choose">
      <div
        className="container bordered-x py-130 rpy-100 bgp-bottom"
        style={{
          backgroundImage: "url(assets/images/background/tab-bg-dots.png)",
        }}
      >
        <div
          className="section-title mb-50 text-center"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <span className="subtitle mt-10 mb-15">Why Choose Us</span>
          <h2>Why Choose Ridda Agency</h2>
        </div>
        <Tab.Container defaultActiveKey={"tabOne1"}>
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
            data-aos-delay={50}
          >
            <Nav as={"ul"} className="nav tab-style-one mb-70" role="tablist">
              {[
                {
                  eventKey: "tabOne1",
                  icon: "fas fa-user-friends",
                  text: "Experience Team",
                },
                {
                  eventKey: "tabOne2",
                  icon: "fas fa-chart-bar",
                  text: "Proven Results",
                },
                {
                  eventKey: "tabOne3",
                  icon: "fas fa-rocket-launch",
                  text: "Personalized Approach",
                },
              ].map((item, index) => (
                <Nav.Item key={index} as={"li"}>
                  <Nav.Link
                    as={"button"}
                    className="nav-link"
                    eventKey={item.eventKey}
                  >
                    <i className={item.icon} /> {item.text}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </div>
          <Tab.Content className="tab-content">
            <Tab.Pane className="tab-pane fade" eventKey="tabOne1">
              <div className="row align-items-center justify-content-center">
                <div className="col-xl-5 col-lg-6">
                  <div
                    className="content rmb-55"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <h4 className="mb-25">
                      Lead Social Media Marketing Specialist Director of Social
                      Media Strategy
                    </h4>
                    <p>
                      As a valued member of our team Teams Member' consistently
                      demonstrates a high level of expertise and dedication to
                      their role their ability to collaborate effectively with
                      colleagues
                    </p>
                    <ul className="list-style-two mt-35 mb-40">
                      <li>Senior Social Media Strategist</li>
                      <li>Chief Social Media Marketing Officer</li>
                      <li>Director of Social Media Strategy</li>
                    </ul>
                    <Link
                      href="about"
                      className="theme-btn btn-small bgc-secondary hover-secondary"
                      data-hover="Learn More"
                    >
                      <span>Learn More</span>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6">
                  <div
                    className="image"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img src="assets/images/tabs/tab-one.png" alt="Tab" />
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane className="tab-pane fade" eventKey="tabOne2">
              <div className="row gap-60 align-items-center justify-content-center">
                <div className="col-xl-5 col-lg-6">
                  <div
                    className="image rmb-55"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img src="assets/images/tabs/tab-one.png" alt="Tab" />
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6">
                  <div
                    className="content"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <h4 className="mb-25">
                      Lead Social Media Marketing Specialist Director of Social
                      Media Strategy
                    </h4>
                    <p>
                      As a valued member of our team Teams Member' consistently
                      demonstrates a high level of expertise and dedication to
                      their role their ability to collaborate effectively with
                      colleagues
                    </p>
                    <ul className="list-style-two mt-35 mb-40">
                      <li>Senior Social Media Strategist</li>
                      <li>Chief Social Media Marketing Officer</li>
                      <li>Director of Social Media Strategy</li>
                    </ul>
                    <Link
                      href="about"
                      className="theme-btn btn-small bgc-secondary hover-secondary"
                      data-hover="Learn More"
                    >
                      <span>Learn More</span>
                    </Link>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane className="tab-pane fade" eventKey="tabOne3">
              <div className="row align-items-center justify-content-center">
                <div className="col-xl-5 col-lg-6">
                  <div
                    className="content rmb-55"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <h4 className="mb-25">
                      Lead Social Media Marketing Specialist Director of Social
                      Media Strategy
                    </h4>
                    <p>
                      As a valued member of our team Teams Member' consistently
                      demonstrates a high level of expertise and dedication to
                      their role their ability to collaborate effectively with
                      colleagues
                    </p>
                    <ul className="list-style-two mt-35 mb-40">
                      <li>Senior Social Media Strategist</li>
                      <li>Chief Social Media Marketing Officer</li>
                      <li>Director of Social Media Strategy</li>
                    </ul>
                    <Link
                      href="about"
                      className="theme-btn btn-small bgc-secondary hover-secondary"
                      data-hover="Learn More"
                    >
                      <span>Learn More</span>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6">
                  <div
                    className="image"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img src="assets/images/tabs/tab-one.png" alt="Tab" />
                  </div>
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </section>
  );
};
export default WhyChooseUs;

export const WhyChooseUs2 = ({ bg = "bgc-lighter" }) => {
  const services = [
    {
      icon: "fas fa-tools",
      title: "Expertise and Experience",
      text: "With over 8+ years of experience in digital solutions, our seasoned professionals bring deep knowledge and innovative approaches to every project.",
    },
    {
      icon: "fas fa-anchor",
      title: "Customized Solutions",
      text: "We understand that every business is unique. That's why we take a tailored approach to create digital solutions that perfectly fit your specific needs.",
    },
    {
      icon: "fas fa-comments",
      title: "Transparency & Communication",
      text: "We believe in open and transparent communication with our clients every step of the way, ensuring you're always informed and involved.",
    },
  ];

  return (
    <section className={`why-choose-us ral z-1 ${bg}`}>
      <div className="container bordered-x py-100">
        <div className="row mx-xl-1 justify-content-between">
          <div
            className="col-lg-6 rmb-55"
            data-aos="fade-left"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="section-title mb-45">
              <span className="subtitle mt-10 mb-15">Why Choose Ridaa?</span>
              <h2>Digital Solutions Tailored to Your Business Success</h2>
            </div>
            <img
              className="br-5"
              src="assets/images/services/why-choose-us.jpg"
              alt="Why Choose Us"
            />
          </div>
          <div
            className="col-lg-6"
            data-aos="fade-right"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            {services.map((service) => (
              <div className="service-item style-two" key={service.title}>
                <div className="icon">
                  <i className={service.icon} />
                </div>
                <div className="content">
                  <h6>
                    <Link href="service-details">{service.title}</Link>
                  </h6>
                  <p>{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const WhyChooseUs3 = ({ className = "why-choose-two-area" }) => {
  const steps = [
    { 
      number: "01", 
      title: "Innovative Design Solutions", 
      icon: "flaticon-curve",
      description: "We create cutting-edge designs that not only look stunning but also drive results. Our creative approach ensures your brand stands out in today's competitive digital landscape."
    },
    {
      number: "02",
      title: "Expert Development Team",
      icon: "flaticon-leadership",
      description: "Our skilled developers bring years of experience and technical expertise to every project. We deliver robust, scalable solutions that grow with your business."
    },
    {
      number: "03",
      title: "100% Client Satisfaction",
      icon: "flaticon-satisfaction",
      description: "Your success is our priority. We work closely with you throughout the entire process, ensuring every detail meets your expectations and business goals."
    },
  ];

  return (
    <section className={`rel z-1 ${className}`}>
      <div className="container bordered-x pt-130 rpt-100 pb-100 rpb-70 px-sm-0">
        <div className="row justify-content-center pb-35">
          <div
            className="col-xl-5 col-lg-7 col-md-10 text-center"
            data-aos="zoom-in"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="section-title mt-10 mb-30">
              <span className="subtitle mb-15">Why Choose Us</span>
              <h2>Transform Your Vision Into Digital Reality</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {steps.map(({ number, title, icon, description }) => (
            <div
              key={number}
              className="col-xl-4 col-md-6"
              data-aos="flip-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-two-item style-two">
                <div className="icon">
                  <i className={icon} />
                </div>
                <h5>
                  <Link href="service-details">{title}</Link>
                </h5>
                <p>
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
