import React, { useState, useEffect } from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Total de productos --> */

let productsInDB = {
    title: 'Total de productos',
    color: 'info',
    icon: 'fa-layer-group'
}

/* <!-- Total de categorias --> */

let totalCategory = {
    title: ' Total de categorias',
    color: 'info',
    icon: 'fa-tags'
}

/* <!-- Total de usuarios --> */

let usersQuantity = {
    title: 'Total de usuarios',
    color: 'info',
    icon: 'fa-users'
}



function ContentRowMovies() {
    const [products, setProducts] = useState("Cargando...");
    const [categories, setCategories] = useState("Cargando...");
    const [users, setUsers] = useState("Cargando...");

    useEffect(() => {
        fetch(`${process.env.PAGE_URL}/api/products`)
            .then(res => res.json())
            .then(({ count, countByCategory }) => {
                setProducts(count);
                setCategories(countByCategory.length);
            })
            .catch(err => {
                setProducts("No se puede cargar la cantidad de productos")
                setCategories("No se puede cargar la cantidad de categorias")
            })
        fetch('/api/users')
            .then(res => res.json())
            .then(({ count }) => {
                setUsers(count);
            })
            .catch(err => setUsers("No se puede cargar la cantidad de usuarios."))
    }, [])



    // useEffect(() => {
    //     productsInDB.quantity = products;
    //     totalCategory.quantity = categories;
    //     usersQuantity.quantity = users;
    // },[products, categories, users]);
    productsInDB.quantity = products;
    totalCategory.quantity = categories;
    usersQuantity.quantity = users;

    let cartProps = [productsInDB, totalCategory, usersQuantity];
    return (

        <div className="row">

            {cartProps.map((movie, i) => {

                return <SmallCard {...movie} key={i} />

            })}

        </div>
    )
}

export default ContentRowMovies;