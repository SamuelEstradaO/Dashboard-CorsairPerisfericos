import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Total de productos --> */

let productsInDB = {
    title: 'Total de productos',
    color: 'info',
    url: 'http://localhost:3030/api/products',
    icon: 'fa-layer-group'
}

/* <!-- Total de categorias --> */

let totalCategory = {
    title: ' Total de categorias',
    color: 'info',
    /* url: 'http://localhost:3030/api/products', */
    cuantity: '79',
    icon: 'fa-tags'
}

/* <!-- Total de usuarios --> */

let usersQuantity = {
    title: 'Total de usuarios',
    color: 'info',
    url: 'http://localhost:3030/api/users',
    icon: 'fa-users'


}

let cartProps = [productsInDB, totalCategory, usersQuantity];

function ContentRowMovies() {
    return (

        <div className="row">

            {cartProps.map((movie, i) => {

                return <SmallCard {...movie} key={i} />

            })}

        </div>
    )
}

export default ContentRowMovies;