import CTA from "@/components/CTA";
import PageBanner from "@/components/PageBanner";
import { Services2 } from "@/components/Services";
import { WorkingProcess2 } from "@/components/WorkingProcess";
import RiddaLayout from "@/layout/RiddaLayout";
import Link from "next/link";
const page = () => {
  return (
    <RiddaLayout>
      <PageBanner pageTitle="Service" pageName="Service_02" />

      <section className="why-choose-area rel z-1">
        <div className="container px-sm-0 bordered-x py-130 rpy-100">
          <div className="row justify-content-between">
            <div
              className="col-xl-5 col-lg-6 mt-50 rmt-0 rmb-55"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title mb-30">
                <span className="subtitle mt-10 mb-15">Why Choose Us</span>
                <h2>Discover the advantages of our services</h2>
              </div>
              <p>
                We offer website redesign services. Whether you're looking to
                refresh your existing site with new look or need a complete
                overhaul, our team can help. We will assess your current
                website, identify areas
              </p>
              <br />
              <img
                src="assets/images/about/why-choose-us.jpg"
                alt="Why Choose Us"
              />
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="why-choose-services">
                <div className="service-item style-three">
                  <div className="icon">
                    <i className="flaticon-curve" />
                  </div>
                  <div className="content">
                    <h5>
                      <Link href="service-details">
                        Modern &amp; Creative Design
                      </Link>
                    </h5>
                    <p>
                      We design are mobile-friendly fully responsive means they
                      and function perfectly on all devices.
                    </p>
                  </div>
                </div>
                <div className="service-item style-three">
                  <div className="icon">
                    <i className="flaticon-leadership" />
                  </div>
                  <div className="content">
                    <h5>
                      <Link href="service-details">Dedicated Team Member</Link>
                    </h5>
                    <p>
                      We design are mobile-friendly fully responsive means they
                      and function perfectly on all devices.
                    </p>
                  </div>
                </div>
                <div className="service-item style-three">
                  <div className="icon">
                    <i className="flaticon-satisfaction" />
                  </div>
                  <div className="content">
                    <h5>
                      <Link href="service-details">
                        Satisfaction guaranteed
                      </Link>
                    </h5>
                    <p>
                      We design are mobile-friendly fully responsive means they
                      and function perfectly on all devices.
                    </p>
                  </div>
                </div>
                <div className="service-item style-three">
                  <div className="icon">
                    <i className="flaticon-networking" />
                  </div>
                  <div className="content">
                    <h5>
                      <Link href="service-details">
                        Multi-Channel Expertise
                      </Link>
                    </h5>
                    <p>
                      We design are mobile-friendly fully responsive means they
                      and function perfectly on all devices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WorkingProcess2 extraClass="bgc-lighter" />
      <Services2 extraClass="pt-130 rpt-100" />
      <CTA />
    </RiddaLayout>
  );
};
export default page;
