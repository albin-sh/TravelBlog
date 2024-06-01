import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import img1 from "../Assets/1.jpg";
import img2 from "../Assets/2.jpg";
import img3 from "../Assets/3.jpg";
import img4 from "../Assets/4.jpg";
import "../Styles/Home.css";
import "../Styles/bootstrap.min.css";

const slides = [
  {
    id: 1,
    image: img1,
    title: "Digital Agency",
    year: "of the year 2019",
    description: "Visual Identity by John Doe Client: Lorem ipsum",
  },
  {
    id: 2,
    image: img2,
    title: "Creative Agency",
    year: "of the year 2019",
    description: "Visual Identity by John Doe Client: Lorem ipsum",
  },
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const sections = document.querySelectorAll(
        ".hero-area, .top-catagory-area, .nl-area"
      );
      sections.forEach((section) => {
        if (scrollPosition > section.offsetTop) {
          section.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Trigger handleScroll once on component mount to check if any sections are already in view
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <section className="hero-area">
        <div className="hero-slideshow">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`single-slide ${
                index === currentSlide ? "active" : ""
              }`}
            >
              <div
                className="slide-bg-img bg-img"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              <div className="container h-100">
                <div className="row h-100 align-items-center">
                  <div className="col-12 col-lg-9">
                    <div className="welcome-text">
                      <h2>
                        <span>{slide.title}</span>
                        <br />
                        {slide.year}
                      </h2>
                      <h4>{slide.description}</h4>
                      <a href="#" className="btn pixel-btn mt-50">
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div
        className={`top-catagory-area d-flex flex-wrap ${
          showImages ? "show" : ""
        }`}
      >
        <div
          className="single-catagory bg-img d-flex align-items-center justify-content-center jarallax img3"
          style={{ backgroundImage: `url(${img3})` }}
        >
          <a href="#">Agency</a>
        </div>
        <div
          className="single-catagory bg-img d-flex align-items-center justify-content-center jarallax img4"
          style={{ backgroundImage: `url(${img4})` }}
        >
          <a href="#">What We Do?</a>
        </div>
      </div>

      <section className="nl-area section-padding-100-0">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-12 col-md-9">
              <div className="nl-form mb-100">
                <h4>Stay in touch with us</h4>
                <form action="#" method="post">
                  <input
                    type="email"
                    name="nl-email"
                    id="nlEmail"
                    placeholder="Email Address ..."
                  />
                  <button type="submit" className="d-none"></button>
                </form>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="view-projects-btn text-right mb-100">
                <a href="#" className="btn pixel-btn">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
