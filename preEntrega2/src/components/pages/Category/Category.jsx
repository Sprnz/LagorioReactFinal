import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { products } from '../../productosMock';



const Category = () => {
    const { categoryName } = useParams();

    const filteredProducts = products.filter(
        product => product.category === categoryName
    );

    return (
        <div>
            <h2>Productos de la categoría: {categoryName}</h2>
            <ul key={products.id}>
                {filteredProducts.map(product => (
                    <Link to={`/product/${product.id}`}>{product.title}</Link>
                ))}
            </ul>
        </div>
    );

}

export default Category