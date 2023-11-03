import "./NewReleases.css";
import products from "../../data/products.json";
import Product from "../Product/Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";


const NewReleases = () => {
  const productList = products.productos;
  const slider = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow:"",
    prevArrow:""
  };
  return (
    <>
      <section>
        <h2 className="newReleases-title">ULTIMOS LANZAMIENTOS</h2>
      </section>
      <section className="newReleases-container">
        <div className="slider-prod">
          <Slider ref={slider} {...settings}>
            {productList != null &&
              productList.map((prod) => {
                return (
                  <Product
                    key={prod.id}
                    title={prod.title}
                    collection={prod.collection}
                    price={prod.price}
                    coutas={prod.cuotas}
                    imgFront={prod["picture-front"]}
                  />
                );
              })}
          </Slider>
        </div>
        <div className="btn-container">
          <button className="btn-slider btn-slider-izq" onClick={() => slider?.current?.slickPrev()}>&#60;</button>
          <button className="btn-slider btn-slider-der" onClick={() => slider?.current?.slickNext()}>&#62;</button>
        </div>
      </section>
    </>
  );
};

export default NewReleases;
