import PageBanner from "@/components/PageBanner";
import { WhyChooseUs3 } from "@/components/WhyChooseUs";
import RiddaLayout from "@/layout/RiddaLayout";
const page = () => {
  return (
    <RiddaLayout>
      <PageBanner pageTitle="Contact" pageName="Contact" />
      <WhyChooseUs3 className="why-choose-contact-page" />
      <section className="contact-form-area">
        <div className="container bordered-x px-sm-0 pb-120 rpb-90">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="contact-info-part style-two rmb-55"
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
              <div className="contact-form style-three bgc-lighter z-1 rel">
                <form
                  id="contactForm"
                  className="contactForm"
                  name="contactForm"
                  action="assets/php/form-process.php"
                  method="post"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h3>Get In Touch</h3>
                  <p>
                    Contact us today to schedule consultation to expert team
                  </p>
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
                          data-error="Please enter your Name"
                        />
                        <div className="help-block with-errors" />
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
                          data-error="Please enter your Number"
                        />
                        <div className="help-block with-errors" />
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
                          data-error="Please enter your Email"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-sm-6 mb-25">
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                          placeholder="Subject"
                          required
                          data-error="Please enter your Subject"
                        />
                        <div className="help-block with-errors" />
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
                          required
                          data-error="Please enter your Message"
                          defaultValue={""}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group mb-0">
                        <button
                          type="submit"
                          className="theme-btn"
                          data-hover="Send Message"
                        >
                          <span>Send Message</span>
                        </button>
                        <div id="msgSubmit" className="hidden" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            className="our-location mt-100"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d96777.16150026117!2d-74.00840582560909!3d40.71171357405996!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1706508986625!5m2!1sen!2sbd"
              style={{ border: 0, width: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </RiddaLayout>
  );
};
export default page;
