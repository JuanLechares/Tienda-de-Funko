import { useParams } from "react-router-dom"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import "./Item.css";
import products from "../../data/products.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NewReleases from "../NewReleases/NewReleases";
import { useRef } from "react";
import { useState } from "react";


const Item = () => {
  const {itemName}=useParams();
  const itemList=products.productos.filter((obj)=>{
    return itemName===obj.route;
  });
  const item=itemList[0];
  const slider = useRef(null); 
  const [counter, setCounter] = useState(1);
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <Header />
      <main className="item-container">
        <div className="img-paging">
            <button onClick={() => slider?.current?.slickPrev()}><img width="70px" className="p-picture-small" src={"../../../"+item["picture-front"]}></img></button>
            <button onClick={() => slider?.current?.slickNext()}><img width="70px" className="p-picture-small" src={"../../../"+item["picture-back"]}></img></button>
        </div>
        <picture className="item-img">
          <Slider ref={slider} {...settings}>
            <img src={"../../../"+item["picture-front"]}></img>
            <img src={"../../../"+item["picture-back"]}></img>
          </Slider>
        </picture>
        <section className="item-description">
          {item.new ? (<div className="new-icon">new</div>) : ""}
          <h3>{item.collection}</h3>
          <h1>{item.title}</h1>
          <p className="item-text">Figura collecionable de {item.title}, edición limitada</p>
          <span className="item-price">${parseInt(item.price)*counter}</span>
          <div className="btn-item-container">
            <button className="btn-count" onClick={()=>setCounter(counter+1)}>+</button>
            <span className="num-count">{counter}</span>
            <button className="btn-count" onClick={()=>(counter>1)&&setCounter(counter-1)}>-</button>
            <button className="btn-carrito">añadir al carrito</button>
          </div>
          <span className="item-coutas">{item.cuotas} coutas sin interés de ${ Math. round((parseInt(item.price)*counter)/(parseInt(item.cuotas)))}</span>
        </section>
      </main>
      <NewReleases />
      <Footer />
    </>
  )
}

export default Item