import PageBanner from "@/components/PageBanner";
import ProgressBar from "@/components/ProgressBar";
import RiddaLayout from "@/layout/RiddaLayout";
const page = () => {
  return (
    <RiddaLayout>
      <PageBanner pageTitle="Team Details" pageName="Team Details" />
      <section className="team-details-area">
        <div className="container bordered-x py-130 rpy-100">
          <div className="row gap-80 justify-content-center">
            <div className="col-lg-5">
              <div className="team-details-image text-xl-center rmb-55">
                <img
                  src="assets/images/team/team-details.jpg"
                  alt="Team Member"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="team-details-content">
                <div className="section-title mb-25">
                  <h2>Kenneth S. Brown</h2>
                  <span className="designation">Web Designer</span>
                </div>
                <p>
                  Web designer is creative professional responsible for crafting
                  visually appealing an functional websites effectively
                  communicate brand's message. Combining artistic talent.
                </p>
                <br />
                <h4>Skills</h4>
                <p>
                  Must stay updated on the latest design trends and technologies
                  to produce innovative and responsive designs various
                </p>
                <div className="row justify-content-between pt-10">
                  {[
                    { id: "1", title: "Web Design", value: 93 },
                    { id: "2", title: "Development", value: 82 },
                    { id: "3", title: "Marketing", value: 89 },
                  ].map((item) => (
                    <div
                      key={item.id}
                      className={`col-xl-3 col-sm-4 col-6 circle-progress ${item.id}`}
                    >
                      <ProgressBar value={item.value} />
                      <h6>{item.title}</h6>
                    </div>
                  ))}
                </div>{" "}
                <h4>Experience</h4>
                <p>
                  Must stay updated on the latest design trends and technologies
                  to produce innovative and responsive designs various
                </p>
                {[
                  {
                    title: "Senior Product Designer",
                    years: "2020-Present",
                    company: "Google",
                  },
                  {
                    title: "Web Designer",
                    years: "2018-2020",
                    company: "Dribbble",
                  },
                  {
                    title: "Graphics Designer",
                    years: "2015-2017",
                    company: "Behance",
                  },
                  {
                    title: "Lead UI Designer",
                    years: "2013-2014",
                    company: "Amazon",
                  },
                ].map((item, index) => (
                  <div
                    className={`experience-item ${index === 0 ? "mt-40" : ""}`}
                    key={item.title}
                  >
                    <div className="icon">
                      <i className="flaticon-job-search" />
                    </div>
                    <div className="content">
                      <h6>{item.title}</h6>
                      <span className="years">{item.years}</span>
                    </div>
                    <span className="company">{item.company}</span>
                  </div>
                ))}
                <br />
                <h4>Experience</h4>
                <p>
                  Must stay updated on the latest design trends and technologies
                  to produce innovative and responsive designs various
                </p>
                <form
                  className="contact-form bgc-lighter mt-40 z-1 rel"
                  name="contactForm"
                  action="#"
                  method="post"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="form-group mt-10">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="your name here"
                      defaultValue
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="email address"
                      defaultValue
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows={4}
                      placeholder="write message"
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group mb-10">
                    <button
                      type="submit"
                      className="theme-btn"
                      data-hover="Send Message"
                    >
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RiddaLayout>
  );
};
export default page;
