import { useState } from "react";
import PropTypes from "prop-types";
import "./Filtro.css";

const Filtro = ({ listState, setListState }) => {
  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState(false);
  const searchMovie = (e) => {
    setSearch(e.target.value);
    let foundProd = listState.filter((prod) => {
      return (
        prod.title.toLowerCase().includes(search.toLocaleLowerCase()) ||
        prod.collection.toLowerCase().includes(search.toLocaleLowerCase())
      );
    });
    if (search.length <= 1 || foundProd <= 0) {
      foundProd = JSON.parse(localStorage.getItem("productos"));
      setNotFound(true);
    } else {
      setNotFound(false);
    }
    setListState(foundProd);
  };

  return (
    <>
      <div>
        <input onChange={searchMovie} type="text"></input>
        <button type="submit">
        buscar
        </button>
      </div>
      {notFound && search.length > 1 && (
        <span className="notFound">No se ha encontrado la pelicula</span>
      )}
    </>
  );
};

Filtro.propTypes = {
  listState: PropTypes.array,
  setListState: PropTypes.func,
};

export default Filtro;
