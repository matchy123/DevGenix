"use client";
import Link from "next/link";
import { useState } from "react";

const CaseStudies = () => {
  const [active, setActive] = useState(1);

  return (
    <section id="case-study" className="case-studies-area py-100">
      <div className="container container-1290">
        <div className="row justify-content-between align-items-end pb-25">
          <div
            className="col-lg-8"
            data-aos="fade-left"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="section-title mb-25">
              <h2>Popular Case Studies</h2>
            </div>
          </div>
          <div
            className="col-lg-4 text-lg-end"
            data-aos="fade-right"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <Link
              href="services"
              className="theme-btn color-white mb-25"
              data-hover="View All Cases"
            >
              <span>View All Cases</span>
            </Link>
          </div>
        </div>
        <div className="case-studies-wrap">
          {[
            {
              id: 1,
              image: "assets/images/case-studies/case-study1.jpg",
              title: "Generate Demand with Video",
              description:
                "This approach taps into the growing preference visual content by creating engaging, informative, and often entertaining",
            },
            {
              id: 2,
              image: "assets/images/case-studies/case-study2.jpg",
              title: "Generate Demand with Video",
              description:
                "This approach taps into the growing preference visual content by creating engaging, informative, and often entertaining",
            },
            {
              id: 3,
              image: "assets/images/case-studies/case-study3.jpg",
              title: "Generate Demand with Video",
              description:
                "This approach taps into the growing preference visual content by creating engaging, informative, and often entertaining",
            },
            {
              id: 4,
              image: "assets/images/case-studies/case-study4.jpg",
              title: "Generate Demand with Video",
              description:
                "This approach taps into the growing preference visual content by creating engaging, informative, and often entertaining",
            },
          ].map((study) => (
            <div
              key={study.id}
              className={`case-study-item ${
                study.id == active ? "active" : ""
              }`}
              style={{
                backgroundImage: `url(${study.image})`,
              }}
              onMouseEnter={() => setActive(study.id)}
            >
              <a
                href="https://www.youtube.com/watch?v=TfU0qjuZkJ4"
                className="mfp-iframe video-play"
              >
                <i className="fas fa-play" />
              </a>
              <div className="content">
                <h4>{study.title}</h4>
                <p>{study.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CaseStudies;

export const CaseStudies2 = () => {
  const caseStudies = [
    {
      image: "assets/images/blog/case-study1.jpg",
      meta: "SEO Strategy",
      title: "How to Improve Your Website’s Loading Speed Performance",
      link: "service-details",
    },
    {
      image: "assets/images/blog/case-study2.jpg",
      meta: "Keyword",
      title: "Unlocking the Power of Paid Ads A Social Media Marketing",
      link: "service-details",
    },
    {
      image: "assets/images/blog/case-study3.jpg",
      meta: "Link Building",
      title: "Boosting Local Visibility a Client Dominated Market with SEO",
      link: "service-details",
    },
  ];

  return (
    <section id="case-study" className="case-studies-area bgc-lighter rel z-1">
      <div className="container bordered-x bordered-top pt-110 pb-70 px-sm-0">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div
              className="section-title text-center mb-50"
              data-aos="zoom-in"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="subtitle mb-15">Case Studies</span>
              <h2>Explore Success Stories</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {caseStudies.map((study, i) => (
            <div
              key={i}
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
              data-aos-delay={i * 50}
            >
              <div className="blog-item style-two">
                <div className="image">
                  <img src={study.image} alt="Case Study" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="fas fa-tags" /> <a href="#">{study.meta}</a>
                    </li>
                  </ul>
                  <h5>
                    <a href={study.link}>{study.title}</a>
                  </h5>
                  <Link href={study.link} className="read-more">
                    Case Details <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
