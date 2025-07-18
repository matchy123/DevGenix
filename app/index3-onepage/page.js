import { CaseStudies2 } from "@/components/CaseStudies";
import Faq from "@/components/Faq";
import { Services2 } from "@/components/Services";
import ClientSlider from "@/components/sliders/ClientSlider";
import { TestimonialsSlider3 } from "@/components/sliders/TestimonialSlider";
import { WhyChooseUs2 } from "@/components/WhyChooseUs";
import { WorkingProcess2 } from "@/components/WorkingProcess";
import RiddaLayout from "@/layout/RiddaLayout";
import Link from "next/link";
const page = () => {
  const menus = [
    { id: 1, text: "Home", href: "#home" },
    { id: 2, text: "About", href: "#about" },
    { id: 3, text: "Services", href: "#services" },
    { id: 4, text: "Case Study", href: "#case-study" },
    { id: 5, text: "Testimonials", href: "#testimonials" },
    { id: 6, text: "Blog", href: "#blog" },
  ];
  return (
    <RiddaLayout
      bodyClass="home-three dark-version"
      header={3}
      footer={3}
      menus={menus}
    >
      {/* Hero Area Start */}
      <section className="hero-area-two bgc-black text-white rel z-2" id="home">
        <div
          className="container bordered-x bordered-bottom bgp-bottom pt-195 rpt-150 pb-100"
          style={{
            backgroundImage: "url(assets/images/background/hero-bg-dots.png)",
          }}
        >
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div
                className="hero-content style-two text-white rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h1>Unlock Website's Potential with Expert SEO Solutions</h1>
                <p>
                  An SEO agency specializes in optimizing websites to improve
                  their visibility on search engines, driving organic traffic,
                  and enhancing online presence.
                </p>
                <div className="hero-btns pt-10">
                  <Link
                    href="index3"
                    className="theme-btn bgc-secondary me-3 mt-15"
                    data-hover="Get Your SEO Audit"
                  >
                    <span>Get Your SEO Audit</span>
                  </Link>
                  <Link
                    href="services"
                    className="theme-btn color-white mt-15"
                    data-hover="Explore Services"
                  >
                    <span>Explore Services</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="hero-two-image-part"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/hero/hero-right.png" alt="Hero" />
                <div className="shape one">
                  <img src="assets/images/shapes/hero-shape1.png" alt="Shape" />
                </div>
                <div className="shape two">
                  <img src="assets/images/shapes/hero-shape2.png" alt="Shape" />
                </div>
                <div className="shape three">
                  <img src="assets/images/shapes/hero-shape3.png" alt="Shape" />
                </div>
                <div className="shape four">
                  <img src="assets/images/shapes/hero-shape4.png" alt="Shape" />
                </div>
                <div className="shape five">
                  <img src="assets/images/shapes/hero-shape5.png" alt="Shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Area End */}
      {/* Client Logo Area start */}
      <div className="client-logo-area bgc-black">
        <div className="container text-white bordered-x">
          <div className="client-logo-wrap pt-95 pb-85">
            <div
              className="text-center mb-40"
              data-aos="zoom-in"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h6>Trusted by industry leaders</h6>
            </div>
            <ClientSlider
              logoData={[
                {
                  id: 1,
                  image: "assets/images/client-logos/client-logo-white1.png",
                },
                {
                  id: 2,
                  image: "assets/images/client-logos/client-logo-white2.png",
                },
                {
                  id: 3,
                  image: "assets/images/client-logos/client-logo-white3.png",
                },
                {
                  id: 4,
                  image: "assets/images/client-logos/client-logo-white4.png",
                },
                {
                  id: 5,
                  image: "assets/images/client-logos/client-logo-white5.png",
                },
                {
                  id: 6,
                  image: "assets/images/client-logos/client-logo-white6.png",
                },
              ]}
            />
          </div>
        </div>
      </div>
      {/* Client Logo Area end */}
      {/* About Area start */}
      <section id="about" className="about-area-two rel z-1">
        <div className="container bordered-x py-100">
          <div className="row gap-100 justify-content-between align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="about-four-image-part rmb-55">
                <img
                  src="assets/images/about/about-two-white.png"
                  alt="About"
                />
                <div className="shape one">
                  <img src="assets/images/shapes/about-two1.jpg" alt="Shape" />
                </div>
                <div className="shape two">
                  <img src="assets/images/shapes/about-two2.jpg" alt="Shape" />
                </div>
                <div className="shape three">
                  <img src="assets/images/shapes/about-two3.jpg" alt="Shape" />
                </div>
                <div className="abs-headings">
                  <h6 className="shape four bgc-primary text-white">
                    10m+ Satisfied Clients
                  </h6>
                  <h6 className="shape five bgc-green">CEO &amp; Founder</h6>
                  <h6 className="shape six bgc-yellow">
                    25+ Years Of Experience
                  </h6>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="about-content-four ps-xl-5 ms-xl-1">
                <div className="section-title mb-40">
                  <span className="subtitle mt-10 mb-15">About Agency</span>
                  <h2>
                    Boost Your Rankings Expert SEO Solutions for Maximum
                    Visibility
                  </h2>
                </div>
                <p>
                  Our team of dedicated SEO experts combines extensive industry
                  knowledge with strategies to deliver tangible results for
                  clients innovative our.
                </p>
                <Link
                  href="about"
                  className="theme-btn color-white hover-secondary mt-25"
                  data-hover="Learn More Us"
                >
                  <span>Learn More Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Area end */}
      {/* Services Area start */}
      <Services2 />
      {/* Services Area end */}
      {/* Why Choose Us Area start */}
      <WhyChooseUs2 />
      {/* Why Choose Us Area end */}
      {/* Case Studies Area start */}
      <CaseStudies2 />
      {/* Case Studies Area end */}
      {/* Testimonials Area Start */}
      <section id="testimonials" className="testimonials-two-area rel z-1">
        <div
          className="container px-xl-5 bordered-x py-100"
          style={{
            backgroundImage: "url(assets/images/background/cta-bg-dots.png)",
          }}
        >
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div
                className="testimonials-content-two rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-50">
                  <span className="subtitle mt-10 mb-15">Out Testimonials</span>
                  <h2>What Our Clients Say Us</h2>
                </div>
                <TestimonialsSlider3 />
                <div className="testimonial-dots pt-25" />
              </div>
            </div>
            <div className="col-lg-6 text-xl-end">
              <div
                className="testimonials-four-image-part"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/testimonials/testimonials-white.png"
                  alt="Testimonisls"
                />
                <div className="shape icon">
                  <i className="flaticon-quotation-mark" />
                </div>
                <div className="shape one">
                  <img src="assets/images/shapes/testi-four1.jpg" alt="Shape" />
                </div>
                <div className="shape two">
                  <img src="assets/images/shapes/testi-four2.jpg" alt="Shape" />
                </div>
                <div className="shape three">
                  <img src="assets/images/shapes/testi-four3.jpg" alt="Shape" />
                </div>
                <div className="shape four">
                  <img src="assets/images/shapes/testi-four4.jpg" alt="Shape" />
                </div>
                <div className="abs-headings">
                  <h6 className="shape five bgc-primary text-white">
                    10m+ Satisfied Clients
                  </h6>
                  <h6 className="shape six bgc-green">99% Positive Reviews</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Area End */}
      {/* Working Process Area Start */}
      <WorkingProcess2 />
      {/* Working Process Area End */}
      {/* FAQ Area Start */}
      <Faq />
      {/* FAQ Area End */}
      {/* Blog Area start */}
      <section id="blog" className="blog-area rel z-1">
        <div className="container bordered-x pt-110 pb-70 px-sm-0">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div
                className="section-title text-center mb-50"
                data-aos="zoom-in"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="subtitle mb-15">Blog &amp; News</span>
                <h2>Ultimate Guide to Boosting Engagement on Social Media</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div
                className="blog-item style-three"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog-two1.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <a href="#">SEO Services</a>
                    </li>
                  </ul>
                  <h5>
                    <Link href="blog-details">
                      How to Craft they Winning Socials Media Strategy from
                      Scratch
                    </Link>
                  </h5>
                  <Link
                    href="blog-details"
                    className="theme-btn style-two hover-secondary"
                    data-hover="Read More"
                  >
                    <span>Read More</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="blog-item style-three"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
                data-aos-delay={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog-two2.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <a href="#">Social Media Marketing</a>
                    </li>
                  </ul>
                  <h5>
                    <Link href="blog-details">
                      Unlocking the Power of Paid Ads A Social Media Marketing
                    </Link>
                  </h5>
                  <Link
                    href="blog-details"
                    className="theme-btn style-two hover-secondary"
                    data-hover="Read More"
                  >
                    <span>Read More</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="blog-item style-three"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
                data-aos-delay={100}
              >
                <div className="image">
                  <img src="assets/images/blog/blog-two3.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <a href="#">Marketing</a>
                    </li>
                  </ul>
                  <h5>
                    <Link href="blog-details">
                      How to Improve Your Website’s Loading Speed Performance
                    </Link>
                  </h5>
                  <Link
                    href="blog-details"
                    className="theme-btn style-two hover-secondary"
                    data-hover="Read More"
                  >
                    <span>Read More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Area end */}
      {/* CTA Area Start */}
      <section className="cta-two-area rel z-1">
        <div className="container px-sm-0 bordered-x pb-100">
          <div
            className="cta-two-wrap bgc-primary br-10"
            style={{
              backgroundImage: "url(assets/images/background/hero-bg-dots.png)",
            }}
          >
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="cta-content-two rmb-55"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="section-title text-white mb-25">
                    <span className="subtitle mt-10 mb-15">
                      Let’s Boost Website
                    </span>
                    <h2>We Are Ready to Boost Your Website &amp; Grow Sales</h2>
                    <p>Join Us to get more updates and tips</p>
                  </div>
                  <form className="newsletter-form" action="#">
                    <label htmlFor="news-email">
                      <i className="fas fa-envelope" />
                    </label>
                    <input
                      id="news-email"
                      type="email"
                      placeholder="Email Address"
                      required
                    />
                    <button
                      type="submit"
                      className="theme-btn bgc-secondary hover-secondary"
                      data-hover="Subscribe"
                    >
                      <span>Subscribe</span>
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 text-xl-end">
                <div
                  className="cta-two-image-part"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img src="assets/images/cta/cta.png" alt="CTA" />
                  <div className="shape logo">
                    <img
                      src="assets/images/logos/logo-two-white.png"
                      alt="Logo"
                    />
                  </div>
                  <div className="shape one">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="shape two">
                    <i className="fas fa-shield-alt" />
                  </div>
                  <div className="shape three">
                    <i className="fas fa-paper-plane" />
                  </div>
                  <div className="shape four">
                    <i className="fas fa-rocket-launch" />
                  </div>
                  <div className="abs-headings">
                    <h6 className="shape five bgc-primary text-white">
                      10m+ Satisfied Clients
                    </h6>
                    <h6 className="shape six bgc-green">
                      99% Positive Reviews
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Area End */}
    </RiddaLayout>
  );
};
export default page;
