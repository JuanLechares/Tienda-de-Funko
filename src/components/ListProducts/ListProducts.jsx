import Card from "../Card/Card";
import { Link, ScrollRestoration } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";

const ListProducts = ({listState, setListState}) => {
  useEffect(()=>{
    getProductos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const getProductos = () =>{
    let productos = JSON.parse(localStorage.getItem("productos"));
    setListState(productos);
    return productos;
  }
  return (
    <>
      {listState != null &&
        listState.map((prod) => {
          return (
            <Link underline="none" key={prod.id} to={"../shop/" + prod.route}>
              <Card
                title={prod.title}
                collection={prod.collection}
                price={prod.price}
                imgFront={prod["picture-front"]}
                cuotas={prod.cuotas}
              />
              <ScrollRestoration />
            </Link>
          );
        })}
    </>
  );
};

ListProducts.propTypes = {
  listState: PropTypes.array,
  setListState: PropTypes.func,
};

export default ListProducts;
