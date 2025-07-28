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
          text: "Working with DevGenix has been a game-changer for our digital presence. Their strategic approach and attention to detail have helped us reach new heights in our online business.",
          name: "Sarah Johnson",
          designation: "CEO & Founder",
        },
        {
          logo: "assets/images/testimonials/logo1white.png",
          author: "assets/images/testimonials/author2.jpg",
          text: "DevGenix delivered an exceptional website that perfectly captures our brand. Their team's expertise in web development and design exceeded our expectations.",
          name: "Michael Chen",
          designation: "Marketing Director",
        },
        {
          logo: "assets/images/testimonials/logo3white.png",
          author: "assets/images/testimonials/author1.jpg",
          text: "The team at DevGenix transformed our vision into a stunning digital reality. Their innovative solutions and professional service made the entire process seamless.",
          name: "Emily Rodriguez",
          designation: "Business Owner",
        },
        {
          logo: "assets/images/testimonials/logo1white.png",
          author: "assets/images/testimonials/author2.jpg",
          text: "DevGenix's expertise in digital solutions helped us achieve remarkable growth. Their commitment to quality and customer satisfaction is outstanding.",
          name: "David Thompson",
          designation: "Operations Manager",
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
          text: "Working with DevGenix has been a game-changer for our digital presence. Their strategic approach and attention to detail have helped us reach new heights.",
          name: "Sarah Johnson",
          designation: "CEO & Founder",
        },
        {
          author: "assets/images/testimonials/author2.jpg",
          logo: "assets/images/testimonials/logo2white.png",
          text: "DevGenix delivered an exceptional website that perfectly captures our brand. Their team's expertise exceeded our expectations.",
          name: "Michael Chen",
          designation: "Marketing Director",
        },
        {
          author: "assets/images/testimonials/author1.jpg",
          logo: "assets/images/testimonials/logo1white.png",
          text: "The team at DevGenix transformed our vision into a stunning digital reality. Their innovative solutions made the entire process seamless.",
          name: "Emily Rodriguez",
          designation: "Business Owner",
        },
        {
          author: "assets/images/testimonials/author2.jpg",
          logo: "assets/images/testimonials/logo2white.png",
          text: "DevGenix's expertise in digital solutions helped us achieve remarkable growth. Their commitment to quality is outstanding.",
          name: "David Thompson",
          designation: "Operations Manager",
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
          text: "Working with DevGenix has been a game-changer for our digital presence. Their strategic approach and attention to detail have helped us reach new heights.",
          name: "Sarah Johnson",
          designation: "CEO & Founder",
        },
        {
          author: "assets/images/testimonials/author2.jpg",
          text: "DevGenix delivered an exceptional website that perfectly captures our brand. Their team's expertise exceeded our expectations.",
          name: "Michael Chen",
          designation: "Marketing Director",
        },
        {
          author: "assets/images/testimonials/author1.jpg",
          text: "The team at DevGenix transformed our vision into a stunning digital reality. Their innovative solutions made the entire process seamless.",
          name: "Emily Rodriguez",
          designation: "Business Owner",
        },
        {
          author: "assets/images/testimonials/author2.jpg",
          text: "DevGenix's expertise in digital solutions helped us achieve remarkable growth. Their commitment to quality is outstanding.",
          name: "David Thompson",
          designation: "Operations Manager",
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
          text: "Working with DevGenix has been a game-changer for our digital presence. Their strategic approach and attention to detail have helped us reach new heights.",
          name: "Sarah Johnson",
          designation: "CEO & Founder",
        },
        {
          author: "assets/images/testimonials/author2.jpg",
          text: "DevGenix delivered an exceptional website that perfectly captures our brand. Their team's expertise exceeded our expectations.",
          name: "Michael Chen",
          designation: "Marketing Director",
        },
        {
          author: "assets/images/testimonials/author1.jpg",
          text: "The team at DevGenix transformed our vision into a stunning digital reality. Their innovative solutions made the entire process seamless.",
          name: "Emily Rodriguez",
          designation: "Business Owner",
        },
        {
          author: "assets/images/testimonials/author2.jpg",
          text: "DevGenix's expertise in digital solutions helped us achieve remarkable growth. Their commitment to quality is outstanding.",
          name: "David Thompson",
          designation: "Operations Manager",
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
          text: "Working with DevGenix has been a game-changer for our digital presence. Their strategic approach and attention to detail have helped us reach new heights.",
          name: "Sarah Johnson",
          designation: "CEO & Founder",
        },
        {
          author: "assets/images/testimonials/author2.jpg",
          text: "DevGenix delivered an exceptional website that perfectly captures our brand. Their team's expertise exceeded our expectations.",
          name: "Michael Chen",
          designation: "Marketing Director",
        },
        {
          author: "assets/images/testimonials/author1.jpg",
          text: "The team at DevGenix transformed our vision into a stunning digital reality. Their innovative solutions made the entire process seamless.",
          name: "Emily Rodriguez",
          designation: "Business Owner",
        },
        {
          author: "assets/images/testimonials/author2.jpg",
          text: "DevGenix's expertise in digital solutions helped us achieve remarkable growth. Their commitment to quality is outstanding.",
          name: "David Thompson",
          designation: "Operations Manager",
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
