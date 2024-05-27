import React from 'react'
import { FaFacebook , FaInstagram, FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="c-footer">
        <div className="c-footer__container l-container">
            <nav className="c-footer__socials">
                <a href="https://www.facebook.com/profile.php?id=100015857587064" target="_blank" className="c-footer__social-link">
                    <FaFacebook />
                </a>
                <a href="https://www.instagram.com/tranthngoc/" target="_blank" className="c-footer__social-link">
                    <FaInstagram />
                </a>
                <a href="#" target="_blank" className="c-footer__social-link">
                    <FaTiktok />
                </a>
            </nav>
            <p className="c-footer__year">
                &copy; 2024 <span>Thanh</span> Ngoc. All Rights Reserved
            </p>
            <p className="c-footer__copyright">
                Developed by <span>Thanh Ngoc</span>'s other half
            </p>
        </div>
    </footer>
  )
}

export default Footer