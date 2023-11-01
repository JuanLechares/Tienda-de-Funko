import "./NewReleases.css"
import products from "../../data/products.json"
import Product from "../Product/Product";
import flechaDer from "../../assets/icons/flecha-correcta.png"
import flechaIzq from "../../assets/icons/flecha-izq.png"


const NewReleases = () => {
  const productList= products.productos;
  return(
    <>
      <section><h2 className="newReleases-title">ULTIMOS LANZAMIENTOS</h2></section>
      
      <section className="newReleases-container">
        <div className="scroll-product">
          <img className="btn-product" src={flechaIzq}></img>
        </div>
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
        <div className="scroll-product">
        <img className="btn-product" src={flechaDer}></img>
        </div>
      </section>
    </>
  );
};

export default NewReleases;
