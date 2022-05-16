import React, { useState, useEffect } from "react";
import Product from "./components/Product";
function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    let response = await fetch('https://fakestoreapi.com/products');
    let data = await response.json();
    setProducts(data);
    
  };
  useEffect(()=>{getProducts()}
    
  , []);

  return (
    <>
      <Product products={products}/>
    </>
  );
}

export default Home;
