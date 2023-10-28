import "./Header.css";
import logo from "../../assets/branding/logo_light_horizontal.svg";
import carrito_Icon from "../../assets/icons/cart-icon.svg";

const Header = () => {
  return (
    <header>
        <picture>
          <img id="logo" src={logo}></img>
        </picture>
        <nav>
          <ul className="menu">
            <li className="navbar">shop</li>
            <li className="navbar">contacto</li>
            <li className="navbar">login</li>
            <li className="navbar"><img  src={carrito_Icon} alt="icono de carrito" /></li>
          </ul>
        </nav>
      </header>
  )
}

export default Header;