import LatestWorks from "@/components/LatestWorks";
import Priceing from "@/components/Priceing";
import { TestimonialsSlider5 } from "@/components/sliders/TestimonialSlider";
import RiddaLayout from "@/layout/RiddaLayout";
import Link from "next/link";
const page = () => {
  return (
    <RiddaLayout bodyClass="home-five dark-version" header={5} footer={5}>
      {/* Hero Area Start */}
      <section
        className="hero-area-five bgp-bottom pt-220 rpt-145 pb-250 rpb-150 rel z-1"
        style={{
          backgroundImage: "url(assets/images/background/hero-five-bg.png)",
        }}
      >
        <div className="container container-1290">
          <div
            className="hero-content-five text-white mb-135 rmb-80"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <h1>
              Professional
              <br /> Web Development
            </h1>
            <div className="content mb-50">
              <span className="h1">Agency</span>
              <p>
                Web design is a critical aspect of creating in effective online
                presence for any business the individual well-designed websit
              </p>
              <Link
                href="project-list"
                className="theme-btn color-white"
                data-hover="Explore Our Projects"
              >
                <span>Explore Our Projects</span>
              </Link>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="hero-five-clients text-white rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h5>100k+ Trusted Clients</h5>
                <div className="trusted-clients mt-25 mb-35">
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
                <div className="client-logos">
                  <img
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-delay={50}
                    src="assets/images/hero/client-logo1.png"
                    alt="Client Logo"
                  />
                  <img
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-delay={150}
                    src="assets/images/hero/client-logo2.png"
                    alt="Client Logo"
                  />
                  <img
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-delay={250}
                    src="assets/images/hero/client-logo3.png"
                    alt="Client Logo"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="video-wrap rel"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/video/hero-five.jpg" alt="Video" />
                <a
                  href="https://www.youtube.com/watch?v=TfU0qjuZkJ4"
                  className="mfp-iframe color-primary video-play"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Area End */}
      {/* Services Area start */}
      <section className="services-area-five radius-shape-top bg-white pt-130 rpt-100 pb-70 rel z-2">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div
              className="col-xl-10 text-center"
              data-aos="zoom-in"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title mb-50">
                <span className="subtitle color-primary mb-15">
                  Wht We Doing
                </span>
                <h2>
                  Responsive Websites for Seamless User Experience, Fast and
                  Secure Web Hosting Services
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-xl-4 col-md-6">
              <div
                className="service-two-item style-three"
                data-aos="flip-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-timing" />
                </div>
                <h4>
                  <Link href="service-details">Fast Loading Speeds</Link>
                </h4>
              </div>
              <div
                className="service-two-item style-three"
                data-aos="flip-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-responsive" />
                </div>
                <h4>
                  <Link href="service-details">
                    Responsive &amp; Fast Design
                  </Link>
                </h4>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="service-two-item style-three height-100"
                data-aos="flip-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-setting" />
                </div>
                <h4>
                  <Link href="service-details">
                    Custom Web Design and Development
                  </Link>
                </h4>
              </div>
            </div>
            <div className="col-xl-4 col-md-6" data-aos="flip-up">
              <div
                className="service-two-item style-three"
                data-aos="flip-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-online-shopping" />
                </div>
                <h4>
                  <Link href="service-details">E-commerce Solutions</Link>
                </h4>
              </div>
              <div
                className="service-two-item style-three"
                data-aos="flip-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-tool" />
                </div>
                <h4>
                  <Link href="service-details">Maintenance &amp; Support</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Area end */}
      {/* About Area start */}
      <section className="about-area-five rel z-1 pb-230 rpb-150">
        <div className="container container-1290">
          <div className="row justify-content-between">
            <div
              className="col-lg-3"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="subtitle color-primary mb-25">
                Learn More Us
              </span>
            </div>
            <div
              className="col-xl-7 col-lg-9"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="about-content-five">
                <div className="section-title mb-40 rmb-25">
                  <h2>
                    Building Digital Experiences That Elevate Your Brand
                    Empowering Your Online Presence with Cutting-Edge
                    Development solutions
                  </h2>
                </div>
                <p>
                  We specialize in creating dynamic, responsive, and
                  user-friendly websites the not only look great but also
                  perform seamlessly across all devices our team of experienced
                  developers
                </p>
                <Link
                  href="contact"
                  className="theme-btn color-white hover-secondary mt-25 rmt-15"
                  data-hover="Get Started Us"
                >
                  <span>Get Started Us</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row mt-65">
            <div
              className="col-xl-4 col-lg-6 col-md-8 mt-30"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div
                className="about-five-logo-part bgs-cover py-30 text-white p-50 br-10"
                style={{
                  backgroundImage: "url(assets/images/about/about-five-bg.jpg)",
                }}
              >
                <div className="logo pb-25 rpb-55">
                  <Link href="/">
                    <img src="assets/images/logos/logo-footer.png" alt="Logo" />
                  </Link>
                </div>
                <h4>Next-Generation AI Tools for Smarter Business</h4>
              </div>
            </div>
            <div
              className="col-xl-8 mt-30"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
              data-aos-delay={100}
            >
              <div className="image">
                <img
                  className="br-10"
                  src="assets/images/about/about-five.jpg"
                  alt="About"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Area end */}
      {/* Latest Works Area start */}
      <LatestWorks />
      {/* Latest Works Area end */}
      {/* Why Choose Us Area start */}
      <section className="why-choose-us-five-area rel z-1 pt-130 rpt-100 pb-80">
        <div className="container container-1290">
          <div className="row align-items-center justify-content-between">
            <div
              className="col-xl-4 col-lg-5"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="why-choose-us-content-five rmb-55">
                <div className="section-title mb-50 rmb-30">
                  <span className="subtitle color-primary mt-10 mb-15">
                    Why Choose Us
                  </span>
                  <h2>People Why Choose Our team and work together</h2>
                </div>
                <hr className="mb-50 rmb-30" />
                <p>
                  We meticulously code each theme to ensure it is responsive,
                  SEO-friendly, and optimized for speed, providing a seamless
                  user experience across
                </p>
              </div>
            </div>
            <div
              className="col-lg-7"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="image">
                <img
                  className="br-10"
                  src="assets/images/about/why-choose-five.jpg"
                  alt="Why Choose Us"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Area end */}
      {/* Services Area start */}
      <section className="services-two-area rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="flip-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-two-item style-two hover-two">
                <div className="icon">
                  <i className="flaticon-leadership" />
                </div>
                <h6>
                  <Link href="service-details">Experience Teams</Link>
                </h6>
                <p>
                  Web development agencies typically have a team skilled
                  developers designers
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="flip-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-two-item style-two hover-two">
                <div className="icon">
                  <i className="flaticon-solution" />
                </div>
                <h6>
                  <Link href="service-details">Customized Solutions</Link>
                </h6>
                <p>
                  Agencies can provide tailore solutions the align with client
                  specific needs and goals.
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="flip-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-two-item style-two hover-two">
                <div className="icon">
                  <i className="flaticon-solution" />
                </div>
                <h6>
                  <Link href="service-details">
                    Scalability &amp; Flexibility
                  </Link>
                </h6>
                <p>
                  Web development agencies according provide flexibility to add
                  new functionalities
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="flip-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-two-item style-two hover-two">
                <div className="icon">
                  <i className="flaticon-customer-support" />
                </div>
                <h6>
                  <Link href="service-details">Support Maintenance</Link>
                </h6>
                <p>
                  Good web develop agency offers ongoing maintenance services
                  ensuring optimally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Area end */}
      {/* Integrations Area start */}
      <section className="integrations-area pt-100 rpt-70 pb-210 rpb-130 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div
              className="col-xl-6 col-lg-8 col-md-10 text-center mb-35"
              data-aos="zoom-in"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title mb-30">
                <span className="subtitle color-primary mt-10 mb-15">
                  Integrations
                </span>
                <h2>Integrating Cutting-edge Web technologies</h2>
              </div>
              <p>
                Integrating different systems, technologies, or tools is a
                crucial process enables seamless communication and
                functionality.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-11">
              <div className="integration-wrap">
                <div
                  className="integration-item"
                  data-aos="flip-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img
                    src="assets/images/client-logos/integration1.png"
                    alt="Integration"
                  />
                </div>
                <div
                  className="integration-item"
                  data-aos="flip-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img
                    src="assets/images/client-logos/integration2.png"
                    alt="Integration"
                  />
                </div>
                <div
                  className="integration-item"
                  data-aos="flip-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img
                    src="assets/images/client-logos/integration3.png"
                    alt="Integration"
                  />
                </div>
                <div
                  className="integration-item"
                  data-aos="flip-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img
                    src="assets/images/client-logos/integration4.png"
                    alt="Integration"
                  />
                </div>
                <div
                  className="integration-item"
                  data-aos="flip-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img
                    src="assets/images/client-logos/integration5.png"
                    alt="Integration"
                  />
                </div>
                <div
                  className="integration-item"
                  data-aos="flip-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img
                    src="assets/images/client-logos/integration6.png"
                    alt="Integration"
                  />
                </div>
                <div
                  className="integration-item"
                  data-aos="flip-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img
                    src="assets/images/client-logos/integration7.png"
                    alt="Integration"
                  />
                </div>
                <div
                  className="integration-item"
                  data-aos="flip-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img
                    src="assets/images/client-logos/integration8.png"
                    alt="Integration"
                  />
                </div>
                <div
                  className="integration-item"
                  data-aos="flip-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img
                    src="assets/images/client-logos/integration9.png"
                    alt="Integration"
                  />
                </div>
                <div
                  className="integration-item"
                  data-aos="flip-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img
                    src="assets/images/client-logos/integration10.png"
                    alt="Integration"
                  />
                </div>
                <div
                  className="integration-item"
                  data-aos="flip-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img
                    src="assets/images/client-logos/integration11.png"
                    alt="Integration"
                  />
                </div>
                <div
                  className="integration-item"
                  data-aos="flip-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img
                    src="assets/images/client-logos/integration12.png"
                    alt="Integration"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Integrations Area end */}
      {/* Pricing Area start */}
      <Priceing />
      {/* Pricing Area end */}
      {/* Testimonials Area Start */}
      <section className="testimonials-area-five pt-130 rpt-100 pb-75 rpb-45">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div
                className="section-title mb-50 text-center"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="subtitle color-primary mt-10 mb-15">
                  Our Testimonials
                </span>
                <h2>We Have More Then 1580+ Customer Say About Us</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6">
              <div
                className="testimonials-content-five mb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <TestimonialsSlider5 />
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="testimonials-image-and-customers mb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/testimonials/testimonials-five.jpg"
                  alt="Testimonials"
                />
                <div className="trusted-client-part text-center text-white">
                  <h4>Trusted By 25,880+ Worldwide Brand &amp; Customers</h4>
                  <hr className="mt-30 mb-40" />
                  <div className="trusted-clients">
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
                    <i
                      data-aos="fade-right"
                      data-aos-duration={1500}
                      data-aos-delay={250}
                      className="far fa-plus"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Area End */}
      {/* Blog Area start */}
      <section className="blog-area pb-130 rpb-100 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div
                className="section-title text-center mb-50"
                data-aos="zoom-in"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="subtitle mb-15">Latest News &amp; Blog</span>
                <h2>Essential Features Every Business Website Needs in 2024</h2>
              </div>
            </div>
          </div>
          <div className="row no-gap justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div
                className="blog-item style-four"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog-four1.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <Link href="blog" className="category">
                        Admin
                      </Link>
                    </li>
                    <li>Sep 20, 2024</li>
                  </ul>
                  <h5>
                    <Link href="blog-details">
                      Web Development Agency Can Improve Your SEO Experience
                      Best for Your Business
                    </Link>
                  </h5>
                  <p>
                    Basic plan typically refers to a foundational service or
                    product offering that includes essential features or
                    functionalities.
                  </p>
                  <Link href="blog-details" className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8">
              <div
                className="blog-item style-four image-left"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog-four2.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <Link href="blog" className="category">
                        Admin
                      </Link>
                    </li>
                    <li>Sep 20, 2024</li>
                  </ul>
                  <h5>
                    <Link href="blog-details">
                      How to Craft they Winning Socials Media Strategy from
                      Scratch
                    </Link>
                  </h5>
                  <Link href="blog-details" className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div
                className="blog-item style-four image-left"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog-four3.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <Link href="blog" className="category">
                        Admin
                      </Link>
                    </li>
                    <li>Sep 20, 2024</li>
                  </ul>
                  <h5>
                    <Link href="blog-details">
                      The Importance of Responsive Design in Today’s Digital
                      Landscape
                    </Link>
                  </h5>
                  <Link href="blog-details" className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div
                className="blog-item style-four image-left"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog-four4.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <Link href="blog" className="category">
                        Admin
                      </Link>
                    </li>
                    <li>Sep 20, 2024</li>
                  </ul>
                  <h5>
                    <Link href="blog-details">
                      Custom vs. Template Websites Which Is Best for Your
                      Business?
                    </Link>
                  </h5>
                  <Link href="blog-details" className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Area end */}
      {/* Contact Us area start */}
      <section className="contact-us-area rel z-2">
        <div className="container container-1290">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div
                className="contact-image-five rel rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/background/contact-bg.jpg"
                    alt="Contact"
                  />
                </div>
                <div
                  className="abs-headings"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                  data-aos-delay={100}
                >
                  <h6 className="bgc-primary text-white">
                    10m+ Satisfied Clients
                  </h6>
                  <h6 className="bgc-secondary">CEO &amp; Founder</h6>
                  <h6 className="bgc-yellow">25+ Years Of Experience</h6>
                </div>
                <div className="logo">
                  <Link href="/">
                    <img
                      src="assets/images/logos/logo-two-white.png"
                      alt="Logo"
                      data-aos="zoom-in"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                      className="aos-init aos-animate"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-white">
              <form
                className="contact-form style-two bgc-primary z-1 rel"
                name="contactForm"
                action="#"
                method="post"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h3>Get In Touch</h3>
                <p>Contact us today to schedule consultation to expert team</p>
                <div className="row mt-35">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Full Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="phone_number"
                        name="phone_number"
                        className="form-control"
                        placeholder="Phone No"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows={4}
                        placeholder="Write Message"
                        required
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group mb-0">
                      <ul className="radio-filter mb-30">
                        <li>
                          <input
                            className="form-check-input"
                            type="radio"
                            defaultChecked
                            name="ByActivities"
                            id="activity1"
                          />
                          <label htmlFor="activity1">
                            Save my name, email, and website in this browser for
                            the next time I comment.
                          </label>
                        </li>
                      </ul>
                      <button
                        type="submit"
                        className="theme-btn style-two hover-secondary"
                        data-hover="Send Us  Message"
                      >
                        <span>Send Us Message</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Us area end */}
    </RiddaLayout>
  );
};
export default page;
