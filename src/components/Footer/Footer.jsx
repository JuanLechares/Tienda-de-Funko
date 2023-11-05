import "./Footer.css";
import logo from "../../assets/branding/isotype.webp";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="">
      <nav className="navbarContainer">
        <ul className="menu-footer">
          <NavLink className={({isActive})=> isActive ? "active navbar" : "navbar" } to="/shop">shop</NavLink>
          <li className="navbar">ADMIN</li>
        </ul>
        <picture>
          <img className="footer-logo" src={logo} alt="Isotipo de la marca Funkoshop" />
        </picture>
      </nav>
      <p >All rights reserved 2023 - Funkoshop & copyright</p>
    </footer>
  );
};

export default Footer;
