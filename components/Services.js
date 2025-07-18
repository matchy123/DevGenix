import Link from "next/link";

const Services = ({ extraClass = "" }) => {
  const services = [
    {
      id: 1,
      image: "assets/images/services/service-timeline1.jpg",
      title: "Web Design",
    },
    {
      id: 2,
      image: "assets/images/services/service-timeline2.jpg",
      title: "Branding",
    },
    {
      id: 3,
      image: "assets/images/services/service-timeline3.jpg",
      title: "SEO",
    },
    {
      id: 4,
      image: "assets/images/services/service-timeline4.jpg",
      title: "Motion Design",
    },
    {
      id: 5,
      image: "assets/images/services/service-timeline5.jpg",
      title: "3D Animation",
    },
  ];
  return (
    <section className={`services-area ${extraClass}`} id="services">
      <div className="container px-0 bordered-x bordered-top py-130 rpy-100">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 col-md-11">
            <div
              className="section-title mb-50 text-center"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="subtitle mt-10 mb-15">Services</span>
              <h2>Creative &amp; Modern Services</h2>
            </div>
          </div>
        </div>
        {services.map(({ id, image, title }) => (
          <div key={id} className="service-limeline-item">
            <span className="number">{id < 10 ? `0${id}` : id}</span>
            <span className="h1">
              <Link href="service-details">{title}</Link>
            </span>
            <div className="image">
              <img src={image} alt="Service" />
            </div>
            <Link href="service-details" className="detail-btn">
              <i className="far fa-arrow-right" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Services;

export const Services2 = ({ extraClass = "pb-70" }) => {
  const services = [
    {
      icon: "flaticon-seo",
      title: "Technical SEO Audits",
      description:
        "Our comprehensive technical SEO audits identify and address underlying issues that may hinder your website's performance in search results, ensuring optimal crawlability, indexability, and user experience successful SEO strategy is data-driven",
    },
    {
      icon: "flaticon-keywords",
      title: "Keyword Research",
      description:
        "We conduct in-depth keyword research uncover valuable opportunities optimize your website's relevant keywords",
    },
    {
      icon: "flaticon-search-engine",
      title: "On-Page Optimization",
      description:
        "Our on-page optimization strategies focus on optimizing key elements of your website, including meta tags, headings",
    },
    {
      icon: "flaticon-link-building",
      title: "Link Building & Outreach",
      description:
        "Through strategic link building a outreach efforts, we enhance to website's authority and credibility, earning high-quality",
    },
    {
      icon: "flaticon-www",
      title: "Local SEO Solutions",
      description:
        "For businesses targeting local audiences, our local SEO solutions optimize your they online presence for location-based",
    },
  ];

  return (
    <section className="services-area rel z-1" id="services">
      <div className={`container bordered-x px-sm-0 ${extraClass}`}>
        <div className="row justify-content-center pb-35">
          <div
            className="col-xl-7 col-lg-9 text-center"
            data-aos="zoom-in"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="section-title mb-30">
              <span className="subtitle mb-15">Our Services</span>
              <h2>Explore Popular Services</h2>
            </div>
            <p>
              From local businesses to global enterprises, we've helped
              countless brands achieve success online through customized SEO
              solutions tailored to their unique needs and goals
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          {services.map(({ icon, title, description }, i) => (
            <div
              key={i}
              className={`${i === 0 ? "col-xl-8" : "col-xl-4 col-md-6"}  `}
              data-aos="flip-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-two-item">
                <div className="icon">
                  <i className={icon} />
                </div>
                <h4>
                  <Link href="service-details">{title}</Link>
                </h4>
                <p>{description}</p>
                <Link href="service-details" className="read-more">
                  Read More <i className="far fa-arrow-right" />
                </Link>
                <div className="bg">
                  <img
                    src="assets/images/shapes/service-circle.png"
                    alt="Circle"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
