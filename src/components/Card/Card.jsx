import "./Card.css"
import PropTypes from "prop-types";

const Card = ({title, collection, price, cuotas, imgFront}) => {
  return (
    <div className="card">
      <picture className="card-img">
        <img src={imgFront}></img>
      </picture>
      <section className="card-descrip">
        <h3>{collection}</h3>
        <h2 className="item-text">{title}</h2>
        <p className="item-text">figura collecionable de {title}, edición limitada</p>
        <h3>{price}</h3>
        <p className="item-coutas">En {cuotas} x ${ Math. round((parseInt(price))/(parseInt(cuotas)))}</p>
      </section>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  collection: PropTypes.string,
  price: PropTypes.string,
  cuotas: PropTypes.string,
  imgFront: PropTypes.string,
};
export default Card;
