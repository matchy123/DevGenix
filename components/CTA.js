import Link from "next/link";

const CTA = ({ extraClass }) => {
  return (
    <section className="cta-area-two rel z-1">
      <div
        className={`container px-sm-0 bordered-x py-130 rpy-100 ${extraClass}`}
        style={{
          backgroundImage: "url(assets/images/background/cta-bg-dots.png)",
        }}
      >
        <div className="row justify-content-center">
          <div
            className="col-xl-7 col-lg-9 col-md-11 text-center"
            data-aos="zoom-in"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="section-title mx-xl-3 mb-30">
              <h2>Get In Touch and start growing your startup today</h2>
              <p>Have any questions? Don’t hesitate to contact us!</p>
            </div>
            <Link
              href="contact"
              className="theme-btn hover-primary"
              data-hover="Get Started"
            >
              <span>Get Started</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CTA;
