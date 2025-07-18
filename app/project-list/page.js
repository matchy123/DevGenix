import PageBanner from "@/components/PageBanner";
import RiddaLayout from "@/layout/RiddaLayout";
import Link from "next/link";
const page = () => {
  const projects = [
    {
      id: 1,
      tags: ["Design", "Template", "UX/UI"],
      title: "Email Newsletter Template Design",
      image: "assets/images/projects/project-list1.jpg",
    },
    {
      id: 2,
      tags: ["Design", "Template", "UX/UI"],
      title: "Mobile Application Design",
      image: "assets/images/projects/project-list2.jpg",
    },
    {
      id: 3,
      tags: ["Design", "Template", "UX/UI"],
      title: "Cloud hosting dashboard Realtime resource",
      image: "assets/images/projects/project-list3.jpg",
    },
    {
      id: 4,
      tags: ["Design", "Template", "UX/UI"],
      title: "Responsive Website Design",
      image: "assets/images/projects/project-list4.jpg",
    },
    {
      id: 5,
      tags: ["Design", "Template", "UX/UI"],
      title: "Modern 5G Concept Illustration Design",
      image: "assets/images/projects/project-list5.jpg",
    },
  ];
  return (
    <RiddaLayout>
      <PageBanner pageTitle="Project List" pageName="Project List" />
      <section className="project-list py-130 rpy-100">
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
          {projects.map((project) => (
            <div className="project-list-item" key={project.id}>
              <div className="content">
                <div className="top">
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <a key={tag} href="#">
                        {tag}
                      </a>
                    ))}
                  </div>
                  <h4>
                    <Link href="project-details">{project.title}</Link>
                  </h4>
                </div>
                <div className="bottom">
                  <p>
                    Elevate your online presence exceptional website design
                    services specialize in creating visually stunning
                  </p>
                  <Link
                    href="project-details"
                    className="theme-btn style-two"
                    data-hover="Project Details"
                  >
                    <span>Project Details</span>
                  </Link>
                </div>
              </div>
              <div className="image">
                <img src={project.image} alt="Project" />
              </div>
            </div>
          ))}
          <div className="text-center pt-20">
            <Link
              href="project-grid"
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
