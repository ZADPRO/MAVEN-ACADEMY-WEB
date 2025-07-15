import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { useMediaQuery } from "react-responsive";

// import carousel1 from "../../assets/course/1.jpg";
import carousel1 from "../../assets/course/GymiBanner.jpg";
import carousel2 from "../../assets/course/ButterflyBanner.jpg";
import carousel3 from "../../assets/course/TaglineBanner.jpg";

import mob1 from "../../assets/course/mob1.jpg";
import mob2 from "../../assets/course/mob2.jpg";
import mob3 from "../../assets/course/mob3.jpg";
import { useNavigate } from "react-router-dom";

const Carousels: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const navigate = useNavigate(); // 👈 for routing

  // Conditional image sources
  const images = isMobile
    ? [mob1, mob2, mob3]
    : [carousel1, carousel2, carousel3];

  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        stopOnHover={false}
        interval={3000}
        preventMovementUntilSwipeScrollTolerance
        swipeScrollTolerance={50}
      >
        {images.map((image, index) => (
          <div className="carouselDiv" key={index}>
            <img
              src={image}
              className="carousel-image"
              alt={`Slide ${index + 1}`}
              onClick={() => navigate("/course")} // 👈 Navigate on image click
                          style={{ cursor: "pointer" }}

            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousels;
