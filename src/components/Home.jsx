import React from "react";
import profileImg from "../assets/her-profile-img3.png";
import shapeOne from "../assets/shape-1.png";
import shapeTwo from "../assets/shape-2.png";
import dueLogo from "../assets/due_logo_text.png";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import CV from "../assets/cv_thanhngoc_mkt.pdf";

const calculateAge = (birthDate) => {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDiff = today.getMonth() - birthDateObj.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
    age--;
  }
  return age;
};

const birthDate = "2002-05-01"; 
const age = calculateAge(birthDate);

export default function Home() {
  return (
    <section className="p-home" id="is-home">
      <div className="c-home__wrapper">
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
                {age}<b>+</b>
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
              Xin chào, em là Trần Thị Thanh Ngọc. Em luôn khao khát được làm việc trong một môi trường chuyên nghiệp để phát triển bản thân và đóng góp cho xã hội. Mong muốn của em là có cơ hội học hỏi và cống hiến, để mỗi ngày đi làm đều là một trải nghiệm đáng nhớ.
          </p>
          <nav className="c-home__socials">
            <a href="https://www.facebook.com/profile.php?id=100015857587064" target="_blank" className="c-home__social-link">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/tranthngoc/" target="_blank" className="c-home__social-link">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@thichmatcha15" target="_blank" className="c-home__social-link">
              <FaTiktok />
            </a>
          </nav>
          <nav className="c-home__btns">
            <a href={CV} target="_blank" className="c-home__btn">
              Download CV
            </a>
          </nav>
        </div>

        <div className="section__deco deco__left">
            <img src={shapeOne} alt="Shape decoration" className="shape" />
        </div>
      </div>
    </section>
  );
}
