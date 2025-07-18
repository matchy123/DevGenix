import PageBanner from "@/components/PageBanner";
import RiddaLayout from "@/layout/RiddaLayout";
import Link from "next/link";
const page = () => {
  return (
    <RiddaLayout>
      <PageBanner pageTitle="Project Grid" pageName="Project Grid" />
      <section className="project-grid py-130 rpy-100">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center mb-65"
                data-aos="zoom-in"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="subtitle mt-10 mb-15">Popular Works</span>
                <h2>Explore Our Latest Projects</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {[
              {
                img: "project-grid1.jpg",
                tags: ["Design", "Template", "UX/UI"],
                title: "Email Newsletter Template Design",
              },
              {
                img: "project-grid2.jpg",
                tags: ["Graphics", "SEO", "Illustration"],
                title: "SEO Strategy Illustration Design",
                delay: 50,
              },
              {
                img: "project-grid3.jpg",
                tags: ["Design", "Modern", "Illustration"],
                title: "Modern 5G Concept Illustration Design",
              },
              {
                img: "project-grid4.jpg",
                tags: ["Website", "Landing Pages", "UX/UI"],
                title: "Responsive Website Design",
                delay: 50,
              },
              {
                img: "project-grid5.jpg",
                tags: ["Apps", "Travel", "Booking"],
                title: "Travel Booking Mobile Application Design",
              },
              {
                img: "project-grid6.jpg",
                tags: ["Design", "Template", "UX/UI"],
                title: "Email Newsletter Template Design",
                delay: 50,
              },
              {
                img: "project-grid7.jpg",
                tags: ["Dashboard", "Template", "UX/UI"],
                title: "Cloud hosting dashboard Realtime resource",
              },
              {
                img: "project-grid8.jpg",
                tags: ["Design", "Template", "UX/UI"],
                title: "Website UI/UX Landing Page Design",
                delay: 50,
              },
            ].map((project, index) => (
              <div key={index} className="col-lg-6">
                <div
                  className="project-grid-item"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                  data-aos-delay={project.delay || 0}
                >
                  <div className="image">
                    <img
                      src={`assets/images/projects/${project.img}`}
                      alt="Project"
                    />
                  </div>
                  <div className="content">
                    <div className="project-tags">
                      {project.tags.map((tag, tagIndex) => (
                        <a key={tagIndex} href="#">
                          {tag}
                        </a>
                      ))}
                    </div>
                    <h4>
                      <Link href="project-details">{project.title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center pt-20">
            <Link
              href="project-list"
              className="theme-btn hover-primary"
              data-hover="Project Details"
            >
              <span>View More Projects</span>
            </Link>
          </div>
        </div>
      </section>
    </RiddaLayout>
  );
};
export default page;
