import React from "react";
import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

export const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Bruno Miguel.</span> Web Designer
          </h1>

          <p className="home__description">
            Hello, My Name Is Bruno I'm 19 I Was Born In Bahia In Salvador I Was
            7 Years Old I Moved To Rio De Janeiro And I've Lived Here For 12
            Years I'm Currently Studying Html And Css Js And Py, My Hobbies And
            Playing Games Lol And Being Sad About That I'm Mono Aatrox And Main
            Darius, Kled And Swain, I'm Building This Site For Pure Training And
            Fun.
          </p>

          <Link to="/about" className="button">
            More About Me
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
