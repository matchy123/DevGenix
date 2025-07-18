import { Faq2 } from "@/components/Faq";
import PageBanner from "@/components/PageBanner";
import Services from "@/components/Services";
import { WhyChooseUs3 } from "@/components/WhyChooseUs";
import WorkingProcess from "@/components/WorkingProcess";
import RiddaLayout from "@/layout/RiddaLayout";
import Link from "next/link";
const page = () => {
  return (
    <RiddaLayout>
      <PageBanner pageTitle="Service" pageName="Service_01" />
      <section className="what-we-provide-area rel z-1">
        <div className="container px-sm-0 bordered-x py-130 rpy-100">
          <div className="row justify-content-between">
            <div
              className="col-lg-6 rmb-55"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title mb-50">
                <span className="subtitle mt-10 mb-15">What We Provide</span>
                <h2>
                  The Complete Suite of Services We Provide for Your Online
                  Success
                </h2>
              </div>
              <img
                src="assets/images/about/what-we-provide.jpg"
                alt="What We Provide"
              />
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="image mb-40">
                <img
                  src="assets/images/about/what-we-provide2.jpg"
                  alt="What We Provide"
                />
              </div>
              <p>
                Understanding your marketing videos’ performance can be like
                looking for needle in a haystack. Vidyard’s online video
                marketing platform is a magnet We'll discuss your project needs,
                goals, and budget, and provide
              </p>
              <Link
                href="about"
                className="theme-btn hover-primary mt-25"
                data-hover="Learn More Us"
              >
                <span>Learn More Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <WorkingProcess titleColor="" />
      <Services extraClass="bgc-black text-white" />
      <WhyChooseUs3 />
      <Faq2 />
    </RiddaLayout>
  );
};
export default page;
