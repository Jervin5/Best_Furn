import React from "react";
import "./Footer.css";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Subscribed Successfully");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getCurrentYear = () => new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer_left">
            <div className="footer_logo_container">
              {/* <img src={logo} alt="" Z /> */}
              <h3 className="logo1">Best Furn</h3>
            </div>

            <p>1418 River Drive, Suite 35 Cottonhall, CA 9622 United States</p>

            <div className="footer_address">
              <strong> sale@uomo.com </strong>
              <strong> +1 246-345-0695 </strong>
            </div>

            <div className="social_links">
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />
              
            </div>
          </div>

          <div className="footer_content">
            <h5>Company</h5>
            <div className="links_container">
              <ul onClick={scrollToTop}>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
               
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
         
          <div className="footer_content">
            <h5>Help</h5>
            <div className="links_container">
              <ul onClick={scrollToTop}>
               
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                
              </ul>
            </div>
          </div>
          
        </div>
        <div className="footer_bottom">
          <p>
            © {getCurrentYear()} Best Furn. All Rights Reserved
           
            
          </p>
          
        </div>
      </footer>
    </>
  );
};

export default Footer;
