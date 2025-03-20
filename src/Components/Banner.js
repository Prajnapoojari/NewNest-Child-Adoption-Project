import { useState, useEffect } from "react";
import Banner1 from "../Images/Banner1.jpg";
import Banner2 from "../Images/Banner2.jpg";
import Banner3 from "../Images/Banner3.jpg";

const images = [Banner1, Banner2, Banner3];

const texts = [
  {
    title: "Childbirth is an act of nature, Adoption is an act of God.",
    description:
      "Adoption reflects a profound act of love, compassion, and divine purpose."
  },
  {
    title: "Give Hope - Save Lives",
    description:
      "Through compassion and guidance, we help create brighter futures and stronger communities."
  },
  {
    title: "Every Child Deserves a Loving Home",
    description:
      "Creating lifelong bonds of love and understanding."
  }
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-container">
      <div className="banner-slide">
        <img src={images[currentIndex]} alt="Banner" className="banner-image" />
        <div className="banner-text">
          <h1>{texts[currentIndex].title}</h1>
          <p>{texts[currentIndex].description}</p>
        </div>
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;
