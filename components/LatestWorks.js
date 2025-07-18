"use client";
import Link from "next/link";
import { useState } from "react";

const LatestWorks = () => {
  const projects = [
    {
      category: "WordPress",
      title: "WordPress",
      description:
        "Transform your static HTML website into a dynamic, feature-rich WordPress theme with our expert conversion services. Our team specializes in converting HTML templates functional",
      image: "assets/images/projects/letest-work1.jpg",
    },
    {
      category: "HTML",
      title: "HTML",
      description:
        "Transform your static HTML website into a dynamic, feature-rich WordPress theme with our expert conversion services. Our team specializes in converting HTML templates functional",
      image: "assets/images/projects/letest-work1.jpg",
    },
    {
      category: "React",
      title: "React",
      description:
        "Transform your static HTML website into a dynamic, feature-rich WordPress theme with our expert conversion services. Our team specializes in converting HTML templates functional",
      image: "assets/images/projects/letest-work1.jpg",
    },
    {
      category: "Angular",
      title: "Angular",
      description:
        "Transform your static HTML website into a dynamic, feature-rich WordPress theme with our expert conversion services. Our team specializes in converting HTML templates functional",
      image: "assets/images/projects/letest-work1.jpg",
    },
    {
      category: "Sass",
      title: "Sass",
      description:
        "Transform your static HTML website into a dynamic, feature-rich WordPress theme with our expert conversion services. Our team specializes in converting HTML templates functional",
      image: "assets/images/projects/letest-work1.jpg",
    },
  ];
  const [active, setActive] = useState(0);
  return (
    <section
      id="projects"
      className="latest-work-area radius-shape-top bgc-lighter py-130 rpy-100 rel z-2"
    >
      <div className="container container-1290">
        <div className="row justify-content-center">
          <div
            className="col-xl-9 co-lg-11 text-center"
            data-aos="zoom-in"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="section-title mb-70">
              <span className="subtitle color-primary mt-10 mb-15">
                Latest Works
              </span>
              <h2>
                We Have Work 3850+ Global Projects created by our team let’s
                Explore our works
              </h2>
            </div>
          </div>
        </div>
        <div className="latest-work-wrap">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`latest-work-item ${active === index ? "active" : ""}`}
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="content-wrap">
                <div className="normal-area" onClick={() => setActive(index)}>
                  <span className="category-wrap">
                    <span className="category">{project.category}</span>
                  </span>
                  <span className="title h1">{project.title}</span>
                </div>
                <div
                  className="active-area"
                  style={{ display: active === index ? "flex" : "none" }}
                >
                  <div className="image">
                    <img src={project.image} alt="Letest Work" />
                  </div>
                  <div className="content">
                    <span className="title h2">{project.title}</span>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
              <Link href="project-details" className="detail-btn">
                <i className="fal fa-arrow-right" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default LatestWorks;
