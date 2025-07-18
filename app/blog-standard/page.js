import BlogSidebar from "@/components/BlogSidebar";
import PageBanner from "@/components/PageBanner";
import RiddaLayout from "@/layout/RiddaLayout";
import Link from "next/link";
const page = () => {
  const blogPosts = [
    {
      image: "assets/images/blog/blog-standard1.jpg",
      tags: ["Web Design", "Product Design"],
      title:
        "How to Optimize Your Website for Faster Loading Speeds Beginner's Guide to SEO-Friendly Web Design",
      author: "Richard V",
      date: "September 25, 2024",
      comments: "Comments (5)",
    },
    {
      image: "assets/images/blog/blog-standard2.jpg",
      tags: ["Web Design", "Product Design"],
      title:
        "How to Optimize Your Website for Faster Loading Speeds Beginner's Guide to SEO-Friendly Web Design",
      author: "Richard V",
      date: "September 25, 2024",
      comments: "Comments (5)",
    },
    {
      image: "assets/images/blog/blog-standard3.jpg",
      tags: ["Web Design", "Product Design"],
      title:
        "How to Optimize Your Website for Faster Loading Speeds Beginner's Guide to SEO-Friendly Web Design",
      author: "Richard V",
      date: "September 25, 2024",
      comments: "Comments (5)",
    },
    {
      image: "assets/images/blog/blog-standard4.jpg",
      tags: ["Web Design", "Product Design"],
      title:
        "How to Optimize Your Website for Faster Loading Speeds Beginner's Guide to SEO-Friendly Web Design",
      author: "Richard V",
      date: "September 25, 2024",
      comments: "Comments (5)",
    },
  ];
  return (
    <RiddaLayout>
      <PageBanner pageTitle="Blog" pageName="Blog Standard" />
      <section className="blog-list-page rel z-1">
        <div className="container bordered-x px-sm-0 py-130 rpy-100">
          <div className="row">
            <div className="col-lg-8">
              {blogPosts.map((post, index) => (
                <div
                  className="blog-standard-item"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                  key={index}
                >
                  <div className="image">
                    <img src={post.image} alt="Blog" />
                  </div>
                  <div className="content">
                    <div className="project-tags">
                      {post.tags.map((tag, index) => (
                        <a href="#" key={index}>
                          {tag}
                        </a>
                      ))}
                    </div>
                    <h3>
                      <Link href="blog-details">{post.title}</Link>
                    </h3>
                    <ul className="blog-meta">
                      <li>
                        Post by <a href="#">{post.author}</a>.
                      </li>
                      <li>{post.date}</li>
                      <li>{post.comments}</li>
                    </ul>
                    <Link
                      href="blog-details"
                      className="theme-btn style-three hover-primary"
                      data-hover="Read More"
                    >
                      <span>Read More</span>
                    </Link>
                  </div>
                </div>
              ))}
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
