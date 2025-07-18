import CTA from "@/components/CTA";
import PageBanner from "@/components/PageBanner";
import RiddaLayout from "@/layout/RiddaLayout";
const page = () => {
  return (
    <RiddaLayout>
      <PageBanner pageTitle="Web Design" pageName="Service Details" />
      <section className="service-details-area rel z-1">
        <div className="container bordered-x py-130 rpy-100 px-sm-0">
          <div className="section-title mb-50">
            <h2>
              Creating a modern website design involves combining aesthetics,
              functionality, and user experience to create a visually appealing
              and easy-to-navigate website. Here are some key steps to help you
              create a modern website design
            </h2>
          </div>
          <p>
            Web design is the process of creating a website's visual layout and
            user experience, combining elements such as color, typography,
            images, and interactive features to create a cohesive and engaging
            online presence. A well-designed website is both aesthetically
            pleasing and functional, providing seamless experience for users as
            they navigate through its content.
          </p>
          <div className="image my-55">
            <img
              src="assets/images/services/service-details.jpg"
              alt="Service Details"
            />
          </div>
          <h3>Define Your Purpose and Audience</h3>
          <p>
            Web design is the process of creating a website's visual layout and
            user experience, combining elements such as color, typography,
            images, and interactive features to create a cohesive and engaging
            online presence. A well-designed website is both aesthetically
            pleasing and functional, providing seamless experience for users as
            they navigate through its content.
          </p>
          <ul className="list-style-one mt-25 mb-35">
            <li>Choose a Clean and Simple Layout</li>
            <li>Select a Color Scheme</li>
            <li>Pick Modern Typography</li>
            <li>Incorporate High-Quality Visuals</li>
          </ul>
          <p>
            Grid System A grid-based layout helps organize content in a
            structured manner, ensuring consistency across different pages.
            Responsive Design Websites should be designed to be fully
            responsive, meaning they adapt to different screen sizes and
            devices, such as smartphones, tablets, and desktops. This simple
            roadmap can be adapted to fit different types of projects or
            initiatives, providing a clear path from start to finish.
          </p>
          <br />
          <h3>Very Our Simple Roadmap</h3>
          <p>
            A simple roadmap is a strategic plan that outlines the key steps and
            milestones needed to achieve a specific goal. It provides a clear,
            step-by-step guide that helps teams and individuals stay focused and
            organized, ensuring that everyone is aligned with the project's
          </p>
          <div className="row text-center justify-content-center pt-25 pb-15 rel">
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="flip-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="work-process-item-two style-two">
                <span className="number">01</span>
                <h6>Discovery &amp; Analysis</h6>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="flip-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="work-process-item-two style-two">
                <span className="number">02</span>
                <h6>Website Optimization</h6>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="flip-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="work-process-item-two style-two">
                <span className="number">03</span>
                <h6>Content Strategy</h6>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="flip-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="work-process-item-two style-two">
                <span className="number">04</span>
                <h6>Discovery &amp; Analysis</h6>
              </div>
            </div>
          </div>
          <p>
            Starting with defining the goals and objectives, the roadmap
            progresses through stages such as research and planning, design and
            development, and implementation and execution. It also includes
            steps for testing, feedback, and optimization to ensure the project
            meets its targets effectively. By following a simple roadmap, teams
            can manage their resources efficiently, adapt to changes, and
            achieve successful outcomes with clarity and purpose.
          </p>
          <br />
          <h3>How to Benefits to Choose us</h3>
          <p>
            To maximize the benefits of using your website, it's important to
            highlight the unique value it offers to users and ensure it provides
            a positive experience. Here are some key strategies to effectively
            communicate the benefits of using your website:
          </p>
          <ul className="list-style-one mt-25">
            <li>Clear Value Proposition</li>
            <li>User-Friendly Design and Navigation</li>
            <li>High-Quality Content</li>
            <li>Interactive Features</li>
            <li>Secure and Trustworthy Experience</li>
            <li>Call-to-Actions (CTAs)</li>
          </ul>
        </div>
      </section>
      <CTA extraClass="bordered-top" />
    </RiddaLayout>
  );
};
export default page;
