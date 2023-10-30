import Collection from "../Collection/Collection"
import products from "../../data/products.json"
import logo from "../../assets/star-wars/baby-yoda-1.webp"



const ListCollection = () => {
  const collection= products.productos;
  return(
    <>
      {
        collection.map((obj)=>{
          return(
            <Collection key={obj.id} title={obj.title} description={obj.descripcion} picture={logo} />
          )
        })
      }
    </>
  )
}

export default ListCollection