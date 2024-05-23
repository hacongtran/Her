import React from 'react'



import Logo from '../assets/logo.svg'
import { FaFacebook , FaInstagram, FaTiktok } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs"

import { links } from '../Data';


const Header = () => {
  return (
    <header className="c-header">
        <nav className="c-nav__logo">
             <a href="#" className="c-nav__logo">
                <img src={Logo} alt="Thanh Ngọc Logo" />
             </a>
             <div className="c-nav__menu">
                <div className="c-nav__data">
                    <ul className="c-nav__list">
                        {links.map(({name, path}, index) => {
                            return (
                                <li className="c-nav__item" key={index}>
                                    <a href="" className="c-nav__link">
                                        {name}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    <nav className="c-header__socials">
                        <a href="#" target="_blank" className="c-header__social-link">
                            <FaFacebook />
                        </a>
                        <a href="#" target="_blank" className="c-header__social-link">
                            <FaInstagram />
                        </a>
                        <a href="#" target="_blank" className="c-header__social-link">
                            <FaTiktok />
                        </a>
                    </nav>
                </div>
             </div>
             <div className="c-nav__btns">
                <div className="c-theme__toogle">
                    <BsSun />
                </div>
                <div className="c-nav__toggle">
                    <span></span>
                    <span></span>
                </div>
             </div>
        </nav>
    </header>
  )
}

export default Header