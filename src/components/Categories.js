import React, { useState, useEffect } from "react";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(({ countByCategory }) => {
        let categorias = []
        countByCategory.map(({ category }) =>
          categorias.push(category)
        )
        setCategories(categorias)
      })
      .catch(err => console.log("No se pueden cargar las categorias."));
  }, [])

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categorias
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {console.log(categories)}
            {
              categories.map(({ id, titulo }) => {
                return (
                  < div className="col-lg-6 mb-4" key={id}>
                    <div className="card bg-dark text-white shadow">
                      <div className="card-body text-center text-capitalize">{titulo}</div>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </div >
  );
}

export default Categories;
