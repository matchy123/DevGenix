import PageBanner from "@/components/PageBanner";
import RiddaLayout from "@/layout/RiddaLayout";
import Link from "next/link";
const page = () => {
  return (
    <RiddaLayout>
      <PageBanner
        pageTitle="Project Details"
        pageName="Project Details"
        textCenter={true}
      />

      <section className="project-list pt-130 rpt-100 pb-75 rpb-45">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div
              className="col-xl-9 col-lg-11 text-center"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="project-tags mb-20">
                <a href="#">Design</a>
                <a href="#">Template</a>
                <a href="#">UX/UI</a>
              </div>
              <div className="section-title mb-50">
                <h2>Modern Landing Pages Template Design</h2>
              </div>
              <p>
                We specialize in creating visually stunning, user-friendly
                websites that not only capture your brand's unique essence but
                also engage and convert visitors. Our team of skilled designers
                and developers work closely with you to understand your goals
                and deliver a customized website that reflects your brand's
                identity and drives business growth
              </p>
            </div>
            <div
              className="col-xl-10 mt-15"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <hr />
              <div className="project-details-info mt-45">
                <div className="pd-info-item">
                  <h5>Clients:</h5>
                  <p>Bobby K. Carmody</p>
                </div>
                <div className="pd-info-item">
                  <h5>Services:</h5>
                  <p>Website Design</p>
                </div>
                <div className="pd-info-item">
                  <h5>Date:</h5>
                  <p>08 Sep 2024</p>
                </div>
                <div className="pd-info-item">
                  <h5>Category:</h5>
                  <p>Web Design, Landing Pages</p>
                </div>
                <div className="pd-info-item">
                  <h5>Location:</h5>
                  <p>New York</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="image mb-70"
            data-aos="zoom-in"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img
              src="assets/images/projects/project-details1.jpg"
              alt="Project"
            />
          </div>
          <div className="row justify-content-between pb-30">
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title mt-5 mb-25">
                <h2>Social Media Marketing Services for business </h2>
              </div>
            </div>
            <div
              className="col-lg-6 mb-25"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <p>
                Elevate your online presence with our exceptional website design
                services. We specialize creating visually stunning,
                user-friendly websites that not only capture your brand's unique
                essence but also engage and convert visitors. Our team of
                skilled designers and developers work closely with you to
                understand
              </p>
              <ul className="list-style-one my-35">
                <li>Clear Value Proposition</li>
                <li>User-Friendly Design and Navigation</li>
                <li>High-Quality Content</li>
              </ul>
              <p>
                Whether you need a sleek and modern design or a classic and
                timeless look, we combine creativity with functionality to
                create websites that leave a lasting
              </p>
            </div>
          </div>
          <div
            className="image mb-70"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img
              src="assets/images/projects/project-details2.jpg"
              alt="Project"
            />
          </div>
          <div className="row pb-10">
            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title mt-5 mb-25">
                <h2>Project Goals</h2>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 me-auto mb-25"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
              data-aos-delay={50}
            >
              <p>
                Elevate your online presence exceptional website design
                services. We specialize user friendly websites thr not only
                capture your brand's unique essence but also engage and convert
                visitors.
              </p>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 mb-25"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
              data-aos-delay={100}
            >
              <p>
                Whether you need a sleek and modern design or a classic and
                timeless look, we combine creativity with functionality to
                create websites that leave a impression. Let us help you stand
                out in the digital."
              </p>
            </div>
          </div>
          <hr />
          <div className="row gap-70 justify-content-between pt-50 pb-30">
            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title mt-5 mb-25">
                <h2>Project Results</h2>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 mb-25"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
              data-aos-delay={50}
            >
              <p>
                Elevate your online presence with exceptional website design
                services. We specialize creating visually stunning,
                user-friendly websites that not only capture your brand's unique
                essence but also engage and convert visitors. Our team of
                skilled designers and developers work closely with you to
                understand
              </p>
              <br />
              <p>
                We specialize creating visually stunning, user-friendly websites
                that only capture your brand's unique essence but also engage
                and convert visitors. Our team skilled designers developers work
                closely with you to understand
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 mb-25"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
              data-aos-delay={100}
            >
              <img
                src="assets/images/projects/project-details-3.jpg"
                alt="Project"
              />
            </div>
          </div>
          <hr />
          <div className="next-prev-projects pt-50 pb-20">
            <div
              className="np-project-item"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="image">
                <img
                  src="assets/images/projects/prev-project.jpg"
                  alt="Project"
                />
              </div>
              <div className="content">
                <div className="project-tags">
                  <a href="#">Design</a>
                  <a href="#">Template</a>
                </div>
                <h6>
                  <Link href="project-details">
                    Email Newsletter Template Design
                  </Link>
                </h6>
                <Link href="project-details" className="read-more">
                  View Projects <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="np-project-item"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
              data-aos-delay={50}
            >
              <div className="image">
                <img
                  src="assets/images/projects/next-project.jpg"
                  alt="Project"
                />
              </div>
              <div className="content">
                <div className="project-tags">
                  <a href="#">Graphics</a>
                  <a href="#">SEO</a>
                </div>
                <h6>
                  <Link href="project-details">
                    SEO Strategy Illustration Design
                  </Link>
                </h6>
                <Link href="project-details" className="read-more">
                  View Projects <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <hr />
          <div className="row justify-content-center pt-115 rpt-85">
            <div className="col-lg-12">
              <div
                className="section-title text-center mb-50"
                data-aos="zoom-in"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Related Projects</h2>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="project-grid-item">
                <div className="image">
                  <img
                    src="assets/images/projects/project-grid3.jpg"
                    alt="Project"
                  />
                </div>
                <div className="content">
                  <div className="project-tags">
                    <a href="#">Design</a>
                    <a href="#">Modern</a>
                    <a href="#">Illustration</a>
                  </div>
                  <h4>
                    <Link href="project-details">
                      Modern 5G Concept Illustration Design
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
              data-aos-delay={50}
            >
              <div className="project-grid-item">
                <div className="image">
                  <img
                    src="assets/images/projects/project-grid4.jpg"
                    alt="Project"
                  />
                </div>
                <div className="content">
                  <div className="project-tags">
                    <a href="#">Website</a>
                    <a href="#">Landing Pages</a>
                    <a href="#">UX/UI</a>
                  </div>
                  <h4>
                    <Link href="project-details">
                      Responsive Website Design
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RiddaLayout>
  );
};
export default page;
