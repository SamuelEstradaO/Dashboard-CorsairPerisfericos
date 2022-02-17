import React, { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";

function SearchProducts() {
  const [products, setProducts] = useState([]);

  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    fetch(`/api/products/search?key=${keyword}`)
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
      })
      .catch((err) => console.log(err));
  }, [keyword]);

  const buscador = useRef();

  const buscarProducto = (e) => {
    e.preventDefault();
    setKeyword(buscador.current.value);
  };

  return (
    <div className="container-fluid">
      <>
        <div className="row my-4">
          <div className="col-12 col-md-6">
            {/* Buscador */}
            <form method="GET" onSubmit={buscarProducto}>
              <div className="form-group">
                <label htmlFor="">Buscar por título:</label>
                <input type="text" className="form-control" ref={buscador} />
              </div>
              <button className="btn btn-info">Search</button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2>Productos para la palabra: {keyword}</h2>
          </div>
          {/* Listado de películas */}
          {products &&
            products.map((product) => {
              return <ProductCard {...product} key={product.id} />;
            })}
        </div>
        {!products.length && (
          <div className="alert alert-warning text-center">
            No se encontraron productos.
          </div>
        )}
      </>
    </div>
  );
}

export default SearchProducts;
