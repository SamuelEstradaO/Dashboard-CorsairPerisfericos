import React, { useState, useEffect } from 'react';


function ProductRow({ id, titulo, precio, detail, categoria }) {

    const [stock, setStock] = useState(0);
    const [recomendado, setRecomendado] = useState(0);

    useEffect(() => {
        fetch(process.env.PAGE_URL+detail)
            .then(res => res.json())
            .then(({ product }) => {

                setStock(product.stock);
                setRecomendado(product.isRecommended);
            })
            .catch(err => console.log("No se pueden cargar la lista de productos."));
    }, [])

    return (
        <tr>
            <td>{id}</td>
            <td>{titulo}</td>
            <td>{precio}</td>
            <td>{categoria.titulo}</td>
            <td>{stock}</td>
            <td>{recomendado ? "Si" : "No"}</td>
        </tr>
    )
}



export default ProductRow;