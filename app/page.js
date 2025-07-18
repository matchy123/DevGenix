import Blog from "@/components/Blog";
import CounterItems from "@/components/CounterItems";
import CTA from "@/components/CTA";
import Services from "@/components/Services";
import ClientSlider from "@/components/sliders/ClientSlider";
import { TestimonialSlider1 } from "@/components/sliders/TestimonialSlider";
import RiddaLayout from "@/layout/RiddaLayout";
import Link from "next/link";

const page = () => {
  return (
    <RiddaLayout>
      {/* Hero Area Start */}
      <section className="hero-area-four bgc-black text-white rel z-2">
        <div className="container px-xxl-0 bordered-x pt-180 rpt-90">
          <div className="row pt-50">
            <div className="col-xl-10">
              <div
                className="hero-content-four"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h1>Building Responsive Websites</h1>
                <p>
                  Web design is a critical aspect of creating an effective
                  online presence for any business or individual. A
                  well-designed website not only reflects a brand's identity but
                  also enhances user experience, ensuring visitors can easily
                </p>
                <Link
                  href="/project-grid"
                  className="theme-btn mt-30 rmt-15 mb-65 rmb-30"
                >
                  <span>Explore Our Projects</span>
                </Link>
                <h5>5m+ Trusted Clients</h5>
                <div className="trusted-clients mt-25">
                  <img
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-delay={50}
                    src="assets/images/hero/author1.jpg"
                    alt="Author"
                  />
                  <img
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-delay={100}
                    src="assets/images/hero/author2.jpg"
                    alt="Author"
                  />
                  <img
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-delay={150}
                    src="assets/images/hero/author3.jpg"
                    alt="Author"
                  />
                  <img
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-delay={200}
                    src="assets/images/hero/author4.jpg"
                    alt="Author"
                  />
                  <img
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-delay={250}
                    src="assets/images/hero/author5.jpg"
                    alt="Author"
                  />
                  <img
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-delay={300}
                    src="assets/images/hero/author6.jpg"
                    alt="Author"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-area-shapes">
          <div className="shape">
            <img src="assets/images/shapes/hero-shape.png" alt="Shape" />
          </div>
          <div className="hero-image">
            <img src="assets/images/hero/hero-four.jpg" alt />
          </div>
        </div>
      </section>
      {/* Hero Area End */}
      {/* Counter Area start */}
      <div className="counter-area bgc-black pt-120 rpt-100 rel z-1">
        <div className="row gap-80 align-items-center">
          <div
            className="col-xxl-5"
            data-aos="fade-right"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="counter-left-image">
              <img src="assets/images/counter/counter.jpg" alt="Counter" />
            </div>
          </div>
          <div className="col-xxl-7">
            <CounterItems />
          </div>
        </div>
        <div className="container text-white blank-container bordered-x" />
        <div className="counter-shapes">
          <div className="shape">
            <img src="assets/images/shapes/counter.png" alt="Shape" />
          </div>
          <span className="marquee-wrap">
            <span className="marquee-inner left">
              <span className="marquee-item">Web Design Agency</span>
            </span>
            <span className="marquee-inner left">
              <span className="marquee-item">Web Design Agency</span>
            </span>
            <span className="marquee-inner left">
              <span className="marquee-item">Web Design Agency</span>
            </span>
          </span>
        </div>
      </div>
      {/* Counter Area end */}
      {/* About Area start */}
      <section className="about-area rel z-1">
        <div className="container bordered-x pt-130 rpt-100 pb-100">
          <div className="row px-xl-5 justify-content-between align-items-center">
            <div className="col-xl-4 col-lg-5">
              <div className="about-circles rmb-55">
                <div
                  className="circle"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  Development
                </div>
                <div
                  className="circle mx-auto bgc-black text-white"
                  data-aos="zoom-in"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  Web Design
                </div>
                <div
                  className="circle ms-auto bgc-primary"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  Mobile Apps Design
                </div>
              </div>
            </div>
            <div
              className="col-lg-7"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="about-content-four">
                <div className="section-title mb-40">
                  <span className="subtitle mt-10 mb-15">About Agency</span>
                  <h2>
                    Technology Transforming Ideas into Reality Empowering Brands
                    with Engaging <span>Ridda</span> Agency
                  </h2>
                </div>
                <p>
                  At our web design agency, we specialize in creating visually
                  stunning and highly functional websites that help businesses
                  stand out in the digital world. Our team of talented designers
                  and developers are passionate about crafting
                </p>
                <ul className="list-style-one my-30">
                  <li>Digital Product Design</li>
                  <li>SEO Optimization</li>
                  <li>Web Development</li>
                  <li>Mobile Apps Design</li>
                </ul>
                <Link
                  href="/project-list"
                  className="theme-btn style-two"
                  data-hover="Explore Our Projects"
                >
                  <span>Explore Our Projects</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container bordered-x px-0">
          <img src="assets/images/about/about.png" alt="About" />
        </div>
      </section>
      {/* About Area end */}
      {/* Services Area Start */}
      <Services />
      {/* Services Area End */}
      {/* Working Process Area Start */}
      <section className="working-process-area bgc-black text-white rel z-1">
        <div className="container bordered-x pt-130 rpt-100 pb-80 rpb-50">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div
                className="section-title mb-50 text-center"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="subtitle mt-10 mb-15">How IT Works</span>
                <h2>Step by Step Working Process</h2>
              </div>
            </div>
          </div>
          <div className="row gap-50 justify-content-center rel">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="work-process-item"
                data-aos="flip-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/work-process/work-process1.jpg"
                    alt="Work Process"
                  />
                </div>
                <div className="circle" />
                <div className="content">
                  <h5>
                    Discovery and
                    <br /> Strategy
                  </h5>
                  <p>
                    We begin by understanding your brand, goals, and target
                    audience competitive
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="work-process-item"
                data-aos="flip-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="content">
                  <h5>
                    Design and
                    <br /> Prototyping
                  </h5>
                  <p>
                    We begin by understanding your brand, goals, and target
                    audience competitive
                  </p>
                </div>
                <div className="circle" />
                <div className="image">
                  <img
                    src="assets/images/work-process/work-process2.jpg"
                    alt="Work Process"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="work-process-item"
                data-aos="flip-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/work-process/work-process3.jpg"
                    alt="Work Process"
                  />
                </div>
                <div className="circle" />
                <div className="content">
                  <h5>
                    Development
                    <br /> and Testing
                  </h5>
                  <p>
                    We begin by understanding your brand, goals, and target
                    audience competitive
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="work-process-item"
                data-aos="flip-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="content">
                  <h5>
                    Launch and
                    <br /> Support
                  </h5>
                  <p>
                    We begin by understanding your brand, goals, and target
                    audience competitive
                  </p>
                </div>
                <div className="circle" />
                <div className="image">
                  <img
                    src="assets/images/work-process/work-process4.jpg"
                    alt="Work Process"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="work-process-line">
                <img
                  src="assets/images/work-process/work-step-line.png"
                  alt="Line"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="work-process-shapes" />
      </section>
      {/* Working Process Area End */}
      {/* Projects Area start */}
      <section className="project-area rel z-1">
        <div className="container bordered-x px-sm-0 py-130 rpy-100">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div
                className="section-title text-center mb-50"
                data-aos="zoom-in"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="subtitle mb-15">Popular Works</span>
                <h2>Explore Our Latest Projects</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div
                className="project-item"
                data-aos="zoom-in"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <a
                  href="assets/images/projects/project-image1.jpg"
                  className="image"
                >
                  <img
                    src="assets/images/projects/project-image1.jpg"
                    alt="Project"
                  />
                </a>
                <div className="content">
                  <span className="category">Marketing</span>
                  <h4>
                    <Link href="project-details">Website Development</Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="project-item"
                data-aos="zoom-in"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <a
                  href="assets/images/projects/project-image2.jpg"
                  className="image"
                >
                  <img
                    src="assets/images/projects/project-image2.jpg"
                    alt="Project"
                  />
                </a>
                <div className="content">
                  <span className="category">Marketing</span>
                  <h6>
                    <Link href="project-details">Website Development</Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="project-item"
                data-aos="zoom-in"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <a
                  href="assets/images/projects/project-image2.jpg"
                  className="image"
                >
                  <img
                    src="assets/images/projects/project-image2.jpg"
                    alt="Project"
                  />
                </a>
                <div className="content">
                  <span className="category">Marketing</span>
                  <h6>
                    <Link href="project-details">Website Development</Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div
                className="project-item"
                data-aos="zoom-in"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <a
                  href="assets/images/projects/project-image4.jpg"
                  className="image"
                >
                  <img
                    src="assets/images/projects/project-image4.jpg"
                    alt="Project"
                  />
                </a>
                <div className="content">
                  <span className="category">Marketing</span>
                  <h4>
                    <Link href="project-details">Website Development</Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div
                className="project-item"
                data-aos="zoom-in"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <a
                  href="assets/images/projects/project-image5.jpg"
                  className="image"
                >
                  <img
                    src="assets/images/projects/project-image5.jpg"
                    alt="Project"
                  />
                </a>
                <div className="content">
                  <span className="category">Marketing</span>
                  <h4>
                    <Link href="project-details">Website Development</Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="project-item"
                data-aos="zoom-in"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <a
                  href="assets/images/projects/project-image6.jpg"
                  className="image"
                >
                  <img
                    src="assets/images/projects/project-image6.jpg"
                    alt="Project"
                  />
                </a>
                <div className="content">
                  <span className="category">Marketing</span>
                  <h6>
                    <Link href="project-details">Website Development</Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <Link
                href="project-grid"
                className="theme-btn style-two mt-20"
                data-hover="Explore Projects"
              >
                <span>Explore Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Area end */}
      {/* Testimonials Area Start */}
      <section className="testimonials-two-area rel z-1">
        <div className="container px-0 bordered-x pt-130 rpt-100 pb-170 rpb-140">
          <div className="testimonials-and-clients bgc-white br-10 bordered">
            <div className="row">
              <div className="col-lg-5">
                <div
                  className="testimonials-content rmb-55"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="section-title mb-30">
                    <span className="subtitle mt-10 mb-15">
                      Out Testimonials
                    </span>
                    <h2>1580+ Customer Say About Our Services</h2>
                  </div>
                  <p>
                    A web design agency is dedicated to creating visually
                    stunning and highly functional websites.
                  </p>
                  <div className="testimonial-dots mt-45" />
                </div>
              </div>
              <div className="col-lg-7">
                <TestimonialSlider1 />
              </div>
            </div>
            <div
              className="text-center mt-45 mb-40"
              data-aos="zoom-in"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h6>Trusted by industry leaders</h6>
            </div>
            <ClientSlider />
          </div>
        </div>
      </section>
      {/* Testimonials Area End */}
      {/* Blog Area start */}
      <Blog />
      {/* Blog Area end */}
      {/* CTA Area start */}
      <CTA />
      {/* CTA Area end */}
    </RiddaLayout>
  );
};
export default page;
