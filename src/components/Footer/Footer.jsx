import "./Footer.css";
import logo from "../../assets/branding/isotype.webp";

const Footer = () => {
  return (
    <footer className="">
      <nav className="navbarContainer">
        <ul className="menu-footer">
          <li className="navbar">SHOP</li>
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
