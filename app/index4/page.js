import { Blog2 } from "@/components/Blog";
import CaseStudies from "@/components/CaseStudies";
import ClientSlider from "@/components/sliders/ClientSlider";
import { TestimonialsSlider4 } from "@/components/sliders/TestimonialSlider";
import WorkingProcess from "@/components/WorkingProcess";
import RiddaLayout from "@/layout/RiddaLayout";
import Link from "next/link";
const page = () => {
  return (
    <RiddaLayout header={4} footer={4} bodyClass="home-four dark-version">
      {/* Hero Area Start */}
      <section className="hero-area-three rel z-2 pt-95 rpt-70 pb-130 rpb-100">
        <div className="container container-1290">
          <div className="row align-items-center">
            <div className="col-xl-10">
              <div
                className="hero-content style-three"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h1>Transform Your Brand with Powerful Video Marketing</h1>
                <p>
                  Engage, Inspire, and Convert with Sayan's Expert Video
                  Solutions
                </p>
                <Link
                  href="project-grid"
                  className="theme-btn hover-secondary color-white mt-35 rmt-20"
                  data-hover="Get Started Now"
                >
                  <span>Get Started Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Area End */}
      {/* Video Area Start */}
      <div
        className="video-area  bgp-bottom rel z-1"
        style={{
          backgroundImage: "url(assets/images/background/video-bg-dots.png)",
        }}
      >
        <div className="container container-1290">
          <div
            className="video-wrap rel"
            data-aos="zoom-in"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/video/video-bg.jpg" alt="Video" />
            <a
              href="https://www.youtube.com/watch?v=TfU0qjuZkJ4"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
        <span className="marquee-wrap style-two py-20 rpy-10 bgc-secondary">
          <span className="marquee-inner left">
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Video Marketing
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              SEO Marketing
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              SMM Marketing
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Marketing Agency
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Digital Marketing Agency
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Influencer Marketing
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Video Marketing
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              SEO Marketing
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              SMM Marketing
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Marketing Agency
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Digital Marketing Agency
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Influencer Marketing
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Video Marketing
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              SEO Marketing
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              SMM Marketing
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Marketing Agency
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Digital Marketing Agency
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Influencer Marketing
            </span>
          </span>
        </span>
      </div>
      {/* Video Area End */}
      {/* Client Logo Area start */}
      <div
        className="client-logo-area pt-95 pb-85"
        style={{
          backgroundImage: "url(assets/images/background/video-bg-dots.png)",
        }}
      >
        <div className="container container-1290">
          <div className="client-logo-wrap">
            <div
              className="text-center mb-40"
              data-aos="zoom-in"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h6>Trusted by industry leaders</h6>
            </div>
            <ClientSlider />
          </div>
        </div>
      </div>
      {/* Client Logo Area end */}
      {/* About Us Area start */}
      <section className="about-us-area py-100 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-between align-items-center">
            <div
              className="col-xl-5 col-lg-6"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="about-three-content rmb-55">
                <div className="section-title mb-30">
                  <span className="subtitle color-primary mt-10 mb-15">
                    About Agency
                  </span>
                  <h2>
                    Welcome Ridda Video Marketing Agency to grow your business
                  </h2>
                </div>
                <p>
                  Understanding your marketing videos’ performance can be like
                  looking for a needle in a haystack. Vidyard’s online video
                  marketing platform is a magnet for your needle.
                </p>
                <Link
                  href="about"
                  className="theme-btn hover-secondary color-white mt-20"
                  data-hover="Learn More Us"
                >
                  <span>Learn More Us</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-three-image-part"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/about/about-three1.jpg" alt="About" />
                </div>
                <div className="image mt-30">
                  <img src="assets/images/about/about-three2.jpg" alt="About" />
                </div>
                <div className="logo">
                  <Link href="/">
                    <img
                      src="assets/images/logos/logo-two-white.png"
                      alt="Logo"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      {/* Our Service Area start */}
      <section className="our-service-area bordered-top pt-100 pb-70 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-center pb-30">
            <div
              className="col-xl-6 col-lg-7"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title text-center mb-25">
                <span className="subtitle mt-10 mb-15">Our Services</span>
                <h2>Explore Popular Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-item style-four">
                <div className="icon">
                  <i className="flaticon-film-camera" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="service-details">Video Production</Link>
                  </h4>
                  <p>
                    Video production is the process of creating visually
                    engaging and impactful video content communicates brand’s
                    message
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
              data-aos-delay={50}
            >
              <div className="service-item style-four">
                <div className="icon">
                  <i className="flaticon-video-marketing" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="service-details">Video Marketing Strategy</Link>
                  </h4>
                  <p>
                    A Video Marketing Strategy is a carefully crafted plan
                    leverages video content to achieve specific business goals,
                    such
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
              data-aos-delay={100}
            >
              <div className="service-item style-four">
                <div className="icon">
                  <i className="flaticon-animate" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="service-details">
                      Animation and Motion Graphics
                    </Link>
                  </h4>
                  <p>
                    Animation and motion graphics are dynamic visual elements
                    that bring static designs to life, making them more engaging
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
              data-aos-delay={150}
            >
              <div className="service-item style-four">
                <div className="icon">
                  <i className="flaticon-live-streaming" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="service-details">Live Streaming Services</Link>
                  </h4>
                  <p>
                    Live streaming services enable businesses individuals
                    broadcast events, webinars, product launches, or other
                    content
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Service Area end */}
      {/* Case Studies Area Start */}
      <CaseStudies />
      {/* Case Studies Area End */}
      {/* Testimonials Area Start */}
      <section className="testimonials-three-area text-center py-100 rel z-1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 order-xl-1">
              <div
                className="testimonials-three-wrap rmb-35"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-50">
                  <span className="subtitle color-primary mt-10 mb-15">
                    Testimonials
                  </span>
                  <h2>What Our Clients Say</h2>
                </div>
                <TestimonialsSlider4 />
              </div>
            </div>
            <div className="col-xl-3 col-6 order-xl-0">
              <div
                className="testi-small-images mt-20"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/testimonials/testi-small-img1.jpg"
                    alt="Testimonials"
                  />
                  <img
                    src="assets/images/testimonials/testi-small-img2.jpg"
                    alt="Testimonials"
                  />
                </div>
                <div className="image">
                  <img
                    src="assets/images/testimonials/testi-small-img3.jpg"
                    alt="Testimonials"
                  />
                  <img
                    src="assets/images/testimonials/testi-small-img4.jpg"
                    alt="Testimonials"
                  />
                </div>
                <div className="image">
                  <img
                    src="assets/images/testimonials/testi-small-img5.jpg"
                    alt="Testimonials"
                  />
                  <img
                    src="assets/images/testimonials/testi-small-img6.jpg"
                    alt="Testimonials"
                  />
                </div>
                <div className="image">
                  <img
                    src="assets/images/testimonials/testi-small-img7.jpg"
                    alt="Testimonials"
                  />
                  <img
                    src="assets/images/testimonials/testi-small-img8.jpg"
                    alt="Testimonials"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-6 order-xl-2">
              <div
                className="testi-small-images mt-20"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/testimonials/testi-small-img11.jpg"
                    alt="Testimonials"
                  />
                  <img
                    src="assets/images/testimonials/testi-small-img12.jpg"
                    alt="Testimonials"
                  />
                </div>
                <div className="image">
                  <img
                    src="assets/images/testimonials/testi-small-img13.jpg"
                    alt="Testimonials"
                  />
                  <img
                    src="assets/images/testimonials/testi-small-img14.jpg"
                    alt="Testimonials"
                  />
                </div>
                <div className="image">
                  <img
                    src="assets/images/testimonials/testi-small-img15.jpg"
                    alt="Testimonials"
                  />
                  <img
                    src="assets/images/testimonials/testi-small-img16.jpg"
                    alt="Testimonials"
                  />
                </div>
                <div className="image">
                  <img
                    src="assets/images/testimonials/testi-small-img17.jpg"
                    alt="Testimonials"
                  />
                  <img
                    src="assets/images/testimonials/testi-small-img18.jpg"
                    alt="Testimonials"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Area End */}
      {/* Headline Area Start */}
      <div className="headline-area rel z-1">
        <span className="marquee-wrap style-two py-20 rpy-10 bgc-secondary">
          <span className="marquee-inner left">
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Video Marketing
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              SEO Marketing
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              SMM Marketing
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Marketing Agency
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Digital Marketing Agency
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Influencer Marketing
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Video Marketing
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              SEO Marketing
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              SMM Marketing
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Marketing Agency
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Digital Marketing Agency
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Influencer Marketing
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Video Marketing
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              SEO Marketing
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              SMM Marketing
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Marketing Agency
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Digital Marketing Agency
            </span>
            <span className="marquee-item">
              <i className="flaticon-asterisk" />
              Influencer Marketing
            </span>
          </span>
        </span>
      </div>
      {/* Headline Area End */}
      {/* Working Process Area Start */}
      <WorkingProcess />
      {/* Working Process Area End */}
      {/* Why Choose Us Area start */}
      <section className="why-choose-us-area bgc-black rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-6 text-white">
              <div className="why-choose-left py-100 d-flex flex-column h-100 align-items-start">
                <div className="section-title mb-45">
                  <span className="subtitle mt-10 mb-15">Why Choose Us?</span>
                  <h2>Why People Choose Our Ridda Agency Service</h2>
                </div>
                <div className="text mt-auto">
                  Video marketing has become a powerful tool for businesses to
                  connect with their audience to more engaging and memorable way
                  the visual and auditory elements of video, companies
                </div>
                <Link
                  href="about"
                  className="theme-btn bgc-secondary mt-40"
                  data-hover="Learn More Us"
                >
                  <span>Learn More Us</span>
                </Link>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="why-choose-right py-100">
                <div className="service-item style-five">
                  <h5>
                    <i className="far fa-tools" />{" "}
                    <Link href="service-details">Expertise and Experience</Link>
                  </h5>
                  <p>
                    Expertise and Experience critical components distinguish
                    professional agency specialized knowledge.
                  </p>
                </div>
                <div className="service-item style-five">
                  <h5>
                    <i className="far fa-cog" />{" "}
                    <Link href="service-details">Customized Solutions</Link>
                  </h5>
                  <p>
                    Expertise and Experience critical components distinguish
                    professional agency specialized knowledge.
                  </p>
                </div>
                <div className="service-item style-five">
                  <h5>
                    <i className="far fa-gift" />{" "}
                    <Link href="service-details">
                      Support &amp; Proven Results
                    </Link>
                  </h5>
                  <p>
                    Expertise and Experience critical components distinguish
                    professional agency specialized knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Area end */}
      {/* Blog Area start */}
      <Blog2 />
      {/* Blog Area end */}
      {/* Contact area start */}
      <section className="contact-area pb-100">
        <div className="container container-1290">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div
                className="contact-info-content rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>Ready To Take Your SEO to the Next Level?</h2>
                  <p>
                    Contact us today to schedule a consultation or learn more
                    about our services
                  </p>
                </div>
                <div className="contact-info-two-item">
                  <div className="icon">
                    <i className="flaticon-world-map" />
                  </div>
                  <div className="text">
                    Main Location
                    <span className="h6">
                      57 Main Street, Melbourne, Australia
                    </span>
                  </div>
                </div>
                <div className="contact-info-two-item">
                  <div className="icon">
                    <i className="flaticon-email" />
                  </div>
                  <div className="text">
                    Email Address
                    <span className="h6">
                      <a href="mailto:support@gmail.com">support@gmail.com</a>
                    </span>
                  </div>
                </div>
                <div className="contact-info-two-item">
                  <div className="icon">
                    <i className="flaticon-call" />
                  </div>
                  <div className="text">
                    Need Helps
                    <span className="h6">
                      <a href="callto:+000(123)45688">+000 (123) 456 88</a>
                    </span>
                  </div>
                </div>
                <hr className="my-35" />
                <div className="social-style-two mt-15">
                  <h6>Follow Us</h6>
                  <Link href="contact">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link href="contact">
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link href="contact">
                    <i className="fab fa-youtube" />
                  </Link>
                  <Link href="contact">
                    <i className="fab fa-linkedin-in" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <form
                className="contact-form style-two z-1 rel"
                name="contactForm"
                action="#"
                method="post"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h3>Get In Touch</h3>
                <p>Contact us today to schedule consultation to expert team</p>
                <div className="row mt-30">
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
                      <ul className="radio-filter mb-25">
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
                        className="theme-btn bgc-secondary"
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
      {/* Contact area end */}
    </RiddaLayout>
  );
};
export default page;
