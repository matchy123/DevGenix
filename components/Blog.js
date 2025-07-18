"use client";

import Link from "next/link";

const Blog = () => {
  const blogs = [
    {
      date: "September 15, 2024",
      title: "How to Craft they Winning Socials Media Strategy from Scratch",
      text: "Web design agency dedicated creating visually up highly functional websites that help businesses out landscape combining creative design",
      image: "assets/images/blog/blog-timeline1.jpg",
    },
    {
      date: "September 15, 2024",
      title: "The Importance of Responsive Design in Today’s Digital Landscape",
      text: "Web design agency dedicated creating visually up highly functional websites that help businesses out landscape combining creative design",
      image: "assets/images/blog/blog-timeline2.jpg",
    },
    {
      date: "September 15, 2024",
      title: "How to Improve Your Website’s Loading Speed Performance",
      text: "Web design agency dedicated creating visually up highly functional websites that help businesses out landscape combining creative design",
      image: "assets/images/blog/blog-timeline3.jpg",
    },
    {
      date: "September 15, 2024",
      title: "How to Choose the Right Web Design Agency for Your Business",
      text: "Web design agency dedicated creating visually up highly functional websites that help businesses out landscape combining creative design",
      image: "assets/images/blog/blog-timeline4.jpg",
    },
  ];

  return (
    <section className="blog-two-area rel z-1" id="blog">
      <div className="container px-sm-0 bordered-x pt-130 rpt-100">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div
              className="section-title text-center mb-50"
              data-aos="zoom-in"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="subtitle mb-15">Blog &amp; News</span>
              <h2>Explore Latest Insights</h2>
            </div>
          </div>
        </div>
        {blogs.map((blog, index) => (
          <div className="blog-timeline-item hover-item" key={index}>
            <span className="date">
              <a href="#">
                <i className="far fa-calendar-alt" />
                {blog.date}
              </a>
            </span>
            <div className="content">
              <h4>
                <Link href="blog-details">{blog.title}</Link>
              </h4>
              <div className="hover-content">
                <div className="text">
                  <p>{blog.text}</p>
                </div>
                <div className="image">
                  <img src={blog.image} alt="Blog" />
                </div>
              </div>
            </div>
            <Link href="blog-details" className="detail-btn">
              <i className="fal fa-arrow-right" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Blog;

export const Blog2 = ({ subtitleColor = "color-primary" }) => {
  const blogs = [
    {
      title: "How to Craft they Winning Socials Media Strategy from Scratch",
      image: "assets/images/blog/blog-two4.jpg",
      category: "SEO Services",
    },
    {
      title: "Unlocking the Power of Paid Ads A Social Media Marketing",
      image: "assets/images/blog/blog-two5.jpg",
      category: "Social Media Marketing",
    },
    {
      title: "How to Improve Your Website’s Loading Speed Performance",
      image: "assets/images/blog/blog-two6.jpg",
      category: "Marketing",
    },
  ];

  return (
    <section id="blog" className="blog-area pt-100 pb-70 rel z-1">
      <div className="container container-1290">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div
              className="section-title text-center mb-50"
              data-aos="zoom-in"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className={`subtitle ${subtitleColor} mt-10 mb-15`}>
                Blog &amp; News
              </span>
              <h2>Explore Latest Insights</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {blogs.map((blog, index) => (
            <div
              className="col-xl-4 col-md-6"
              key={index}
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
              data-aos-delay={index * 50}
            >
              <div className="blog-item style-three">
                <div className="image">
                  <img src={blog.image} alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <a href="#">{blog.category}</a>
                    </li>
                  </ul>
                  <h5>
                    <Link href="blog-details">{blog.title}</Link>
                  </h5>
                  <Link
                    href="blog-details"
                    className="theme-btn style-three"
                    data-hover="Read More"
                  >
                    <span>Read More</span>
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
