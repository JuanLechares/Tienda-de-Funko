import Collection from "../Collection/Collection"
import products from "../../data/products.json"

const ListCollection = () => {
  const collection= products.collections;
  return(
    <>
      {
        collection.map((obj)=>{
          return(
            <Collection key={obj.id} title={obj.title} description={obj.descripcion} picture={obj.picture} />
          )
        })
      }
    </>
  )
}

export default ListCollection