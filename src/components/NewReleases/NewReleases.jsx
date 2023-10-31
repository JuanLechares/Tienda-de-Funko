import "./NewReleases.css"
import products from "../../data/products.json"
import Product from "../Product/Product";

const NewReleases = () => {
  const productList = products.productos;
  return(
    <>
      <section><h2 className="newReleases-title">ULTIMOS LANZAMIENTOS</h2></section>
      <section className="newReleases-container">
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
      </section>
    </>
  );
};

export default NewReleases;
