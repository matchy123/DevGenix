import PageBanner from "@/components/PageBanner";
import RiddaLayout from "@/layout/RiddaLayout";
import Link from "next/link";

const NotFound = () => {
  return (
    <RiddaLayout>
      <PageBanner textCenter={true} pageTitle="404" pageName="404 Error" />
      <section className="error-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div
                className="error-content text-center"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image mb-40">
                  <img
                    className="w-75"
                    src="assets/images/about/404-white.png"
                    alt="404 Error"
                  />
                </div>
                <div className="section-title mt-15 mb-25">
                  <h2>
                    <span className="h1">OPPS! </span> Page Can’t be Found
                  </h2>
                </div>
                <p>
                  Best features to include on business landing page are those
                  that quickly convey your value proposition, build trust, and
                  encourage action. Here are six essential features
                </p>
                <Link
                  href="/"
                  className="theme-btn hover-primary mt-25"
                  data-hover="Back To Home"
                >
                  <span>Back To Home</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RiddaLayout>
  );
};
export default NotFound;
