import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../productosMock';

const ItemDetail = () => {
    const { productId } = useParams();


    const product = products.find(product => product.id === parseInt(productId));



    return (
        <div>
            {product ? (
                <div>
                    <h2>Detalles del producto: {product.title}</h2>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <p>Material: {product.category}</p>
                </div>
            ) : (
                <p>El producto no se encontró.</p>
            )}
        </div>
    );
};

export default ItemDetail