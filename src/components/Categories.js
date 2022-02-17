import React, { useState, useEffect } from "react";
import ProductRow from "./ProductRow";
import "../assets/css/dash.css";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [productos, setProductos] = useState([]);
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then(({ products }) => {
        let listado = [];
        products.map((product) => {
          if (product.categoria.titulo == categoria) {
            return listado.push(product);
          }
        });
        setProductos(listado);
      })
      .catch((err) => console.log("No se pueden cargar las categorias."));
  }, [categoria]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then(({ countByCategory }) => {
        let categorias = [];
        countByCategory.map(({ category }) => categorias.push(category));
        setCategories(categorias);
      })
      .catch((err) => console.log("No se pueden cargar las categorias."));
  }, []);

  const handleCategorias = (e) => {
    setCategoria(e.target.innerHTML);
  };
  return (
    <>
      <div className="card shadow mb-4 mt-3 ml-3">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Título</th>
                  <th>Precio</th>
                  <th>Categoria</th>
                  <th>Stock</th>
                  <th>Recomendado</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Id</th>
                  <th>Título</th>
                  <th>Precio</th>
                  <th>Categoria</th>
                  <th>Stock</th>
                  <th>Recomendado</th>
                </tr>
              </tfoot>
              <tbody>
                {productos.map((producto) => {
                  return <ProductRow {...producto} key={producto.id} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mb-4 mt-3">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">Categorias</h5>
          </div>
          <div className="card-body">
            <div className="row">
              {console.log(categories)}
              {categories.map(({ id, titulo }) => {
                return (
                  <div
                    className="col-lg-6 mb-4"
                    key={id}
                    onClick={handleCategorias}
                  >
                    <div
                      className={`card ${
                        titulo == categoria ? "info" : "dark"
                      } text-white shadow`}
                    >
                      <div className="card-body text-center text-capitalize">
                        {titulo}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
