import BlogSidebar from "@/components/BlogSidebar";
import RiddaLayout from "@/layout/RiddaLayout";
import Link from "next/link";
const page = () => {
  return (
    <RiddaLayout>
      <section className="page-banner-area bgc-black text-white rel z-1 overflow-hidden">
        <div className="container bordered-x pt-200 rpy-100 pb-140">
          <div className="banner-inner px-xl-5 pt-90">
            <div
              className="text-center section-title mb-35"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h2>
                How to Optimize Your Website for Faster Loading Speeds
                Beginner's Guide to SEO-Friendly
              </h2>
            </div>
            <ul
              className="blog-meta"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
              data-aos-delay={50}
            >
              <li>
                Post by <a href="#">Richard V</a>.
              </li>
              <li>September 25, 2024</li>
              <li>
                Comments <span>(5)</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="page-banner-shapes">
          <div className="shape position-three">
            <img src="assets/images/shapes/hero-shape.png" alt="Shape" />
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
      </section>

      <section className="blog-details-page rel z-1">
        <div className="container bordered-x px-sm-0 py-130 rpy-100">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-content">
                <div className="project-tags mb-15">
                  <a href="#">Web Design</a>
                  <a href="#">Product Design</a>
                </div>
                <p>
                  A web design agency plays a crucial role in shaping a
                  company's online presence, creating visually stunning and
                  highly functional websites that captivate audiences and drive
                  business growth. By combining creativity with technical
                  expertise, a web design agency crafts unique, responsive, and
                  user-friendly websites that reflect a brand's identity and
                  values. They focus on delivering seamless user experiences
                </p>
                <div className="image mt-45 mb-35">
                  <img
                    src="assets/images/blog/blog-details.jpg"
                    alt="Blog Deails"
                  />
                </div>
                <h3>Research &amp; strategy</h3>
                <p>
                  Through data-driven insights and cutting-edge tools, a digital
                  marketing agency can optimize marketing efforts, ensuring
                  maximum return on investment. From brand development and lead
                  generation to customer engagement and conversion optimization,
                  these agencies provide comprehensive solutions tailored to
                  meet the unique needs of each client. In an ever-evolving
                  digital landscape, partnering with a skilled digital marketing
                  agency is essential for staying competitive and achieving
                  long-term success.
                </p>
                <blockquote
                  className="mt-40 mb-35"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <i className="fal fa-quote-right" />
                  <div className="text">
                    Handling Mounting And Unmounting Of Given The Power UX Why
                    User Experience Matters in Web Design Navigation Routes In
                    React Native
                  </div>
                  <div className="blockquote-footer">Kevin C. Young</div>
                </blockquote>
                <p>
                  From brand development and lead generation to customer
                  engagement and conversion optimization, these agencies provide
                  comprehensive solutions tailored to meet the unique needs of
                  each client. In an ever-evolving digital landscape, partnering
                  with a skilled digital marketing agency is essential for
                  staying competitive
                </p>
                <hr className="mt-70" />
              </div>
              <div className="tag-share pt-40 mb-50">
                <div
                  className="item"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h6>Tags </h6>
                  <div className="tag-clouds pb-15">
                    <Link href="blog">Design</Link>
                    <Link href="blog">Marketing</Link>
                    <Link href="blog">Apps</Link>
                  </div>
                </div>
                <div
                  className="item pt-5"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h6>Share </h6>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="admin-comment bgc-lighter"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="comment-body">
                  <div className="author-thumb">
                    <img
                      src="assets/images/blog/admin-comment.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <h5>Richard M. Fudge</h5>
                    <p>
                      By combining creativity with technical expertise, a web
                      design agency crafts unique responsive, and user-friendly
                      websites that reflect brand
                    </p>
                    <div className="social-icons">
                      <Link href="contact">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link href="contact">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link href="contact">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                      <Link href="contact">
                        <i className="fab fa-instagram" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="next-prev-blog pt-70 pb-30">
                <div
                  className="item"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <img src="assets/images/blog/prev-post.jpg" alt="News" />
                  </div>
                  <div className="content">
                    <span className="date">
                      <i className="far fa-calendar-alt" /> September 25 ,2024
                    </span>
                    <h6>
                      <Link href="blog-details">
                        How to Improve Your Website User Experience Tips
                      </Link>
                    </h6>
                  </div>
                </div>
                <div
                  className="item"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <img src="assets/images/blog/next-post.jpg" alt="News" />
                  </div>
                  <div className="content">
                    <span className="date">
                      <i className="far fa-calendar-alt" /> September 25 ,2024
                    </span>
                    <h6>
                      <Link href="blog-details">
                        Importance of Responsive in a Mobile-First World
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="comments mb-55">
                <h4 className="comment-title mb-25">Comments</h4>
                <div
                  className="comment-body"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="author-thumb">
                    <img
                      src="assets/images/blog/comment-author3.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <h6>Lonnie B. Horwitz</h6>
                    <span className="date">
                      <i className="far fa-calendar-alt" /> September 25 ,2024
                    </span>
                    <p>
                      Tours and travels play a crucial role in enriching lives
                      by offering unique experiences, cultural exchanges, and
                      the joy of exploration.
                    </p>
                    <a className="read-more" href="#">
                      Reply <i className="far fa-angle-right" />
                    </a>
                  </div>
                </div>
                <div
                  className="comment-body comment-child"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="author-thumb">
                    <img
                      src="assets/images/blog/comment-author1.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <h6>Jaime B. Wilson</h6>
                    <span className="date">
                      <i className="far fa-calendar-alt" /> September 25 ,2024
                    </span>
                    <p>
                      Tours and travels play a crucial role in enriching lives
                      by offering unique experiences, cultural exchanges, and
                      the joy of exploration.
                    </p>
                    <a className="read-more" href="#">
                      Reply <i className="far fa-angle-right" />
                    </a>
                  </div>
                </div>
                <div
                  className="comment-body"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="author-thumb">
                    <img
                      src="assets/images/blog/comment-author2.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <h6>Michael A. Saladin</h6>
                    <span className="date">
                      <i className="far fa-calendar-alt" /> September 25 ,2024
                    </span>
                    <p>
                      Tours and travels play a crucial role in enriching lives
                      by offering unique experiences, cultural exchanges, and
                      the joy of exploration.
                    </p>
                    <a className="read-more" href="#">
                      Reply <i className="far fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>
              <form
                className="comment-form z-1 rel"
                name="contactForm"
                action="#"
                method="post"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h4>Leave A Comments</h4>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <div className="row gap-10 mt-30">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <input
                        type="text"
                        id="phone_number"
                        name="phone_number"
                        className="form-control"
                        placeholder="Phone"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
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
                      <ul className="radio-filter mt-15 mb-30">
                        <li>
                          <input
                            className="form-check-input"
                            type="radio"
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
                        className="theme-btn hover-primary"
                        data-hover="Send Comments"
                      >
                        <span>Send Comments</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <BlogSidebar />
          </div>
        </div>
      </section>
    </RiddaLayout>
  );
};
export default page;
