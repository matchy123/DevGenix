"use client";
import { sliderProps } from "@/utility/sliderProps";
import Slider from "react-slick";

export const TestimonialSlider1 = () => {
  return (
    <Slider
      {...sliderProps.testimonials2}
      className="testimonials-two-active"
      data-aos="fade-right"
      data-aos-duration={1500}
      data-aos-offset={50}
    >
      {[
        {
          logo: "assets/images/testimonials/logo3white.png",
          author: "assets/images/testimonials/author1.jpg",
          text: "Working with Ridda has been game-changer for our see social media presence. Their strategic to approach and the attention too detail have help reach heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          logo: "assets/images/testimonials/logo1white.png",
          author: "assets/images/testimonials/author2.jpg",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have helped us reach new heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          logo: "assets/images/testimonials/logo3white.png",
          author: "assets/images/testimonials/author1.jpg",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have helped us reach new heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          logo: "assets/images/testimonials/logo1white.png",
          author: "assets/images/testimonials/author2.jpg",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have helped us reach new heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
      ].map((testimonial, index) => (
        <div key={index} className="testimonial-item style-two">
          <div className="author-logo">
            <div className="quote">
              <i className="flaticon-quotation-mark" />
            </div>
            <div className="logo">
              <img src={testimonial.logo} alt="Logo" />
            </div>
          </div>
          <div className="text">{testimonial.text}</div>
          <div className="quote-title">
            <div className="author">
              <img src={testimonial.author} alt="Author" />
            </div>
            <h6>{testimonial.name}</h6>
            <span className="designation">/{testimonial.designation}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export const TestimonialsSlider2 = () => {
  return (
    <Slider className="testimonials-active" {...sliderProps.testimonials}>
      {[
        {
          author: "assets/images/testimonials/author1.jpg",
          logo: "assets/images/testimonials/logo1white.png",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have helped us reach new heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          author: "assets/images/testimonials/author2.jpg",
          logo: "assets/images/testimonials/logo2white.png",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have helped us reach new heights",
          name: "Thomas L. Brinker",
          designation: "SR Manager",
        },
        {
          author: "assets/images/testimonials/author1.jpg",
          logo: "assets/images/testimonials/logo1white.png",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have helped us reach new heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          author: "assets/images/testimonials/author2.jpg",
          logo: "assets/images/testimonials/logo2white.png",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have helped us reach new heights",
          name: "Thomas L. Brinker",
          designation: "SR Manager",
        },
      ].map((testimonial, index) => (
        <div
          key={index}
          className="testimonial-item"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
          data-aos-delay={index * 50}
        >
          <div className="author-logo">
            <div className="author">
              <img src={testimonial.author} alt="Author" />
            </div>
            <div className="logo">
              <img src={testimonial.logo} alt="Logo" />
            </div>
          </div>
          <div className="text">{testimonial.text}</div>
          <div className="quote-title">
            <div className="quote">
              <i className="flaticon-quotation-mark" />
            </div>
            <h6>{testimonial.name}</h6>
            <span className="designation">/{testimonial.designation}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export const TestimonialsSlider3 = () => {
  return (
    <Slider className="testimonials-two-active" {...sliderProps.testimonials2}>
      {[
        {
          author: "assets/images/testimonials/author1.jpg",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have helped us reach new heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          author: "assets/images/testimonials/author2.jpg",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have helped us reach new heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          author: "assets/images/testimonials/author1.jpg",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have helped us reach new heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          author: "assets/images/testimonials/author2.jpg",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have helped us reach new heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
      ].map((testimonial, index) => (
        <div key={index} className="testimonial-item style-three">
          <div className="author-logo">
            <div className="quote">
              <i className="flaticon-quotation-mark" />
            </div>
          </div>
          <div className="text">{testimonial.text}</div>
          <div className="quote-title">
            <div className="author">
              <img src={testimonial.author} alt="Author" />
            </div>
            <h6>{testimonial.name}</h6>
            <span className="designation">/{testimonial.designation}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export const TestimonialsSlider4 = () => {
  return (
    <Slider
      {...sliderProps.testimonials3}
      className="testimonials-three-active"
    >
      {[
        {
          author: "assets/images/testimonials/author1.jpg",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have help reach heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          author: "assets/images/testimonials/author2.jpg",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have help reach heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          author: "assets/images/testimonials/author1.jpg",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have help reach heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          author: "assets/images/testimonials/author2.jpg",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have help reach heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
      ].map((testimonial, index) => (
        <div key={index} className="testimonial-item style-four">
          <div className="author-logo">
            <div className="quote">
              <i className="flaticon-quotation-mark" />
            </div>
          </div>
          <div className="text">{testimonial.text}</div>
          <div className="quote-title">
            <div className="author">
              <img src={testimonial.author} alt="Author" />
            </div>
            <h6>{testimonial.name}</h6>
            <span className="designation">/{testimonial.designation}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export const TestimonialsSlider5 = () => {
  return (
    <Slider {...sliderProps.testimonials2} className="testimonials-two-active">
      {[
        {
          author: "assets/images/testimonials/author1.jpg",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have help reach heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          author: "assets/images/testimonials/author2.jpg",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have help reach heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          author: "assets/images/testimonials/author1.jpg",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have help reach heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          author: "assets/images/testimonials/author2.jpg",
          text: "Working with Ridda has been game-changer for our social media presence. Their strategic to approach and attention too detail have help reach heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
      ].map((testimonial, index) => (
        <div key={index} className="testimonial-item style-four">
          <div className="author-logo">
            <div className="quote">
              <i className="flaticon-quotation-mark" />
            </div>
          </div>
          <div className="text">{testimonial.text}</div>
          <div className="quote-title">
            <div className="author">
              <img src={testimonial.author} alt="Author" />
            </div>
            <h6>{testimonial.name}</h6>
            <span className="designation">/{testimonial.designation}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
};
