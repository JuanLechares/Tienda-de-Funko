import "./Collection.css"
import  PropTypes  from "prop-types"

const Collection = ({title, description, picture}) => {

  return (
    <main className="collection-container">
      <article>
        <h2 className="collection-title">{title}</h2>
        <p>{description}</p>
        <hr className="border-red"/>
        <button className="collection-btn">ver colección</button>
      </article>
      <picture className="col-img-container">
        <img className="collection-img" src={picture} alt={title}></img>
      </picture>
      {console.log("se recorrio una coleccion")}
    </main>
  )
}

Collection.propTypes={
  title: PropTypes.string,
  description: PropTypes.string,
  picture: PropTypes.string
}

export default Collection