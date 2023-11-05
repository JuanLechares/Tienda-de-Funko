import { useEffect, useState } from "react"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import ListProducts from "../../components/listProducts/listProducts"
import products from "../../data/products.json";
import Filtro from "../../components/Filtro/Filtro";


const Shop = () => {
  const [listState, setListState]=useState(products.productos);
  useEffect(()=>{
    localStorage.setItem("productos", JSON.stringify(listState))
  },[listState])
  return (
    <>
      <Header />
      <Filtro listState={listState} setListState={setListState}/>
      <ListProducts listState={listState} setListState={setListState}/>
      <Footer />
    </>
  )
}

export default Shop