"use client";
import PageBanner from "@/components/PageBanner";
import RiddaLayout from "@/layout/RiddaLayout";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
const page = () => {
  const products = [
    {
      id: 1,
      category: "Product Design",
      image: "assets/images/products/product7.jpg",
      title: "Creative Web Page Design",
      price: 593,
      ratting: 5,
    },
    {
      id: 2,
      category: "Product Design",
      image: "assets/images/products/product8.jpg",
      title: "3D Illustration Design",
      price: 593,
      ratting: 5,
    },
    {
      id: 3,
      category: "Product Design",
      image: "assets/images/products/product9.jpg",
      title: "Business Card Mockup",
      price: 593,
      ratting: 5,
    },
  ];
  return (
    <RiddaLayout>
      <PageBanner pageTitle="Shop" pageName="Product Details" />
      <section className="product-details pt-130">
        <div className="container container-1290">
          <div className="row align-items-center gap-70">
            <div className="col-lg-6">
              <div className="product-details-images rmb-55 wow fadeInLeft delay-0-2s">
                <Tab.Container defaultActiveKey="preview1">
                  <Tab.Content className="preview-images">
                    {["preview1", "preview2", "preview3"].map((preview, i) => (
                      <Tab.Pane
                        eventKey={preview}
                        className="preview-item"
                        key={i}
                      >
                        <img
                          src={`assets/images/products/preview1.jpg`}
                          alt="Perview"
                        />
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                  <Nav as="div" className="nav thumb-images rmb-20">
                    {["thumb1", "thumb2", "thumb3"].map((thumb, i) => (
                      <Nav.Link
                        key={i}
                        eventKey={`preview${i + 1}`}
                        className={`thumb-item p-0 ${
                          i === 0 ? "active show" : ""
                        }`}
                      >
                        <img
                          src={`assets/images/products/${thumb}.jpg`}
                          alt="Thumb"
                        />
                      </Nav.Link>
                    ))}
                  </Nav>
                </Tab.Container>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product-details-content wow fadeInRight delay-0-2s">
                <div className="section-title">
                  <h2>3D Illustration Design</h2>
                </div>
                <div className="ratting-price mb-30">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <span className="price">$593</span>
                </div>
                <p>
                  Doloremque laudantium, totam rem aperiam, eaque ipsa quae
                  abillo inventore veritatis quasi architecto beatae vitae dicta
                  sunt explicabo Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit autfugit, sed quia consequuntur magni
                  dolores eos qui ratiluptatem sequi nesciunt porro quisquam
                  est, qui dolorem
                </p>
                <form action="#" className="add-to-cart pt-35">
                  <input
                    type="number"
                    defaultValue={1}
                    min={1}
                    max={20}
                    required
                  />
                  <button
                    type="submit"
                    className="theme-btn style-two"
                    data-hover="Add To Cart"
                  >
                    <span>Add To Cart</span>
                  </button>
                </form>
                <ul className="category-tags pt-60">
                  <li>
                    <b>Category :</b>
                    <Link href="shop">Software</Link>
                    <Link href="shop">Website</Link>
                    <Link href="shop">Design</Link>
                  </li>
                  <li>
                    <b>Tags :</b>
                    <Link href="shop">3D</Link>
                    <Link href="shop">Ilustration</Link>
                    <Link href="shop">Arts</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Tab.Container defaultActiveKey="details">
            <Nav
              as={"ul"}
              className="nav product-information-tab mt-80 mb-25 wow fadeInUp delay-0-2s"
            >
              {[
                { name: "Description", href: "details" },
                { name: "Information", href: "information" },
                { name: "Reviews", href: "review" },
              ].map((item, index) => (
                <Nav.Item as={"li"} key={index}>
                  <Nav.Link as="a" href={`#${item.href}`} eventKey={item.href}>
                    {item.name} <i className="far fa-arrow-right" />
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
            <Tab.Content className="tab-content pb-5 wow fadeInUp delay-0-2s">
              <Tab.Pane className="tab-pane mb-20 fade" eventKey="details">
                <p>
                  Must explain to you how all this mistaken idea of denouncing
                  pleasure and praising pain was born and I will give you a
                  complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because it is pleasure, but because
                  those who do not know how to pursue pleasure rationally
                  encounter consequences that are extremely painful. Nor again
                  is there anyone who loves or pursues or desires to obtain pain
                  of itself, because it is pain, but because occasionally
                </p>
                <ul className="list-style-two pt-10 mb-30">
                  <li>Graphic Design</li>
                  <li>3D Illustrations Design</li>
                  <li>Dashboard Design</li>
                </ul>
                <p>
                  Circumstances occur in which toil and pain can procure him
                  some great pleasure. To take a trivial example, which of us
                  ever undertakes laborious physical exercise, except to obtain
                  some advantage from it? But who has any right to find fault
                  with a man who chooses
                </p>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="information">
                <h4 className="mb-20">Additional information</h4>
                <p>
                  Now wherever you are, wherever you are, you can easily monitor
                  your CCTV videos through your mobile, tab, laptop or PC. With
                  the wireless camera, you can view the camera from your mobile
                  or computer to the right-left 0 to 360-degree video. Cover the
                  flower room with a camera.
                </p>
                <ul className="list-style-two my-25">
                  <li>Wide Angle and Long Length</li>
                  <li>Smart zooming point</li>
                  <li>HD quality video output.</li>
                  <li>Smart Alarming System</li>
                </ul>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam
                </p>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="review">
                <div className="comments mb-20">
                  <h4 className="comment-title mb-25">3 Reviews</h4>
                  <div
                    className="comment-body"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="author-thumb">
                      <img
                        src="assets/images/blog/comment-author3.jpg"
                        alt="Author"
                      />
                    </div>
                    <div className="content">
                      <h6>Lonnie B. Horwitz</h6>
                      <span className="date">
                        <i className="far fa-calendar-alt" /> September 25 ,2024
                      </span>
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                      <p>
                        Tours and travels play a crucial role in enriching lives
                        by offering unique experiences, cultural exchanges, and
                        the joy of exploration.
                      </p>
                      <a className="read-more" href="#">
                        Reply <i className="far fa-angle-right" />
                      </a>
                    </div>
                  </div>
                  <div
                    className="comment-body comment-child"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="author-thumb">
                      <img
                        src="assets/images/blog/comment-author1.jpg"
                        alt="Author"
                      />
                    </div>
                    <div className="content">
                      <h6>Jaime B. Wilson</h6>
                      <span className="date">
                        <i className="far fa-calendar-alt" /> September 25 ,2024
                      </span>
                      <p>
                        Tours and travels play a crucial role in enriching lives
                        by offering unique experiences, cultural exchanges, and
                        the joy of exploration.
                      </p>
                      <a className="read-more" href="#">
                        Reply <i className="far fa-angle-right" />
                      </a>
                    </div>
                  </div>
                  <div
                    className="comment-body"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="author-thumb">
                      <img
                        src="assets/images/blog/comment-author2.jpg"
                        alt="Author"
                      />
                    </div>
                    <div className="content">
                      <h6>Michael A. Saladin</h6>
                      <span className="date">
                        <i className="far fa-calendar-alt" /> September 25 ,2024
                      </span>
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                      <p>
                        Tours and travels play a crucial role in enriching lives
                        by offering unique experiences, cultural exchanges, and
                        the joy of exploration.
                      </p>
                      <a className="read-more" href="#">
                        Reply <i className="far fa-angle-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <form
                  className="reviews-form pt-30 z-1 rel mb-20"
                  name="contactForm"
                  action="#"
                  method="post"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h4>Leave A Review</h4>
                  <p>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                  <div className="row gap-20 mt-30">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={4}
                          placeholder="Write Comment"
                          required
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group mb-0">
                        <button
                          type="submit"
                          className="theme-btn hover-primary"
                          data-hover="Post Review<"
                        >
                          <span>Post Review</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </section>
      <section className="related-product-area py-100 rpy-70 rel z-1">
        <div className="container container-1290">
          <div
            className="section-title text-center mb-50"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <h2>Related Products</h2>
          </div>
          <div className="row">
            {products.map((product) => (
              <div className="col-xl-4 col-md-6" key={product.id}>
                <div
                  className="product-item"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <img src={product.image} alt="Product" />
                  </div>
                  <div className="content">
                    <a className="category" href="#">
                      {product.category}
                    </a>
                    <h5>
                      <Link href="product-details">{product.title}</Link>
                    </h5>
                    <div className="ratting">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <i
                          key={i}
                          className={
                            i < product.ratting ? "fas fa-star" : "far fa-star"
                          }
                        />
                      ))}
                      <span className="price">${product.price}</span>
                    </div>
                    <Link
                      href="cart"
                      className="theme-btn"
                      data-hover="Add to Cart"
                    >
                      <span>Add to Cart</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </RiddaLayout>
  );
};
export default page;
