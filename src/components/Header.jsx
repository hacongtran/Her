import React, { useEffect, useState } from 'react';

import Logo from '../assets/logo.svg';
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import { Link, animateScroll } from 'react-scroll';

import { links } from '../Data';

const getStorageTheme = () => {
    let theme = "light-theme";
    if(localStorage.getItem('theme')){
        theme = localStorage.getItem('theme');
    }
    return theme;
}

const Header = () => {

    const [showMenu, setshowMenu] = useState(false);
    const [scrollNav, setScrollNav] = useState(false);
    const [theme, setTheme] = useState(getStorageTheme());

    const scrollTop = () => {
        animateScroll.scrollToTop();
    }

    const changeNav = () => {
        if(window.scrollY > 0) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme');
        } else {
            setTheme('light-theme');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
        return () => window.removeEventListener('scroll', changeNav);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('noscroll', showMenu);
    }, [showMenu]);

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <header className={`${scrollNav ? "scroll-header" : ""} c-header`}>
            <nav className="c-nav">
                <Link to='/' onClick={scrollTop} className="c-nav__logo">
                    <img src={Logo} alt="Thanh Ngọc Logo" />
                </Link>
                <div className={`${showMenu ? "c-nav__menu show-menu" : "c-nav__menu"} `}>
                    <div className="c-nav__data">
                        <ul className="c-nav__list">
                            {links.map(({name, path}, index) => {
                                return (
                                    <li className="c-nav__item" key={index}>
                                        <Link 
                                            className="c-nav__link"
                                            to={path}
                                            spy={true} 
                                            hashSpy={true}
                                            smooth={true} 
                                            offset={-117} 
                                            duration={500} 
                                            onClick={() => setshowMenu(!showMenu)}
                                        >
                                            {name}
                                        </Link>
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
                    <div className="c-theme__toggle" onClick={toggleTheme}>
                        {theme === "light-theme" ? <BsMoon /> : <BsSun />}
                    </div>
                    <div className={`${showMenu ? "c-nav__toggle animation-toggle" : "c-nav__toggle"} `} onClick={() => setshowMenu(!showMenu)}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
