import React, { useState, useEffect } from "react";
import ProductRow from "./ProductRow";
import Categories from "./Categories";
import "../assets/css/dash.css";

function TableCategories() {

    const [productos, setProductos] = useState([]);
    const [categoria, setCategoria] = useState("");

    useEffect(() => {
        fetch(`${process.env.PAGE_URL}/api/products`)
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

    const changeCategory = (category) => {
        setCategoria(category);
    };

    const isMain = false;

    return (
        <div>
            <Categories changeCategory={changeCategory} isMain={isMain} />

            <div className="card shadow mb-4 mt-3 ml-3 ">
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


        </div>
    );
}
export default TableCategories;