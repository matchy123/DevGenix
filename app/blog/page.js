import BlogSidebar from "@/components/BlogSidebar";
import PageBanner from "@/components/PageBanner";
import RiddaLayout from "@/layout/RiddaLayout";
import Link from "next/link";
const page = () => {
  const blogItems = [
    {
      image: "assets/images/blog/blog-two4.jpg",
      category: "SEO Services",
      title: "Boosting Local Visibility a Client Dominated Market with SEO",
    },
    {
      image: "assets/images/blog/blog-two5.jpg",
      category: "Social Media Marketing",
      title: "Unlocking the Power of Paid Ads A Social Media Marketing",
    },
    {
      image: "assets/images/blog/blog-two6.jpg",
      category: "Marketing",
      title: "How to Improve Your Website’s Loading Speed Performance",
    },
    {
      image: "assets/images/blog/blog-two1.jpg",
      category: "SEO Services",
      title: "How to Craft they Winning Socials Media Strategy from Scratch",
    },
    {
      image: "assets/images/blog/blog-two2.jpg",
      category: "Social Media Marketing",
      title: "Boosting Local Visibility a Client Dominated Market with SEO",
    },
    {
      image: "assets/images/blog/blog-two3.jpg",
      category: "Marketing",
      title: "How to Improve Your Website’s Loading Speed Performance",
    },
  ];

  return (
    <RiddaLayout>
      <PageBanner pageTitle="Blog" pageName="Blog Grid" />
      <section className="blog-grid-page rel z-1">
        <div className="container bordered-x px-sm-0 py-130 rpy-100">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                {blogItems.map(({ image, category, title }, index) => (
                  <div
                    className="col-md-6"
                    key={index}
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                    data-aos-delay={index * 50}
                  >
                    <div className="blog-item style-three">
                      <div className="image">
                        <img src={image} alt="Blog" />
                      </div>
                      <div className="content">
                        <ul className="blog-meta">
                          <li>
                            <a href="#">{category}</a>
                          </li>
                        </ul>
                        <h5>
                          <Link href="blog-details">{title}</Link>
                        </h5>
                        <Link
                          href="blog-details"
                          className="theme-btn style-two"
                          data-hover="Read More"
                        >
                          <span>Read More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <ul
                className="pagination pt-5 flex-wrap"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <li className="page-item active">
                  <span className="page-link">
                    1<span className="sr-only">(current)</span>
                  </span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next <i className="far fa-chevron-right" />
                  </a>
                </li>
              </ul>
            </div>
            <BlogSidebar />
          </div>
        </div>
      </section>
    </RiddaLayout>
  );
};
export default page;
