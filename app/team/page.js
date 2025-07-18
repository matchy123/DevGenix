import PageBanner from "@/components/PageBanner";
import Team from "@/components/Team";
import RiddaLayout from "@/layout/RiddaLayout";
const page = () => {
  const teamMembers = [
    {
      image: "assets/images/team/team-two1.png",
      name: "Kenneth S. Brown",
      designation: "Ceo & Founder",
    },
    {
      image: "assets/images/team/team-two2.png",
      name: "Norman D. Hogan",
      designation: "Web Designer",
    },
    {
      image: "assets/images/team/team-two3.png",
      name: "Mike L. Quattlebaum",
      designation: "Apps Developer",
    },
    {
      image: "assets/images/team/team-two4.png",
      name: "Kenneth M. Smith",
      designation: "Graphics Designer",
    },
    {
      image: "assets/images/team/team-two5.png",
      name: "James J. Altamirano",
      designation: "Digital Consultant",
    },
    {
      image: "assets/images/team/team-two6.png",
      name: "Michael T. Johnson",
      designation: "Business Marketer",
    },
    {
      image: "assets/images/team/team-two7.png",
      name: "William M. Phelan",
      designation: "Graphics Designer",
    },
    {
      image: "assets/images/team/team-two8.png",
      name: "Frank R. Holland",
      designation: "Apps Developer",
    },
  ];
  return (
    <RiddaLayout>
      <PageBanner pageTitle="Team" pageName="Team Member" />
      <section className="team-page-about-area rel z-1">
        <div className="container px-sm-0 bordered-x pt-130 rpt-100">
          <div className="row gap-50 align-items-center">
            <div
              className="col-lg-6 rmb-55"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="team-page-about-content me-xl-5">
                <div className="section-title mb-35">
                  <h2>Most Experience For Digital Product and Web Design</h2>
                </div>
                <p>
                  Web design agency, we specialize in creating visually stunning
                  and highly functional websites that help businesses stand out
                  in the digital world team talented designers and developers
                  are passionate about crafting
                </p>
                <ul className="list-style-two mt-30">
                  <li>Digital Product Design</li>
                  <li>SEO Optimization</li>
                  <li>Web Development</li>
                  <li>Mobile Apps Design</li>
                </ul>
                <a
                  href="#team"
                  className="theme-btn hover-primary mt-35"
                  data-hover="Meet Our Experience Team"
                >
                  <span>Meet Our Experience Team</span>
                </a>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="image">
                <img
                  className="br-5"
                  src="assets/images/about/team-page.jpg"
                  alt="Team"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Team bg="" teamMembers={teamMembers} />
    </RiddaLayout>
  );
};
export default page;
