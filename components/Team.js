import Link from "next/link";

const Team = ({
  bg = "bgc-lighter",
  teamMembers = [
    {
      image: "assets/images/team/team-two1.png",
      name: "Kenneth S. Brown",
      designation: "Ceo &amp; Founder",
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
  ],
}) => {
  return (
    <section className={`team-area-two ${bg}`}>
      <div className="container bordered-x pt-130 rpt-100 pb-100 rpb-70 px-sm-0">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div
              className="section-title text-center mb-50"
              data-aos="zoom-in"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="subtitle mt-10 mb-15">Meet Our Team</span>
              <h2>Meet Our Experience Team Memeber</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {teamMembers.map((member) => (
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              key={member.name}
              data-aos="flip-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="team-item style-two">
                <div className="image">
                  <img src={member.image} alt={member.name} />
                  <div className="social-style-one">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className="content">
                  <h5>
                    <Link href="team-details">{member.name}</Link>
                  </h5>
                  <span className="designation">{member.designation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Team;
