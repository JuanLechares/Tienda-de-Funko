import "./Banner.css";
import products from "../../data/products.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";

const Banner = () => {
  const bannerList=products.banners;
  const slider = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:"",
    prevArrow:""
  };
  return (
    <section className="banner-background">
      <Slider ref={slider} {...settings}>
        {bannerList != null &&
          bannerList.map((prod) => {
            return (
              <img key={prod.id} className="banner-img" src={prod.src}></img>
            );
          })}
      </Slider>
      <div className="btn-banner-container">
          <button className="btn-banner-slider btn-banner-slider-izq" onClick={() => slider?.current?.slickPrev()}>&#60;</button>
          <button className="btn-banner-slider btn-banner-slider-der" onClick={() => slider?.current?.slickNext()}>&#62;</button>
        </div>
    </section>
  );
};

export default Banner;
