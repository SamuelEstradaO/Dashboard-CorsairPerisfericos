import React, { useState, useEffect } from 'react';


function UltimoProducto() {
    const [ultimoProducto, setUltimoProducto] = useState({});

    useEffect(() => {
        fetch(`${process.env.PAGE_URL}/api/products`)
            .then(res => res.json())
            .then(({ products }) => {
                return fetch(products[products.length - 1].detail)
            })
            .then(res => res.json())
            .then(({ product }) => setUltimoProducto(product))
            .catch(err => console.log("No se puede cargar el ultimo producto."))
    }, [])

    return (

        < div className="col-lg-6 mb-4" >
            {console.log(ultimoProducto)}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto agregado</h5>
                </div>
                <div className="card-body">
                    <h4 className="text-center">{ultimoProducto.titulo}</h4>
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + 'rem' }} src={process.env.PAGE_URL+ultimoProducto.imagen} alt=" ultimoProducto " />
                    </div>
                    <p>{ultimoProducto.descripcion}</p>
                    {/* <a className="btn btn-info" target="_blank" rel="nofollow" href="/">Ver detalle de producto</a> */}
                </div>
            </div>
        </div >
    )
}

export default UltimoProducto;
