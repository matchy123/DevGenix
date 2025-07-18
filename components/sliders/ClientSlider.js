"use client";
import { sliderProps } from "@/utility/sliderProps";
import Slider from "react-slick";

const ClientSlider = ({
  logoData = [
    { id: 1, image: "assets/images/client-logos/client-logo1white.png" },
    { id: 2, image: "assets/images/client-logos/client-logo2white.png" },
    { id: 3, image: "assets/images/client-logos/client-logo3.png" },
    { id: 4, image: "assets/images/client-logos/client-logo4white.png" },
    { id: 5, image: "assets/images/client-logos/client-logo5.png" },
    { id: 6, image: "assets/images/client-logos/client-logo6white.png" },
  ],
}) => {
  return (
    <Slider className="client-logo-active" {...sliderProps.clientLogo}>
      {logoData.map((logo) => (
        <div
          key={logo.id}
          className="client-logo-item"
          data-aos="flip-up"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <a href="#">
            <img src={logo.image} alt="Client Logo" />
          </a>
        </div>
      ))}
    </Slider>
  );
};
export default ClientSlider;
