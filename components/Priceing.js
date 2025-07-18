"use client";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";

const pricingData = [
  {
    title: "Regular",
    price: "$15",
    afterText: "/monthly",
    text: "Great for individuals and small projects.",
    list: [
      "Up to 5-7 pages design",
      "1 GB storage per site",
      "Standard theme customization",
      "Social media integration",
      "Basic SEO setup",
      "1 round of revisions",
    ],
  },
  {
    title: "Standard",
    price: "$29",
    afterText: "/monthly",
    text: "Great for individuals and small projects.",
    list: [
      "Up to 5-7 pages design",
      "1 GB storage per site",
      "Standard theme customization",
      "Social media integration",
      "Basic SEO setup",
      "1 round of revisions",
    ],
  },
  {
    title: "Premium",
    price: "$93",
    afterText: "/monthly",
    text: "Great for individuals and small projects.",
    list: [
      "Up to 5-7 pages design",
      "1 GB storage per site",
      "Standard theme customization",
      "Social media integration",
      "Basic SEO setup",
      "1 round of revisions",
    ],
  },
  {
    title: "Diamond",
    price: "$107",
    afterText: "/monthly",
    text: "Great for individuals and small projects.",
    list: [
      "Up to 5-7 pages design",
      "1 GB storage per site",
      "Standard theme customization",
      "Social media integration",
      "Basic SEO setup",
      "1 round of revisions",
    ],
  },
];

const Priceing = () => {
  return (
    <section
      id="pricing"
      className="latest-work-area radius-shape-top pt-130 rpt-100 pb-100 rpb-70 rel z-2"
      style={{
        backgroundImage: "url(assets/images/background/hero-five-bg.png)",
      }}
    >
      <div className="container container-1290">
        <Tab.Container defaultActiveKey={"monthly"}>
          <div className="row justify-content-center text-white">
            <div
              className="col-xl-6 co-lg-8 col-md-10 text-center"
              data-aos="zoom-in"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title mb-50">
                <span className="subtitle mt-10 mb-15">Pricing Package</span>
                <h2>Premium Web Design Services Without the Premium Price</h2>
              </div>
            </div>
            <div
              className="col-lg-7 text-center"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <Nav as={"ul"} className="nav pricing-tab mb-65" role="tablist">
                <Nav.Item as={"li"}>
                  <Nav.Link
                    as={"button"}
                    className="nav-link"
                    eventKey="monthly"
                  >
                    Monthly
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as={"li"}>
                  <Nav.Link
                    as={"button"}
                    className="nav-link"
                    eventKey="yearly"
                  >
                    Yearly
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <span className="save-percent">Save 25%</span>
            </div>
          </div>
          <Tab.Content className="tab-content">
            <Tab.Pane className="tab-pane fade" eventKey="monthly">
              <div className="row justify-content-center">
                {pricingData.map((item, index) => (
                  <div
                    key={index}
                    className="col-xl-3 col-lg-4 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                    data-aos-delay={index * 50}
                  >
                    <div className="pricing-item">
                      <h6 className="title">{item.title}</h6>
                      <div className="text">{item.text}</div>
                      <span className="price">
                        {item.price}
                        <span className="after-text">{item.afterText}</span>
                      </span>
                      <Link
                        href="contact"
                        className="theme-btn style-two"
                        data-hover="Choose Package"
                      >
                        <span>Choose Package</span>
                      </Link>
                      <ul className="list-style-two small">
                        {item.list.map((listItem, listIndex) => (
                          <li key={listIndex}>{listItem}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Pane>
            <Tab.Pane className="tab-pane fade" eventKey="yearly">
              <div className="row justify-content-center">
                {pricingData.map((item, index) => (
                  <div
                    key={index}
                    className="col-xl-3 col-lg-4 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                    data-aos-delay={index * 50}
                  >
                    <div className="pricing-item">
                      <h6 className="title">{item.title}</h6>
                      <div className="text">{item.text}</div>
                      <span className="price">
                        {item.price}
                        <span className="after-text">{item.afterText}</span>
                      </span>
                      <Link
                        href="contact"
                        className="theme-btn style-two"
                        data-hover="Choose Package"
                      >
                        <span>Choose Package</span>
                      </Link>
                      <ul className="list-style-two small">
                        {item.list.map((listItem, listIndex) => (
                          <li key={listIndex}>{listItem}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </section>
  );
};
export default Priceing;

export const Priceing2 = () => {
  const pricingData = [
    {
      title: "Regular",
      price: "$15",
      afterText: "/per month user",
      text: "Great for individuals and small projects.",
      list: [
        "Up to 5-7 pages design",
        "1 GB storage per site",
        "Standard theme customization",
        "Social media integration",
        "Basic SEO setup",
        "1 round of revisions",
      ],
    },
    {
      title: "Standard",
      price: "$45",
      afterText: "/per month user",
      text: "Great for individuals and small projects.",
      list: [
        "Up to 5-7 pages design",
        "1 GB storage per site",
        "Standard theme customization",
        "Social media integration",
        "Basic SEO setup",
        "1 round of revisions",
      ],
    },
    {
      title: "Premium",
      price: "$105",
      afterText: "/per month user",
      text: "Great for individuals and small projects.",
      list: [
        "Up to 5-7 pages design",
        "1 GB storage per site",
        "Standard theme customization",
        "Social media integration",
        "Basic SEO setup",
        "1 round of revisions",
      ],
    },
  ];
  return (
    <section className="pricing-area rel z-2">
      <div className="container px-sm-0 bordered-x pt-130 rpt-100 pb-100 rpb-70">
        <Tab.Container defaultActiveKey="monthly">
          <div className="row justify-content-center">
            <div
              className="col-xl-7 co-lg-9 col-md-11 text-center"
              data-aos="zoom-in"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title mb-50">
                <span className="subtitle mt-10 mb-15">Pricing Package</span>
                <h2>Premium Web Design Services Without the Premium Price</h2>
              </div>
            </div>
            <div
              className="col-lg-7 text-center"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <Nav as="ul" className="nav pricing-tab mb-55" role="tablist">
                <Nav.Item as={"li"}>
                  <Nav.Link
                    as={"button"}
                    className="nav-link"
                    eventKey="monthly"
                  >
                    Monthly
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as={"li"}>
                  <Nav.Link
                    as={"button"}
                    className="nav-link"
                    eventKey="yearly"
                  >
                    Yearly
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <span className="save-percent">Save 25%</span>
            </div>
          </div>
          <Tab.Content className="tab-content">
            <Tab.Pane className="tab-pane fade" eventKey="monthly">
              <div className="row justify-content-center">
                {pricingData.map((item, index) => (
                  <div
                    className="col-xl-4 col-md-6"
                    key={index}
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="pricing-item style-two">
                      <h6 className="title">{item.title}</h6>
                      <span className="price">
                        {item.price}
                        <span className="after-text">{item.afterText}</span>
                      </span>
                      <div className="text">{item.text}</div>
                      <ul className="list-style-two">
                        {item.list.map((listItem, index) => (
                          <li key={index}>{listItem}</li>
                        ))}
                      </ul>
                      <Link
                        href="contact"
                        className="theme-btn style-three"
                        data-hover="Choose Package"
                      >
                        <span>Choose Package</span>
                      </Link>
                      <div className="note-text">No credit card required</div>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Pane>
            <Tab.Pane className="tab-pane fade" eventKey="yearly">
              <div className="row justify-content-center">
                {pricingData.map((item, index) => (
                  <div
                    className="col-xl-4 col-md-6"
                    key={index}
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="pricing-item style-two">
                      <h6 className="title">{item.title}</h6>
                      <span className="price">
                        {item.price}
                        <span className="after-text">{item.afterText}</span>
                      </span>
                      <div className="text">{item.text}</div>
                      <ul className="list-style-two">
                        {item.list.map((listItem, index) => (
                          <li key={index}>{listItem}</li>
                        ))}
                      </ul>
                      <Link
                        href="contact"
                        className="theme-btn style-three"
                        data-hover="Choose Package"
                      >
                        <span>Choose Package</span>
                      </Link>
                      <div className="note-text">No credit card required</div>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </section>
  );
};
