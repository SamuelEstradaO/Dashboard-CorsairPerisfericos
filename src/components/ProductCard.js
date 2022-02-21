import React, { useEffect, useState } from "react";

function ProductCard({ id, titulo, precio, descripcion, detail }) {
  const [imagen, setImagen] = useState("");

  useEffect(() => {
    fetch(process.env.PAGE_URL+detail)
      .then((res) => res.json())
      .then(({ product }) => {
        setImagen(product.imagen);
      })
      .catch((err) => console.log("No se cargo imagen."));
  });
  return (
    <div className="col-sm-6 col-md-3 my-4" key={id}>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">{titulo}</h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              src={process.env.PAGE_URL+imagen}
              alt={titulo}
              style={{
                width: "90%",
                objectFit: "cover",
              }}
            />
          </div>
          <p>${precio}</p>
          <p>{descripcion}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
