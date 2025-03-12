import React, { useState } from "react";
import "./Navbar.css";

import { useSelector } from "react-redux";

// import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";

import { RiMenu2Line } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { RiShoppingBagLine } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import logofb from "../../Assets/logo_fb.png"
// social Links imports Icons

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

import Badge from "@mui/material/Badge";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = mobileMenuOpen ? "auto" : "hidden";
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Desktop Menu */}
      <nav className="navBar">
        <div className="logoLinkContainer">
        <img src={logofb} alt="logo" style={{width:'30%'}}/>
          <div className="logoContainer">
            <Link to="/" onClick={scrollToTop}>
             <h3 className="logo1"> Best Furn</h3>
            </Link>
          </div>
          <div className="linkContainer">
            <ul>
              
              <li>
                <Link to="/" onClick={scrollToTop}>
                  HOME
                </Link>
              </li>
             
              <li>
                <Link to="/about" onClick={scrollToTop}>
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop}>
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="iconContainer">
          {/* <FiSearch size={22} onClick={scrollToTop} /> */}
          {/* <Link to="/loginSignUp" onClick={scrollToTop}>
            <FaRegUser size={22} />
          </Link> */}
          <Link to="/cart" onClick={scrollToTop}>
            <Badge
              badgeContent={cart.items.length === 0 ? "0" : cart.items.length}
              color="primary"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <RiShoppingBagLine size={22} />
            </Badge>
          </Link>
          {/* <FiHeart size={22} onClick={scrollToTop} /> */}
          {/* <RiMenu2Line size={22} /> */}
        </div>
      </nav>

      {/* Mobile Menu */}
      <nav>
        <div className="mobile-nav">
          {mobileMenuOpen ? (
            <MdOutlineClose size={22} onClick={toggleMobileMenu} />
          ) : (
            <RiMenu2Line size={22} onClick={toggleMobileMenu} />
          )}
          <div className="logoContainer">
            <Link to="/">
            <h3 className="logo1">Best Furn</h3>
            </Link>
          </div>
          <Link to="/cart">
            <Badge
              badgeContent={cart.items.length === 0 ? "0" : cart.items.length}
              color="primary"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <RiShoppingBagLine size={22} color="black" />
            </Badge>
          </Link>
        </div>
        <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
          <div className="mobile-menuTop">
            <div className="mobile-menuSearchBar">
              {/* <div className="mobile-menuSearchBarContainer">
                <input type="text" placeholder="Search products" />
                <Link to="/">
                  <FiSearch size={22} onClick={toggleMobileMenu} />
                </Link>
              </div> */}
            </div>
            <div className="mobile-menuList">
              <ul>
                <li>
                  <Link to="/" onClick={toggleMobileMenu}>
                    HOME
                  </Link>
                </li>
             
                <li>
                  <Link to="/about" onClick={toggleMobileMenu}>
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={toggleMobileMenu}>
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mobile-menuFooter">
            <div className="mobile-menuFooterLogin">
              <Link to="/loginSignUp" onClick={toggleMobileMenu}>
                <FaRegUser />
                <p>My Account</p>
              </Link>
            </div>
            <div className="mobile-menuFooterLangCurrency">
              <div className="mobile-menuFooterLang">
                <p>Language</p>
               <h4>English</h4>
              </div>
              <div className="mobile-menuFooterCurrency">
                <p>Currency</p>
                <h4>INR</h4>
              </div>
            </div>
            <div className="mobile-menuSocial_links">
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />             
              
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
