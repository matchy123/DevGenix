import ClientSlider from "@/components/sliders/ClientSlider";
import { TestimonialsSlider2 } from "@/components/sliders/TestimonialSlider";
import WhyChooseUs from "@/components/WhyChooseUs";
import RiddaLayout from "@/layout/RiddaLayout";
import Link from "next/link";
const page = () => {
  return (
    <RiddaLayout bodyClass="home-two dark-version" header={2} footer={2}>
      {/* Hero Area Start */}
      <section className="hero-area text-white rel z-2 bg-transparent">
        <div className="container bordered-x pt-180 rpt-150 pb-85 rpb-55">
          <div className="row pt-10 justify-content-center">
            <div className="col-xl-10">
              <div
                className="hero-content text-white text-center"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="subtitle mb-20">Social Media Marketing</span>
                <h1>Unlock the Power of Social Media</h1>
                <p>
                  Elevate Your Brand's Presence, Engagement, and Growth Online
                </p>
                <Link
                  href="project-list"
                  className="theme-btn bgc-secondary mt-35 rmt-15"
                  data-hover="Get Started"
                >
                  <span>Get Started</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hero-bottom"
          style={{
            backgroundImage: "url(assets/images/hero/hero-bg-dots.png)",
          }}
        >
          <div className="container bordered-x">
            <div className="hero-socials text-center">
              <img src="assets/images/hero/hero-social-shape.png" alt="Line" />
              <div className="logo">
                <Link
                  href="/"
                  data-aos="zoom-in"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img src="assets/images/logos/logo-two.png" alt="Logo" />
                </Link>
              </div>
              <div className="icon one p-15">
                <a href="#">
                  <img src="assets/images/hero/instagram.png" alt="Instagram" />
                </a>
              </div>
              <div className="icon two p-20">
                <a href="#">
                  <img src="assets/images/hero/fb.png" alt="Instagram" />
                </a>
              </div>
              <div className="icon three p-10">
                <a href="#">
                  <img src="assets/images/hero/tiktok.png" alt="Instagram" />
                </a>
              </div>
              <div className="icon four p-15">
                <a href="#">
                  <img src="assets/images/hero/linkedin.png" alt="Instagram" />
                </a>
              </div>
              <div className="icon five p-15">
                <a href="#">
                  <img src="assets/images/hero/youtube.png" alt="Instagram" />
                </a>
              </div>
              <div className="icon six p-10">
                <a href="#">
                  <img src="assets/images/hero/shopify.png" alt="Instagram" />
                </a>
              </div>
              <div className="icon seven p-20">
                <a href="#">
                  <img src="assets/images/hero/x.png" alt="Instagram" />
                </a>
              </div>
              <div className="icon eight p-15">
                <a href="#">
                  <img src="assets/images/hero/pinterest.png" alt="Instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Area End */}
      {/* Client Logo Area start */}
      <div className="client-logo-area">
        <div className="container bordered br-bottom">
          <div className="client-logo-wrap pt-80 pb-65">
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
      {/* Service Overview Area start */}
      <section className="service-overview-area py-130 rpy-100 rel z-1">
        <div className="container px-sm-0">
          <div className="row justify-content-between align-items-end pb-30">
            <div
              className="col-xl-6 col-lg-7"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title mb-25">
                <span className="subtitle mt-10 mb-15">Services Overview</span>
                <h2>Social Media Marketing Services for business </h2>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div
                className="text mb-25"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <p>
                  At Ridda we offer a comprehensive range of social media
                  marketing services to help businesses of all sizes succeed
                  online transactions are completed.
                </p>
              </div>
            </div>
          </div>
          <div className="service-overview-wrap bordered br-10 overflow-hidden">
            <div className="row no-gap">
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="service-item">
                  <div className="icon">
                    <i className="flaticon-social-media-marketing" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="service-details">Social Media Strategy</Link>
                    </h4>
                    <p>
                      A Social Media Strategy comprehensive plan designed to
                      help businesses achieve their goals through targeted
                      online .
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="service-item">
                  <div className="icon">
                    <i className="flaticon-creative" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="service-details">Content Creation</Link>
                    </h4>
                    <p>
                      This can take many forms, including blog posts, videos,
                      social media updates, infographics, podcasts, and more.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="service-item">
                  <div className="icon">
                    <i className="flaticon-communities" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="service-details">Community Management</Link>
                    </h4>
                    <p>
                      Community management is the practice of building,
                      nurturing, and engaging with a brand's online audience
                      across
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="service-item">
                  <div className="icon">
                    <i className="flaticon-promotion" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="service-details">Paid Advertising</Link>
                    </h4>
                    <p>
                      Paid advertising is a strategic approach tha involves
                      spending money to promote your brand, products, or
                      services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Overview Area end */}
      {/* Tab Area Start */}
      <WhyChooseUs />
      {/* Tab Area End */}
      {/* Testimonials Area Start */}
      <section className="testimonials-area">
        <div className="container bordered-x bordered-top py-130 rpy-100">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div
                className="section-title mb-50 text-center"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="subtitle mt-10 mb-15">
                  Client Testimonials
                </span>
                <h2>Hear what our clients have to say about working with us</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <TestimonialsSlider2 />
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Area End */}
      {/* Featured Area Start */}
      <section className="featured-area bgc-black text-white">
        <div className="container bordered-x bordered-bottom py-130 rpy-100">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div
                className="section-title mb-50 text-center"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="subtitle mt-10 mb-15">Featured Content</span>
                <h2>Explore Our Featured Work</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div
                className="feature-item"
                data-aos="flip-down"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/featuers/featuer1.jpg" alt="Featue" />
                </div>
                <div className="content">
                  <Link href="services" className="category">
                    Marketing
                  </Link>
                  <h5>
                    <Link href="service-details">
                      Engagement Amplified Interactive Campaigns for Maximum
                      Reach
                    </Link>
                  </h5>
                  <Link
                    href="service-details"
                    className="theme-btn btn-small style-three"
                    data-hover="Learn More"
                  >
                    <span>Learn More</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="feature-item"
                data-aos="flip-down"
                data-aos-duration={1500}
                data-aos-offset={50}
                data-aos-delay={50}
              >
                <div className="image">
                  <img src="assets/images/featuers/featuer2.jpg" alt="Featue" />
                </div>
                <div className="content">
                  <Link href="services" className="category">
                    Influence
                  </Link>
                  <h5>
                    <Link href="service-details">
                      Impact Leveraging Social Media for Brand Growth
                    </Link>
                  </h5>
                  <Link
                    href="service-details"
                    className="theme-btn btn-small style-three"
                    data-hover="Learn More"
                  >
                    <span>Learn More</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="feature-item"
                data-aos="flip-down"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/featuers/featuer3.jpg" alt="Featue" />
                </div>
                <div className="content">
                  <Link href="services" className="category">
                    Content
                  </Link>
                  <h5>
                    <Link href="service-details">
                      Revolution Creating Viral Moments Social Platforms Content
                      Revolution
                    </Link>
                  </h5>
                  <Link
                    href="service-details"
                    className="theme-btn btn-small style-three"
                    data-hover="Learn More"
                  >
                    <span>Learn More</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="feature-item"
                data-aos="flip-down"
                data-aos-duration={1500}
                data-aos-offset={50}
                data-aos-delay={50}
              >
                <div className="image">
                  <img src="assets/images/featuers/featuer4.jpg" alt="Featue" />
                </div>
                <div className="content">
                  <Link href="services" className="category">
                    Analytics
                  </Link>
                  <h5>
                    <Link href="service-details">
                      Analytics-Driven Success Optimizing Campaigns for Maximum
                      ROI
                    </Link>
                  </h5>
                  <Link
                    href="service-details"
                    className="theme-btn btn-small style-three"
                    data-hover="Learn More"
                  >
                    <span>Learn More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="more-featured text-center"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <Link
              href="project-grid"
              className="theme-btn bgc-secondary mt-20"
              data-hover="Explore Projects"
            >
              <span>Explore Projects</span>
            </Link>
          </div>
        </div>
      </section>
      {/* Featured Area End */}
      {/* About Us Area start */}
      <section className="about-us-area bgc-black text-white">
        <div className="container bordered-x py-130 rpy-100">
          <div className="row gap-90 justify-content-between align-items-end">
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="about-content ms-xl-5 rmb-55">
                <div className="section-title mb-30">
                  <span className="subtitle mt-10 mb-15">Who We Are</span>
                  <h2>About Our Ridda Agency</h2>
                </div>
                <p>
                  At Ridda , we're passionate about helping businesses succeed
                  in the digital world. With years of experience and a
                  dedication to innovation, we've built a reputation for
                  delivering exceptional results
                </p>
                <Link href="about" className="read-more mt-10">
                  Continue Reading <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="about-logo-part text-center me-xl-5">
                <img
                  src="assets/images/background/about-logo-bg-shape.png"
                  alt="Shape"
                />
                <div className="logo">
                  <Link href="/">
                    <img
                      src="assets/images/logos/logo-two-white.png"
                      alt="Logo"
                      data-aos="zoom-in"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    />
                  </Link>
                </div>
                <div className="icon one p-5">
                  <img src="assets/images/about/author1.jpg" alt="Author" />
                </div>
                <div className="icon two p-15 text-white bgc-primary">
                  <i className="flaticon-megaphone" />
                </div>
                <div className="icon three p-15 bgc-secondary">
                  <i className="flaticon-trophy" />
                </div>
                <div className="icon four">
                  <img src="assets/images/about/author2.jpg" alt="Author" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      {/* Team Area start */}
      <section className="team-area bgc-black text-white">
        <div
          className="container bordered-x pb-130 rpb-100 px-sm-0 bgp-bottom"
          style={{
            backgroundImage: "url(assets/images/background/footer-bg-dots.png)",
          }}
        >
          <div className="row no-gap justify-content-center">
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="flip-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="team-item">
                <div className="image">
                  <img src="assets/images/team/team1.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="team-details">Raymond R. Jacobs</Link>
                  </h5>
                  <span className="designation">Ceo &amp; Founder</span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="flip-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="team-item">
                <div className="image">
                  <img src="assets/images/team/team2.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="team-details">David F. Pelletier</Link>
                  </h5>
                  <span className="designation">Senior Consultant</span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="flip-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="team-item">
                <div className="image">
                  <img src="assets/images/team/team3.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="team-details">James B. Montanez</Link>
                  </h5>
                  <span className="designation">Junior Marketer</span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="flip-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="team-item">
                <div className="image">
                  <img src="assets/images/team/team4.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="team-details">Daniel R. Alexander</Link>
                  </h5>
                  <span className="designation">Hr &amp; Manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Area end */}
      {/* CTA Area start */}
      <section className="cta-area bgc-primary text-white pt-15 d-flex text-center align-items-center justify-content-center flex-wrap">
        <h6 className="mx-3 mb-15">
          Need more help to grow your business and marketing strategy
        </h6>
        <Link
          href="contact"
          className="theme-btn btn-extra-small bgc-secondary mb-15 mx-3"
          data-hover="Get Started"
        >
          <span>Get Started</span>
        </Link>
      </section>
      {/* CTA Area end */}
      {/* Blog Area start */}
      <section className="blog-area py-130 rpy-100 rel z-1">
        <div className="container px-sm-0">
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
          <div className="row no-gap bordered br-10 overflow-hidden justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div
                className="blog-item"
                data-aos="zoom-in"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog1.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <Link href="blog" className="category">
                        Marketing
                      </Link>
                    </li>
                    <li>
                      Post by <a href="#">Brandon</a>
                    </li>
                  </ul>
                  <h5>
                    <Link href="blog-details">
                      How to Craft they Winning Socials Media Strategy from
                      Scratch
                    </Link>
                  </h5>
                  <p>
                    This can take many forms, including blog posts, videos,
                    social media updates
                  </p>
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
                className="blog-item"
                data-aos="zoom-in"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog2.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <Link href="blog" className="category">
                        Social Media
                      </Link>
                    </li>
                    <li>
                      Post by <a href="#">Brandon</a>
                    </li>
                  </ul>
                  <h5>
                    <Link href="blog-details">
                      Unlocking the Power of Paid Ads A Social Media Marketing
                    </Link>
                  </h5>
                  <p>
                    This can take many forms, including blog posts, videos,
                    social media updates
                  </p>
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
                className="blog-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog3.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <Link href="blog" className="category">
                        Marketing
                      </Link>
                    </li>
                    <li>
                      Post by <a href="#">Brandon</a>
                    </li>
                  </ul>
                  <h5>
                    <Link href="blog-details">
                      How to Improve Your Website’s Loading Speed Performance
                    </Link>
                  </h5>
                  <p>
                    This can take many forms, including blog posts, videos,
                    social media updates
                  </p>
                  <Link
                    href="blog-details"
                    className="theme-btn style-two  hover-secondary"
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
      {/* Contact Form Area start */}
      <section className="contact-form-area pb-130 rpb-100">
        <div className="container px-sm-0">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="contact-info-part rmb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-50">
                  <h2>
                    Ready to get started? Fill out the form below, and we'll be
                    in touch shortly
                  </h2>
                </div>
                <div className="contact-info-wrap bordered br-10 overflow-hidden">
                  <div className="row no-gap">
                    <div className="col-sm-6">
                      <div
                        className="contact-info-item"
                        data-aos="zoom-in"
                        data-aos-duration={1500}
                        data-aos-offset={50}
                        data-aos-delay={50}
                      >
                        <div className="icon">
                          <i className="far fa-map-marker-alt" />
                        </div>
                        <div className="text">
                          57 Main Street, d-block Melbourne, Australia
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div
                        className="contact-info-item"
                        data-aos="zoom-in"
                        data-aos-duration={1500}
                        data-aos-offset={50}
                        data-aos-delay={50}
                      >
                        <div className="icon">
                          <i className="far fa-envelope" />
                        </div>
                        <div className="text">
                          <a href="mailto:support@gmail.com">
                            support@gmail.com
                          </a>
                          <br />
                          <a href="www.sayan.net" target="_blank">
                            www.sayan.net
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div
                        className="contact-info-item"
                        data-aos="zoom-in"
                        data-aos-duration={1500}
                        data-aos-offset={50}
                        data-aos-delay={50}
                      >
                        <div className="icon">
                          <i className="far fa-phone-volume" />
                        </div>
                        <div className="text">
                          <a href="callto:+880(123)45688">+880 (123) 456 88</a>
                          <br />
                          <a href="callto:+001(234)56897">+001 (234) 56897</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div
                        className="contact-info-item"
                        data-aos="zoom-in"
                        data-aos-duration={1500}
                        data-aos-offset={50}
                        data-aos-delay={50}
                      >
                        <div className="icon">
                          <i className="far fa-clock" />
                        </div>
                        <div className="text">
                          Monday - Friday <br />
                          08:00am - 05:00pm
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <form
                className="contact-form bgc-lighter z-1 rel"
                name="contactForm"
                action="#"
                method="post"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h3>Get In Touch</h3>
                <p>Contact us today to schedule consultation to expert team</p>
                <div className="row gap-20 mt-20">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Fernando H. Cruz"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="phone_number">Phone</label>
                      <input
                        type="text"
                        id="phone_number"
                        name="phone_number"
                        className="form-control"
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 mb-25">
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <select name="subject" id="subject">
                        <option value="value1">Discussed for</option>
                        <option value="value2">Getting Service</option>
                        <option value="value3">Searching Job</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="message">Message Us</label>
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows={4}
                        placeholder="write here"
                        required={""}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group mb-0">
                      <button
                        type="submit"
                        className="theme-btn btn-small bgc-secondary"
                        data-hover="Send Message"
                      >
                        <span>Send Message</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form Area end */}
    </RiddaLayout>
  );
};
export default page;
