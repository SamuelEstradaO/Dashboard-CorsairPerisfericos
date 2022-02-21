import React, { useState, useEffect } from "react";
import "../assets/css/dash.css";


function Categories({ changeCategory, isMain }) {
  const [categories, setCategories] = useState([]);
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    changeCategory(categoria);
  }, [categoria]);

  useEffect(() => {
    fetch(`${process.env.PAGE_URL}/api/products`)
      .then((res) => res.json())
      .then(({ countByCategory }) => {
        let categorias = [];
        countByCategory.map((category) => categorias.push(category));
        setCategories(categorias);
      })
      .catch((err) => console.log("No se pueden cargar las categorias."));
  }, []);




  const handleCategories = (e) => {
    setCategoria(e.target.classList[0]);

  };


  return (
    <div className={`${isMain ? "col-lg-6" : "ml-3 mt-3"} mb-4 `}>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Categorias</h5>
        </div>
        <div className="card-body">
          <div className="row">
            {/* {console.log(categories)} */}
            {categories.map(({ category, quantity }) => {
              return (
                <div
                  className="col-lg-6 mb-4"
                  key={category.id}
                  onClick={handleCategories}
                >
                  <div
                    className={`card ${category.titulo == categoria && !isMain ? "info" : "dark"
                      } text-white shadow`}
                  >
                    <div className={`${category.titulo} card-body text-center text-capitalize`} >
                      {`${category.titulo} (${quantity})`}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div >
  );

}
/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

Categories.defaultProps = {
  changeCategory: () => { },
  isMain: true,

}







export default Categories;
