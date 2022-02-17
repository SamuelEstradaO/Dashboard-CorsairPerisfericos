import React, { useState, useEffect } from 'react';
import ProductRow from './ProductRow';




function ListadoProductos() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("/api/products")
            .then(res => res.json())
            .then(({ products }) => setProductos(products))
            .catch(err => console.log("No se pueden cargar los productos."));
    }, [])

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
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
                            {
                                productos.map((producto) => {
                                    return <ProductRow {...producto} key={producto.id} />
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default ListadoProductos;