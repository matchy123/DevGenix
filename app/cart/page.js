"use client";
import PageBanner from "@/components/PageBanner";
import RiddaLayout from "@/layout/RiddaLayout";
import Link from "next/link";
import { useState } from "react";

const page = () => {
  const [cartItems, setCartItems] = useState([
    {
      image: "assets/images/widgets/news1.jpg",
      title: "Fitness UI Kits",
      price: 70,
      quantity: 1,
    },
    {
      image: "assets/images/widgets/news2.jpg",
      title: "Dashboard UI",
      price: 65,
      quantity: 2,
    },
    {
      image: "assets/images/widgets/news3.jpg",
      title: "Plugin for WordPress",
      price: 80,
      quantity: 1,
    },
  ]);

  const updateQuantity = (index, quantity) => {
    setCartItems(
      cartItems.map((item, i) => (i === index ? { ...item, quantity } : item))
    );
  };

  const removeItem = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  return (
    <RiddaLayout>
      <PageBanner pageTitle="Cart" pageName="Shopping Cart" />
      <section className="shopping-cart-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div
            className="shoping-table mb-50"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <table>
              <thead>
                <tr>
                  <th>Images</th>
                  <th>Product</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img src={item.image} alt="Product" />
                    </td>
                    <td>
                      <span className="title">{item.title}</span>
                    </td>
                    <td>
                      <span className="price">{item.price}</span>
                    </td>
                    <td>
                      <div className="quantity-input">
                        <button
                          className="quantity-down"
                          onClick={() =>
                            updateQuantity(index, item.quantity - 1)
                          }
                        >
                          --
                        </button>
                        <input
                          className="quantity"
                          type="text"
                          defaultValue={item.quantity}
                          name="quantity"
                          onChange={(e) =>
                            updateQuantity(index, parseInt(e.target.value, 10))
                          }
                        />
                        <button
                          className="quantity-up"
                          onClick={() =>
                            updateQuantity(index, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>
                      <b className="price">{item.price * item.quantity}</b>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="close"
                        onClick={() => removeItem(index)}
                      >
                        ×
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="row text-center text-lg-left align-items-center">
            <div className="col-lg-6">
              <div
                className="discount-wrapper mb-30"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  className="d-sm-flex justify-content-center justify-content-lg-start"
                >
                  <input type="text" placeholder="Coupon Code" required />
                  <button
                    className="theme-btn hover-primary flex-none ms-2 my-5"
                    type="submit"
                    data-hover="Apply Coupon"
                  >
                    <span>Apply Coupon</span>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="update-shopping mb-30 text-lg-end"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <Link
                  href="shop"
                  className="theme-btn style-two me-2 my-5"
                  data-hover="Shopping"
                >
                  <span>Shopping</span>
                </Link>
                <Link
                  href="shop"
                  className="theme-btn hover-primary my-5"
                  data-hover="Update Cart"
                >
                  <span>Update Cart</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="shoping-cart-total pt-20"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h4 className="form-title mb-25 text-center">Cart Totals</h4>
                <table>
                  <tbody>
                    <tr>
                      <td>Cart Subtotal</td>
                      <td>
                        <span className="price">
                          {cartItems.reduce(
                            (acc, item) => acc + item.price * item.quantity,
                            0
                          )}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Shipping Fee</td>
                      <td>
                        <span className="price">10.00</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Vat</td>
                      <td>$0.00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Order Total</strong>
                      </td>
                      <td>
                        <b className="price">
                          {cartItems.reduce(
                            (acc, item) => acc + item.price * item.quantity,
                            0
                          ) + 10}
                        </b>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Link
                  href="checkout"
                  className="theme-btn hover-primary mt-25 w-100"
                  data-hover="Proceed to checkout"
                >
                  <span>Proceed to checkout</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RiddaLayout>
  );
};
export default page;
