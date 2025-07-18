import About from "@/components/About";
import { Blog2 } from "@/components/Blog";
import PageBanner from "@/components/PageBanner";
import ClientSlider from "@/components/sliders/ClientSlider";
import { TestimonialSlider1 } from "@/components/sliders/TestimonialSlider";
import Team from "@/components/Team";
import { WhyChooseUs2 } from "@/components/WhyChooseUs";
import RiddaLayout from "@/layout/RiddaLayout";
const page = () => {
  return (
    <RiddaLayout>
      <PageBanner pageTitle="About Us" pageName="About Us" />
      <About counter={true} />
      <WhyChooseUs2 bg="bgc-none" />
      <Team />
      <section className="testimonials-two-area rel z-1">
        <div className="container px-0 bordered-x pt-130 rpt-100 pb-170 rpb-140">
          <div className="testimonials-and-clients bgc-white br-10 bordered">
            <div className="row">
              <div className="col-lg-5">
                <div
                  className="testimonials-content rmb-55"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="section-title mb-30">
                    <span className="subtitle mt-10 mb-15">
                      Out Testimonials
                    </span>
                    <h2>1580+ Customer Say About Our Services</h2>
                  </div>
                  <p>
                    A web design agency is dedicated to creating visually
                    stunning and highly functional websites.
                  </p>
                  <div className="testimonial-dots mt-45" />
                </div>
              </div>
              <div className="col-lg-7">
                <TestimonialSlider1 />
              </div>
            </div>
            <div
              className="text-center mt-45 mb-40"
              data-aos="zoom-in"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h6>Trusted by industry leaders</h6>
            </div>
            <ClientSlider />
          </div>
        </div>
      </section>
      <Blog2 subtitleColor="" />
    </RiddaLayout>
  );
};
export default page;
