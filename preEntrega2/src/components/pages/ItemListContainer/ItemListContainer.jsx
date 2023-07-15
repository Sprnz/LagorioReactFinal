import React from 'react'
import "./itemListContainer.css"
import { products } from '../../productosMock';
import { Link } from 'react-router-dom';
import { db } from '../../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const ItemListContainer = () => {


    const categories = products.map(product => product.category);

    let itemsCollection = collection(db, "products")
    getDocs(itemsCollection)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

    return (
        <div className='items'>
            <h2>Nuestros productos</h2>
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>
                        <Link to={`/category/${category}`}>{category}</Link>
                    </li>

                ))}
            </ul>
        </div>
    );
}

export default ItemListContainer