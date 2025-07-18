import Link from "next/link";

const PageBanner = ({ pageTitle, pageName, textCenter = false }) => {
  return (
    <section className="page-banner-area bgc-black text-white rel z-1 overflow-hidden">
      <div className="container bordered-x py-200 rpt-100 rpb-120">
        <div
          className={`banner-inner px-xl-4 pt-90 ${
            textCenter ? "text-center" : ""
          }`}
        >
          <h1
            className="page-title mb-20"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            {pageTitle}
          </h1>
          <nav aria-label="breadcrumb">
            <ol
              className={`breadcrumb ${
                textCenter ? "justify-content-center" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">{pageName}</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="page-banner-shapes">
        <div className={`shape ${textCenter ? "position-two" : ""}`}>
          <img src="assets/images/shapes/hero-shape.png" alt="Shape" />
        </div>
        {!textCenter && (
          <div
            className="banner-image"
            data-aos="fade-right"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/banner/banner.jpg" alt="Banner" />
          </div>
        )}

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
  );
};
export default PageBanner;
