import React from "react";
import profileImg from "../assets/her-profile-img2.png";
import shapeOne from "../assets/shape-1.png";
import shapeTwo from "../assets/shape-2.png";
import dueLogo from "../assets/due_logo_text.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function Home() {
  return (
    <section className="p-home" id="is-home">
      <div className="c-home__container l-container">
        <p className="c-home__subtitle u-text-cs">
          Xin chào, <span>Em tên là</span>
        </p>
        <h1 className="c-home__title u-text-cs">
          Thanh <span>Ngọc</span>
        </h1>
        <p className="c-home__job">
          <span className="u-text-cs">Em là một</span>
          <b>Cử Nhân Luật Kinh Tế</b>
        </p>

        <div className="c-home__img--wrapper">
          <div className="c-home__banner">
            <img
              src={profileImg}
              alt="Thanh Ngọc Trần"
              className="c-profile__img"
            />
          </div>
          <div className="c-home__data c-home__data-one">
            <span className="c-text-lg">
              21<b>+</b>
            </span>
          </div>
          <div className="c-home__data c-home__data-two">
            <img src={dueLogo} alt="Trường Đại học Kinh tế Đà Nẵng logo" />
            <span className="c-text-lg">
              Đại học<br></br>
              <span>Kinh Tế </span>
              Đà Nẵng
            </span>
          </div>
          <img src={shapeOne} alt="Shape dot" className="c-shape c-shape-one" />
          <img src={shapeTwo} alt="Shape dot" className="c-shape c-shape-two" />
          <img
            src={shapeTwo}
            alt="Shape dot"
            className="c-shape c-shape-three"
          />
        </div>
        <p className="c-home__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
          veritatis dolorem sunt, repellat facere placeat impedit at maiores
          aliquid quaerat ipsum odio incidunt obcaecati ipsa deserunt iure
          soluta nulla quis!
        </p>
        <nav className="c-home__socials">
          <a href="#" target="_blank" className="c-home__social-link">
            <FaFacebook />
          </a>
          <a href="#" target="_blank" className="c-home__social-link">
            <FaInstagram />
          </a>
          <a href="#" target="_blank" className="c-home__social-link">
            <FaTiktok />
          </a>
        </nav>
        <nav className="c-home__btns">
          <a href="#" className="c-home__btn">
            Download CV
          </a>
        </nav>
      </div>
    </section>
  );
}
