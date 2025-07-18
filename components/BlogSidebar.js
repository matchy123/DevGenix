import Link from "next/link";

const BlogSidebar = () => {
  return (
    <div className="col-lg-4 col-md-8 col-sm-10 ps-xl-5 rmt-65">
      <div className="blog-sidebar">
        <div
          className="widget widget-search"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <h4 className="widget-title">Search</h4>
          <form action="#" className="default-search-form">
            <input type="text" placeholder="Search....." required />
            <button type="submit" className="searchbutton far fa-search" />
          </form>
        </div>
        <div
          className="widget widget-category"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <h4 className="widget-title">Category</h4>
          <ul>
            <li>
              <Link href="blog">Web Design</Link>
            </li>
            <li>
              <Link href="blog">SEO Optimization</Link>
            </li>
            <li>
              <Link href="blog">Mobile Apps Design</Link>
            </li>
            <li>
              <Link href="blog">Landing Pages</Link>
            </li>
            <li>
              <Link href="blog">Branding Design</Link>
            </li>
            <li>
              <Link href="blog">Motion &amp; Animations</Link>
            </li>
          </ul>
        </div>
        <div
          className="widget widget-news"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <h4 className="widget-title">Recent News</h4>
          <ul>
            <li>
              <div className="image">
                <img src="assets/images/widgets/news1.jpg" alt="News" />
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
            </li>
            <li>
              <div className="image">
                <img src="assets/images/widgets/news2.jpg" alt="News" />
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
            </li>
            <li>
              <div className="image">
                <img src="assets/images/widgets/news3.jpg" alt="News" />
              </div>
              <div className="content">
                <span className="date">
                  <i className="far fa-calendar-alt" /> September 25 ,2024
                </span>
                <h6>
                  <Link href="blog-details">
                    The Role of Color Theory in Effective Web Design
                  </Link>
                </h6>
              </div>
            </li>
          </ul>
        </div>
        <div
          className="widget widget-tags"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <h4 className="widget-title">Tags</h4>
          <div className="tag-clouds">
            <Link href="blog">Design</Link>
            <Link href="blog">SMM</Link>
            <Link href="blog">Agency</Link>
            <Link href="blog">SEO</Link>
            <Link href="blog">Apps</Link>
            <Link href="blog">Dashboard</Link>
            <Link href="blog">Product</Link>
            <Link href="blog">UX/UI</Link>
            <Link href="blog">Marketing</Link>
            <Link href="blog">Animation</Link>
          </div>
        </div>
        <div
          className="widget widget-gallery"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <h4 className="widget-title">Gallery</h4>
          <div className="gallery">
            <a href="assets/images/widgets/gallery1.jpg">
              <i className="far fa-plus" />
              <img src="assets/images/widgets/gallery1.jpg" alt="Gallery" />
            </a>
            <a href="assets/images/widgets/gallery2.jpg">
              <i className="far fa-plus" />
              <img src="assets/images/widgets/gallery2.jpg" alt="Gallery" />
            </a>
            <a href="assets/images/widgets/gallery3.jpg">
              <i className="far fa-plus" />
              <img src="assets/images/widgets/gallery3.jpg" alt="Gallery" />
            </a>
            <a href="assets/images/widgets/gallery4.jpg">
              <i className="far fa-plus" />
              <img src="assets/images/widgets/gallery4.jpg" alt="Gallery" />
            </a>
            <a href="assets/images/widgets/gallery5.jpg">
              <i className="far fa-plus" />
              <img src="assets/images/widgets/gallery5.jpg" alt="Gallery" />
            </a>
            <a href="assets/images/widgets/gallery6.jpg">
              <i className="far fa-plus" />
              <img src="assets/images/widgets/gallery6.jpg" alt="Gallery" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogSidebar;
