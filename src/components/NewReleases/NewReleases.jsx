import "./NewReleases.css"
import products from "../../data/products.json"
import Product from "../Product/Product";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const NewReleases = () => {
  const productList= products.productos
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return(
    <>
      <section><h2 className="newReleases-title">ULTIMOS LANZAMIENTOS</h2></section>
      <section className="newReleases-container">
        <Slider {...settings}>
        {
          (productList!=null)&&(productList.map((prod)=>{
            return(
              <Product
              key={prod.id}
              title={prod.title} 
              collection={prod.collection} 
              price={prod.price}
              coutas={prod.cuotas}
              imgFront={prod["picture-front"]}
              />
            )
          }))
        }
        </Slider>
      </section>
    </>
  );
};


export default NewReleases;
