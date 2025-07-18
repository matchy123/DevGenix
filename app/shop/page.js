import PageBanner from "@/components/PageBanner";
import RiddaLayout from "@/layout/RiddaLayout";
import Link from "next/link";
const page = () => {
  const products = [
    {
      id: 1,
      category: "Product Design",
      image: "assets/images/products/product1.jpg",
      title: "Creative Web Page Design",
      price: 593,
      ratting: 5,
    },
    {
      id: 2,
      category: "Product Design",
      image: "assets/images/products/product2.jpg",
      title: "3D Illustration Design",
      price: 593,
      ratting: 5,
    },
    {
      id: 3,
      category: "Product Design",
      image: "assets/images/products/product3.jpg",
      title: "Business Card Mockup",
      price: 593,
      ratting: 5,
    },
    {
      id: 4,
      category: "Product Design",
      image: "assets/images/products/product4.jpg",
      title: "Creative Web Page Design",
      price: 593,
      ratting: 5,
    },
    {
      id: 5,
      category: "Product Design",
      image: "assets/images/products/product5.jpg",
      title: "Business Card Mockupn",
      price: 593,
      ratting: 5,
    },
    {
      id: 6,
      category: "Product Design",
      image: "assets/images/products/product6.jpg",
      title: "Creative Web Page Design",
      price: 593,
      ratting: 5,
    },
    {
      id: 7,
      category: "Product Design",
      image: "assets/images/products/product7.jpg",
      title: "T-shirt Mockup Design",
      price: 593,
      ratting: 5,
    },
    {
      id: 8,
      category: "Product Design",
      image: "assets/images/products/product8.jpg",
      title: "Mobile Application Design",
      price: 593,
      ratting: 4,
    },
    {
      id: 9,
      category: "Product Design",
      image: "assets/images/products/product9.jpg",
      title: "Logo Design & Branding",
      price: 593,
      ratting: 5,
    },
  ];

  return (
    <RiddaLayout>
      <PageBanner pageTitle="Shop" pageName="Shop" />
      <section className="product-area py-130 rpy-100 rel z-1">
        <div className="container container-1290">
          <div
            className="shop-shorter rel z-3 mb-40"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="sort-text mb-20 me-3">
              Showing 1 - 12 of 30 Results
            </div>
            <div className="products-dropdown mb-20">
              <select>
                <option value="default" selected>
                  Sort by
                </option>
                <option value="new">Sort by Newness</option>
                <option value="old">Sort by Oldest</option>
                <option value="hight-to-low">High To Low</option>
                <option value="low-to-high">Low To High</option>
              </select>
            </div>
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
            <div className="col-lg-12">
              <ul
                className="pagination mt-40 flex-wrap justify-content-center"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <li className="page-item disabled">
                  <span className="page-link">Prev</span>
                </li>
                <li className="page-item active">
                  <span className="page-link">
                    01
                    <span className="sr-only">(current)</span>
                  </span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    02
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    03
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    04
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </RiddaLayout>
  );
};
export default page;
